export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "engineering", label: "Engineering" },
  { id: "applications", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/** Public status page (Uptime Kuma services dashboard). */
export const UPTIME_STATUS_URL = "https://status.hemendrabasiya.com/status/services";

export const APPLICATIONS_DATA = [
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description:
      "The responsive personal portfolio you are currently viewing, built with React, Vite, and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    status: "Live",
    url: "https://hemendrabasiya.com",
    github: "https://github.com/hemendrabasiya/portfolio",
  },
  {
    id: "hrms-access-control",
    name: "Multi-Tenancy & Access Control",
    description:
      "Shared-database multi-tenancy with defense-in-depth isolation, catalog-driven RBAC, HQ-scoped authorization, and hybrid JWT + PostgreSQL sessions with rotating HttpOnly refresh tokens.",
    techStack: ["PostgreSQL", "Prisma", "JWT", "RBAC", "Redis"],
    status: "Live Demo",
    url: "https://hrms.hemendrabasiya.com",
    caseStudy: "/hrms-case-study",
  },
  {
    id: "hrms-platform",
    name: "HRMS Domain Platform",
    description:
      "Production-deployed HR demonstration covering organization hierarchy, employees, leave, attendance, payroll runs, and async payslip PDF generation via BullMQ.",
    techStack: ["PERN", "BullMQ", "Docker", "Zod"],
    status: "Live Demo",
    url: "https://hrms.hemendrabasiya.com",
    caseStudy: "/hrms-case-study",
  },
  {
    id: "hrms-tenant-routing",
    name: "Wildcard Tenant Routing",
    description:
      "Subdomain-based tenant resolution (*.domain) with CORS allowlisting via APP_DOMAIN, so each tenant reaches its own workspace login without a separate deployment per customer.",
    techStack: ["Nginx", "CORS", "React", "Express"],
    status: "Live Demo",
    url: "https://hrms.hemendrabasiya.com",
    caseStudy: "/hrms-case-study",
  },
  {
    id: "hrms-demo-ops",
    name: "Demo Ops & Snapshot Restore",
    description:
      "Canonical demo snapshot tooling with pre-reset database and file backups, rollback on failure, post-restore verification, and scheduled demo-environment reset support.",
    techStack: ["PostgreSQL", "Docker", "systemd", "Node.js"],
    status: "Live Demo",
    url: "https://hrms.hemendrabasiya.com",
    caseStudy: "/hrms-case-study",
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
      "Architected and developed a multi-tenant HRMS platform with RBAC, HQ-scoped authorization, payroll, leave, and attendance—deployed as a live demonstration environment.",
    icon: "check",
  },
  {
    year: "2025",
    title: "DevOps",
    description:
      "Embraced continuous delivery. Implemented Docker Compose and GitHub Actions to automate builds and deployments to a Hetzner VPS.",
    icon: "git-branch",
  },
  {
    year: "2026",
    title: "Application Security & Operations",
    description:
      "Strengthened application-level security controls—RBAC, tenant isolation, rate limiting, audit logging, environment fail-closed validation—and production uptime monitoring.",
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
    skills: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Vite", "HTML5/CSS3"],
  },
  {
    category: "Backend Engineering",
    description: "Designing robust RESTful APIs and secure server-side logic.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control", "Zod Validation"],
  },
  {
    category: "Database Engineering",
    description: "Architecting relational schemas and optimizing complex queries.",
    skills: ["PostgreSQL", "Prisma ORM", "Data Modeling", "Multi-tenancy", "Query Optimization"],
  },
  {
    category: "DevOps",
    description: "Automating deployments and standardizing environments.",
    skills: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD Pipelines", "Nginx", "Linux"],
  },
  {
    category: "Secure Development",
    description: "Application-level security controls and defensive engineering practices.",
    skills: ["RBAC", "Tenant Isolation", "Helmet", "Rate Limiting", "Audit Logging", "ESLint", "Zod"],
  },
  {
    category: "Monitoring",
    description: "Observing production health and operational readiness.",
    skills: ["Uptime Kuma", "Health Checks", "Structured Logging", "Request Tracing"],
  },
  {
    category: "Enterprise Tools",
    description: "Managing corporate IT environments and productivity suites.",
    skills: ["Microsoft 365 Admin", "Active Directory", "ITIL Practices", "Vendor Management"],
  },
  {
    category: "AI-Augmented Engineering",
    description:
      "Using AI as an engineering productivity tool across architecture, implementation, testing, debugging, and documentation—with human-led validation.",
    skills: [
      "Agentic Coding Workflows",
      "AI-Assisted Architecture",
      "AI-Assisted Implementation",
      "AI-Assisted Testing",
      "AI-Assisted Debugging",
      "Human-in-the-Loop Review",
    ],
  },
  {
    category: "Cloud (Learning)",
    description: "Expanding into scalable cloud infrastructure and orchestration.",
    skills: ["AWS", "Azure", "Terraform", "Kubernetes"],
  },
];
