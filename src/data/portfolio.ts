// All content below is sourced directly from the uploaded resume and LinkedIn PDF.
// No invented facts, dates, or aspirations.

export const profile = {
  name: "Sankeerth Devella",
  tagline: "Student Builder — Backend, Database Setup & Frontend Integration, AI-Assisted Development",
  location: "Hyderabad, Telangana, India",
  email: "sankeerthdevella@gmail.com",
  github: "https://github.com/Penguin-boss",
  githubHandle: "github.com/Penguin-boss",
  linkedin: "https://www.linkedin.com/in/sankeerthdevella-730314416",
  linkedinHandle: "linkedin.com/in/sankeerthdevella-730314416",
  resumeFile: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "Student builder focused on creating practical digital products through real-world projects, hackathons, and collaborative development — part of a small student team, WishCraft, that takes on real client web projects together.",
    "Experience spans web development with HTML and CSS, backend and database setup, UI/UX planning, and AI-assisted development workflows — taking ideas from concept to implementation across career-tech platforms, fashion applications, expense management tools, and browser-based games.",
    "On one client project, stepped in to rebuild the backend from scratch after an initial attempt stalled, connecting it to the existing frontend and getting the product working end to end — including UI/UX refinements and testing.",
    "Currently developing and organizing the backend and database structure for an ongoing client-facing application, collaborating on requirements and implementation.",
  ],
};

export type Project = {
  id: string;
  name: string;
  status: "Ongoing" | "Contributed";
  description: string;
  role: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "versacareer-ai",
    name: "VersaCareer AI",
    status: "Contributed",
    description:
      "Career guidance platform with resume analysis and personalized recommendations.",
    role: ["Backend planning", "Database organization", "UI discussions", "AI-assisted workflows"],
    stack: ["Backend Setup", "Database", "AI Dev Tools", "UI/UX Discussion"],
  },
  {
    id: "desi-drip",
    name: "Desi-Drip",
    status: "Contributed",
    description:
      "Fashion-focused application designed to help users explore styling ideas and recommendations.",
    role: ["Project setup", "Backend configuration", "Testing"],
    stack: ["Backend Configuration", "Project Setup", "Testing"],
  },
  {
    id: "settlex-v2",
    name: "SettleX V2",
    status: "Contributed",
    description: "Expense-splitting application with collaborative planning and backend setup.",
    role: ["Collaborative planning", "Database organization", "Backend setup"],
    stack: ["Database", "Backend Setup", "Project Planning"],
  },
  {
    id: "client-backend",
    name: "Client Backend Project",
    status: "Ongoing",
    description:
      "Developing and organizing the backend and database structure for a client-facing application while collaborating on requirements and implementation.",
    role: ["Backend architecture", "Database organization", "Requirements collaboration"],
    stack: ["Backend Setup", "Database", "Client Collaboration"],
  },
  {
    id: "client-backend-rescue",
    name: "Client Website — Backend Rebuild",
    status: "Contributed",
    description:
      "Rebuilt a client project's backend from scratch after an initial attempt stalled, then connected it to the existing frontend and got the product working end to end.",
    role: ["Backend rebuild", "Frontend integration", "UI/UX refinement", "Testing"],
    stack: ["Backend Setup", "Database", "Frontend Integration", "Testing"],
  },
  {
    id: "2d-games",
    name: "2D Games Collection",
    status: "Contributed",
    description: "Browser-based games created using HTML and CSS to explore interactive web experiences.",
    role: ["Game design", "Front-end build"],
    stack: ["HTML", "CSS"],
  },
];

export const hackathon = {
  name: "Enginow Hackathon",
  team: "WishCraft Warriors",
  rounds: [
    { label: "Round 1 — Aptitude", result: "Top 3 Rank", note: "Certificate of Excellence" },
    { label: "Round 2 — Submission", result: "Qualified", note: "Advanced to next round" },
    { label: "Round 3 — Hackathon", result: "Participated", note: "Completed final round" },
  ],
  summary:
    "Demonstrated teamwork, problem-solving, and project execution skills in a competitive environment.",
};

export const skillGroups = [
  { label: "Web", skills: ["HTML", "CSS", "Frontend Integration"] },
  { label: "Backend", skills: ["Database Setup", "Backend Configuration", "Backend Rebuild & Debugging"] },
  { label: "Tools", skills: ["GitHub", "Firebase", "Figma", "AI Development Tools"] },
  {
    label: "Other",
    skills: [
      "Prompt Engineering",
      "UI/UX Discussions",
      "Project Planning",
      "End-to-End Project Management",
      "Team Collaboration",
    ],
  },
];

export const experience = [
  {
    id: "client-backend",
    title: "Backend & Database — Client Project",
    period: "Ongoing",
    description:
      "Developing and organizing the backend and database structure for a client-facing application, collaborating on requirements and implementation.",
  },
  {
    id: "client-backend-rescue",
    title: "Backend Rebuild — Client Website",
    period: "WishCraft team project",
    description:
      "Stepped in to rebuild a client project's backend after an initial attempt stalled, connected it to the existing frontend, and handled UI/UX refinements and testing to get the product working end to end.",
  },
  {
    id: "hackathon",
    title: "Enginow Hackathon — WishCraft Warriors",
    period: "Rounds 1–3",
    description:
      "Top 3 rank in the Aptitude round (Certificate of Excellence), qualified through the Submission round, and completed the Hackathon round as part of a team.",
  },
  {
    id: "projects",
    title: "Independent & Collaborative Projects",
    period: "VersaCareer AI · Desi-Drip · SettleX V2 · 2D Games",
    description:
      "Contributed to backend planning, database organization, UI/UX discussions, testing, and AI-assisted development workflows across multiple project builds.",
  },
];

export const education = {
  school: "Physics Wallah Vidyapeeth, Hyderabad",
  lines: [
    "JEE Main & Advanced Preparation (2025–2027)",
    "Telangana State Board (Intermediate)",
  ],
};
