# Sankeerth Devella — Portfolio

A premium, dark-themed developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

All content is sourced directly from the provided resume and LinkedIn PDF — no invented facts, dates, or aspirations.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `src/app` — App Router entry (layout, page, global styles)
- `src/components` — Nav, Hero, About, Projects, Achievements, Skills, Experience, Contact, Footer
- `src/data/portfolio.ts` — all portfolio content, centralized for easy editing
- `public/resume.pdf` — downloadable resume (linked from the hero section)

## Design

Dark, warm-toned theme (ink/charcoal background, amber-copper accent, sage secondary) with a "schema record" signature motif — data laid out like database rows/tables — that reflects the backend & database-setup focus of the real project work. Typography uses system font stacks (no external font fetching required at build time). Animations are done with Framer Motion and respect `prefers-reduced-motion`.

## Editing content

Update `src/data/portfolio.ts` to change any text, links, projects, skills, or achievements — the components read from this file only.
