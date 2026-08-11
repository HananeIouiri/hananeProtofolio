# Hanane Iouiri — Portfolio

A premium, single-page portfolio for Hanane Iouiri — Data, AI & Business Intelligence Engineer — built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

Live sections: Hero, About, Experience, Featured Projects (with case-study modals), a dedicated PFE case study (AI Reporting Assistant), a Data → Intelligence → Decision visual, Skills, Education & Certifications, and Contact.

## Tech stack

- **Framework:** Next.js 15 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS v4 (CSS-first config in `src/app/globals.css`), custom light/dark theme via a `dark` class strategy
- **Animation:** Framer Motion (scroll reveals, hero data-panel, animated pipeline)
- **Icons:** lucide-react, plus two hand-rolled brand SVGs (GitHub/LinkedIn — recent lucide-react versions dropped brand icons)
- **Content:** all copy lives in `src/data/*.ts`, kept separate from UI components

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata/SEO, theme init script
    page.tsx           # assembles all sections
    globals.css         # design tokens (light/dark), Tailwind v4 theme
  components/           # one component per section + shared UI (navbar, cards, modal)
  data/                 # profile, experience, projects, pfe, skills, education — the single source of truth for content
  lib/nav.ts             # nav item definitions
public/
  Hanane-Iouiri-CV.pdf   # downloadable resume (served at /Hanane-Iouiri-CV.pdf)
  favicon.svg
```

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Updating content

All factual content (experience, projects, skills, education, the PFE case study) lives in `src/data/`. To update the site, edit the relevant `.ts` file — no JSX changes needed. To replace the downloadable résumé, overwrite `public/Hanane-Iouiri-CV.pdf` (keep the same filename, or update `cvPath` in `src/data/profile.ts`).

## Deploy

The project is a standard Next.js app and deploys cleanly to any Next.js-compatible host.

**Vercel (recommended):**
```bash
npx vercel
```
or connect the GitHub repository at [vercel.com/new](https://vercel.com/new) — zero configuration needed.

**Any Node host:**
```bash
npm run build
npm run start   # serves on port 3000 by default
```

## Notes

- The PFE project (AI Reporting Assistant) was built during a confidential client mission (Scalian Maroc → Alstom) and is not open-sourced; its case study is drawn directly from the defended engineering report rather than a public repository.
- Featured GitHub projects link out to their real, public repositories under [github.com/HananeIouiri](https://github.com/HananeIouiri).
