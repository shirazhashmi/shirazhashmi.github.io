import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const products = [
  {
    index: '01',
    name: 'Kaksha.Live',
    type: 'School infrastructure',
    domain: 'kaksha.live',
    url: 'https://www.kaksha.live/',
    links: [['ERP', 'https://admin.kaksha.live'], ['LMS', 'https://app.kaksha.live']],
    description: 'School ERP + LMS connecting administrators, teachers, students and parents through one operating layer.',
    tags: ['ERP', 'LMS', 'EdTech']
  },
  {
    index: '02',
    name: 'Kaksha AI',
    type: 'AI learning',
    domain: 'kaksha.live/ai',
    url: 'https://www.kaksha.live/ai',
    links: [['Visit product', 'https://www.kaksha.live/ai']],
    description: 'AI-first learning experience that starts with the student’s question and can move from instant help to human expertise.',
    tags: ['AI', 'Learning', 'Marketplace']
  },
  {
    index: '03',
    name: 'OPERO BMS',
    type: 'Operations platform',
    domain: 'operobms.com',
    url: 'https://www.operobms.com',
    links: [['Visit product', 'https://www.operobms.com']],
    description: 'Operations and CRM system built to turn recurring startup workflows into a reusable operating layer.',
    tags: ['CRM', 'Ops', 'SaaS']
  },
  {
    index: '04',
    name: 'TalkFlow AI | AI-Powered Outbound Calling',
    type: 'AI voice workflows',
    domain: 'talkflow-ai-five.vercel.app',
    url: 'https://talkflow-ai-five.vercel.app/',
    links: [['Visit product', 'https://talkflow-ai-five.vercel.app/']],
    description: 'AI-powered outbound calling and lead qualification for modern sales teams.',
    tags: ['Voice AI', 'Leads', 'Automation']
  },
  {
    index: '05',
    name: 'Recovery App',
    type: 'Consumer AI',
    domain: 'recoveryapp-hazel.vercel.app',
    url: 'https://recoveryapp-hazel.vercel.app/',
    links: [['Visit product', 'https://recoveryapp-hazel.vercel.app/']],
    description: 'AI-led consumer product built around structured recovery workflows, guidance and a focused mobile-first experience.',
    tags: ['AI', 'Consumer', 'Mobile']
  }
]

const experience = [
  { period: '2022 → Present', company: 'Kaksha.Live', role: 'Co-Founder · Product Manager', body: 'Owned product direction and execution across ERP, LMS and AI learning systems, from customer discovery and workflow design through deployment, adoption and iteration.' },
  { period: 'Dec 2024 → Mar 2025', company: 'Digitaleon', role: 'Growth Lead', body: 'Worked across growth initiatives, customer-facing execution and business development in a digital product environment.' },
  { period: 'Sep 2024 → Dec 2024', company: 'Amitoje India', role: 'Brand Consultant · Sr. Project Owner', body: 'Managed end-to-end execution of branding and retail activation projects, combining project ownership with customer and brand experience work.' },
  { period: 'Sep 2020 → Dec 2020', company: 'Zalphius', role: 'Head of Design · Internship', body: 'Worked across design execution and product-facing visual systems while building early experience in collaborative delivery.' }
]

const engineering = [
  ['Formula Bharat 2021', 'Electric Formula Student vehicle'],
  ['Quad Bike Design Challenge', 'Design, build and competition'],
  ['Solar Fertilizer Applicator', 'Small-farm engineering project'],
  ['FSEV Concept Challenge 2020', '6th in Procurement Round']
]

const publications = [
  ['Effects due to use of nanoparticles in refrigerants', 'IJARESM · 2021', 'https://www.ijaresm.com/effects-due-to-use-of-nanoparticles-in-refrigerants'],
  ['Design and Analysis of a Drivetrain of an Electric Formula Student Vehicle', 'IRJET · 2020', 'https://www.irjet.net/archives/V7/i12/IRJET-V7I12202.pdf'],
  ['Design and Analysis of a Hydraulic Brake System of an Electric Formula Student Vehicle', 'IRJET · 2020', 'https://www.researchgate.net/publication/347886891_Design_and_Analysis_of_a_Hydraulic_Brake_System_of_an_Electric_Formula_Student_Vehicle']
]

const education = [
  {
    num: '01',
    institution: 'North Point Children’s School',
    course: 'School education',
    period: '2002 → 2010',
    location: 'Muzaffarpur, Bihar',
    logo: 'https://www.google.com/s2/favicons?domain=npchildrensschool.com&sz=128',
    activities: []
  },
  {
    num: '02',
    institution: 'International Indian School, Riyadh',
    course: 'Primary',
    period: '2010 → 2015',
    location: 'Riyadh, Saudi Arabia',
    logo: 'https://www.google.com/s2/favicons?domain=iisriyadh.com&sz=128',
    activities: ['House Captain']
  },
  {
    num: '03',
    institution: 'Resonance Eduventures Limited',
    course: 'JEE Mains + Advanced Preparation · Physics, Chemistry, Mathematics',
    period: '2015 → 2017',
    location: 'Kota, Rajasthan',
    logo: 'https://www.google.com/s2/favicons?domain=resonance.ac.in&sz=128',
    activities: []
  },
  {
    num: '04',
    institution: 'Jamia Millia Islamia',
    course: 'Bachelor of Technology · Mechanical Engineering',
    period: '2018 → 2022',
    location: 'New Delhi, India',
    logo: 'https://www.google.com/s2/favicons?domain=jmi.ac.in&sz=128',
    grade: '8.7 SPI · First Division with Distinction',
    activities: [
      'Organised TEDxJMI',
      'Chairperson, ASME JMI',
      'Secretary, SAE JMI',
      'Designed, managed, and competed with a quad bike at QBDC',
      'Designed and developed a Formula Student race car for Formula Bharat'
    ]
  }
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function ProductCard({ product }) {
  const [meta, setMeta] = useState(null)
  const favicon = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(new URL(product.url).hostname)}&sz=128`

  useEffect(() => {
    let alive = true
    fetch(`https://api.microlink.io/?url=${encodeURIComponent(product.url)}&meta=true`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (!alive || !data?.data) return
        setMeta(data.data)
      })
      .catch(() => {})
    return () => { alive = false }
  }, [product.url])

  return (
    <article className="product-card">
      <div className="product-card-head">
        <div className="product-brand">
          <img className="product-logo" src={meta?.logo?.url || meta?.publisher?.logo?.url || favicon} alt="" loading="lazy" />
          <div>
            <span className="product-domain">{meta?.url ? new URL(meta.url).hostname.replace(/^www\./, '') : product.domain}</span>
            <span className="product-type">{product.type}</span>
          </div>
        </div>
        <span className="product-index">{product.index}</span>
      </div>
      <div className="product-main">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <a className="product-visit" href={product.url} target="_blank" rel="noreferrer">Visit product <Arrow /></a>
      </div>
      <div className="product-bottom">
        <div className="tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="product-links">{product.links.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label} <Arrow /></a>)}</div>
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('work')
  const [apiStatus, setApiStatus] = useState('')

  useEffect(() => {
    fetch('/api/health').then((r) => r.json()).then(() => setApiStatus('online')).catch(() => setApiStatus('offline'))
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="identity" href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top') }}>
          <img src="/profile.png" alt="Shiraz Sajid Hashmi" />
          <span>Shiraz Sajid Hashmi</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation"><span /><span /></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['work', 'experience', 'journey', 'approach', 'about', 'contact'].map((item) => <button key={item} className={active === item ? 'nav-link active' : 'nav-link'} onClick={() => scrollTo(item)}>{item}</button>)}
          <a className="nav-github" href="https://github.com/shirazhashmi/" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">

          <div className="hero-grid">
            <h1>I build products<br />that survive<br /><em>real life.</em></h1>
            <div className="hero-side">
              <p className="hero-lede">Product is not the pitch. It is what happens when real people start using the thing.</p>
<div className="hero-actions"><button className="primary-btn" onClick={() => scrollTo('work')}>See what I’ve built <Arrow /></button><a className="text-btn" href="/resume.pdf" download>Download resume <Arrow /></a></div>              <div className="hero-meta"><span>New Delhi · India</span><span className="meta-divider" /><span>AI · SaaS · EdTech</span></div>
              <div className="hero-system" aria-label="Product build loop">
                <div className="hero-system-top"><span>BUILD / 01</span><span>LIVE</span></div>
                <div className="hero-system-row"><span>01</span><strong>Problem</strong><small>find the friction</small><b>→</b></div>
                <div className="hero-system-row"><span>02</span><strong>Product</strong><small>ship the smallest system</small><b>→</b></div>
                <div className="hero-system-row"><span>03</span><strong>Adoption</strong><small>watch what people do</small><b>↗</b></div>
                <div className="hero-system-foot"><span>AI / SaaS / EDTECH</span><span>ITERATE ↻</span></div>
              </div>
            </div>
          </div>
          <div className="hero-line"><span>01 / 06</span><span>PRODUCT · SYSTEMS · EXECUTION</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="work" className="section-pad section-block">
          <div className="section-head"><div><span className="eyebrow">01 · SELECTED WORK</span><h2>Products I’ve built.</h2></div><p>Products across education, operations, voice AI and consumer software. Live links and site metadata are pulled into each card where available.</p></div>
          <div className="product-grid">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
        </section>

        <section id="experience" className="section-pad section-block dark-block">
          <div className="section-head light"><div><span className="eyebrow">02 · EXPERIENCE</span><h2>Where I’ve worked.</h2></div><p>Product work sits alongside growth, brand, design and operations. The common thread is ownership.</p></div>
          <div className="experience-list">{experience.map((item) => <article className="experience-row" key={item.company}><div className="experience-period">{item.period}</div><div><h3>{item.company}</h3><div className="role">{item.role}</div><p>{item.body}</p></div><span className="row-arrow"><Arrow /></span></article>)}</div>
        </section>

        <section id="journey" className="section-pad section-block">
          <div className="section-head"><div><span className="eyebrow">03 · EDUCATION</span><h2>Where I learned to build.</h2></div><p>A progression from school and competitive engineering preparation into mechanical engineering, student leadership and product.</p></div>
          <div className="education-list">{education.map((item) => (
            <article className="education-row" key={item.institution}>
              <span className="education-num">{item.num}</span>
              <img className="education-logo" src={item.logo} alt="" loading="lazy" />
              <div className="education-main">
                <h3>{item.institution}</h3>
                <p>{item.course}</p>
                <span className="education-location">{item.location}</span>
                {item.grade && <strong className="education-grade">{item.grade}</strong>}
                {item.activities.length > 0 && (
                  <div className="education-activities">
                    {item.activities.map((activity) => <span key={activity}>{activity}</span>)}
                  </div>
                )}
              </div>
              <span className="education-period">{item.period}</span>
            </article>
          ))}</div>
          <div className="journey-note"><span className="big-mark">∿</span><p>Mechanical engineering was the starting point. Product became the medium for applying the same systems thinking to software.</p></div>
        </section>

        <section id="approach" className="section-pad section-block approach-block">
          <div className="section-head"><div><span className="eyebrow">04 · APPROACH</span><h2>Less theatre.<br /><em>More product.</em></h2></div><p>I like product work close to the ground: talk to users, define the smallest useful system, ship it, watch what happens and keep improving.</p></div>
          <div className="principles">{[['01','Discover','Talk to users. Observe the workflow. Find the real constraint.'],['02','Define','Turn ambiguity into a sharp problem, clear outcome and focused scope.'],['03','Build','Prototype quickly, work closely with engineering and remove unnecessary complexity.'],['04','Launch','Put the product in real hands and make adoption part of the product.'],['05','Measure','Use behavior, feedback and business signals instead of vanity metrics.'],['06','Iterate','Keep the loop short. Improve what matters and kill what does not.']].map(([num,title,body]) => <div className="principle" key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></div>)}</div>
        </section>

        <section className="section-pad section-block engineering-block">
          <div className="section-head"><div><span className="eyebrow">05 · ENGINEERING</span><h2>The engineering years still show up.</h2></div><p>Constraints, interfaces, trade-offs. Turns out software has plenty of those too.</p></div>
          <div className="engineering-projects">{engineering.map(([name, desc], i) => <div className="engineering-row" key={name}><span>0{i + 1}</span><div><strong>{name}</strong><small>{desc}</small></div><Arrow /></div>)}</div>
        </section>

        <section className="section-pad section-block publications-block">
          <div className="section-head"><div><span className="eyebrow">06 · PUBLICATIONS</span><h2>Research, on paper.</h2></div><p>Three engineering publications from the transition into electric vehicles, mechanical systems and applied research.</p></div>
          <div className="publication-list">{publications.map(([title, meta, url], i) => <a className="publication-row" key={title} href={url} target="_blank" rel="noreferrer"><span>0{i + 1}</span><div><h3>{title}</h3><small>{meta}</small></div><Arrow /></a>)}</div>
          <div className="publication-cta"><a className="text-btn" href="https://www.ijaresm.com/effects-due-to-use-of-nanoparticles-in-refrigerants" target="_blank" rel="noreferrer">View publications <Arrow /></a></div>
        </section>

        <section id="about" className="section-pad section-block about-block"><div className="about-grid"><div><span className="eyebrow">ABOUT</span><h2>Product is where business, technology and people meet.</h2></div><div className="about-copy"><p>I enjoy working in that overlap. I can move between a customer conversation, a product spec, a workflow diagram, a prototype and the business case behind it.</p><p>That range comes from a slightly unusual path: engineering, student leadership, startups, growth and hands-on product building. Today, I’m focused on AI products that are useful in the real world, not just impressive in a demo.</p></div></div></section>

        <section className="section-pad section-block other-side"><div className="other-inner"><div><span className="eyebrow">THE OTHER SIDE</span><h2>Before products became my medium, words were.</h2></div><div><p>Through <strong>Senseless Writers</strong>, I’ve written poetry and observations for years. It is a quieter part of how I think, and a reminder that good products are also about how people feel when they use them.</p><a className="text-btn" href="https://www.instagram.com/senselesswriters" target="_blank" rel="noreferrer">@senselesswriters <Arrow /></a></div></div></section>

        <section id="contact" className="section-pad contact-block"><div className="contact-kicker">OPEN TO PRODUCT · AI · BUILDING</div><h2>Let’s build something<br /><em>useful.</em></h2><p>If you’re hiring for product, building an AI product, or want to talk about something you’re working on, email is the easiest place to start.</p><div className="contact-actions"><a className="primary-btn big" href="mailto:shirazhashmi@live.com">Email me <Arrow /></a><a className="secondary-btn" href="https://www.linkedin.com/in/shiraz-hashmi/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a className="secondary-btn" href="https://github.com/shirazhashmi/" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div><div className="contact-bottom"><span>shirazhashmi@live.com</span><span>{apiStatus === 'online' ? 'API · ONLINE' : 'PRODUCT · ONLINE'}</span></div></section>
      </main>
      <footer><span>SHIRAZ SAJID HASHMI</span><span>AI PRODUCT MANAGER · PRODUCT BUILDER</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
