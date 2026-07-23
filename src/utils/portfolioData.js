export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "engineering", label: "Engineering" },
  { id: "applications", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const APPLICATIONS_DATA = [
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
  {
    id: "hrms-app",
    name: "Human Resource Management System",
    description:
      "A comprehensive HRMS platform designed to streamline employee management, leave tracking, payroll, and performance monitoring. Built with the PERN stack for scalability and maintainability.",
    techStack: ["PostgreSQL", "Express.js", "React", "Node.js"],
    status: "In Development",
    url: "https://hrms.hemendrabasiya.com",
    github: "https://github.com/hemendrabasiya/hrms",
  },
];

export const JOURNEY_DATA = [
  {
    year: "2014",
    title: "Civil Engineering",
    description:
      "Graduated with a B.Tech. This built my core problem-solving framework and taught me the importance of structural integrity—principles I now apply to software architecture.",
    icon: "graduation",
  },
  {
    year: "2017",
    title: "Banking Operations",
    description:
      "Developed a deep understanding of financial workflows, strict compliance, and the absolute necessity of data accuracy.",
    icon: "briefcase",
  },
  {
    year: "2020",
    title: "Banking IT",
    description:
      "Transitioned into IT operations, learning the critical importance of high availability and production support in a regulated environment.",
    icon: "server",
  },
  {
    year: "2022",
    title: "Enterprise Infrastructure",
    description:
      "Managed core networks, Microsoft 365, vendor relationships, and ensured zero downtime for branch operations.",
    icon: "server",
  },
  {
    year: "2024",
    title: "Software Development",
    description:
      "Transitioned to full-stack engineering, leveraging my operational background to write maintainable code using the PERN stack.",
    icon: "code",
  },
  {
    year: "2025",
    title: "Enterprise HRMS",
    description:
      "Architected and developed a comprehensive HRMS platform, applying enterprise patterns to solve complex authentication, RBAC, and data management challenges.",
    icon: "check",
  },
  {
    year: "2025",
    title: "DevOps",
    description:
      "Embraced continuous integration and delivery. Implemented Docker and GitHub Actions to automate testing and deployments.",
    icon: "git-branch",
  },
  {
    year: "2026",
    title: "Secure Software Delivery",
    description:
      "Integrated 'Shift-Left' security into my DevOps lifecycle using Trivy, Semgrep, and OWASP ZAP as quality checkpoints.",
    icon: "shield-check",
  },
  {
    year: "Future",
    title: "Cloud & Platform Engineering (Learning)",
    description:
      "Currently expanding my expertise into AWS, Azure, and Kubernetes to build highly resilient, distributed systems.",
    icon: "cloud",
  },
];

export const SKILLS_DATA = [
  {
    category: "Frontend Engineering",
    description: "Building responsive, accessible, and performant user interfaces.",
    skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "HTML5/CSS3"],
  },
  {
    category: "Backend Engineering",
    description: "Designing robust RESTful APIs and secure server-side logic.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control"],
  },
  {
    category: "Database Engineering",
    description: "Architecting relational schemas and optimizing complex queries.",
    skills: ["PostgreSQL", "Prisma ORM", "Data Modeling", "Query Optimization"],
  },
  {
    category: "DevOps",
    description: "Automating deployments and standardizing environments.",
    skills: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD Pipelines", "Nginx", "Linux"],
  },
  {
    category: "Secure Development",
    description: "Integrating static analysis and vulnerability scanning into the SDLC.",
    skills: ["Trivy", "Semgrep", "OWASP ZAP", "ESLint", "SonarLint"],
  },
  {
    category: "Monitoring",
    description: "Ensuring high availability and observing production health.",
    skills: ["Prometheus", "Grafana", "Uptime Kuma", "Loki", "Dozzle"],
  },
  {
    category: "Enterprise Tools",
    description: "Managing corporate IT environments and productivity suites.",
    skills: ["Microsoft 365 Admin", "Active Directory", "ITIL Practices", "Vendor Management"],
  },
  {
    category: "AI Productivity",
    description: "Accelerating research, documentation, and prototyping.",
    skills: ["ChatGPT", "Gemini", "GitHub Copilot", "Google Antigravity"],
  },
  {
    category: "Cloud (Learning)",
    description: "Expanding into scalable cloud infrastructure and orchestration.",
    skills: ["AWS", "Azure", "Terraform", "Kubernetes"],
  },
];
