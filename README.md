# Shiraz Sajid Hashmi Portfolio

A white and emerald personal portfolio for AI product management, SaaS and 0-to-1 product development. Built with React, Vite and custom CSS, with DM Sans and Instrument Serif typography.

## Local development

```sh
npm ci
npm run dev
```

Frontend: http://localhost:5173. Optional Express API: http://localhost:4000. The portfolio itself works as a static site without the API or third-party project metadata services.

## Build and preview

```sh
npm run build
npm run preview --workspace=client
```

`npm start` serves the build through Express. There are no lint or test scripts configured. Verification covers the production build, browser navigation, responsive layouts, resume download and content checks.

## Content

- Selected Products: Kaksha AI, Opero BMS, Kaksha Live ERP/LMS.
- Side Builds: If Systems Worked, LocalSheet (My Free Tool Kit), Recovery App and PDF Two-Up.
- Career, capabilities and Jamia education use the supplied 2026 resume. Career shows Kaksha.Live only; other education, engineering, publications, approach and writing content is retained.
- `client/public/resume.pdf` is the supplied resume, including its phone number as requested. Visible website contact uses email, LinkedIn, GitHub and X.
- Products use individual visual studies. Kaksha uses supplied screenshots with full-size viewing and an ERP/LMS selector. Opero uses supplied White Emerald desktop/mobile screenshots with a screen selector and links to v2.operobms.com.

## Publishing

The existing GitHub Pages workflow publishes `client/dist` on pushes to `main`. A local commit does not publish the site. Only push when publication is intended.

## Redesign

Existing product, career, skills, education, engineering, publication and side-build content is preserved; LocalSheet is the only added project. The original supplied resume is unchanged.

On phones, Products, Side Builds, Capabilities and Education use swipe cards with arrow controls. The education timeline includes every entry. How I work uses two cards per row.

Keyboard search: Cmd/Ctrl+K. Native dialogs support Escape and keyboard focus. Mobile navigation closes after selection. Motion respects reduced-motion preferences.

Screenshot provenance is recorded in `client/public/products/SOURCES.md`.
