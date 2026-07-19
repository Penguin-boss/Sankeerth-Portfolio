// All content below is sourced directly from the uploaded resume and LinkedIn PDF.
// No invented facts, dates, or aspirations.

export const profile = {
  name: "Sankeerth Devella",
  tagline: "Student Builder — Frontend-Full Stack,Backend, Database Setup & Frontend Integration, AI-Assisted Development",
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
    "I'm a student and Full-Stack Developer passionate about building practical digital products that solve real-world problems. I enjoy turning ideas into polished, user-focused applications by combining thoughtful design with modern web development.",
    "As part of WishCraft, a student-led development team, I collaborate on real client projects, taking products from concept to deployment. My experience includes frontend development, backend architecture, database design, UI/UX planning, and AI-assisted development workflows across web platforms, productivity tools, and interactive applications.",
    "One of my most valuable experiences involved rebuilding the backend of a client project from scratch after development had stalled, integrating it with the existing frontend, refining the user experience, and helping deliver a fully functional product.",
    "I'm currently focused on developing scalable web applications, improving my full-stack development skills, and building software that delivers meaningful value through clean design, reliable engineering, and continuous learning.",
  ],
};

export type Project = {
  id: string;
  name: string;
  status: "Ongoing" | "Contributed" | "Individual";
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
    role: ["Frontend Developer", "Backend planning", "Database organization", "UI discussions", "AI-assisted workflows"],
    stack: ["Frontend Full Stack", "Backend Setup", "Database", "AI Dev Tools", "UI/UX Discussion"],
  },
  {
    id: "desi-drip",
    name: "Desi-Drip",
    status: "Individual",
    description:
      "Fashion-focused application designed to help users explore styling ideas and recommendations.",
    role: ["Project setup","Frontend Developer", "Backend configuration", "Testing"],
    stack: [ "Frontend Full Stack", "Backend Configuration", "Project Setup", "Testing"],
  },
  {
    id: "settlex",
    name: "SettleX",
    status: "Contributed",
    description: "Expense-splitting application with collaborative planning and backend setup.",
    role: ["Collaborative planning","Frontend Development", "Database organization", "Backend setup"],
    stack: ["Frontend Full Stack","Database", "Backend Setup", "Project Planning"],
  },
  {
    id: "2d-games",
    name: "2D Games Collection",
    status: "Individual",
    description:  "Browser-based games created using HTML and CSS to explore interactive web experiences.",
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
    { label: "Round 3 — Hackathon", result: "Qualified", note: "Advanced to next round" },
    { label: "Round 4 — Inteview", result: "Top 10", note:  "Completed final round" },
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
    title: "Backend & Database",
    period: "Ongoing",
    description:
      "Developing and organizing the backend and database structure for a application, collaborating on requirements and implementation.",
  },
  {
    id: "hackathon",
    title: "Enginow Hackathon — WishCraft Warriors",
    period: "Rounds 1–4",
    description:
      "Top 3 rank in the Aptitude round (Certificate of Excellence), qualified through the Submission round, and completed the Hackathon round as part of a team.",
  },
  {
    id: "projects",
    title: "Independent & Collaborative Projects",
    period: "VersaCareer AI · SettleX",
    description:
      "Contributed to frontend development, backend planning, database organization, UI/UX discussions, testing, and AI-assisted development workflows across multiple project builds.",
  },
];

export const education = {
  school: "Physics Wallah Vidyapeeth, Hyderabad",
  lines: [
    "JEE Main & Advanced Preparation (2025–2027)",
    "Telangana State Board (Intermediate)",
  ],
};
