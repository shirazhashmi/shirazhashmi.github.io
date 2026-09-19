import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const clientDist = path.join(__dirname, '..', 'client', 'dist')

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'shiraz-portfolio-api' })
})


app.get('/api/metadata', async (req, res) => {
  const target = req.query.url

  if (!target) {
    return res.status(400).json({ error: 'Missing url' })
  }

  try {
    const response = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/131 Safari/537.36'
      }
    })

    if (!response.ok) {
      return res.status(502).json({ error: 'Unable to fetch website' })
    }

    const html = await response.text()

    const getMeta = (property) => {
      const match = html.match(
        new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`, 'i')
      )
      return match ? match[1] : null
    }

    const getLink = (rel) => {
      const match = html.match(
        new RegExp(`<link[^>]+rel=["'][^"']*${rel}[^"']*["'][^>]+href=["']([^"']+)["']`, 'i')
      )
      return match ? match[1] : null
    }

    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)

    const title = getMeta('og:title') || (titleMatch ? titleMatch[1].trim() : null)
    const description = getMeta('og:description') || getMeta('description')
    const image = getMeta('og:image')
    const icon = getLink('icon') || getLink('shortcut icon') || '/favicon.ico'

    const absolute = (value) => {
      if (!value) return null
      try {
        return new URL(value, target).href
      } catch {
        return null
      }
    }

    res.json({
      url: target,
      title,
      description,
      image: absolute(image),
      logo: absolute(icon)
    })
  } catch (error) {
    res.status(500).json({ error: 'Metadata fetch failed' })
  }
})

app.get('/api/profile', (_req, res) => {
  res.json({
    name: 'Shiraz Sajid Hashmi',
    role: 'AI Product Manager · Product Builder',
    email: 'shirazhashmi@live.com',
    linkedin: 'https://www.linkedin.com/in/shiraz-hashmi/',
    github: 'https://github.com/shirazhashmi/'
  })
})

app.use(express.static(clientDist))

app.get('*splat', (_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'))
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Portfolio server running on http://localhost:${port}`)
})
