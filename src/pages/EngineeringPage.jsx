import { SectionHeading } from "../components/ui/SectionHeading";
import { UPTIME_STATUS_URL } from "../utils/portfolioData";
import {
  GitPullRequest,
  Code,
  TestTube,
  ShieldCheck,
  Container,
  ServerCog,
  Activity,
  Database,
  Blocks,
  Layers,
  FileCode,
  CheckCircle2,
  GitBranch,
  RefreshCw,
  BarChart,
  Bot,
  Sparkles,
  Search,
  Zap,
} from "lucide-react";

const workflowSteps = [
  {
    icon: Search,
    title: "Research & Analysis",
    desc: "Understanding business goals, market constraints, and technical feasibility.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Exploration",
    desc: "Using agentic coding workflows to explore architectures, compare approaches, and accelerate design discussions—with human-led decisions.",
  },
  {
    icon: FileCode,
    title: "Architecture Design",
    desc: "Translating business needs into technical specifications and scalable system designs.",
  },
  {
    icon: Layers,
    title: "UI / UX Planning",
    desc: "Mapping out user flows and component hierarchies.",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Writing maintainable code with the PERN stack, augmented by AI-assisted implementation and human review.",
  },
  {
    icon: GitBranch,
    title: "Code Review",
    desc: "Feature branching, pull requests, and human-in-the-loop validation via Git and GitHub.",
  },
  {
    icon: TestTube,
    title: "Testing",
    desc: "Comprehensive local unit, integration, and E2E suites (Jest, Playwright) to protect domain logic and security boundaries.",
  },
  {
    icon: ShieldCheck,
    title: "Security Review",
    desc: "Application-level controls—RBAC, tenant isolation, Zod validation, rate limiting, and audit logging—plus AI-assisted threat analysis.",
  },
  {
    icon: Container,
    title: "Docker",
    desc: "Packaging applications with Docker Compose for environment consistency.",
  },
  {
    icon: GitPullRequest,
    title: "CI/CD",
    desc: "GitHub Actions automating build validation and deployment to a Hetzner VPS.",
  },
  {
    icon: ServerCog,
    title: "Deployment",
    desc: "Containerized delivery behind Nginx reverse proxies with production environment fail-closed checks.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    desc: "Uptime Kuma heartbeat monitoring, API health checks (database + Redis), and structured application logging.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "Iterating based on operational feedback, test gaps, and architecture hardening.",
  },
];

export const EngineeringPage = () => {
  return (
    <div className="py-12 md:py-20 animate-fade-in">
      <SectionHeading
        title="Engineering Philosophy & Workflow"
        subtitle="How I design, build, deploy, operate, and continuously improve enterprise software—with AI-augmented productivity and human-led judgment."
      />

      <div className="mb-24 mt-12">
        <div className="rounded-[2rem] border border-slate-200 glass bg-emerald-50/30 p-8 md:p-12">
          <h3 className="mb-8 text-3xl font-bold text-slate-900 font-heading text-center">
            The Enterprise Mindset
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2
                  className="mr-3 text-emerald-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-slate-700 leading-relaxed">
                  <strong>Software must solve business problems.</strong> Code is just a
                  tool; the goal is operational efficiency, revenue generation, or risk
                  mitigation.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2
                  className="mr-3 text-emerald-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-slate-700 leading-relaxed">
                  <strong>Maintainability over cleverness.</strong> Good software is easy
                  to read, easy to test, and easy for the next engineer to understand.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2
                  className="mr-3 text-emerald-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-slate-700 leading-relaxed">
                  <strong>Deployment is part of development.</strong> An application
                  isn&apos;t &ldquo;done&rdquo; when it works on localhost. It&apos;s done
                  when it&apos;s securely running in production.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2
                  className="mr-3 text-emerald-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-slate-700 leading-relaxed">
                  <strong>Automation improves reliability.</strong> Docker and GitHub
                  Actions reduce manual deployment error.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2
                  className="mr-3 text-emerald-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-slate-700 leading-relaxed">
                  <strong>Security by design.</strong> Tenant isolation, RBAC, validation,
                  rate limiting, and audit logging are built into the application—not bolted
                  on later.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2
                  className="mr-3 text-emerald-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-slate-700 leading-relaxed">
                  <strong>AI-augmented engineering.</strong> Agentic coding accelerates
                  delivery; architecture decisions and final validation remain human-led.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h3 className="mb-10 text-3xl font-bold text-slate-900 font-heading text-center">
          The Engineering Lifecycle
        </h3>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          I manage the complete Software Development Lifecycle (SDLC)—from architecture
          through production operations—with AI-assisted productivity and human-in-the-loop
          verification.
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>
          <div className="md:hidden absolute left-6 top-4 bottom-4 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-8 relative z-10">
            {workflowSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex items-center w-full">
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-emerald-100 text-emerald-600 shadow-sm z-20">
                    <step.icon size={20} />
                  </div>
                  <div
                    className={`w-full pl-16 md:pl-0 md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <h4 className="mb-2 text-xl font-bold text-slate-900 font-heading">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h3 className="mb-10 text-3xl font-bold text-slate-900 font-heading text-center">
          Enterprise Architecture Pattern
        </h3>
        <div className="rounded-[2rem] border border-slate-200 glass bg-slate-50 p-8 md:p-12 overflow-x-auto">
          <div className="min-w-[800px] flex flex-col items-center space-y-6">
            <div className="w-full max-w-3xl rounded-xl border-2 border-slate-200 bg-white p-6 text-center shadow-sm relative">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center justify-center">
                <Layers className="mr-2" size={20} /> Presentation Layer (Frontend)
              </h4>
              <p className="text-slate-600 text-sm">React, TypeScript, Tailwind CSS (SPA)</p>
            </div>

            <div className="h-8 w-1 bg-emerald-400"></div>

            <div className="w-full max-w-xl rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm relative">
              <h4 className="font-bold text-emerald-900 mb-2 flex items-center justify-center">
                <ServerCog className="mr-2" size={20} /> API Gateway / Reverse Proxy
              </h4>
              <p className="text-emerald-700 text-sm">
                Nginx / Nginx Proxy Manager (TLS, routing)
              </p>
            </div>

            <div className="h-8 w-1 bg-emerald-400"></div>

            <div className="w-full max-w-3xl flex gap-6">
              <div className="flex-1 rounded-xl border-2 border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center justify-center">
                  <Blocks className="mr-2" size={20} /> Core Backend API
                </h4>
                <p className="text-blue-700 text-sm">
                  Node.js, Express, REST, BullMQ workers
                </p>
              </div>
              <div className="flex-1 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 text-center shadow-sm">
                <h4 className="font-bold text-purple-900 mb-2 flex items-center justify-center">
                  <ShieldCheck className="mr-2" size={20} /> Auth & Authorization
                </h4>
                <p className="text-purple-700 text-sm">
                  JWT + PostgreSQL sessions, RBAC, HQ scoping
                </p>
              </div>
            </div>

            <div className="h-8 w-1 bg-blue-400"></div>

            <div className="w-full max-w-3xl flex gap-6">
              <div className="flex-1 rounded-xl border-2 border-slate-300 bg-slate-800 p-6 text-center shadow-sm">
                <h4 className="font-bold text-white mb-2 flex items-center justify-center">
                  <Database className="mr-2" size={20} /> PostgreSQL
                </h4>
                <p className="text-slate-300 text-sm">
                  Relational data, sessions, Prisma ORM
                </p>
              </div>
              <div className="flex-1 rounded-xl border-2 border-orange-200 bg-orange-50 p-6 text-center shadow-sm">
                <h4 className="font-bold text-orange-900 mb-2 flex items-center justify-center">
                  <Activity className="mr-2" size={20} /> Redis
                </h4>
                <p className="text-orange-700 text-sm">
                  BullMQ queues & rate limiting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-24 rounded-[2rem] border border-slate-200 bg-slate-900 text-white p-8 md:p-12 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Bot size={120} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h3 className="mb-6 flex items-center text-3xl font-bold font-heading">
            <Sparkles className="mr-4 text-emerald-400" size={32} /> AI-Augmented Engineering
          </h3>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            AI-augmented development workflow combining agentic coding, architecture review,
            automated test generation, debugging, and documentation—with human-led validation
            and engineering decisions.
          </p>
          <p className="text-emerald-400 font-medium text-lg border-l-4 border-emerald-500 pl-4 py-2">
            AI accelerates delivery. Architecture decisions, security choices, testing, and
            final implementation remain human-reviewed.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="flex items-center mb-6">
            <ShieldCheck className="text-emerald-500 mr-4" size={32} />
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Application Security
            </h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            Security is built into the application runtime and data model—not claimed via
            unverified CI scanners.
          </p>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">RBAC & tenant isolation:</span>{" "}
              Catalog-driven permissions and Prisma failsafe guards.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Validation:</span> Zod schemas
              on API payloads.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Rate limiting & Helmet:</span>{" "}
              Redis-backed limiters and security headers.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Audit logging:</span> Structured
              auth and action trails.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Local tooling:</span> ESLint and
              IDE quality checks during development.
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="flex items-center mb-6">
            <BarChart className="text-emerald-500 mr-4" size={32} />
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Monitoring & Operations
            </h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            Production visibility focused on what is actually deployed and verified.
          </p>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Uptime Kuma:</span> Active
              heartbeat monitoring (
              <a
                href={UPTIME_STATUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:underline"
              >
                View
              </a>
              ).
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Health checks:</span> API
              readiness for database and Redis.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Structured logging:</span>{" "}
              Request IDs and application logs for diagnosis.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Deploy pipeline:</span> Docker +
              GitHub Actions to Hetzner.
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200/60 glass bg-white/70 p-8 md:p-12">
        <h3 className="mb-10 text-3xl font-bold text-slate-900 font-heading text-center">
          How AI Improves My Engineering Workflow
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Architecture",
              text: "Faster architecture exploration and system design discussions.",
            },
            {
              title: "Implementation",
              text: "Agentic coding assistance for features, refactors, and boilerplate reduction.",
            },
            {
              title: "Testing",
              text: "AI-assisted test generation and coverage expansion, reviewed before merge.",
            },
            {
              title: "Debugging",
              text: "Root-cause analysis for complex application and deployment issues.",
            },
            {
              title: "Security Review",
              text: "Threat analysis support alongside human-led security decisions.",
            },
            {
              title: "Documentation",
              text: "Technical writing, ADRs, and operational runbook drafting.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
            >
              <Zap className="text-amber-500 mt-1 mr-4 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
