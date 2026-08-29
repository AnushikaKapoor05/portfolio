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
    title: "iJob",
    category: "Mobile · Full Stack",

    description:
      "A cross-platform job application platform designed around persistent application tracking and multi-role workflows.",

    problem:
      "Job seekers need a reliable way to track applications while different user roles require different workflows and access.",

    solution:
      "Built a Flutter application backed by Firebase Authentication and Firestore, with real-time synchronization and persistent application tracking.",

    highlights: [
      "Single Flutter codebase for Android and iOS",
      "Firebase Authentication",
      "Firestore real-time listeners",
      "Offline-aware data handling",
      "Persistent application tracking",
      "Multi-role authentication flows",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "Authentication",
    ],

    github:
      "https://github.com/AnushikaKapoor05/iJob",

    featured: true,
  },

  {
    id: "financial-intelligence",
    number: "03",
    title: "Financial Intelligence Dashboard",
    category: "Data · Analytics",

    description:
      "An analytics platform built during my Data Science internship to screen and compare 92 Nifty 100 companies.",

    problem:
      "Financial datasets can become difficult to compare when information is spread across multiple sources and analytical workflows.",

    solution:
      "Designed an SQL-based data pipeline and modular Streamlit dashboard covering financial screening, comparisons, trends, and valuation metrics.",

    highlights: [
      "Screening across 92 Nifty 100 companies",
      "SQL-based ETL pipeline",
      "Eight modular analytics components",
      "ROE and OPM analysis",
      "Debt-to-Equity analysis",
      "CAGR and valuation screening",
      "Interactive Plotly visualizations",
    ],

    technologies: [
      "Python",
      "Streamlit",
      "SQLite",
      "Pandas",
      "Plotly",
      "SQL",
    ],

    // No public GitHub repository
    // because this was an internship/internal project.

    featured: true,
  },
];