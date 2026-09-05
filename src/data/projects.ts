export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "mediassist",
    number: "01",
    title: "MediAssist AI",
    category: "AI · Full Stack",

    description:
      "A full-stack healthcare platform combining patient workflows, medical records, AI-powered prediction, and doctor discovery.",

    problem:
      "Healthcare applications often separate patient workflows, medical information, and intelligent assistance across disconnected systems.",

    solution:
      "Built a full-stack platform with a React and TypeScript interface, Node.js and Express REST services, PostgreSQL persistence, and ML-powered features.",

    highlights: [
      "React + TypeScript frontend",
      "Node.js + Express REST API",
      "PostgreSQL data layer",
      "ML-based symptom prediction",
      "Doctor matching workflow",
      "Authentication and protected application flows",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Machine Learning",
    ],

    github:
      "https://github.com/AnushikaKapoor05/MediAssist",

    featured: true,
  },

  {
    id: "ijob",
    number: "02",
    title: "iJob AI",
    category: "AI · Mobile · Full Stack",

    description:
      "A deployed AI-powered recruitment platform and career copilot built for job seekers and recruiters across Web and Mobile.",

    problem:
      "Job seekers often rely on multiple disconnected tools for resume optimization, cover letters, interview preparation, career guidance, and job discovery, while recruiters need streamlined tools for managing hiring workflows.",

    solution:
      "Built and deployed a cross-platform Flutter application powered by Firebase and Google Gemini AI, combining AI career assistance, ATS resume analysis, recruitment workflows, and real-time job marketplace functionality.",

    highlights: [
      "Deployed Web + Mobile application",
      "Google Gemini AI integration",
      "Real-time ATS Resume Match Scoring",
      "1-Tap AI Cover Letter Generator",
      "STAR-Method Interview Simulator",
      "Conversational AI Career Coach",
      "AI-powered Job Description Writer",
      "Recruiter applicant tracking and filtering",
      "Real-time Cloud Firestore synchronization",
      "WhatsApp and Email contact integration",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Google Gemini AI",
      "Firebase",
      "Cloud Firestore",
      "Authentication",
    ],

    github:
      "https://github.com/AnushikaKapoor05/iJob",

    liveDemo:
      "https://ijob1205-1205.web.app/",

    featured: true,
  },
];