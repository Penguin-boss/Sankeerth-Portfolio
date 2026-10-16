/**
 * CONTENT — the single source of truth for the whole site.
 *
 * Everything the site renders is declared here: the identity block, the
 * navigation, the projects (which also drive /work/[slug], the sitemap and the
 * per-project metadata), the background material (experience, education,
 * hackathon, certifications, skills) and the closing block.
 *
 * Sources, in order of authority:
 *   1. Sankeerth_Devella_Resume.pdf — the current resume, which is what the
 *      résumé download serves and what the identity block is taken from.
 *   2. The earlier content file (src/data/portfolio.ts, from the previous
 *      resume and LinkedIn export), kept for anything the current resume does
 *      not mention — education, the hackathon round certificates and the
 *      certificate images.
 *
 * Rules this file follows:
 *   - No invented facts. Links, stacks and dates are only listed when they were
 *     given; where one is missing it is left out and listed in the handover
 *     notes rather than guessed at.
 */

export type Project = {
  /** URL segment: /work/<slug> */
  readonly slug: string;
  readonly name: string;
  readonly status: "Ongoing" | "Contributed" | "Individual";
  /** Sentence for the work list and the project page lede. */
  readonly summary: string;
  /** What he actually did, in the resume's own terms. */
  readonly role: readonly string[];
  /** Empty when the tooling for a project is not stated anywhere. */
  readonly stack: readonly string[];
  /** `applicationCategory` for the project's structured data. */
  readonly category: "WebApplication" | "MobileApplication";
  /** Sits full width above the grid, as the studio the rest belongs to. */
  readonly featured?: boolean;
  readonly live?: string;
  readonly github?: string;
};

/* -------------------------------------------------------------------------- */
/* Identity                                                                    */
/* -------------------------------------------------------------------------- */

export const siteUrl = "https://devellasankeerth.vercel.app";

export const identity = {
  name: "Sankeerth Devella",
  /** Exactly as the resume states it. */
  role: "Co-Founder & Full-Stack Engineer",
  company: "WishCraft Studios",
  /** The resume's professional summary, condensed to one line. */
  focus:
    "Building production-ready web and mobile products end to end — architecture and backend systems through frontend UI, SEO and security — with AI-assisted development workflows.",
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
  resume: "/resume.pdf",
} as const;

/**
 * The one title and one meta description, used by the home page, the Open Graph
 * tags, the structured data and the web manifest. Declared here so they cannot
 * drift apart.
 */
export const siteTitle = `${identity.name} — ${identity.role}`;

export const siteDescription = `${identity.name} is co-founder and full-stack engineer at ${identity.company}, based in ${identity.location.formatted}. ${identity.focus}`;

/** Keywords kept to what a reader would actually type. */
export const keywords = [
  "Sankeerth Devella",
  "Co-Founder WishCraft Studios",
  "full-stack engineer Hyderabad",
  "React developer",
  "TypeScript",
  "VersaCareer",
  "Desi Drip",
  "SettleX",
  "Collivio",
  "WishCraft Studios",
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
  /* Two sentences, both of them things the resume says. */
  intro:
    "I co-founded WishCraft Studios, where I build production-ready web and mobile products end to end — architecture and backend systems through frontend UI, SEO and application security — working in React, TypeScript and Tailwind CSS with AI-assisted development workflows.",
} as const;

/* -------------------------------------------------------------------------- */
/* Profile                                                                     */
/* -------------------------------------------------------------------------- */

export const profile = {
  paragraphs: [
    "I'm a co-founder and full-stack engineer. Most of my work is taking a product from architecture and backend systems all the way to the frontend people actually use — and then keeping it honest: SEO, security, and code that holds up after launch.",
    "I lead cross-functional collaboration on client and internal products at WishCraft Studios, owning project management and system architecture alongside implementation, and I use AI-assisted workflows to hold delivery speed without dropping code quality.",
  ],
  /** One piece of work stated plainly, taken from the resume. */
  highlight: {
    text: "On VersaCareer I rebuilt the backend and redesigned the frontend, then implemented the SEO improvements and hardened the application's security.",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Projects — every one of these is listed on the resume                       */
/* -------------------------------------------------------------------------- */

export const projects: readonly Project[] = [
  {
    slug: "wishcraft-studios",
    name: "WishCraft Studios",
    status: "Ongoing",
    featured: true,
    summary:
      "The studio's own web platform — architecture, frontend and backend — plus the client and internal products built on top of it.",
    role: ["System architecture", "Frontend development", "Backend development"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "WebApplication",
    github: "https://github.com/Penguin-boss/wishcraft-studios",
    live: "https://wishcraftstudios.vercel.app",
  },
  {
    slug: "versacareer",
    name: "VersaCareer",
    status: "Ongoing",
    summary:
      "AI-driven career guidance platform with resume analysis and personalised recommendations.",
    role: [
      "Backend rebuild",
      "Frontend redesign",
      "SEO improvements",
      "Application security",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Database setup", "AI dev tools"],
    category: "WebApplication",
    github: "https://github.com/penguin-boss/VersaCareer",
    live: "https://versacareer.vercel.app",
  },
  {
    slug: "versacareer-ai-mobile",
    name: "VersaCareer AI — Mobile App",
    status: "Ongoing",
    summary:
      "Complete mobile app prototype built from concept through functional UI, extending the VersaCareer AI product line.",
    role: ["Concept", "UI design", "Mobile app prototype"],
    /* No stack or repository URL was given for this one. */
    stack: [],
    category: "MobileApplication",
  },
  {
    slug: "desi-drip",
    name: "Desi Drip",
    status: "Ongoing",
    summary:
      "Fashion-focused application for styling ideas and outfit recommendations.",
    role: ["Project setup", "Frontend development", "Backend configuration", "Testing"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Backend configuration", "Testing"],
    category: "WebApplication",
    github: "https://github.com/Penguin-boss/Desi-Drip",
    live: "https://desi-drip.vercel.app",
  },
  {
    slug: "settlex",
    name: "SettleX",
    status: "Contributed",
    summary:
      "Expense-splitting mobile app; built the frontend and contributed to product planning and database organisation.",
    role: ["Frontend development", "Product planning", "Database organisation"],
    stack: ["React Native", "Mobile app", "Database setup"],
    category: "MobileApplication",
    github: "https://github.com/Penguin-boss/SettleX",
  },
  {
    slug: "collivio",
    name: "Collivio",
    status: "Contributed",
    summary:
      "A client website where I built the working backend as part of a delivery team.",
    role: ["Backend development"],
    /* No stack or repository URL was given for this one. */
    stack: [],
    category: "WebApplication",
  },
  {
    slug: "sankeerth-portfolio",
    name: "Sankeerth Portfolio",
    status: "Individual",
    summary:
      "This site — designed and built to show the projects, skills and experience above.",
    role: ["Design", "Frontend development", "SEO", "Content"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "WebApplication",
    github: "https://github.com/Penguin-boss/Sankeerth-Portfolio",
    live: siteUrl,
  },
];

/* -------------------------------------------------------------------------- */
/* Background — experience, education, proof, skills                           */
/* -------------------------------------------------------------------------- */

export type Experience = {
  readonly title: string;
  readonly honour?: string;
  readonly period: string;
  readonly description: string;
};

/** Straight from the resume's EXPERIENCE section, in its order. */
export const experience: readonly Experience[] = [
  {
    title: "WishCraft Studios",
    honour: "Co-Founder",
    period: "June 2026 – Present · Hyderabad",
    description:
      "Co-founded WishCraft Studios to engineer production-ready web platforms and software ecosystems for global brands. Own end-to-end project management, system architecture and implementation across client and internal products, and lead prompt engineering and AI-assisted development workflows.",
  },
  {
    title: "Prajñā Foundation",
    honour: "Managing Partner",
    period: "July 2026 – Present · Telangana",
    description:
      "Manage business partner relationships and strategic partner coordination for the foundation's initiatives.",
  },
];

/**
 * The resume does not have an education section. This is kept from the earlier
 * verified content rather than dropped, and is flagged in the handover notes.
 */
export const education = {
  school: "Physics Wallah Vidyapeeth, Hyderabad",
  lines: [
    "JEE Main & Advanced preparation (2025–2027)",
    "Telangana State Board (Intermediate)",
  ],
} as const;

/**
 * The four hackathon rounds, stated once. The certificates hang off the round
 * they belong to instead of being listed a second time.
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
  /** Omitted where the certificate image is not available. */
  readonly image?: string;
  readonly description: string;
};

/** The resume's CERTIFICATIONS list, in its order. */
export const certificates: readonly Certificate[] = [
  {
    id: "agentic-ai",
    title: "Oracle Certified Foundations Associate (Agentic AI)",
    issuer: "Oracle University",
    date: "2026",
    image: "/certificates/AI.png",
    description:
      "AI agent development, LangChain, the OpenAI agent stack, Model Context Protocol (MCP), the OCI enterprise AI platform and Oracle AI Database.",
  },
  {
    id: "javascript",
    title: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "2026",
    image: "/certificates/javascript.png",
    description:
      "JavaScript design patterns, memory management, the concurrency model and the event loop.",
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer Certificate",
    issuer: "TestDome",
    date: "2026",
    image: "/certificates/HTML.png",
    description: "Front-end web development, responsive layout and web integration.",
  },
  {
    id: "enginow-participation",
    title: "Enginow Hackathon — Participation Certificate",
    issuer: "Enginow",
    date: "2026",
    description:
      "Participation across the Enginow Hackathon rounds; advanced to the Top 10 finalist stage.",
  },
];

/** The resume's TECHNICAL SKILLS section, in its own groupings. */
export const skillGroups = [
  { label: "Languages", skills: ["HTML", "CSS", "JavaScript"] },
  {
    label: "Frameworks & styling",
    skills: ["React", "Vite", "TypeScript", "Tailwind CSS", "AI-assisted development"],
  },
  {
    label: "Tools & platforms",
    skills: ["GitHub", "Firebase", "Figma", "AI development tools"],
  },
  {
    label: "Other",
    skills: [
      "Prompt engineering",
      "UI/UX discussions",
      "Project planning",
      "End-to-end project management",
      "Team collaboration",
      "Business partner support",
      "Strategic partner relationship management",
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
  return `${project.summary} A project by ${identity.name}, ${identity.role.toLowerCase()} in ${identity.location.formatted}.`;
}
