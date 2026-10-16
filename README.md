# Sankeerth Devella — portfolio

> A quiet, typographic portfolio for Sankeerth Devella, a student developer and
> designer in Hyderabad. Next.js App Router, TypeScript and hand-written CSS.

**Live:** https://devellasankeerth.vercel.app

---

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, static output) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4 (preflight only) plus hand-written CSS in `src/styles` |
| Type | `next/font` — Inter (body) and Fraunces (display) |
| Social images | `next/og` — designed 1200×630 cards generated at build time |
| Hosting | Vercel |

No animation library and no icon library: motion is CSS (opacity and transform
only) and the three icons are inline SVG, so the client bundle stays small.

---

## Design system

Three colours, declared once in `src/styles/tokens.css` and never hard-coded
anywhere else:

| Token | Value | Used for |
| --- | --- | --- |
| `--black` | `#000000` | page surface |
| `--white` | `#FFFFFF` | text, rules, the one high-contrast action |
| `--navy` | `#0A192F` | raised surfaces (project panels, the portrait plate) |

Text hierarchy comes from white at three opacities (100% / 74% / 58%), all of
which clear WCAG AA on both black and navy. There is no fourth hue.

The type scale is fluid (`clamp()`), body copy is 17–18px and never smaller than
15px, and headings are display type: one serif, tight tracking, balanced
wrapping.

---

## Information architecture

Five blocks on the home page, in reading order:

1. **Hero** — name, role, one short introduction, four links, and the portrait in
   a navy plate that sits on the same grid as the text.
2. **Selected work** — four projects as full panels, each linking to its own page.
3. **Profile** — a short introduction in prose.
4. **Background** — experience, education, the Enginow Hackathon (each round with
   its certificate), certifications and skills, as a label column beside a
   content column.
5. **Closing** — one line, the email as the single emphasised link, three links.

Plus a 404 page. Every project has a readable detail page at `/work/<slug>`.

---

## Content

All content lives in one file: **`src/data/site.ts`**.

The page, the project pages, `sitemap.xml`, and every page's title, description,
canonical and social image are generated from it — so there is no second place
where a project name or link can drift.

To add a project, append an entry to `projects`. That is the whole change: the
work list, the project page, the footer count, the sitemap and the per-project
Open Graph image all pick it up.

Nothing in the file is invented: where a fact was not in the source material
(project dates, outcome metrics, project imagery) it is simply absent, and the
handover notes list what is still missing. The résumé at `public/resume.pdf` is
a 4 KB three-page file with no extractable text — replace it before shipping.

---

## SEO

- Per-page `<title>`, meta description, canonical URL and Open Graph / Twitter
  tags, all built on `metadataBase` = `https://devellasankeerth.vercel.app`.
- `sitemap.xml` and `robots.txt` generated from the content file
  (`src/app/sitemap.ts`, `src/app/robots.ts`).
- JSON-LD: `Person` on the home page, `SoftwareApplication` on each project page.
- Designed social cards: `src/app/opengraph-image.tsx` and
  `src/app/work/[slug]/opengraph-image.tsx` (Twitter reuses them).
- Icons and manifest: `favicon.ico`, `icon.png`, `apple-icon.png` and
  `manifest.webmanifest`, with `theme-color` set to the navy.
- One `h1` per page, ordered headings, `header`/`nav`/`main`/`footer` landmarks,
  descriptive link text and alt text.

---

## Motion

Smooth anchor scrolling, 150–300ms transitions on hover and focus, a short page
entry fade, and scroll reveals that play once. Only `opacity` and `transform`
animate, so nothing shifts layout. `prefers-reduced-motion: reduce` removes all
of it and pins every revealed block to its resting state.

---

## Scripts

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

---

## Structure

```
src/
  app/                 routes, metadata, sitemap, robots, manifest, social images
    work/[slug]/       one page per project
  components/          Hero, WorkList, Profile, Background, Closing, header/footer, Reveal
  data/site.ts         all content
  lib/fonts.ts         Inter + Fraunces
  lib/og.tsx           the 1200×630 social card renderer
  styles/              tokens.css, base.css, components.css
  assets/fonts/        Inter woff, used only to render the social images
```
