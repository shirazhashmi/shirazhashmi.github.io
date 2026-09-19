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
