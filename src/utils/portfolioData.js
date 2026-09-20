export const PROFILE = {
  name: "Hemendra Basiya",
  title: "Full-Stack Developer & Banking IT Professional (FinTech)",
  shortTitle: "Full-Stack Developer",
  email: "hemendra.basia@gmail.com",
  phone: "+91 9429471070",
  location: "Vadodara, Gujarat, India",
  website: "https://hemendrabasiya.com",
  github: "https://github.com/hemendrabasiya",
  linkedin: "https://www.linkedin.com/in/hemendra-basiya-acbi-221793168",
  resumeUrl: "/Hemendra-Resume.pdf",
  summary:
    "Full-Stack Developer and Banking IT Professional with 4+ years of professional software development experience and 9+ years of banking-sector experience. Builds web applications with TypeScript, React, Node.js and PostgreSQL, with practical experience in Docker, DevSecOps, CI/CD and AI-assisted development.",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "applications", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "engineering", label: "Engineering" },
  { id: "contact", label: "Contact" },
];

/** Public status page (Uptime Kuma services dashboard). */
export const UPTIME_STATUS_URL = "https://status.hemendrabasiya.com/status/services";

export const EXPERIENCE_DATA = [
  {
    id: "digital-banking",
    role: "Digital Banking & Cyber Cell Operations",
    employer: "Gujarat Gramin Bank",
    location: "Vadodara, India",
    period: "June 2026 – Present",
    type: "employment",
    highlights: [
      "Monitor and support digital payment and settlement operations across UPI, IMPS, NEFT and RTGS, including transaction exceptions, reconciliation and issue resolution.",
      "Coordinate with technology, operations and external payment-system stakeholders on transaction processing, service availability and operational incidents.",
      "Support cyber-fraud monitoring and incident investigation, including transaction analysis, case reporting and coordination of preventive and corrective actions.",
      "Analyse transaction-related incidents and support implementation of security and operational controls.",
    ],
  },
  {
    id: "full-stack",
    role: "Full Stack Developer",
    employer: "Gujarat Gramin Bank",
    location: "Rajkot, India",
    period: "August 2022 – June 2026",
    type: "employment",
    highlights: [
      "Developed and maintained internal web-based business applications using React.js, TypeScript, Node.js, Express.js and PostgreSQL.",
      "Built REST APIs and frontend modules for business workflows, data management and operational processes.",
      "Implemented authentication, authorisation, role-based access control and session management.",
      "Worked on database design, API integration, debugging, performance improvements and resolution of application issues.",
    ],
  },
  {
    id: "office-assistant",
    role: "Office Assistant (Multipurpose)",
    employer: "Gujarat Gramin Bank",
    location: "Rajkot, India",
    period: "March 2017 – August 2022",
    type: "employment",
    highlights: [
      "Managed branch banking operations, cash handling and high-volume customer transactions with a focus on accuracy and operational controls.",
      "Developed practical understanding of financial transaction workflows, customer operations and banking processes, supporting a later transition into software and digital banking.",
    ],
  },
];

export const EDUCATION_DATA = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech.) — Civil Engineering",
    institution: "Pacific University",
    location: "Udaipur, Rajasthan, India",
    period: "2010 – 2014",
  },
];

export const CERTIFICATIONS_DATA = [
  {
    id: "acbi",
    name: "Associate Chartered Banker (ACBI)",
    issuer: "Chartered Banker Institute",
    date: "February 2025",
  },
  {
    id: "digital-banking",
    name: "Certificate in Digital Banking",
    issuer: "Indian Institute of Banking & Finance (IIBF)",
    date: "September 2023",
  },
  {
    id: "jaiib",
    name: "JAIIB",
    issuer: "Indian Institute of Banking & Finance (IIBF)",
    date: "January 2021",
  },
];

export const LANGUAGES_DATA = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Gujarati", level: "Native" },
  { name: "Hindi", level: "Professional Working Proficiency" },
];

/** Career narrative milestones — aligned to CV, not a substitute for Experience. */
export const JOURNEY_DATA = [
  {
    year: "2010 – 2014",
    title: "Civil Engineering Foundation",
    description:
      "Completed a B.Tech. in Civil Engineering at Pacific University — building structured problem-solving habits later applied to software design.",
    icon: "graduation",
  },
  {
    year: "2017 – 2022",
    title: "Banking Operations",
    description:
      "Joined Gujarat Gramin Bank as Office Assistant (Multipurpose). Gained hands-on exposure to branch operations, cash handling, customer transactions and financial workflows.",
    icon: "briefcase",
  },
  {
    year: "2022 – 2026",
    title: "Full-Stack Development",
    description:
      "Moved into a Full Stack Developer role at the same bank — building and maintaining internal web applications with React, TypeScript, Node.js, Express and PostgreSQL.",
    icon: "code",
  },
  {
    year: "2026",
    title: "Digital Banking & Cyber Cell",
    description:
      "Took on digital payment operations and cyber-cell responsibilities across UPI, IMPS, NEFT and RTGS — combining software experience with payments and security-domain work.",
    icon: "shield-check",
  },
  {
    year: "2026",
    title: "Portfolio Engineering",
    description:
      "Built and deployed a multi-tenant HRMS SaaS demonstration and related engineering labs — showcasing Docker, CI/CD, DevSecOps practices and AI-assisted development with Cursor.",
    icon: "git-branch",
  },
];

export const APPLICATIONS_DATA = [
  {
    id: "hrms-platform",
    name: "Multi-Tenant HRMS SaaS",
    description:
      "Production-deployed portfolio project demonstrating full-stack engineering: employee management, payroll and organisational workflows with tenant isolation, authentication/RBAC, Docker Compose and CI/CD on a European VPS.",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "CI/CD",
    ],
    badge: "FLAGSHIP PROJECT",
    status: "Live Demo",
    url: "https://hrms.hemendrabasiya.com",
    caseStudy: "/hrms-case-study",
    github: "https://github.com/hemendrabasiya/hrms",
  },
  {
    id: "services-lab",
    name: "TypeScript Services Lab",
    description:
      "Public engineering laboratory exploring reusable security patterns, multi-tenancy, authorisation, auditability, session security and API protection — a demonstration environment, not a commercial product.",
    techStack: ["TypeScript", "Next.js", "Spring Boot", "PostgreSQL", "Docker"],
    badge: "PUBLIC DEMO",
    status: "Public Demo",
    url: "https://labs.hemendrabasiya.com",
    caseStudy: "/services-lab",
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description:
      "This responsive personal portfolio — React, Vite and Tailwind CSS — presenting professional experience, projects and technical capabilities.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    status: "Live",
    url: "https://hemendrabasiya.com",
    github: "https://github.com/hemendrabasiya/portfolio",
  },
  {
    id: "hrms-access-control",
    name: "Multi-Tenancy & Access Control",
    description:
      "Capability demonstrated in the HRMS project: shared-database multi-tenancy with defence-in-depth isolation, catalog-driven RBAC and hybrid JWT + PostgreSQL sessions.",
    techStack: ["PostgreSQL", "Prisma", "JWT", "RBAC", "Redis"],
    status: "Capability",
    url: "https://hrms.hemendrabasiya.com",
    caseStudy: "/hrms-case-study",
  },
  {
    id: "hrms-tenant-routing",
    name: "Wildcard Tenant Routing",
    description:
      "Capability demonstrated in the HRMS project: subdomain-based tenant resolution with CORS allowlisting so each tenant reaches its own workspace without a separate deployment.",
    techStack: ["Nginx", "CORS", "React", "Express"],
    status: "Capability",
    url: "https://hrms.hemendrabasiya.com",
    caseStudy: "/hrms-case-study",
  },
  {
    id: "hrms-demo-ops",
    name: "Demo Ops & Snapshot Restore",
    description:
      "Capability demonstrated in the HRMS project: canonical demo snapshot tooling with pre-reset backups, rollback on failure and scheduled demo-environment reset support.",
    techStack: ["PostgreSQL", "Docker", "systemd", "Node.js"],
    status: "Capability",
    url: "https://hrms.hemendrabasiya.com",
    caseStudy: "/hrms-case-study",
  },
];

/** Risk-based CI tiers — portfolio copy must not claim “full suite on every PR”. */
export const CI_TIERS_DATA = [
  {
    id: "tier-0",
    name: "Tier 0 — Local",
    truth: "Fast feedback while coding",
    runs: "lint, typecheck, affected unit / verify:fast",
  },
  {
    id: "tier-1",
    name: "Tier 1 — PR gate",
    truth: "Merge blocker, not the entire test universe",
    runs: "lint ∥ typecheck ∥ critical auth/tenancy/authz smoke ∥ build",
  },
  {
    id: "tier-2",
    name: "Tier 2 — Main / release",
    truth: "Promotion confidence before deploy",
    runs: "broader suites, image publish/scan where configured",
  },
  {
    id: "tier-3",
    name: "Tier 3 — Nightly / deep",
    truth: "Depth without blocking every PR",
    runs: "slow/full suites, optional scanners",
  },
];

export const SKILLS_DATA = [
  {
    category: "Full-Stack Development",
    description: "End-to-end web application development with the PERN stack.",
    skills: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "Prisma",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    category: "DevOps / DevSecOps",
    description: "Containerisation, continuous delivery and secure delivery practices.",
    skills: [
      "Docker",
      "Docker Compose",
      "CI/CD",
      "GitHub Actions",
      "Nginx",
      "Linux",
      "Secure Coding",
      "Automation",
    ],
  },
  {
    category: "Banking / FinTech",
    description:
      "Domain exposure from banking operations and digital payment support — not claims of having built the underlying rails.",
    skills: [
      "Digital Banking",
      "Payment Operations",
      "UPI",
      "IMPS",
      "NEFT",
      "RTGS",
      "Transaction Reconciliation",
      "Banking Operations",
    ],
  },
  {
    category: "Security",
    description: "Application security controls and cybersecurity-related operational experience.",
    skills: [
      "Authentication",
      "Authorisation / RBAC",
      "Multi-Tenant Security",
      "Session Management",
      "Cyber-Fraud Monitoring",
      "Incident Investigation",
      "Secure Configuration",
    ],
  },
  {
    category: "Tools & Workflow",
    description: "Development tooling and AI-assisted engineering practices.",
    skills: [
      "Git",
      "GitHub",
      "Cursor",
      "AI-Assisted Development",
      "Human-in-the-Loop Review",
    ],
  },
  {
    category: "Project Capabilities",
    description:
      "Additional technologies demonstrated in portfolio projects (HRMS and Services Lab).",
    skills: [
      "Redis",
      "BullMQ",
      "JWT",
      "Zod",
      "Next.js",
      "Spring Boot",
      "Java",
      "GHCR",
      "Uptime Kuma",
    ],
  },
];

export const SERVICES_DATA = [
  {
    title: "Full-Stack Web Application Development",
    description:
      "Design and build web applications with React, TypeScript, Node.js, Express and PostgreSQL.",
  },
  {
    title: "API & Backend Development",
    description:
      "REST APIs, data models, authentication/authorisation and integration with business workflows.",
  },
  {
    title: "Secure Application Engineering",
    description:
      "RBAC, session management, tenant isolation patterns and secure coding practices.",
  },
  {
    title: "Docker & CI/CD",
    description:
      "Containerised deployments, GitHub Actions pipelines and environment-consistent delivery.",
  },
  {
    title: "FinTech / Banking Technology",
    description:
      "Software engineering informed by banking operations, digital payments and cyber-cell exposure.",
  },
];
