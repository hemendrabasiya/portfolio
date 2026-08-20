import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { UPTIME_STATUS_URL } from "../utils/portfolioData";
import {
  CheckCircle2,
  ShieldAlert,
  Cpu,
  Network,
  Layers,
  GitBranch,
  Terminal,
  ExternalLink,
  Activity,
  Bot,
  Sparkles,
} from "lucide-react";

const Section = ({ title, icon: Icon, children }) => (
  <div className="mb-16">
    <h3 className="mb-6 flex items-center text-2xl font-bold text-slate-900 font-heading border-b border-slate-200 pb-4">
      {Icon && <Icon className="mr-3 text-emerald-600" size={28} />}
      {title}
    </h3>
    <div className="text-slate-700 leading-relaxed space-y-4">{children}</div>
  </div>
);

const verifiedFeatures = [
  "Shared-database multi-tenancy with defense-in-depth isolation",
  "Catalog-driven RBAC with HQ-scoped authorization",
  "Hybrid JWT + PostgreSQL session authentication",
  "Employee lifecycle and organization hierarchy",
  "Leave policies, balances, and approval workflows",
  "Attendance punches, shifts, and materialization",
  "Payroll runs with transactional integrity",
  "BullMQ background payslip PDF generation",
  "Structured audit logging and rate limiting",
  "Docker Compose deployment on Hetzner",
];

const plannedItems = [
  "Billing / Stripe subscription flows",
  "MFA (TOTP) enforcement",
  "S3-compatible cloud file storage",
  "CI-gated Jest and Playwright suites",
  "CI-gated security scanning (planned)",
];

export const HrmsCaseStudyPage = () => {
  return (
    <div className="py-12 md:py-20 animate-fade-in max-w-4xl mx-auto">
      <SectionHeading
        title="Enterprise HRMS Case Study"
        subtitle="A production-deployed multi-tenant HR demonstration platform — not a commercial SaaS product."
      />

      {/* Live Demo CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Button
          href="https://hrms.hemendrabasiya.com"
          variant="primary"
          className="h-14 px-8 text-lg"
        >
          <ExternalLink size={18} className="mr-2" />
          Open Live Demo
        </Button>
        <Button
          href={UPTIME_STATUS_URL}
          variant="outline"
          className="h-14 px-8 text-lg bg-white/50"
        >
          <Activity size={18} className="mr-2" />
          Uptime Status
        </Button>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Live Demo runs in <strong className="text-slate-700">platform demo mode</strong> with
        seeded showcase tenants. Demo data is periodically restored from a canonical snapshot.
      </p>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
        <Section title="Overview" icon={Layers}>
          <p>
            The HRMS is a TypeScript monorepo (React frontend, Express API, PostgreSQL/Prisma,
            Redis) designed to centralize employee management, attendance, leave, and payroll
            for multi-tenant organizations. It is deployed as a{" "}
            <strong>production demonstration environment</strong> at{" "}
            <a
              href="https://hrms.hemendrabasiya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium hover:underline"
            >
              hrms.hemendrabasiya.com
            </a>
            .
          </p>
          <p>
            The project demonstrates enterprise patterns: shared-database multi-tenancy,
            catalog-driven RBAC, headquarters-scoped authorization, hybrid session
            authentication, domain-heavy payroll/leave/attendance modules, and Docker-based
            delivery with GitHub Actions.
          </p>
        </Section>

        <Section title="Business Problems & Solution" icon={Network}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-red-50 p-6 border border-red-100">
              <h4 className="font-bold text-red-900 mb-3">The Challenges</h4>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Fragmented employee data across spreadsheets.</li>
                <li>• Manual attendance and leave tracking leading to payroll errors.</li>
                <li>• Missing RBAC exposing sensitive compensation data.</li>
                <li>• Multi-branch organizations needing HQ-level data scoping.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-emerald-50 p-6 border border-emerald-100">
              <h4 className="font-bold text-emerald-900 mb-3">The Solution</h4>
              <ul className="space-y-2 text-emerald-800 text-sm">
                <li>• Centralized relational schema with tenant isolation.</li>
                <li>• Leave, attendance, and payroll workflows with audit trails.</li>
                <li>• Hybrid JWT + PostgreSQL sessions with rotating refresh tokens.</li>
                <li>• Catalog-driven RBAC and HQ-scoped authorization.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Implemented & Verified" icon={CheckCircle2}>
          <ul className="grid md:grid-cols-2 gap-3">
            {verifiedFeatures.map((feature) => (
              <li key={feature} className="flex items-start">
                <CheckCircle2
                  className="mr-2 mt-0.5 text-emerald-500 flex-shrink-0"
                  size={18}
                />
                <span className="font-medium text-slate-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Architecture Overview" icon={Cpu}>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">
                Multi-tenancy
              </h4>
              <p>
                Shared PostgreSQL database with logical isolation via <code>tenantId</code> on
                tenant-owned models. A Prisma client extension auto-injects tenant filters and
                fails closed on mismatched nested queries—defense-in-depth beyond
                application-layer checks alone.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">
                RBAC & HQ Authorization
              </h4>
              <p>
                Permissions are catalog-driven (resource + action). Roles bind users to
                permissions; headquarters admins are scoped to specific HQs. Super Admins can
                operate across HQs. Authorization middleware enforces permissions before
                controllers run.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">
                Authentication
              </h4>
              <p>
                Hybrid model: short-lived JWT access tokens held in frontend memory; rotating
                refresh tokens stored as HttpOnly cookies; server-side sessions in PostgreSQL
                for revocation and device metadata. Redis is used for BullMQ job queues and
                rate limiting—not for session storage.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">
                Tenant routing
              </h4>
              <p>
                Subdomain-based tenant resolution (<code>*.APP_DOMAIN</code>) with CORS
                allowlisting so each organization reaches its own workspace. Demo tenants
                use dedicated subdomains for login and branding.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">
                Domain Modules
              </h4>
              <p>
                <strong>Payroll:</strong> run workflows with transactional integrity and async
                PDF payslip generation via BullMQ. <strong>Leave:</strong> policies, balances,
                ledger-style accounting, and approvals. <strong>Attendance:</strong> punches,
                shifts, holidays, and materialization pipelines.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">
                API & Data Layer
              </h4>
              <p>
                Express API with Routes → Controllers → Services → Repositories. Zod validates
                payloads. PostgreSQL + Prisma for schema migrations and type-safe queries.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Security Controls (Application Level)" icon={ShieldAlert}>
          <p>
            Security is implemented in the application and runtime configuration—not as
            unverified CI scanner claims.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>
              <strong>Tenant isolation:</strong> Prisma extension failsafes and security
              regression tests.
            </li>
            <li>
              <strong>Input validation:</strong> Zod schemas on API payloads.
            </li>
            <li>
              <strong>Transport & headers:</strong> Helmet, HSTS, CORS allowlists.
            </li>
            <li>
              <strong>Rate limiting:</strong> Redis-backed limiters on auth and API routes.
            </li>
            <li>
              <strong>Audit logging:</strong> Structured auth-failure and action audits.
            </li>
            <li>
              <strong>Environment validation:</strong> Production rejects unsafe JWT secrets
              and requires Redis/HTTPS configuration.
            </li>
          </ul>
        </Section>

        <Section title="Deployment & Operations" icon={Terminal}>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Docker Compose:</strong> Frontend, backend, PostgreSQL, and Redis with
              production overlays and health checks.
            </li>
            <li>
              <strong>GitHub Actions:</strong> Build validation (compile + Prisma validate),
              then SSH deploy to a Hetzner VPS behind Nginx Proxy Manager.
            </li>
            <li>
              <strong>Uptime monitoring:</strong> Uptime Kuma for active heartbeat checks (
              <a
                href={UPTIME_STATUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-medium hover:underline"
              >
                View
              </a>
              ).
            </li>
            <li>
              <strong>Health checks:</strong> API reports database and Redis readiness.
            </li>
            <li>
              <strong>Structured logging:</strong> Request IDs and application logs for
              operational diagnosis.
            </li>
            <li>
              <strong>Demo reset tooling:</strong> Canonical snapshot restore, pre-reset
              backups (database + payslip/upload files), rollback on failure, and scheduled
              demo reset support.
            </li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            CI currently gates on successful builds. A comprehensive local Jest and Playwright
            suite exists; re-enabling those suites as CI gates is planned.
          </p>
        </Section>

        <Section title="AI-Augmented Engineering" icon={Bot}>
          <p>
            AI was used extensively across the HRMS development lifecycle as an engineering
            productivity tool—not as a product feature inside the application.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Architecture exploration and schema design discussions</li>
            <li>Implementation assistance and agentic coding workflows</li>
            <li>Debugging, root-cause analysis, and refactoring support</li>
            <li>Test generation and coverage expansion</li>
            <li>Security review and threat analysis support</li>
            <li>Documentation and deployment troubleshooting</li>
          </ul>
          <p className="mt-4 flex items-start text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-sm">
            <Sparkles className="mr-3 mt-0.5 flex-shrink-0 text-emerald-600" size={18} />
            <span>
              Architecture decisions, validation, testing, security choices, and final
              implementation remained <strong>human-reviewed</strong>. AI augmented delivery;
              it did not replace engineering judgment.
            </span>
          </p>
        </Section>

        <Section title="Planned / Future" icon={GitBranch}>
          <p className="text-sm text-slate-600 mb-4">
            The following are schema stubs, roadmap items, or deferred CI work—not claimed as
            production-ready today:
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {plannedItems.map((item) => (
              <li key={item} className="flex items-start text-sm text-slate-600">
                <span className="mr-2 text-slate-400">○</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Challenges & Lessons Learned" icon={GitBranch}>
          <p>
            <strong>Challenge:</strong> Payroll generation must remain atomic—partial failure
            must not corrupt financial records.
          </p>
          <p className="mt-2">
            <strong>Solution:</strong> PostgreSQL transactions in the service layer, plus
            async BullMQ workers for payslip PDF generation after the run is safely committed.
          </p>
          <p className="mt-4 text-emerald-700 font-medium italic">
            &ldquo;Writing code is only part of the job. Correct data models, tenant
            isolation, operational tooling, and honest production claims are what make
            software enterprise-credible.&rdquo;
          </p>
        </Section>
      </div>
    </div>
  );
};
