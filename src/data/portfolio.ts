// All content below is sourced directly from the uploaded resume and LinkedIn PDF.
// No invented facts, dates, or aspirations.

export const profile = {
  name: "Sankeerth Devella",
  tagline:
    "Student Builder — Frontend, Backend, Database Setup & Frontend Integration, AI-Assisted Development",
  location: "Hyderabad, Telangana, India",
  email: "sankeerthdevella@gmail.com",
  github: "https://github.com/Penguin-boss",
  githubHandle: "github.com/Penguin-boss",
  linkedin:
    "https://www.linkedin.com/in/sankeerthdevella-730314416",
  linkedinHandle:
    "linkedin.com/in/sankeerthdevella-730314416",
  resumeFile: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm a student and Frontend Developer passionate about building practical digital products that solve real-world problems. I enjoy turning ideas into polished, user-focused applications by combining thoughtful design with modern web development.",

    "As part of WishCraft Studios, a student-led development team, I collaborate on real client projects, taking products from concept to deployment. My experience includes frontend development, backend architecture, database design, UI/UX planning, and AI-assisted development workflows across web platforms, productivity tools, and interactive applications.",

    "One of my most valuable experiences involved rebuilding the backend of a client project from scratch after development had stalled, integrating it with the existing frontend, refining the user experience, and helping deliver a fully functional product.",

    "I'm currently focused on developing scalable web applications, improving my full-stack development skills, and building software that delivers meaningful value through clean design, reliable engineering, and continuous learning.",
  ],
};

export type Project = {
  id: string;
  name: string;
  status: "Ongoing" | "Contributed" | "Individual";

  /*
   * Project preview image.
   *
   * Put the actual screenshots inside:
   *
   * public/projects/
   *
   * The Project component will automatically use
   * the image when it exists.
   */
  image: string;

  isMobile?: boolean;

  description: string;

  role: string[];

  stack: string[];

  github?: string;

  live?: string;
};

export const projects: Project[] = [
  {
    id: "versacareer-ai",

    name: "VersaCareer AI",

    status: "Ongoing",

    image: "/projects/versacareer-ai.jpg",

    description:
      "Career guidance platform with AI resume analysis, skill mapping, and personalized career recommendations.",

    role: [
      "Frontend Developer",
      "Backend planning",
      "Database organization",
      "UI discussions",
      "AI-assisted workflows",
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Dev Tools",
      "Database Setup",
    ],

    github:
      "https://github.com/Cha129/VersaCareerAI",

    live:
      "https://versacareer.netlify.app",
  },

  {
    id: "desi-drip",

    name: "Desi-Drip",

    status: "Ongoing",

    image: "/projects/desi-drip.jpg",

    description:
      "Fashion-focused web application designed to help users explore ethnic styling ideas and recommendations.",

    role: [
      "Project setup",
      "Frontend Developer",
      "Backend configuration",
      "Testing",
    ],

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Backend Configuration",
      "Testing",
    ],

    github:
      "https://github.com/Penguin-boss/Desi-Drip",

    live:
      "https://desi-drip.vercel.app",
  },

  {
    id: "shiva-kanaka",

    name: "Shiva Kanaka Portfolio",

    status: "Individual",

    image: "/projects/shiva-kanaka.jpg",

    description:
      "Personal portfolio website built for Shiva Kanaka featuring responsive layout, smooth interactions, and modern design.",

    role: [
      "Frontend Developer",
      "UI/UX Design",
      "Deployment",
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],

    github:
      "https://github.com/Penguin-boss/Shiva-kanaka",

    live:
      "https://kanakashiva.vercel.app",
  },

  {
    id: "settlex",

    name: "SettleX",

    status: "Contributed",

    image: "/projects/settlex.jpg",

    isMobile: true,

    description:
      "Expense-splitting mobile application with collaborative planning, bill tracking, and backend setup.",

    role: [
      "Collaborative planning",
      "Frontend Development",
      "Database organization",
      "Backend setup",
    ],

    stack: [
      "Mobile App",
      "React Native",
      "Database Setup",
      "Backend Setup",
    ],

    github:
      "https://github.com/Penguin-boss/SettleX",
  },

  {
    id: "2d-games",

    name: "2D Games Collection",

    status: "Individual",

    image: "/projects/2d-games.jpg",

    description:
      "Browser-based interactive games created using HTML and CSS to explore web animation and game logic.",

    role: [
      "Game design",
      "Frontend build",
    ],

    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],

    github:
      "https://github.com/Penguin-boss/2D-Games",
  },
];

export const hackathon = {
  name: "Enginow Hackathon",

  team: "WishCraft Studios",

  rounds: [
    {
      label: "Round 1 — Aptitude",
      result: "Top 3 Rank",
      note: "Certificate of Excellence",
    },

    {
      label: "Round 2 — Submission",
      result: "Qualified",
      note: "Advanced to next round",
    },

    {
      label: "Round 3 — Hackathon",
      result: "Qualified",
      note: "Advanced to next round",
    },

    {
      label: "Round 4 — Interview",
      result: "Top 10",
      note: "Completed final round",
    },
  ],

  summary:
    "Demonstrated teamwork, problem-solving, and project execution skills in a competitive environment.",
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  category: "Professional" | "Hackathon";
  date: string;
  file: string;
  previewImage: string;
  description: string;
};

export const certificates: Certificate[] = [
  {
    id: "frontend-dev",
    title: "Front-End Developer Certificate",
    issuer: "TestDome",
    category: "Professional",
    date: "2026",
    file: "/Devella_Sankeerth_Front-End_Certificate.pdf",
    previewImage:
      "/certificates/HTML.png",
    description:
      "Certification in Front-End Web Development, responsive layout, and web integration.",
  },

    {
    id: "javascript",
    title: "JavaScript Certificate",
    issuer: "HackerRank",
    category: "Professional",
    date: "2026",
    file: "/Devella_Sankeerth_JavaScript_Certificate.pdf",
    previewImage:
      "/certificates/javascript.png",
    description:
      "Certification in JavaScript, It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others.",
  },
  
  {
    id: "web-dev",
    title: "Web Developer Certificate",
    issuer: "Devella Sankeerth",
    category: "Professional",
    date: "2026",
    file: "/Devella_Sankeerth_Web-developer_Certificate.pdf",
    previewImage:
      "/certificates/web-developer.jpg",
    description:
      "Certification in web application development, HTML/CSS/JS, and full software workflows.",
  },

  {
    id: "hackathon-r1",
    title: "Enginow Hackathon — Round 1 (Top 3 Rank)",
    issuer: "Enginow / WishCraft Studios",
    category: "Hackathon",
    date: "2026",
    file: "/hackathon_round-1.pdf",
    previewImage:
      "/certificates/hackathon-round-1.jpg",
    description:
      "Certificate of Excellence for scoring in the Top 3 in Aptitude & Core Concepts.",
  },

  {
    id: "hackathon-r2",
    title: "Enginow Hackathon — Round 2 Qualification",
    issuer: "Enginow / WishCraft Studios",
    category: "Hackathon",
    date: "2026",
    file: "/hackathon_round-2.pdf",
    previewImage:
      "/certificates/hackathon-round-2.jpg",
    description:
      "Qualification certificate for advancing through the project submission phase.",
  },

  {
    id: "hackathon-r3",
    title: "Enginow Hackathon — Round 3 Qualification",
    issuer: "Enginow / WishCraft Studios",
    category: "Hackathon",
    date: "2026",
    file: "/hackathon_round-3.pdf",
    previewImage:
      "/certificates/hackathon-round-3.jpg",
    description:
      "Certificate for successfully completing the live hackathon building phase.",
  },

  {
    id: "hackathon-r4",
    title: "Enginow Hackathon — Round 4 (Top 10 Finalist)",
    issuer: "Enginow / WishCraft Studios",
    category: "Hackathon",
    date: "2026",
    file: "/hackathon_round-4.pdf",
    previewImage:
      "/certificates/hackathon-round-4.jpg",
    description:
      "Finalist certificate for finishing in the Top 10 overall in the final round.",
  },
];

export const skillGroups = [
  {
    label: "Web",

    skills: [
      "HTML",
      "CSS",
      "Frontend Integration",
    ],
  },

  {
    label: "Backend",

    skills: [
      "Database Setup",
      "Backend Configuration",
      "Backend Rebuild & Debugging",
    ],
  },

  {
    label: "Tools",

    skills: [
      "GitHub",
      "Firebase",
      "Figma",
      "AI Development Tools",
    ],
  },

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
      "Developing and organizing the backend and database structure for applications, collaborating on requirements and implementation.",
  },

  {
    id: "hackathon",

    title:
      "Enginow Hackathon — WishCraft Studios",

    period: "Rounds 1–4",

    description:
      "Top 3 rank in the Aptitude round (Certificate of Excellence), qualified through the Submission round, and completed the Hackathon round as part of a team.",
  },

  {
    id: "projects",

    title:
      "Independent & Collaborative Projects",

    period:
      "VersaCareer AI · Desi-Drip · SettleX · Shiva Kanaka",

    description:
      "Contributed to frontend development, backend planning, database organization, UI/UX discussions, testing, and AI-assisted development workflows across multiple project builds.",
  },
];

export const education = {
  school:
    "Physics Wallah Vidyapeeth, Hyderabad",

  lines: [
    "JEE Main & Advanced Preparation (2025–2027)",
    "Telangana State Board (Intermediate)",
  ],
};
