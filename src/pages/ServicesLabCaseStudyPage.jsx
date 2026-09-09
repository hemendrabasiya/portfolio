import { Link } from "react-router-dom";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { CI_TIERS_DATA } from "../utils/portfolioData";
import {
  Layers,
  ShieldCheck,
  GitBranch,
  Container,
  Code2,
  Boxes,
  CheckCircle2,
  AlertTriangle,
  Network,
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

const capabilities = [
  {
    name: "@lab/config-guard",
    proof: "Fail-closed environment parsing (Zod)",
  },
  {
    name: "@lab/observability",
    proof: "Request IDs, health, Prometheus metrics",
  },
  {
    name: "@lab/tenant-guard",
    proof: "ALS + Prisma failsafe, FK triggers, RLS + adversarial suite",
  },
  {
    name: "@lab/policy-engine",
    proof: "Explainable deny-wins decisions + SoD",
  },
  {
    name: "@lab/audit-ledger",
    proof: "Tamper-evident hash-chain verify",
  },
  {
    name: "@lab/session-kit",
    proof: "Refresh reuse detection + step-up gates",
  },
  {
    name: "@lab/api-guard",
    proof: "Idempotency-Key, rate limits, outbox (no Kafka)",
  },
  {
    name: "Ops Console (Next.js)",
    proof: "HttpOnly cookie BFF, middleware RBAC, Playwright authz",
  },
  {
    name: "Transaction API (Java/Spring)",
    proof: "JWT resource server, idempotent posts, reverse + SoD, Actuator",
  },
];

const evidenceRows = [
  { claim: "Package + app unit tests", status: "Verified locally", detail: "41 tests / 11 files (Vitest)" },
  { claim: "Tenant adversarial suite", status: "Verified locally", detail: "7/8 blocked; RLS needs non-superuser" },
  { claim: "Ops Console Playwright authz", status: "Verified locally", detail: "2/2 passed" },
  { claim: "Java Maven + Testcontainers", status: "Verified via Docker", detail: "mvn test BUILD SUCCESS" },
  { claim: "Services Lab GitHub Actions", status: "Workflows present", detail: "Remote / CI run pending" },
  { claim: "Public lab hostnames", status: "Not deployed", detail: "Case study + local Compose only" },
];

export const ServicesLabCaseStudyPage = () => {
  return (
    <div className="py-12 md:py-20 animate-fade-in max-w-4xl mx-auto">
      <SectionHeading
        title="Services Lab Case Study"
        subtitle="An engineering laboratory for secure enterprise architecture, reusable backend infrastructure, DevSecOps, and cross-stack delivery—not a second HRMS."
      />

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 flex gap-3">
        <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={22} />
        <p className="text-sm text-amber-950 leading-relaxed">
          <strong>Honest status:</strong> implemented and verified locally (Compose / Maven /
          Vitest / Playwright). This page is a <strong>Case Study + reproducible local demo</strong>.
          Public demo URLs are not claimed until a verified deployment exists. HRMS remains the
          primary public live product demo.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/applications">
          <Button variant="primary" className="h-12 px-6">
            View on Work
          </Button>
        </Link>
        <Link to="/engineering">
          <Button variant="outline" className="h-12 px-6 bg-white/50">
            Engineering & CI tiers
          </Button>
        </Link>
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
        <Section title="Problem" icon={AlertTriangle}>
          <p>
            Enterprise applications routinely struggle with the same platform concerns: tenant
            isolation, authorization, session security, auditability, idempotency, rate limiting,
            observability, and secure delivery. Shipping these as one-off features inside a single
            product makes them hard to reuse, hard to test adversarially, and hard to explain in
            interviews.
          </p>
        </Section>

        <Section title="Engineering solution" icon={Layers}>
          <p>
            The HRMS flagship proves end-to-end product depth. The Services Lab extracts{" "}
            <strong>reusable security and platform patterns</strong> into small packages, then
            exercises them through a reference API, a Next.js Ops Console BFF, and a Spring Boot
            transaction API—intentional cross-stack comparisons, not triple ports of the same app.
          </p>
          <p className="text-sm text-slate-600">
            Individual packages stay capabilities inside this lab. They are not presented as seven
            unrelated portfolio projects.
          </p>
        </Section>

        <Section title="Architecture" icon={Network}>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>TypeScript packages</strong> — config, observability, tenant-guard, policy,
              audit, session-kit, api-guard
            </li>
            <li>
              <strong>reference-api</strong> — Express consumer of the packages (demo routes)
            </li>
            <li>
              <strong>ops-console</strong> — Next.js App Router BFF with HttpOnly sessions + RBAC
            </li>
            <li>
              <strong>transaction-api</strong> — Java 21 / Spring Boot resource server
            </li>
            <li>
              <strong>PostgreSQL + Redis</strong> — local Compose dependencies
            </li>
            <li>
              <strong>CI / security tooling</strong> — lint/typecheck/test, gitleaks, Trivy/SBOM,
              Checkov (maturity ladder L1→L5 by design)
            </li>
          </ul>
        </Section>

        <Section title="Capabilities" icon={Boxes}>
          <ul className="space-y-3">
            {capabilities.map((c) => (
              <li key={c.name} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-emerald-500 mt-0.5 flex-shrink-0"
                  size={18}
                />
                <span>
                  <strong className="text-slate-900 font-mono text-sm">{c.name}</strong>
                  <span className="text-slate-600"> — {c.proof}</span>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Evidence (reproducible)" icon={CheckCircle2}>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Claim</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody>
                {evidenceRows.map((row) => (
                  <tr key={row.claim} className="border-t border-slate-100">
                    <td className="px-4 py-3 text-slate-900">{row.claim}</td>
                    <td className="px-4 py-3 text-emerald-800 font-medium">{row.status}</td>
                    <td className="px-4 py-3 text-slate-600">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Risk-based CI (tiered truthfulness)" icon={GitBranch}>
          <p>
            Recruiter-facing copy must not imply “the entire test suite runs on every PR.” HRMS and
            the lab use <strong>explicit tiers</strong>:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {CI_TIERS_DATA.map((tier) => (
              <div
                key={tier.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h4 className="font-bold text-slate-900 font-heading text-sm mb-1">
                  {tier.name}
                </h4>
                <p className="text-xs font-semibold text-emerald-700 mb-2">{tier.truth}</p>
                <p className="text-sm text-slate-600">{tier.runs}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Local demos (when Docker is up)" icon={Container}>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <code className="text-sm">reference-api</code> —{" "}
              <code className="text-xs">:4000</code> health, isolation, policy/audit, session,
              orders
            </li>
            <li>
              <code className="text-sm">ops-console</code> —{" "}
              <code className="text-xs">:3000</code> BFF login (viewer / operator / admin)
            </li>
            <li>
              <code className="text-sm">transaction-api</code> —{" "}
              <code className="text-xs">:8081</code> Swagger + Actuator
            </li>
          </ul>
        </Section>

        <Section title="Cross-stack map" icon={Code2}>
          <p>
            TypeScript <code className="text-sm">api-guard</code> / session-kit ↔ Next Ops
            Console cookie sessions ↔ Java Secure Transaction API (idempotency, authz, audit
            events). Policy-engine stays TypeScript-first; an optional Java policy service remains
            out of scope.
          </p>
        </Section>

        <Section title="Security posture" icon={ShieldCheck}>
          <p>
            Defence in depth for tenancy, explainable authorization, tamper-evident audit,
            refresh reuse revoke, and idempotent mutating APIs—aligned with banking/enterprise
            interview narratives without inventing undeployed live URLs.
          </p>
        </Section>
      </div>
    </div>
  );
};
