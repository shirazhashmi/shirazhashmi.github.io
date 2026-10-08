import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
    visual: "question",
    detail: "Student question → Step-by-step explanation → Video learning",
  },
  {
    index: "02",
    name: "Opero BMS",
    type: "Business operations",
    url: "https://www.operobms.com",
    links: [["Explore Opero", "https://www.operobms.com"]],
    description: "Recurring business workflows. One operating layer.",
    body: "Built to bring CRM, HR, finance, attendance, communication and workflow management together. A reusable system for the operational work that keeps a business moving.",
    scope: "CRM / Operations / SaaS",
    visual: "operations",
    detail: "CRM / HR / Finance / Attendance / Communication / Workflows",
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
    visual: "school",
    detail: "Administrators / Teachers / Students / Parents",
  },
];

const sideBuilds = [
  {
    name: "Wanderloop",
    type: "Hotel metasearch prototype",
    description:
      "A hotel comparison exploration with multiple booking providers, native offers, price freshness, Price Guard and verified guest ratings. Designed for clearer offer comparison.",
    url: "https://github.com/shirazhashmi/wanderloop-listing",
    label: "Explore the prototype source",
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
  {
    period: "Dec 2024 → Mar 2025",
    company: "Digitaleon",
    role: "Growth Lead",
    body: "Worked across growth initiatives, customer-facing execution and business development in a digital product environment.",
  },
  {
    period: "Sep 2024 → Dec 2024",
    company: "Amitoje India",
    role: "Brand Consultant · Sr. Project Owner",
    body: "Managed end-to-end execution of branding and retail activation projects, combining project ownership with customer and brand experience work.",
  },
  {
    period: "Sep 2020 → Dec 2020",
    company: "Zalphius",
    role: "Head of Design · Internship",
    body: "Worked across design execution and product-facing visual systems while building early experience in collaborative delivery.",
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

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProductStudy({ product }) {
  return (
    <article className={`product-study ${product.visual}`}>
      <div className="study-caption">
        <span>
          {product.index} / {product.type}
        </span>
        <span>{product.scope}</span>
      </div>
      <div className="study-grid">
        <div className="study-copy">
          <h3>{product.name}</h3>
          <p className="study-deck">{product.description}</p>
          <p>{product.body}</p>
          <div className="product-links">
            {product.links.map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noreferrer">
                {label} <Arrow />
              </a>
            ))}
          </div>
        </div>
        <div
          className={`study-visual visual-${product.visual}`}
          aria-label={`${product.name} workflow illustration`}
        >
          <span className="visual-label">{product.type} / System map</span>
          {product.visual === "question" && (
            <>
              <div className="question-line">
                A question
                <br />
                <em>worth answering.</em>
              </div>
              <div className="learning-flow">
                <span>01 Understand</span>
                <span>02 Explain</span>
                <span>03 Visualise</span>
              </div>
            </>
          )}
          {product.visual === "operations" && (
            <>
              <div className="ops-title">
                The work
                <br />
                behind the work.
              </div>
              <div className="ops-grid">
                {[
                  "CRM",
                  "HR",
                  "Finance",
                  "Attendance",
                  "Communication",
                  "Workflows",
                ].map((x, i) => (
                  <span key={x}>
                    <small>0{i + 1}</small>
                    {x}
                  </span>
                ))}
              </div>
            </>
          )}
          {product.visual === "school" && (
            <>
              <div className="school-title">
                One school.
                <br />
                <em>Many moving parts.</em>
              </div>
              <div className="school-flow">
                {["Administrators", "Teachers", "Students", "Parents"].map(
                  (x) => (
                    <span key={x}>{x}</span>
                  ),
                )}
              </div>
            </>
          )}
          <span className="visual-foot">{product.detail}</span>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="nav-wrap">
        <a className="identity" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="identity-mark">ssh.</span>
          <span>Shiraz Sajid Hashmi</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="navigation"
        >
          {menuOpen ? "Close −" : "Menu +"}
        </button>
        <nav
          id="navigation"
          aria-label="Main navigation"
          className={menuOpen ? "nav-links open" : "nav-links"}
        >
          {[
            ["work", "Products"],
            ["side-builds", "Side Builds"],
            ["experience", "Career"],
            ["about", "About"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              className="nav-link"
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-github"
            href="https://github.com/shirazhashmi/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <div id="top" />
        <section className="hero section-pad">
          <div className="hero-kicker">
            <span>Shiraz Sajid Hashmi / Portfolio</span>
            <span>New Delhi, India</span>
          </div>
          <div className="hero-grid">
            <div>
              <p className="positioning">
                AI Product Manager | SaaS | 0-to-1 Product Development
              </p>
              <h1>
                I build products
                <br />
                that survive
                <br />
                <em>real life.</em>
              </h1>
            </div>
            <div className="hero-side">
              <figure className="portrait">
                <img src="/profile.png" alt="Shiraz Sajid Hashmi" />
                <figcaption>Product / Systems / Execution</figcaption>
              </figure>
              <p className="hero-lede">
                Product is not the pitch. It is what happens when real people
                start using the thing.
              </p>
              <div className="hero-actions">
                <a className="primary-btn" href="#work">
                  View products ↓
                </a>
                <a className="text-btn" href="/resume.pdf" download>
                  Resume <Arrow />
                </a>
              </div>
              <div className="hero-social">
                <a
                  href="https://www.linkedin.com/in/shiraz-hashmi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Arrow />
                </a>
                <a
                  href="https://github.com/shirazhashmi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Arrow />
                </a>
              </div>
            </div>
          </div>
          <div className="impact-strip" aria-label="Kaksha.Live platform scale">
            <p>
              Built from the ground up.
              <br />
              <span>Kaksha.Live, across India.</span>
            </p>
            <div>
              <strong>100+</strong>
              <span>Schools</span>
            </div>
            <div>
              <strong>60K+</strong>
              <span>Students</span>
            </div>
            <div>
              <strong>4K+</strong>
              <span>Teachers</span>
            </div>
          </div>
        </section>

        <section id="work" className="section-pad section-block">
          <div className="section-head">
            <div>
              <span className="eyebrow">01 / SELECTED PRODUCTS</span>
              <h2>
                Built for
                <br />
                <em>the everyday.</em>
              </h2>
            </div>
            <p>
              Education and business operations. Complex workflows translated
              into products people can use.
            </p>
          </div>
          <div className="product-studies">
            {products.map((product) => (
              <ProductStudy key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section
          id="side-builds"
          className="section-pad section-block side-builds"
        >
          <div className="section-head">
            <div>
              <span className="eyebrow">02 / SIDE BUILDS</span>
              <h2>
                Room to
                <br />
                <em>experiment.</em>
              </h2>
            </div>
            <p>
              Small products, explorations and problems I decided were worth
              building.
            </p>
          </div>
          <div className="side-list">
            {sideBuilds.map((item, i) => (
              <article className="side-row" key={item.name}>
                <span className="side-index">0{i + 1}</span>
                <div>
                  <span className="eyebrow">{item.type}</span>
                  <h3>{item.name}</h3>
                </div>
                <div>
                  <p>{item.description}</p>
                  <a
                    className="text-btn"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label} <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="section-pad section-block career-block"
        >
          <div className="section-head">
            <div>
              <span className="eyebrow">03 / CAREER</span>
              <h2>
                Ownership,
                <br />
                <em>end to end.</em>
              </h2>
            </div>
            <p>
              AI Product Manager | SaaS | 0-to-1 Product Development. Over four
              years of product, business and operational execution at
              Kaksha.Live.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((item, i) => (
              <article className="experience-row" key={item.company}>
                <div className="experience-period">{item.period}</div>
                <div>
                  <h3>{item.company}</h3>
                  <div className="role">{item.role}</div>
                  <p>{item.body}</p>
                  {i === 0 && (
                    <div className="career-details">
                      {[
                        [
                          "Product",
                          "Built Kaksha.Live from 0 to 1. Led strategy across ERP, LMS and Kaksha AI, with user research, requirements, PRDs, prioritisation, roadmaps, launch, adoption, analytics and iteration.",
                        ],
                        [
                          "Scale & implementation",
                          "Scaled to 100+ schools, 60K+ students and 4K+ teachers across India. Led onboarding and implementation directly with school owners, administrators, teachers and staff.",
                        ],
                        [
                          "Technical partnership",
                          "Worked with my technical co-founder and engineering team on APIs, integrations, data flows, payments, attendance, RFID, biometric, GPS, WhatsApp and SMS workflows.",
                        ],
                        [
                          "Business & delivery",
                          "Owned sales, client relationships, internal processes, team coordination, delivery and customer support. Worked on fundraising, investor communication, accelerator programs, demos, partnerships and growth strategy.",
                        ],
                      ].map(([title, text]) => (
                        <div key={title}>
                          <h4>{title}</h4>
                          <p>{text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-pad section-block skills-block">
          <div className="section-head">
            <div>
              <span className="eyebrow">04 / CAPABILITIES</span>
              <h2>
                Across the
                <br />
                <em>product system.</em>
              </h2>
            </div>
            <p>
              From the problem and the business case to the workflow, the
              prototype and the signals after launch.
            </p>
          </div>
          <dl className="skills-list">
            {skills.map(([title, body]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="journey" className="section-pad section-block">
          <div className="section-head">
            <div>
              <span className="eyebrow">05 / EDUCATION</span>
              <h2>Where I learned to build.</h2>
            </div>
            <p>
              A progression from school and competitive engineering preparation
              into mechanical engineering, student leadership and product.
            </p>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-row" key={item.institution}>
                <span className="education-num">{item.num}</span>

                <div className="education-main">
                  <h3>{item.institution}</h3>
                  <p>{item.course}</p>
                  <span className="education-location">{item.location}</span>
                  {item.grade && (
                    <strong className="education-grade">{item.grade}</strong>
                  )}
                  {item.activities.length > 0 && (
                    <div className="education-activities">
                      {item.activities.map((activity) => (
                        <span key={activity}>{activity}</span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="education-period">{item.period}</span>
              </article>
            ))}
          </div>
          <div className="journey-note">
            <span className="big-mark">∿</span>
            <p>
              Mechanical engineering was the starting point. Product became the
              medium for applying the same systems thinking to software.
            </p>
          </div>
        </section>

        <section
          id="approach"
          className="section-pad section-block approach-block"
        >
          <div className="section-head">
            <div>
              <span className="eyebrow">06 / APPROACH</span>
              <h2>
                Less theatre.
                <br />
                <em>More product.</em>
              </h2>
            </div>
            <p>
              I like product work close to the ground: talk to users, define the
              smallest useful system, ship it, watch what happens and keep
              improving.
            </p>
          </div>
          <div className="principles">
            {[
              [
                "01",
                "Discover",
                "Talk to users. Observe the workflow. Find the real constraint.",
              ],
              [
                "02",
                "Define",
                "Turn ambiguity into a sharp problem, clear outcome and focused scope.",
              ],
              [
                "03",
                "Build",
                "Prototype quickly, work closely with engineering and remove unnecessary complexity.",
              ],
              [
                "04",
                "Launch",
                "Put the product in real hands and make adoption part of the product.",
              ],
              [
                "05",
                "Measure",
                "Use behavior, feedback and business signals instead of vanity metrics.",
              ],
              [
                "06",
                "Iterate",
                "Keep the loop short. Improve what matters and kill what does not.",
              ],
            ].map(([num, title, body]) => (
              <div className="principle" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad section-block engineering-block">
          <div className="section-head">
            <div>
              <span className="eyebrow">07 / ENGINEERING</span>
              <h2>The engineering years still show up.</h2>
            </div>
            <p>
              Constraints, interfaces, trade-offs. Turns out software has plenty
              of those too.
            </p>
          </div>
          <div className="engineering-projects">
            {engineering.map(([name, desc], i) => (
              <div className="engineering-row" key={name}>
                <span>0{i + 1}</span>
                <div>
                  <strong>{name}</strong>
                  <small>{desc}</small>
                </div>
                <Arrow />
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad section-block publications-block">
          <div className="section-head">
            <div>
              <span className="eyebrow">08 / PUBLICATIONS</span>
              <h2>Research, on paper.</h2>
            </div>
            <p>
              Three engineering publications from the transition into electric
              vehicles, mechanical systems and applied research.
            </p>
          </div>
          <div className="publication-list">
            {publications.map(([title, meta, url], i) => (
              <a
                className="publication-row"
                key={title}
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <small>{meta}</small>
                </div>
                <Arrow />
              </a>
            ))}
          </div>
          <div className="publication-cta">
            <a
              className="text-btn"
              href="https://www.ijaresm.com/effects-due-to-use-of-nanoparticles-in-refrigerants"
              target="_blank"
              rel="noreferrer"
            >
              View publications <Arrow />
            </a>
          </div>
        </section>

        <section id="about" className="section-pad section-block about-block">
          <div className="about-grid">
            <div>
              <span className="eyebrow">ABOUT</span>
              <h2>Product is where business, technology and people meet.</h2>
            </div>
            <div className="about-copy">
              <p>
                I enjoy working in that overlap. I can move between a customer
                conversation, a product spec, a workflow diagram, a prototype
                and the business case behind it.
              </p>
              <p>
                That range comes from a slightly unusual path: engineering,
                student leadership, startups, growth and hands-on product
                building. Today, I’m focused on AI products that are useful in
                the real world, not just impressive in a demo.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad section-block other-side">
          <div className="other-inner">
            <div>
              <span className="eyebrow">THE OTHER SIDE</span>
              <h2>Before products became my medium, words were.</h2>
            </div>
            <div>
              <p>
                Through <strong>Senseless Writers</strong>, I’ve written poetry
                and observations for years. It is a quieter part of how I think,
                and a reminder that good products are also about how people feel
                when they use them.
              </p>
              <a
                className="text-btn"
                href="https://www.instagram.com/senselesswriters"
                target="_blank"
                rel="noreferrer"
              >
                @senselesswriters <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad contact-block">
          <div className="contact-kicker">OPEN TO PRODUCT · AI · BUILDING</div>
          <h2>
            Let’s build something
            <br />
            <em>useful.</em>
          </h2>
          <p>
            If you’re hiring for product, building an AI product, or want to
            talk about something you’re working on, email is the easiest place
            to start.
          </p>
          <div className="contact-actions">
            <a className="primary-btn big" href="mailto:shirazhashmi@live.com">
              Email me <Arrow />
            </a>
            <a
              className="secondary-btn"
              href="https://www.linkedin.com/in/shiraz-hashmi/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
            <a
              className="secondary-btn"
              href="https://github.com/shirazhashmi/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
          </div>
          <div className="contact-bottom">
            <span>shirazhashmi@live.com</span>
            <span>New Delhi · India</span>
          </div>
        </section>
      </main>
      <footer>
        <span>SHIRAZ SAJID HASHMI</span>
        <span>AI PRODUCT MANAGER · PRODUCT BUILDER</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
