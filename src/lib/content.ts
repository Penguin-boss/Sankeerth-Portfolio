import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  identity: {
    name: "Sankeerth Devella",
    role: "Co-Founder & Full-Stack Engineer",
    company: "WishCraft Studios",
    location: "Hyderabad, India",
    headline:
      "End-to-End Product Development · Frontend & Backend Architecture · System Optimization",
  },

  summary: [
    "At WishCraft Studios, as a Co-Founder, my primary focus is on end-to-end project management, prompt engineering, and resume review. Collaborating with teams, I contribute to designing and implementing projects from concept to completion, ensuring the delivery of practical digital solutions.",
    "My academic pursuit in Mathematics at Physics Wallah (PW) informs my structured and logical approach to problem-solving and execution. I am passionate about leveraging modern technology to create meaningful and impactful outcomes.",
  ],

  projects: [
    {
      index: "01",
      name: "VersaCareer AI",
      description:
        "Career guidance platform with resume analysis and personalized recommendations.",
    },
    {
      index: "02",
      name: "Desi-Drip",
      description:
        "Fashion-focused application for styling ideas and recommendations.",
    },
    {
      index: "03",
      name: "SettleX",
      description: "Expense-splitting application.",
    },
    {
      index: "04",
      name: "2D Games Collection",
      description: "Browser-based HTML/CSS games.",
    },
  ],

  hackathon: {
    name: "Enginow Hackathon",
    progression: ["Top 3 (Round 1)", "Round 2", "Round 3"],
    result: "Top 10 Finalist",
  },

  details: [
    { label: "Role", values: ["Co-Founder, WishCraft Studios"] },
    { label: "Since", values: ["June 2026"] },
    {
      label: "Focus",
      values: [
        "End-to-End Project Management",
        "Prompt Engineering",
        "Resume Review",
      ],
    },
    {
      label: "Education",
      values: ["Mathematics", "Physics Wallah (PW), 2025"],
    },
    { label: "Location", values: ["Hyderabad, India"] },
  ],

  contact: {
    heading: "Let's build something.",
    links: [
      {
        label: "Email",
        href: "mailto:sankeerthdevella@gmail.com",
        external: false,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sankeerth-devella-730314416",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/penguin-boss",
        external: true,
      },
    ],
    copyright: `© ${new Date().getFullYear()} Sankeerth Devella`,
  },
} as const;

export const siteMetadata = {
  title: "Sankeerth Devella — Co-Founder & Full-Stack Engineer",
  description:
    "Co-Founder & Full-Stack Engineer at WishCraft Studios. End-to-End Product Development, Frontend & Backend Architecture, System Optimization.",
  url: "https://sankeerthdevella.com",
} as const;
