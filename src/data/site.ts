/**
 * CONTENT — the single source of truth for the whole site.
 *
 * Everything the site renders is declared here: the identity block, the
 * navigation, the projects (which also drive /work/[slug], the sitemap and the
 * per-project metadata), the background material (experience, education,
 * hackathon, certifications, skills) and the closing block.
 *
 * Rules this file follows:
 *   - No invented facts. Every value below is either taken from the previous
 *     content file (src/data/portfolio.ts, itself sourced from the uploaded
 *     resume and LinkedIn export) or from the site owner's own brief.
 *   - Where a fact was not available (project dates, outcome metrics, project
 *     imagery) it is left out rather than guessed at, and the handover notes
 *     list what is still missing.
 */

export type ProjectLink = {
  readonly label: string;
  readonly href: string;
};

export type Project = {
  /** URL segment: /work/<slug> */
  readonly slug: string;
  readonly name: string;
  readonly status: "Ongoing" | "Contributed" | "Individual";
  /** Sentence for the work list and the project page lede. */
  readonly summary: string;
  /** What he actually did, in his own terms from the resume. */
  readonly role: readonly string[];
  readonly stack: readonly string[];
  /** `applicationCategory` for the project's structured data. */
  readonly category: "WebApplication" | "MobileApplication";
  readonly live?: string;
  readonly github?: string;
};

/* -------------------------------------------------------------------------- */
/* Identity                                                                    */
/* -------------------------------------------------------------------------- */

export const siteUrl = "https://devellasankeerth.vercel.app";

/**
 * One title and one role description, used everywhere — hero, <title>, meta
 * description, Open Graph, structured data. Kept here so they cannot drift.
 */
export const identity = {
 name: "Sankeerth Devella",
 /** Used as the job title in structured data and the hero label. */
 role: "Student developer & designer",
 /** Accurate one-line description of the work, from the resume. */
 focus:
   "Frontend, backend, database setup and frontend integration, with AI-assisted development workflows.",
 location: {
   city: "Hyderabad",
   region: "Telangana",
   country: "India",
   /** ISO 3166-1 alpha-2, for structured data. */
   countryCode: "IN",
   /** Display form. */
   formatted: "Hyderabad, India",
 },
 email: "sankeerthdevella@gmail.com",
 github: "https://github.com/Penguin-boss",
 linkedin: "https://www.linkedin.com/in/sankeerthdevella-730314416",
 // Updated resume filename
 resume: "/Sankeerth_Devella_Resume.pdf",
} as const;

/**
 * The one title and one meta description, used by the home page, the Open Graph
 * tags, the structured data and the web manifest. Declared here so they cannot
 * drift apart.
 */
export const siteTitle = `${identity.name} — ${identity.role}`;

export const siteDescription = `${identity.name} is a ${identity.role.toLowerCase()} in ${identity.location.formatted}. ${identity.focus}`;

/** Keywords kept to what a reader would actually type. */
export const keywords = [
  "Sankeerth Devella",
  "student developer",
  "student designer",
  "Hyderabad developer",
  "VersaCareer",
  "Desi-Drip",
  "SettleX",
  "WishCraft Studios",
  "Next.js developer",
] as const;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

export type NavItem = {
  readonly label: string;
  /** Fragment on the home page. */
  readonly href: string;
  /** Dropped from the header on very narrow screens. */
  readonly secondary?: boolean;
};

export const navItems: readonly NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Profile", href: "#profile" },
  { label: "Background", href: "#background", secondary: true },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  /* Two short sentences. Nothing here is a claim the resume does not make. */
  intro:
    "I'm a student developer and designer in Hyderabad. I build practical web products, and at WishCraft Studios — a student-led development team — I take client work from the frontend throug[...]",
} as const;

/* -------------------------------------------------------------------------- */
/* Profile                                                                     */
/* -------------------------------------------------------------------------- */

export const profile = {
  /* The four-paragraph biography condensed to the three that say something new.
     The old closing paragraph restated the first one, so it is gone. */
  paragraphs: [
    "I'm a student and frontend developer who likes building practical products that solve real problems. Most of what I enjoy is the part where an idea becomes something people can actually open[...]",
    "As part of WishCraft Studios, a student-led development team, I work on client projects from concept to deployment — frontend development, backend architecture, database design, UI/UX plan[...]",
  ],
  /** One experience worth stating plainly, kept separate from the rest. */
  highlight: {
    text: "One of the more useful things I've done was rebuilding a client project's backend from scratch after development had stalled, then integrating it with the existing frontend and helping[...]",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

export const projects: readonly Project[] = [
  {
    slug: "versacareer",
    name: "VersaCareer",
    status: "Ongoing",
    summary:
      "Career guidance platform with AI resume analysis, skill mapping and personalised career recommendations.",
    role: [
      "Frontend developer",
      "Backend planning",
      "Database organisation",
      "UI discussions",
      "AI-assisted workflows",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI dev tools", "Database setup"],
    category: "WebApplication",
    github: "https://github.com/penguin-boss/VersaCareer",
    live: "https://versacareer.vercel.app",
  },
  {
    slug: "desi-drip",
    name: "Desi-Drip",
    status: "Ongoing",
    summary:
      "Fashion-focused web application for exploring ethnic styling ideas and recommendations.",
    role: [
      "Project setup",
      "Frontend developer",
      "Backend configuration",
      "Testing",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Backend configuration", "Testing"],
    category: "WebApplication",
    github: "https://github.com/Penguin-boss/Desi-Drip",
    live: "https://desi-drip.vercel.app",
  },
  {
    slug: "wishcraft-studios",
    name: "Wishcraft Studios",
    status: "Ongoing",
    summary:
      "Student-led development studio taking client products from concept to deployment — web platforms, productivity tools and interactive applications.",
    role: [
      "Frontend developer",
      "Backend architecture",
      "Database design",
      "UI/UX planning",
      "AI-assisted development workflows",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "AI dev tools"],
    category: "WebApplication",
    github: "https://github.com/Penguin-boss/wishcraft-studios",
    live: "https://wishcraftstudios.vercel.app",
  },
  {
    slug: "settlex",
    name: "SettleX",
    status: "Contributed",
    summary:
      "Expense-splitting mobile app with collaborative planning, bill tracking and backend setup.",
    role: [
      "Collaborative planning",
      "Frontend development",
      "Database organisation",
      "Backend setup",
    ],
    stack: ["React Native", "Mobile app", "Database setup", "Backend setup"],
    category: "MobileApplication",
    github: "https://github.com/Penguin-boss/SettleX",
  },
];

/* -------------------------------------------------------------------------- */
/* Background — experience, education, proof, skills                           */
/* -------------------------------------------------------------------------- */

export type Experience = {
  readonly title: string;
  /** Kept inline and quiet: there are no invented dates here. */
  readonly period: string;
  readonly description: string;
};

export const experience: readonly Experience[] = [
  {
    title: "WishCraft Studios",
    period: "Ongoing",
    description:
      "Frontend development, backend architecture, database design, UI/UX planning and AI-assisted workflows on client products, from concept through deployment.",
  },
  {
    title: "Backend & database work",
    period: "Ongoing",
    description:
      "Building and organising the backend and database structure for applications, collaborating on requirements and implementation.",
  },
  {
    title: "Independent & collaborative projects",
    period: "VersaCareer · Desi-Drip · SettleX · Wishcraft Studios",
    description:
      "Frontend development, backend planning, database organisation, UI/UX discussions, testing and AI-assisted development workflows across several project builds.",
  },
];

export const education = {
  school: "Physics Wallah Vidyapeeth, Hyderabad",
  lines: [
    "JEE Main & Advanced preparation (2025–2027)",
    "Telangana State Board (Intermediate)",
  ],
} as const;

/**
 * The four hackathon rounds, stated once. The Round 1 / Round 2 entry from the
 * old Certificates list was the same fact in a second place, so the certificates
 * now hang off the round they belong to instead of being listed twice.
 */
export const hackathon = {
  name: "Enginow Hackathon",
  team: "WishCraft Studios",
  rounds: [
    {
      label: "Round 1 — Aptitude",
      result: "Top 3 rank",
      note: "Certificate of Excellence",
      certificate: "/certificates/hackathon-round-1.jpg",
    },
    {
      label: "Round 2 — Submission",
      result: "Qualified",
      note: "Advanced to the next round",
      certificate: "/certificates/hackathon-round-2.jpg",
    },
    {
      label: "Round 3 — Hackathon",
      result: "Qualified",
      note: "Advanced to the next round",
      certificate: "/certificates/hackathon-round-3.jpg",
    },
    {
      label: "Round 4 — Interview",
      result: "Top 10",
      note: "Completed the final round",
      certificate: "/certificates/hackathon-round-4.jpg",
    },
  ],
  summary:
    "Demonstrated teamwork, problem-solving and project execution in a competitive environment.",
} as const;

export type Certificate = {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly date: string;
  readonly image: string;
  readonly description: string;
};

export const certificates: readonly Certificate[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI Foundations Associate",
    issuer: "Oracle",
    date: "2026",
    image: "/certificates/AI.png",
    description:
      "AI agent development, LangChain, the OpenAI agent stack, Model Context Protocol (MCP), the OCI enterprise AI platform and Oracle AI Database.",
  },
  {
    id: "javascript",
    title: "JavaScript Certificate",
    issuer: "HackerRank",
    date: "2026",
    image: "/certificates/javascript.png",
    description:
      "JavaScript design patterns, memory management, the concurrency model and the event loop.",
  },
  {
    id: "frontend-developer",
    title: "Front-End Developer Certificate",
    issuer: "TestDome",
    date: "2026",
    image: "/certificates/HTML.png",
    description: "Front-end web development, responsive layout and web integration.",
  },
  {
    id: "web-developer",
    title: "Web Developer Certificate",
    issuer: "HR Calcy",
    date: "2026",
    image: "/certificates/web-developer.jpg",
    description:
      "Web application development, HTML/CSS/JS and full software workflows.",
  },
];

export const skillGroups = [
  { label: "Web", skills: ["HTML", "CSS", "Frontend integration"] },
  {
    label: "Backend",
    skills: ["Database setup", "Backend configuration", "Backend rebuild & debugging"],
  },
  { label: "Tools", skills: ["GitHub", "Firebase", "Figma", "AI development tools"] },
  {
    label: "Working style",
    skills: [
      "Prompt engineering",
      "UI/UX discussions",
      "Project planning",
      "End-to-end project management",
      "Team collaboration",
    ],
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Closing                                                                     */
/* -------------------------------------------------------------------------- */

export const closing = {
  heading: "Get in touch",
  /**
   * Restrained on purpose. Nothing here asserts availability or rates — that
   * would be a claim the resume does not support — so the closing only offers
   * the invitation and then gets out of the way.
   */
  line: "Have something in mind? Email is the quickest way to reach me.",
} as const;

/* -------------------------------------------------------------------------- */
/* Derived helpers                                                             */
/* -------------------------------------------------------------------------- */

/** Absolute URL for a site-relative path, used by metadata and JSON-LD. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectPath(slug: string): string {
  return `/work/${slug}`;
}

/** Projects other than `slug`, in the order they appear on the home page. */
export function otherProjects(slug: string): readonly Project[] {
  return projects.filter((project) => project.slug !== slug);
}

/** Canonical metadata description for a project page. */
export function projectDescription(project: Project): string {
  return `${project.summary} A project by Sankeerth Devella, ${identity.role.toLowerCase()} in ${identity.location.formatted}.`;
}
