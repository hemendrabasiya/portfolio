import { CheckCircle } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";

export const AboutPage = () => (
  <div className="py-12 md:py-20 animate-fade-in">
    <SectionHeading
      title="About Me"
      subtitle="Bridging the gap between strict enterprise IT operations and modern full-stack engineering."
    />

    <div className="grid gap-12 text-lg leading-relaxed text-slate-700 md:grid-cols-2 mb-20">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 font-heading flex items-center">
          <span className="w-6 h-1 bg-emerald-500 rounded-full mr-3"></span>
          The Engineering Journey
        </h3>
        <p>
          My engineering journey is unconventional. I began with a foundation in{" "}
          <strong className="text-slate-900">Civil Engineering</strong>, which ingrained in
          me a deep appreciation for structural integrity and rigorous problem-solving.
        </p>
        <p>
          In 2017, I entered the <strong className="text-slate-900">Banking sector</strong>.
          Working my way up to Assistant Manager in the IT department, I became responsible
          for critical infrastructure, ensuring high availability, and maintaining stringent
          security protocols in a highly regulated environment.
        </p>
        <p>
          This operational experience forged my engineering philosophy:{" "}
          <strong className="text-slate-900">
            software must be reliable, secure, and maintainable from day one.
          </strong>{" "}
          I pivoted to full-stack development (PERN stack) and production engineering to
          build the robust systems I spent years managing—using AI-augmented workflows to
          accelerate delivery while keeping human review on architecture and security.
        </p>
      </div>
      <div>
        <h3 className="mb-6 text-2xl font-bold text-slate-900 font-heading flex items-center">
          <span className="w-6 h-1 bg-emerald-500 rounded-full mr-3"></span>
          Career Focus
        </h3>
        <p className="mb-8">
          My objective is to secure an{" "}
          <strong className="text-slate-900">
            Enterprise Full-Stack / Software Engineer
          </strong>{" "}
          role in{" "}
          <strong className="text-slate-900">Fintech or Enterprise Tech</strong>, where
          banking domain knowledge, system design, and production engineering can directly
          impact product reliability. Secondary strengths include solutions architecture and
          DevOps; AI-augmented engineering is a productivity capability, not a product
          title.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h4 className="mb-6 font-bold text-slate-900 text-xl font-heading">
            Core Engineering Values
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <CheckCircle
                className="mr-4 mt-0.5 flex-shrink-0 text-emerald-500 transition-transform group-hover:scale-110"
                size={20}
              />
              <span>Clean, Maintainable Architecture</span>
            </li>
            <li className="flex items-start group">
              <CheckCircle
                className="mr-4 mt-0.5 flex-shrink-0 text-emerald-500 transition-transform group-hover:scale-110"
                size={20}
              />
              <span>Security Built Into the Application</span>
            </li>
            <li className="flex items-start group">
              <CheckCircle
                className="mr-4 mt-0.5 flex-shrink-0 text-emerald-500 transition-transform group-hover:scale-110"
                size={20}
              />
              <span>Automation & Reliable Deployments</span>
            </li>
            <li className="flex items-start group">
              <CheckCircle
                className="mr-4 mt-0.5 flex-shrink-0 text-emerald-500 transition-transform group-hover:scale-110"
                size={20}
              />
              <span>AI-Augmented Engineering with Human Review</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mb-20">
      <SectionHeading
        title="The Banking IT Advantage"
        subtitle="How 3+ years of enterprise IT operations fundamentally shapes my software engineering approach."
      />
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-900 font-heading">
              Operational Reality vs. Localhost
            </h4>
            <p className="text-slate-700 leading-relaxed">
              My transition to software engineering wasn&apos;t theoretical; it was born out
              of operational necessity. While managing{" "}
              <strong>Enterprise IT Operations, Infrastructure, and Networking</strong> for
              a bank branch, I learned that software is only as good as its uptime.
            </p>
            <p className="text-slate-700 leading-relaxed">
              I handled{" "}
              <strong>
                Production Support, System Maintenance, and Microsoft 365 Administration
              </strong>
              , experiencing firsthand how poor application design leads to operational
              nightmares. This taught me to prioritize structured logging, robust error
              handling, and high availability long before I write my first line of code.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-900 font-heading">
              Beyond the Codebase
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Enterprise engineering requires more than technical syntax. It requires
              navigating strict compliance requirements, managing budgets, and communicating
              across departments.
            </p>
            <p className="text-slate-700 leading-relaxed">
              My experience in <strong>Vendor Coordination and IT Procurement</strong> taught
              me how to evaluate technical solutions through a business lens. I approach
              software development not just as a coder, but as an engineer who understands
              the total cost of ownership, deployment logistics, and long-term maintenance
              implications.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-[2rem] border border-slate-200/60 glass bg-emerald-50/30 p-8 md:p-12 mb-12">
      <h3 className="mb-10 text-3xl font-bold text-slate-900 font-heading text-center">
        Why Work With Me?
      </h3>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex items-start">
          <CheckCircle
            className="mr-4 mt-1 flex-shrink-0 text-emerald-500"
            size={24}
          />
          <div>
            <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
              The Enterprise Mindset
            </h4>
            <p className="text-slate-700 leading-relaxed">
              I view software as a solution to a business problem. My code is designed for
              operational efficiency, team maintainability, and scalability.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <CheckCircle
            className="mr-4 mt-1 flex-shrink-0 text-emerald-500"
            size={24}
          />
          <div>
            <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
              Banking Domain Knowledge
            </h4>
            <p className="text-slate-700 leading-relaxed">
              10+ years in banking gives me an intuitive understanding of strict regulatory
              compliance, financial workflows, and data accuracy requirements.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <CheckCircle
            className="mr-4 mt-1 flex-shrink-0 text-emerald-500"
            size={24}
          />
          <div>
            <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
              Production-Ready Reliability
            </h4>
            <p className="text-slate-700 leading-relaxed">
              I build with Day 2 operations in mind—Docker deployments, GitHub Actions,
              health checks, structured logging, and Uptime Kuma monitoring for systems I
              operate.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <CheckCircle
            className="mr-4 mt-1 flex-shrink-0 text-emerald-500"
            size={24}
          />
          <div>
            <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
              Security by Design
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Security isn&apos;t a post-development checklist. I implement application-level
              controls—RBAC, tenant isolation, validation, rate limiting, and audit
              logging—and keep architecture decisions human-reviewed.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
