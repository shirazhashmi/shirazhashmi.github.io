# Shiraz Sajid Hashmi Portfolio

An editorial portfolio for AI product management, SaaS and 0-to-1 product development. Built with React, Vite and custom CSS, with DM Sans and Instrument Serif typography.

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
- Side Builds: If Systems Worked, Recovery App and PDF Two-Up.
- Career, capabilities and Jamia education use the supplied 2026 resume. Career shows Kaksha.Live only; other education, engineering, publications, approach and writing content is retained.
- `client/public/resume.pdf` is the supplied resume, including its phone number as requested. Visible website contact uses email, LinkedIn and GitHub.
- Products share a compact index with expandable notes, keeping all three visible together on desktop.

## Publishing

The existing GitHub Pages workflow publishes `client/dist` on pushes to `main`. A local commit does not publish the site. Only push when publication is intended.
