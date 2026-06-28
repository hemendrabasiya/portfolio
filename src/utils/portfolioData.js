export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "applications", label: "Applications" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const APPLICATIONS_DATA = [
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    description:
      "A comprehensive personal finance application to track daily expenses, visualize spending patterns, and manage budgets.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    status: "Live",
    url: "https://expense.hemendrabasiya.com",
    github: "https://github.com/hemendrabasiya/expense-tracker",
  },
  {
    id: "inventory-system",
    name: "Inventory System",
    description:
      "Enterprise-grade inventory management system featuring real-time stock tracking, automated reordering, and role-based access.",
    techStack: ["React", "Express", "PostgreSQL", "Docker"],
    status: "Live",
    url: "https://inventory.hemendrabasiya.com",
    github: "https://github.com/hemendrabasiya/inventory-system",
  },
  {
    id: "ai-chat",
    name: "AI Chat Interface",
    description:
      "Modern, responsive chat application integrating large language models for intelligent conversations and task assistance.",
    techStack: ["React", "OpenAI API", "Tailwind CSS"],
    status: "In Progress",
    url: "https://chat.hemendrabasiya.com",
    github: "https://github.com/hemendrabasiya/ai-chat",
  },
  {
    id: "bank-dashboard",
    name: "Bank Dashboard",
    description:
      "A secure, high-performance financial dashboard demonstrating core banking IT workflows and transaction monitoring.",
    techStack: ["React", "TypeScript", "Redux", "Chart.js"],
    status: "Live",
    url: "https://bank.hemendrabasiya.com",
    github: "https://github.com/hemendrabasiya/bank-dashboard",
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description:
      "The highly optimized, responsive personal portfolio you are currently viewing, built with modern frontend engineering practices.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    status: "Live",
    url: "https://hemendrabasiya.com",
    github: "https://github.com/hemendrabasiya/portfolio",
  },
  {
    id: "auth-service",
    name: "Authentication Service",
    description:
      "A centralized identity and access management service built with security-first DevSecOps principles.",
    techStack: ["Node.js", "JWT", "Redis", "Docker"],
    status: "Beta",
    url: "https://auth.hemendrabasiya.com",
    github: "https://github.com/hemendrabasiya/auth-service",
  },
];

export const JOURNEY_DATA = [
  {
    year: "2014",
    title: "B.Tech Civil Engineering",
    description:
      "Graduated with a foundation in analytical thinking and structural problem-solving.",
    icon: "graduation",
  },
  {
    year: "2017",
    title: "Joined Banking",
    description:
      "Transitioned into the banking sector, focusing on branch banking and customer's problem solving.",
    icon: "briefcase",
  },
  {
    year: "2022",
    title: "Assistant Manager",
    description:
      "Led IT operations, managed core banking infrastructure, and improved system reliability.",
    icon: "briefcase",
  },
  {
    year: "2025",
    title: "Started PERN Stack Development",
    description:
      "Shifted focus towards full-stack software development, mastering PostgreSQL, Express, React, and Node.js.",
    icon: "check",
  },
  {
    year: "2026",
    title: "DevSecOps & Cloud Engineering",
    description:
      "Expanded expertise into Docker, CI/CD pipelines, security integrations, and scalable deployments.",
    icon: "check",
  },
  {
    year: "Future",
    title: "Fintech (Target)",
    description:
      "Seeking a challenging role as a Software Developer / DevSecOps Engineer in Fintech.",
    icon: "map",
  },
];

export const SKILLS_DATA = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT)"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "Data Modeling", "Query Optimization"],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Docker",
      "Docker Compose",
      "GitHub Actions (CI/CD)",
      "Azure",
      "Hetzner VPS",
      "Linux Administration",
    ],
  },
  {
    category: "Monitoring",
    skills: ["Prometheus", "Grafana", "Uptime Kuma"],
  },
  {
    category: "Security (DevSecOps)",
    skills: [
      "Semgrep",
      "Trivy",
      "GitLeaks",
      "OWASP ZAP",
      "Secure Coding Practices",
    ],
  },
];
