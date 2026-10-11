import React, { useEffect, useRef, useState } from "react";

const products = [
  {
    index: "01",
    name: "Kaksha AI",
    type: "AI learning",
    url: "https://www.kaksha.live/ai",
    links: [["Explore Kaksha AI", "https://www.kaksha.live/ai"]],
    description:
      "From a student’s question to a step-by-step video explanation.",
    body: "An AI-powered learning product built around how students ask for help. I led product development, bringing school workflow knowledge into AI learning and experimentation.",
    scope: "Product strategy / AI workflows / Learning",
  },
  {
    index: "02",
    name: "Opero BMS",
    type: "Business operations",
    url: "https://v2.operobms.com",
    links: [["Explore Opero", "https://v2.operobms.com"]],
    description: "Recurring business workflows. One operating layer.",
    body: "Built to bring CRM, HR, finance, attendance, communication and workflow management together. A reusable system for the operational work that keeps a business moving.",
    scope: "CRM / Operations / SaaS",
  },
  {
    index: "03",
    name: "Kaksha Live ERP/LMS",
    type: "School infrastructure",
    url: "https://www.kaksha.live/",
    links: [
      ["Visit Kaksha.Live", "https://www.kaksha.live/"],
      ["ERP", "https://admin.kaksha.live"],
      ["LMS", "https://app.kaksha.live"],
    ],
    description: "The daily life of a school, connected.",
    body: "School administration and learning platforms connecting administrators, teachers, students and parents. Built from 0 to 1 across academics, attendance, payments and communication, with RFID, biometric, GPS and messaging integrations.",
    scope: "0-to-1 / ERP & LMS / EdTech",
  },
];

const sideBuilds = [
  {
    name: "If Systems Worked",
    type: "Civic data / Public record",
    description:
      "A sourced record of reported deaths across India where failures in public systems may have contributed. Map and calendar views connect reported incidents with their sources and context.",
    url: "https://ifsystemsworked.world/",
    label: "Explore If Systems Worked",
  },
  {
    name: "Recovery App",
    type: "Consumer AI",
    description:
      "AI-led consumer product built around structured recovery workflows, guidance and a focused mobile-first experience.",
    url: "https://recoveryapp-hazel.vercel.app/",
    label: "Visit Recovery App",
  },
  {
    name: "PDF Two-Up",
    type: "Admit-card PDF utility",
    description:
      "Combines two different PDF pages or admit cards onto one sheet. Supports ZIP batch upload and download, with browser-side, local processing and no PDF storage.",
    url: "https://pdf-two-up.vercel.app",
    label: "Open the utility",
  },
];

sideBuilds.splice(1, 0, {
  name: "LocalSheet",
  type: "My Free Tool Kit / Spreadsheet editor",
  description: "An offline-first spreadsheet editor for everyday work. Open and edit CSV and Excel files in the browser, use familiar formatting and export to Excel, CSV or PDF. A free, local-first tool for desktop and mobile.",
  url: "https://localsheet.mftk.site/",
  label: "Open LocalSheet",
});

const skills = [
  [
    "Product & business",
    "Discovery, 0-to-1, MVPs, roadmaps, PRDs, user stories, prioritisation, experimentation, stakeholder management, GTM, sales, funding efforts, operations and delivery.",
  ],
  [
    "AI",
    "AI product strategy, generative AI, LLM workflows, prompt engineering, AI-assisted development, rapid prototyping and Cursor AI.",
  ],
  [
    "Analytics",
    "Product metrics, activation, engagement, retention, funnel and cohort analysis, KPI tracking, Mixpanel, PostHog and Google Analytics.",
  ],
  [
    "Technical fluency",
    "APIs, integrations, SaaS architecture, system workflows and data flows. React, JavaScript, Node.js, Vite, Git, GitHub, Vercel, Firebase, Razorpay and WhatsApp API. Figma, Jira, Notion and Google Play Console.",
  ],
];

const experience = [
  {
    period: "Apr 2022 → Present",
    company: "Kaksha.Live",
    role: "Product Manager & Co-Founder",
    body: "Owned product direction and execution across ERP, LMS and AI learning systems, from customer discovery and workflow design through deployment, adoption and iteration.",
  },
];

const engineering = [
  ["Formula Bharat 2021", "Electric Formula Student vehicle"],
  ["Quad Bike Design Challenge", "Design, build and competition"],
  ["Solar Fertilizer Applicator", "Small-farm engineering project"],
  ["FSEV Concept Challenge 2020", "6th in Procurement Round"],
];

const publications = [
  [
    "Effects due to use of nanoparticles in refrigerants",
    "IJARESM · 2021",
    "https://www.ijaresm.com/effects-due-to-use-of-nanoparticles-in-refrigerants",
  ],
  [
    "Design and Analysis of a Drivetrain of an Electric Formula Student Vehicle",
    "IRJET · 2020",
    "https://www.irjet.net/archives/V7/i12/IRJET-V7I12202.pdf",
  ],
  [
    "Design and Analysis of a Hydraulic Brake System of an Electric Formula Student Vehicle",
    "IRJET · 2020",
    "https://www.researchgate.net/publication/347886891_Design_and_Analysis_of_a_Hydraulic_Brake_System_of_an_Electric_Formula_Student_Vehicle",
  ],
];

const education = [
  {
    num: "01",
    institution: "North Point Children’s School",
    course: "School education",
    period: "2002 → 2010",
    location: "Muzaffarpur, Bihar",
    activities: [],
  },
  {
    num: "02",
    institution: "International Indian School, Riyadh",
    course: "Primary",
    period: "2010 → 2015",
    location: "Riyadh, Saudi Arabia",
    activities: ["House Captain"],
  },
  {
    num: "03",
    institution: "Resonance Eduventures Limited",
    course: "JEE Mains + Advanced Preparation",
    period: "2015 → 2017",
    location: "Kota, Rajasthan",
    activities: [],
  },
  {
    num: "04",
    institution: "Jamia Millia Islamia",
    course: "Bachelor of Technology · Mechanical Engineering",
    period: "2018 → 2022",
    location: "New Delhi, India",
    grade: "GPA 8.7 · First Division with Distinction",
    activities: [
      "Organised TEDxJMI",
      "Chairperson, ASME JMI",
      "Secretary, SAE JMI",
      "Designed, managed, and competed with a quad bike at QBDC",
      "Designed and developed a Formula Student race car for Formula Bharat",
    ],
  },
];


const sections = [["work", "Products"], ["side-builds", "Side Builds"], ["experience", "Career"], ["about", "About"], ["contact", "Contact"]];
const email = "shirazhashmi@live.com";
const github = "https://github.com/shirazhashmi/";
function Arrow() { return <span aria-hidden="true">↗</span>; }
function Link({href, children, className = ""}) { return <a className={className} href={href} target={href.startsWith("https:") ? "_blank" : undefined} rel={href.startsWith("https:") ? "noreferrer" : undefined}>{children}</a>; }
function SectionHead({number, title, text}) { return <div className="section-head"><div><span className="eyebrow">{number} / INDEX</span><h2><span className="section-highlight">{title}</span></h2></div><p>{text}</p></div>; }
function SwipeRail({className, label, children, as: Rail = 'div'}) {
  const rail = useRef(null);
  const move = direction => {
    const first = rail.current.firstElementChild;
    const gap = parseFloat(getComputedStyle(rail.current).columnGap) || 0;
    rail.current.scrollBy({left: direction * (first.getBoundingClientRect().width + gap), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  };
  return <><div className="swipe-controls"><span>Swipe to explore {label.toLowerCase()}</span><div><button onClick={()=>move(-1)} aria-label={`Previous ${label.toLowerCase()} card`}>←</button><button onClick={()=>move(1)} aria-label={`Next ${label.toLowerCase()} card`}>→</button></div></div><Rail ref={rail} className={`${className} swipe-rail`} tabIndex="0" role="region" aria-label={`${label} cards`}>{children}</Rail></>;
}
function ProductVisual({ kind }) {
  const [screen, setScreen] = useState(0);
  const preview = useRef(null);
  const screens = kind === 0
    ? [{ src: '/products/kaksha-ai.png', label: 'Kaksha AI', width: 912, height: 1852 }]
    : kind === 1
      ? [{ src: '/products/opero-desktop.png', label: 'Desktop', width: 2842, height: 1634 }, { src: '/products/opero-mobile.png', label: 'Mobile', width: 822, height: 1676 }]
    : [{ src: '/products/kaksha-erp.png', label: 'ERP', width: 2006, height: 1308 }, { src: '/products/kaksha-lms.png', label: 'LMS', width: 912, height: 1970 }];
  const current = screens[screen];
  const name = kind === 0 ? 'Kaksha AI' : kind === 1 ? 'Opero BMS' : 'Kaksha Live';
  return (
    <figure className="product-screenshots">
      <div className="screenshot-label"><span>{name.toUpperCase()}</span><span>PRODUCT SCREEN</span></div>
      <button className="screenshot-open" onClick={() => preview.current.showModal()} aria-label={`Enlarge ${current.label} screenshot`}>
        <img src={current.src} alt={kind === 0 ? 'Kaksha AI learning screen' : `${name} ${current.label} screen`} width={current.width} height={current.height} loading="lazy"/>
        <span className="enlarge-hint">View full screen ↗</span>
      </button>
      <figcaption>
        {screens.length > 1 ? <div className="screen-tabs" aria-label={`Choose ${name} screen`}>{screens.map((item, i) => <button key={item.label} aria-pressed={screen === i} onClick={() => setScreen(i)}>{kind === 1 ? item.label : item.label === 'ERP' ? 'ERP · Administration' : 'LMS · Learning'}</button>)}</div> : <span className="screen-caption">From a question to understanding.</span>}
      </figcaption>
      <dialog ref={preview} className="image-dialog" aria-label={`${current.label} screenshot`} onClick={e => { if (e.target === preview.current) preview.current.close(); }} onKeyDown={e => { if (e.key === 'Escape') { e.preventDefault(); preview.current.close(); } }}>
        <div className="image-dialog-head"><span>{kind === 0 ? name : `${name} / ${current.label}`}</span><button onClick={() => preview.current.close()} aria-label="Close screenshot">Close ×</button></div>
        <img src={current.src} alt={`${current.label} full-size product screenshot`} width={current.width} height={current.height}/>
      </dialog>
    </figure>
  );
}
function ProductStudy({product, kind}) {
  return <article className="product-study"><ProductVisual kind={kind}/><div className="product-content"><div className="product-label"><span className="eyebrow">{product.index} / {product.type}</span><span className="product-mark" aria-hidden="true">{kind === 1 ? 'O' : 'K'}</span></div><h3>{product.name}</h3><p className="product-description">{product.description}</p><span className="contribution-label">WHAT I BUILT / PRODUCT CONTEXT</span><p className="product-body">{product.body}</p><div className="tags">{product.scope.split(' / ').map(t=><span key={t}>{t}</span>)}</div><div className="product-links">{product.links.map(([label,url])=><Link key={label} href={url}>{label}<Arrow/></Link>)}</div></div></article>;
}
function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [active,setActive] = useState('');
  const [query,setQuery] = useState('');
  const [copied,setCopied] = useState(false);
  const dialog = useRef(null);
  const copyTimer = useRef(null);
  function openSearch(){ setQuery(''); dialog.current.showModal(); }
  useEffect(()=>{
    const key = e => { if((e.metaKey || e.ctrlKey) && e.key.toLowerCase()==='k'){e.preventDefault(); if(dialog.current.open)dialog.current.close(); else openSearch();} if(e.key==='Escape'){ if(dialog.current.open){e.preventDefault();dialog.current.close();} setMenuOpen(false); } };
    document.addEventListener('keydown',key);
    const observer = new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.id);});},{rootMargin:'-15% 0px -65% 0px'});
    sections.forEach(([id])=>{const el=document.getElementById(id);if(el)observer.observe(el);});
    return ()=>{document.removeEventListener('keydown',key);observer.disconnect();clearTimeout(copyTimer.current);};
  },[]);
  async function copyEmail(){try{await navigator.clipboard.writeText(email);setCopied(true);clearTimeout(copyTimer.current);copyTimer.current=setTimeout(()=>setCopied(false),2500);}catch{window.location.href=`mailto:${email}`;}}
  const searchItems = [...sections.map(([id,label])=>({label,href:`#${id}`,type:'Section'})), ...products.map(p=>({label:p.name,href:p.url,type:'Product'})), ...sideBuilds.map(p=>({label:p.name,href:p.url,type:'Experiment'}))].filter(x=>x.label.toLowerCase().includes(query.toLowerCase()));
  return <div className="site-shell" id="top">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="nav-wrap"><a className="identity" href="#top" onClick={()=>setMenuOpen(false)} aria-label="Shiraz Hashmi, back to top">shiraz<span className="identity-dot">.</span><span className="identity-sub">PRODUCT / SYSTEMS</span></a><div className="nav-tools"><nav id="navigation" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{sections.map(([id,label])=><a href={`#${id}`} key={id} className={active===id ? 'active' : ''} aria-current={active===id ? 'location' : undefined} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav><button className="search-trigger" onClick={openSearch} aria-label="Search portfolio"><span aria-hidden="true">⌕</span><kbd>⌘ K</kbd></button><button className="menu-toggle" onClick={()=>setMenuOpen(v=>!v)} aria-expanded={menuOpen} aria-controls="navigation">{menuOpen ? 'Close −' : 'Menu +'}</button></div></header>
    <main id="main">
      <section className="hero"><div className="profile-row"><div className="profile"><span className="portrait-crop"><img src="/profile.png" alt="Shiraz Sajid Hashmi" width="72" height="80"/></span><div><p className="profile-name">Shiraz Sajid Hashmi</p><p>AI Product Manager | SaaS | 0-to-1 Product Development</p></div></div><span className="location"><span aria-hidden="true">↗</span> New Delhi, India</span></div>
        <div className="hero-copy"><div className="eyebrow"><span className="signal"/> SAAS · AI · 0 → 1 PRODUCTS</div><div className="hero-name-row"><h1>Shiraz Sajid <em>Hashmi.</em></h1><span className="portrait-crop mobile-name-portrait"><img src="/profile.png" alt="Shiraz Sajid Hashmi" width="72" height="80"/></span></div><p className="hero-positioning">I build products that survive <em>real life.</em></p><div className="hero-bottom"><p>Product is not the pitch. It is what happens when real people start using the thing.</p><div className="hero-actions"><a className="primary-btn" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a className="career-btn" href="#experience">Career <span aria-hidden="true">↓</span></a></div></div></div>
        <div className="hero-connect"><span>START A CONVERSATION</span><Link href={`mailto:${email}`}>Email <Arrow/></Link><Link href="https://www.linkedin.com/in/shiraz-hashmi/">LinkedIn <Arrow/></Link><Link href={github}>GitHub <Arrow/></Link><Link href="https://x.com/shirazshashmi" className="x-link" >X <Arrow/></Link><a href="/resume.pdf" download="Shiraz-Hashmi-Resume.pdf">Résumé <span aria-hidden="true">↓</span></a></div>
        <div className="impact-strip"><p>Built from the ground up.<span>Kaksha.Live, across India.</span></p>{[['100+','Schools'],['60K+','Students'],['4K+','Teachers']].map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
      </section>
      <section id="work" className="section-block"><SectionHead number="01" title="Products" text="Education and business operations. Complex workflows translated into products people can use."/><SwipeRail className="product-studies" label="Products">{products.map(p=><ProductStudy key={p.name} product={p} kind={products.indexOf(p)}/>)}</SwipeRail></section>
      <section id="side-builds" className="section-block"><SectionHead number="02" title="Side Builds" text="Small products, explorations and problems I decided were worth building."/><SwipeRail className="experiment-grid" label="Side Builds">{sideBuilds.map((item,i)=><article className="experiment" key={item.name}><div className="experiment-heading"><span className="experiment-symbol" aria-hidden="true">{['↻','⌁','▥','◎'][i]}</span><span className="eyebrow">0{i+1} / EXPERIMENT</span></div><h3>{item.name}</h3><span className="experiment-type">{item.type}</span><p>{item.description}</p><Link href={item.url}>{item.label}<Arrow/></Link></article>)}</SwipeRail></section>
      <section id="experience" className="section-block"><SectionHead number="03" title="Career" text="AI Product Manager | SaaS | 0-to-1 Product Development. Over four years of product, business and operational execution at Kaksha.Live."/><div className="experience-list">{experience.map((item,i)=><article className="experience" key={item.company}><div className="experience-meta"><span className="eyebrow">{item.period}</span><span className="career-dot"/></div><details open={i===0}><summary><div><h3>{item.company}</h3><span className="role">{item.role}</span></div><span className="expand-icon" aria-hidden="true">+</span></summary><p>{item.body}</p>{i===0 && <div className="career-notes">{[['Product','Built Kaksha.Live from 0 to 1. Led strategy across ERP, LMS and Kaksha AI, with user research, requirements, PRDs, prioritisation, roadmaps, launch, adoption, analytics and iteration.'],['Scale & implementation','Scaled to 100+ schools, 60K+ students and 4K+ teachers across India. Led onboarding and implementation directly with school owners, administrators, teachers and staff.'],['Technical partnership','Worked with my technical co-founder and engineering team on APIs, integrations, data flows, payments, attendance, RFID, biometric, GPS, WhatsApp and SMS workflows.'],['Business & delivery','Owned sales, client relationships, internal processes, team coordination, delivery and customer support. Worked on fundraising, investor communication, accelerator programs, demos, partnerships and growth strategy.']].map(([t,b])=><div key={t}><h4>{t}</h4><p>{b}</p></div>)}</div>}</details></article>)}</div><a className="text-link resume-link" href="/resume.pdf" download="Shiraz-Hashmi-Resume.pdf">Download résumé <span aria-hidden="true">↓</span></a></section>
      <section id="about" className="section-block"><SectionHead number="04" title="Systems thinker. Product builder." text="Mechanical engineering was the starting point. Product became the medium for applying the same systems thinking to software."/><div className="about-copy"><p className="about-lede">Product is where business,<br/>technology and people meet.</p><div><p>I enjoy working in that overlap. I can move between a customer conversation, a product spec, a workflow diagram, a prototype and the business case behind it.</p><p>That range comes from a slightly unusual path: engineering, student leadership, startups, growth and hands-on product building. Today, I’m focused on AI products that are useful in the real world, not just impressive in a demo.</p></div></div><div className="subsection" id="skills"><h3>Capabilities <span>01 / TOOLKIT</span></h3><p className="subsection-intro">From the problem and the business case to the workflow, the prototype and the signals after launch.</p><SwipeRail className="capability-rail" label="Capabilities">{skills.map(([t,b])=><dl className="skill-card" key={t}><dt>{t}</dt><dd>{b}</dd></dl>)}</SwipeRail></div>
      <div className="subsection" id="approach"><h3>How I work <span>02 / APPROACH</span></h3><p className="subsection-intro">I like product work close to the ground: talk to users, define the smallest useful system, ship it, watch what happens and keep improving.</p><div className="principles">{[['Discover','Talk to users. Observe the workflow. Find the real constraint.'],['Define','Turn ambiguity into a sharp problem, clear outcome and focused scope.'],['Build','Prototype quickly, work closely with engineering and remove unnecessary complexity.'],['Launch','Put the product in real hands and make adoption part of the product.'],['Measure','Use behavior, feedback and business signals instead of vanity metrics.'],['Iterate','Keep the loop short. Improve what matters and kill what does not.']].map(([t,b],i)=><div key={t}><span className="eyebrow">0{i+1}</span><h4>{t}</h4><p>{b}</p></div>)}</div></div>
      <div className="subsection" id="journey"><h3>Education <span>03 / FOUNDATIONS</span></h3><p className="subsection-intro">A progression from school and competitive engineering preparation into mechanical engineering, student leadership and product.</p><SwipeRail as="ol" className="education-timeline" label="Education">{education.map(e=><li key={e.institution}><article className="education-entry"><span className="eyebrow">{e.period}</span><h4>{e.institution}</h4><p className="education-course">{e.course}</p><p className="education-location">{e.location}</p>{e.grade && <span className="education-grade">{e.grade}</span>}{e.activities.length > 0 && <ul className="education-activities">{e.activities.map(activity=><li key={activity}>{activity}</li>)}</ul>}</article></li>)}</SwipeRail></div>
      <div className="subsection"><h3>Engineering & research <span>04 / BEFORE SOFTWARE</span></h3><p className="subsection-intro">Constraints, interfaces, trade-offs. Turns out software has plenty of those too.</p><div className="engineering-projects">{engineering.map(([n,d])=><div key={n}><strong>{n}</strong><span>{d}</span></div>)}</div><p className="subsection-intro">Three engineering publications from the transition into electric vehicles, mechanical systems and applied research.</p><div className="publication-list">{publications.map(([t,m,u])=><Link key={t} href={u}><div><span className="eyebrow">{m}</span><h4>{t}</h4></div><Arrow/></Link>)}</div><Link className="text-link" href={publications[0][2]}>View publications <Arrow/></Link></div>
      <div className="writing-note"><span className="writing-mark" aria-hidden="true">“</span><div><span className="eyebrow">THE OTHER SIDE</span><h3>Before products became my medium, words were.</h3><p>Through Senseless Writers, I’ve written poetry and observations for years. It is a quieter part of how I think, and a reminder that good products are also about how people feel when they use them.</p><Link href="https://www.instagram.com/senselesswriters">@senselesswriters <Arrow/></Link></div></div></section>
      <section id="contact" className="contact-block"><span className="eyebrow"><span className="signal"/> OPEN TO PRODUCT / AI / BUILDING</span><h2>Let’s build<br/>something <em>useful.</em></h2><div className="contact-bottom"><p>If you’re hiring for product, building an AI product, or want to talk about something you’re working on, email is the easiest place to start.</p><div><Link className="email-link" href={`mailto:${email}`}>{email} <Arrow/></Link><div className="contact-tools"><button onClick={copyEmail} aria-live="polite">{copied ? 'Email copied ✓' : 'Copy email'}</button><Link href="https://www.linkedin.com/in/shiraz-hashmi/">LinkedIn <Arrow/></Link><Link href={github}>GitHub <Arrow/></Link><Link href="https://x.com/shirazshashmi" className="x-link" >X <Arrow/></Link></div></div></div></section>
    </main><footer><a href="#top">shiraz<span>.</span></a><span>PRODUCT / SYSTEMS / EXECUTION</span><span>© {new Date().getFullYear()} <a href="#top" aria-label="Back to top">↑</a></span></footer>
    <dialog ref={dialog} className="search-dialog" onClick={e=>{if(e.target===dialog.current)dialog.current.close();}} aria-label="Search portfolio"><div className="search-box"><div className="search-input"><input autoFocus type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Find a product or section…" aria-label="Find a product or section"/><button onClick={()=>dialog.current.close()} aria-label="Close search">Esc</button></div><div className="search-results">{searchItems.map(x=><a key={x.label} href={x.href} target={x.href.startsWith('https:') ? '_blank' : undefined} rel={x.href.startsWith('https:') ? 'noreferrer' : undefined} onClick={()=>dialog.current.close()}><span>{x.label}</span><small>{x.type} ↗</small></a>)}{searchItems.length===0 && <p>No matches. Try “Kaksha” or “Career”.</p>}</div><div className="search-hint">Tab to move · Enter to open · Esc to close</div></div></dialog>
  </div>;
}

export default App;
