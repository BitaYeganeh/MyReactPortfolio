# Bita Yeganeh — Portfolio

[![Tests](https://github.com/BitaYeganeh/MyReactPortfolio/actions/workflows/tests.yml/badge.svg)](https://github.com/BitaYeganeh/MyReactPortfolio/actions/workflows/tests.yml)

My personal portfolio: a single-page site showing my projects, experience, education and certificates.

**Live site:** [myportfolio-u7mw.onrender.com](https://myportfolio-u7mw.onrender.com)

![Portfolio preview](public/images/og-image.jpg)

## Tech stack

- **React 19** + **Vite 7** (SWC)
- **CSS Modules** for component styles, **Tailwind CSS 4** for utilities
- **EmailJS** for the contact form (no backend needed)
- **react-icons** for icons

## Highlights

- Featured case study with interactive before/after comparisons of a cybersecurity company site redesign
- Project data kept in one file (`src/data/projects.js`), so adding a project needs no component changes
- Responsive layout with a separate mobile hero arrangement
- Images served as resized WebP and lazy-loaded below the fold

## Testing

23 automated end-to-end tests (Playwright) run on every push in GitHub Actions. The tests are in [`e2e/portfolio.spec.js`](e2e/portfolio.spec.js), configured in [`playwright.config.js`](playwright.config.js), and the CI workflow is [`.github/workflows/tests.yml`](.github/workflows/tests.yml).

| Area | What is checked |
| --- | --- |
| Navigation | Menu links scroll to the right section; the Resume/CV button serves a real PDF |
| Content | All eleven projects are listed and match the About stats; every image has alt text and loads; the hackathon demo video is served; external links open safely in a new tab |
| Contact form | Required fields, success and error messages, spam trap — real emails are never sent (requests are intercepted) |
| Responsive | No sideways scrolling from 320px phones to 1920px screens; header fits on small phones |
| Accessibility | No serious or critical issues found by axe-core (WCAG colour contrast, image and icon labels) |

Writing the tests found and fixed two real problems: low colour contrast on small orange text, and menu links landing in the wrong place while images loaded.

```bash
npm run test:e2e   # starts the site and runs the tests
```

## Running locally

```bash
npm install
cp .env.example .env   # then fill in your EmailJS IDs
npm run dev
```

| Script            | What it does                      |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the dev server with HMR     |
| `npm run build`   | Production build into `dist/`     |
| `npm run preview` | Serve the production build        |
| `npm run lint`    | Run ESLint                        |

### Environment variables

| Variable                   | Description          |
| -------------------------- | -------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service ID   |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID  |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key   |

When deploying, set these in your hosting provider's environment settings (e.g. Render → Service → Environment).

## Project structure

```
src/
  components/      # One component + CSS module per section
  components/ui/   # Shared UI pieces
  data/            # Project content
  assets/          # Certificates bundled by Vite
public/images/     # Screenshots, profile photo, resume
public/videos/     # Project demo videos
e2e/               # Playwright end-to-end tests
```

## Contact

- GitHub: [BitaYeganeh](https://github.com/BitaYeganeh)
- LinkedIn: [bita-yeganeh](https://www.linkedin.com/in/bita-yeganeh-503144237/)
