import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const products = [
  {
    index: '01',
    name: 'Kaksha.Live',
    type: 'School infrastructure',
    description: 'A school ERP + LMS connecting administrators, teachers, students and parents through one operating layer.',
    tags: ['ERP', 'LMS', 'EdTech'],
    links: [
      ['ERP', 'https://admin.kaksha.live'],
      ['LMS', 'https://app.kaksha.live']
    ]
  },
  {
    index: '02',
    name: 'Kaksha AI',
    type: 'AI learning',
    description: 'An AI-first learning experience that starts with the student’s question and can move from instant help to human expertise.',
    tags: ['AI', 'Learning', 'Marketplace'],
    links: [['Visit product', 'https://www.kaksha.live/ai']]
  },
  {
    index: '03',
    name: 'OPERO BMS',
    type: 'Operations platform',
    description: 'An internal operations and CRM system that evolved into a reusable platform for startup workflows.',
    tags: ['CRM', 'Ops', 'SaaS'],
    links: [['Visit product', 'https://www.operobms.com']]
  },
  {
    index: '04',
    name: 'TalkFlow AI',
    type: 'AI voice workflows',
    description: 'A configurable AI voice workflow for lead calling, outcome capture and next-action distribution across business teams.',
    tags: ['Voice AI', 'Leads', 'Automation'],
    links: [['Visit product', 'https://talkflow-ai-five.vercel.app/']]
  },
  {
    index: '05',
    name: 'Recovery App',
    type: 'Consumer AI',
    description: 'An AI-led consumer product built around structured recovery workflows, guidance and a focused mobile-first experience.',
    tags: ['AI', 'Consumer', 'Mobile'],
    links: [['Visit product', 'https://recoveryapp-hazel.vercel.app/']]
  }
]

const experience = [
  {
    period: '2022 → Present',
    company: 'Kaksha.Live',
    role: 'Co-Founder · Product Manager',
    body: 'Owned product direction and execution across ERP, LMS and AI learning systems, working from customer discovery and workflow design through deployment, adoption and iteration.'
  },
  {
    period: 'Dec 2024 → Mar 2025',
    company: 'Digitaleon',
    role: 'Growth Lead',
    body: 'Worked across growth initiatives, customer-facing execution and business development in a digital product environment.'
  },
  {
    period: 'Sep 2024 → Dec 2024',
    company: 'Amitoje India',
    role: 'Brand Consultant · Sr. Project Owner',
    body: 'Managed end-to-end execution of branding and retail activation projects, combining project ownership with customer and brand experience work.'
  },
  {
    period: 'Sep 2020 → Dec 2020',
    company: 'Zalphius',
    role: 'Head of Design · Internship',
    body: 'Worked across design execution and product-facing visual systems while building early experience in collaborative delivery.'
  }
]

const engineering = [
  ['OPERO BMS', 'Business operations system'],
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
  ['Jamia Millia Islamia', 'B.Tech · Mechanical Engineering', '2018 → 2022', 'First Division with Distinction · 8.7 SPI'],
  ['Resonance Eduventures Limited', 'JEE Mains + Advanced Preparation', '2015 → 2017', 'Kota'],
  ['International Indian School, Riyadh', 'Primary', '2010 → 2015', 'House Captain'],
  ["North Point Children's School", 'School', '2002 → 2010', 'Muzaffarpur']
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('work')
  const [apiStatus, setApiStatus] = useState('')

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(() => setApiStatus('online'))
      .catch(() => setApiStatus('offline'))
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }

  return (
    <div className="site-shell">
      <div className="grain" />
      <header className="nav-wrap">
        <a className="identity" href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top') }}>
          <img src="/profile.png" alt="Shiraz Sajid Hashmi" />
          <span>Shiraz Sajid Hashmi</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
          <span /> <span />
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['work', 'experience', 'journey', 'approach', 'about', 'contact'].map((item) => (
            <button key={item} className={active === item ? 'nav-link active' : 'nav-link'} onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
          <a className="nav-github" href="https://github.com/shirazhashmi/" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-kicker"><span className="live-dot" /> AI PRODUCT MANAGER · PRODUCT BUILDER</div>
          <div className="hero-grid">
            <h1>I build products<br />from <em>problem</em><br />to adoption.</h1>
            <div className="hero-side">
              <p className="hero-lede">I work across product, business and technology to turn messy real-world problems into useful software.</p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => scrollTo('work')}>Explore work <Arrow /></button>
                <a className="text-btn" href="/resume.html" target="_blank" rel="noreferrer">View resume <Arrow /></a>
              </div>
              <div className="hero-meta">
                <span>New Delhi · India</span>
                <span className="meta-divider" />
                <span>AI · SaaS · EdTech</span>
              </div>
            </div>
          </div>
          <div className="hero-line"><span>01 / 06</span><span>PRODUCT · SYSTEMS · EXECUTION</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="work" className="section-pad section-block">
          <div className="section-head">
            <div><span className="eyebrow">01 · SELECTED WORK</span><h2>Products I’ve built.</h2></div>
            <p>Five products across education, operations, voice AI and consumer software. Each started with a problem, not a feature list.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-top"><span>{product.index}</span><span>{product.type}</span></div>
                <div className="product-ui">
                  <div className="ui-bar"><i /><i /><i /><span>{product.name.toLowerCase().replaceAll(' ', '-')}</span></div>
                  <div className="ui-body"><span className="ui-line wide" /><span className="ui-line" /><span className="ui-block" /></div>
                </div>
                <div className="product-copy"><h3>{product.name}</h3><p>{product.description}</p></div>
                <div className="product-bottom">
                  <div className="tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="product-links">{product.links.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label} <Arrow /></a>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-pad section-block dark-block">
          <div className="section-head light">
            <div><span className="eyebrow">02 · EXPERIENCE</span><h2>Where I’ve worked.</h2></div>
            <p>Product work sits alongside growth, brand, design and operations. The common thread is ownership.</p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <div className="experience-period">{item.period}</div>
                <div><h3>{item.company}</h3><div className="role">{item.role}</div><p>{item.body}</p></div>
                <span className="row-arrow"><Arrow /></span>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section-pad section-block">
          <div className="section-head">
            <div><span className="eyebrow">03 · JOURNEY</span><h2>Engineering taught me how to build.</h2></div>
            <p>Mechanical engineering was the starting point. Product became the medium for applying the same systems thinking to software.</p>
          </div>
          <div className="journey-layout">
            <div className="journey-map">
              <div className="route-line" />
              <div className="route-node"><span>01</span><div><strong>Muzaffarpur</strong><small>2002 → 2010</small></div></div>
              <div className="route-node"><span>02</span><div><strong>Riyadh</strong><small>2010 → 2015</small></div></div>
              <div className="route-node"><span>03</span><div><strong>Kota</strong><small>2015 → 2017</small></div></div>
              <div className="route-node"><span>04</span><div><strong>Jamia Millia Islamia</strong><small>2018 → 2022</small></div></div>
              <div className="route-node"><span>05</span><div><strong>Product & AI</strong><small>2022 → now</small></div></div>
            </div>
            <div className="journey-note"><span className="big-mark">∿</span><p>From vehicles and mechanical systems to software products, the medium changed. The instinct to understand the system, find the constraint and build around it stayed.</p></div>
          </div>
        </section>

        <section id="approach" className="section-pad section-block approach-block">
          <div className="section-head">
            <div><span className="eyebrow">04 · APPROACH</span><h2>Less theatre.<br /><em>More product.</em></h2></div>
            <p>I like product work close to the ground: talk to users, define the smallest useful system, ship it, watch what happens and keep improving.</p>
          </div>
          <div className="principles">
            {[
              ['01', 'Discover', 'Talk to users. Observe the workflow. Find the real constraint.'],
              ['02', 'Define', 'Turn ambiguity into a sharp problem, clear outcome and focused scope.'],
              ['03', 'Build', 'Prototype quickly, work closely with engineering and remove unnecessary complexity.'],
              ['04', 'Launch', 'Put the product in real hands and make adoption part of the product.'],
              ['05', 'Measure', 'Use behavior, feedback and business signals instead of vanity metrics.'],
              ['06', 'Iterate', 'Keep the loop short. Improve what matters and kill what does not.']
            ].map(([num, title, body]) => <div className="principle" key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </section>

        <section className="section-pad section-block engineering-block">
          <div className="section-head">
            <div><span className="eyebrow">05 · ENGINEERING</span><h2>Before software, I built machines.</h2></div>
            <p>Mechanical engineering shaped how I think about constraints, interfaces, trade-offs and systems.</p>
          </div>
          <div className="engineering-grid">
            <div className="engineering-projects">{engineering.map(([name, desc], i) => <div className="engineering-row" key={name}><span>0{i + 1}</span><div><strong>{name}</strong><small>{desc}</small></div><Arrow /></div>)}</div>
            <div className="credential-card"><span className="eyebrow">EDUCATION</span><h3>Jamia Millia Islamia</h3><p>B.Tech, Mechanical Engineering</p><strong>2018 → 2022</strong><div className="credential-detail">First Division with Distinction<br />8.7 SPI</div></div>
          </div>
        </section>

        <section className="section-pad section-block publications-block">
          <div className="section-head">
            <div><span className="eyebrow">06 · PUBLICATIONS</span><h2>Research, on paper.</h2></div>
            <p>Three engineering publications from the transition into electric vehicles, mechanical systems and applied research.</p>
          </div>
          <div className="publication-list">
            {publications.map(([title, meta, url], i) => <a className="publication-row" key={title} href={url} target="_blank" rel="noreferrer"><span>0{i + 1}</span><div><h3>{title}</h3><small>{meta}</small></div><Arrow /></a>)}
          </div>
          <div className="publication-cta"><a className="text-btn" href="https://www.ijaresm.com/effects-due-to-use-of-nanoparticles-in-refrigerants" target="_blank" rel="noreferrer">View publications <Arrow /></a></div>
        </section>

        <section id="about" className="section-pad section-block about-block">
          <div className="about-grid">
            <div><span className="eyebrow">ABOUT</span><h2>Product is where business, technology and people meet.</h2></div>
            <div className="about-copy"><p>I enjoy working in that overlap. I can move between a customer conversation, a product spec, a workflow diagram, a prototype and the business case behind it.</p><p>That range comes from a slightly unusual path: engineering, student leadership, startups, growth and hands-on product building. Today, I’m focused on AI products that are useful in the real world, not just impressive in a demo.</p></div>
          </div>
        </section>

        <section className="section-pad section-block other-side">
          <div className="other-inner"><div><span className="eyebrow">THE OTHER SIDE</span><h2>Before products became my medium, words were.</h2></div><div><p>Through <strong>Senseless Writers</strong>, I’ve written poetry and observations for years. It is a quieter part of how I think, and a reminder that good products are also about how people feel when they use them.</p><a className="text-btn" href="https://www.instagram.com/senselesswriters" target="_blank" rel="noreferrer">@senselesswriters <Arrow /></a></div></div>
        </section>

        <section id="contact" className="section-pad contact-block">
          <div className="contact-kicker">OPEN TO PRODUCT · AI · BUILDING</div>
          <h2>Let’s build something<br /><em>useful.</em></h2>
          <p>If you’re hiring for product, building an AI product, or want to talk about something you’re working on, email is the easiest place to start.</p>
          <div className="contact-actions">
            <a className="primary-btn big" href="mailto:shirazhashmi@live.com">Email me <Arrow /></a>
            <a className="secondary-btn" href="https://www.linkedin.com/in/shiraz-hashmi/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a className="secondary-btn" href="https://github.com/shirazhashmi/" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
          <div className="contact-bottom"><span>shirazhashmi@live.com</span><span>{apiStatus === 'online' ? 'API · ONLINE' : 'PRODUCT · ONLINE'}</span></div>
        </section>
      </main>

      <footer><span>SHIRAZ SAJID HASHMI</span><span>AI PRODUCT MANAGER · PRODUCT BUILDER</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
