# Bita Yeganeh — Portfolio

My personal portfolio: a single-page site showing my projects, experience, education and certificates.

**Live site:** _add URL here_

![Portfolio hero section](public/images/profile.webp)

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

When deploying, set these in your hosting provider's environment settings (e.g. Vercel → Project → Settings → Environment Variables).

## Project structure

```
src/
  components/      # One component + CSS module per section
  components/ui/   # Shared UI pieces
  data/            # Project content
  assets/          # Certificates bundled by Vite
public/images/     # Screenshots, profile photo, resume
```

## Contact

- GitHub: [BitaYeganeh](https://github.com/BitaYeganeh)
- LinkedIn: [bita-yeganeh](https://www.linkedin.com/in/bita-yeganeh-503144237/)
