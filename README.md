# Sankeerth Devella Portfolio

A premium, modern personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The project presents a refined dark-themed interface, showcases projects and achievements, and centralizes content in a single data file for easy maintenance.

<p align="center">
  <img alt="Portfolio Preview" src="https://img.shields.io/badge/Next.js-16.2.10-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer-Motion-12.42.2-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
</p>

## Live Demo

- Website: https://devellasankeerth.vercel.app
- GitHub: https://github.com/Penguin-boss/Sankeerth-Portfolio

## Overview

This portfolio is designed to present Sankeerth Devella as a student builder and frontend-focused developer with experience in:

- Frontend development
- Backend planning and integration
- Database setup
- AI-assisted development workflows
- Collaborative project execution
- UI/UX discussions and product iteration

The site includes dedicated sections for:

- Hero/introduction
- About section
- Featured projects
- Achievements and hackathon milestones
- Certificates
- Skills
- Experience timeline
- Contact details

## Features

- Responsive, premium dark visual design
- Smooth animations and motion effects
- Section-based portfolio layout
- Centralized portfolio content management via `src/data/portfolio.ts`
- Resume download support
- Project and certificate cards with polished presentation
- Clean App Router structure with Next.js

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint

## Project Structure

```bash
Sankeerth-Portfolio/
├── public/
│   ├── certificates/
│   ├── resume.pdf
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   ├── lib/
│   └── ...
├── .gitattributes
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
├── PROFILE.md
├── PORTFOLIO_INSTRUCTIONS.md
├── LINKEDIN.md
└── ...
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app in development mode

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

### 3. Build for production

```bash
npm run build
```

### 4. Start production build locally

```bash
npm run start
```

## Available Scripts

```bash
npm run dev      # start local development server
npm run build    # create production build
npm run start    # run production server locally
npm run lint     # run ESLint checks
```

## Editing Content

All portfolio text, project details, skills, experiences, and certificate metadata are centralized in:

```bash
src/data/portfolio.ts
```

This keeps the project easy to update without modifying multiple component files.

### Common customization points

- Personal details and contact links
- About section text
- Project list and descriptions
- Skills and expertise
- Experience entries
- Certificate info
- Resume file path

## Deployment

This project is designed for deployment on Vercel, which fits the current Next.js setup perfectly.

### Example

```bash
git push origin main
```

Then deploy via Vercel using the repository.

## License

This repository is a personal portfolio and is not currently licensed for public reuse or redistribution.

## Contact

- Email: sankeerthdevella@gmail.com
- LinkedIn: https://www.linkedin.com/in/sankeerthdevella-730314416
- GitHub: https://github.com/Penguin-boss

## Acknowledgements

Built with care to highlight practical product work, frontend craftsmanship, and collaborative learning.

---

If you want, I can also make this README even more premium by adding:

- a project screenshots section
- a centered architecture diagram
- a darker "GitHub profile ready" version
- a recruiter-focused README version
- a version tailored for Vercel deployment showcase