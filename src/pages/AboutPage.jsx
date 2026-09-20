import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { PROFILE } from "../utils/portfolioData";

export const AboutPage = () => (
  <div className="py-12 md:py-20 animate-fade-in">
    <SectionHeading
      title="About"
      subtitle="Full-stack development experience grounded in banking and FinTech domain knowledge."
    />

    <div className="grid gap-12 text-lg leading-relaxed text-slate-700 md:grid-cols-2 mb-20">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 font-heading flex items-center">
          <span className="w-6 h-1 bg-emerald-500 rounded-full mr-3" />
          Professional Summary
        </h3>
        <p>
          I am a <strong className="text-slate-900">Full-Stack Developer</strong> and{" "}
          <strong className="text-slate-900">Banking IT Professional</strong> with{" "}
          <strong className="text-slate-900">4+ years</strong> of professional software
          development experience and <strong className="text-slate-900">9+ years</strong>{" "}
          in the banking sector.
        </p>
        <p>
          My career progressed from branch banking operations into full-stack software
          development, and more recently into digital payment operations and cyber-cell
          support. That path combines practical engineering with first-hand knowledge of
          financial workflows, payment channels and operational controls.
        </p>
        <p>
          I build web applications using{" "}
          <strong className="text-slate-900">
            TypeScript, React, Node.js, Express and PostgreSQL
          </strong>
          , with practical experience in Docker, DevSecOps, CI/CD and AI-assisted
          development using Cursor.
        </p>
      </div>

      <div>
        <h3 className="mb-6 text-2xl font-bold text-slate-900 font-heading flex items-center">
          <span className="w-6 h-1 bg-emerald-500 rounded-full mr-3" />
          Career Direction
        </h3>
        <p className="mb-8">
          I am targeting{" "}
          <strong className="text-slate-900">
            Full-Stack Developer, Software Engineer and FinTech / Banking Technology
          </strong>{" "}
          roles — including international opportunities — where domain knowledge of
          banking and payments strengthens software delivery. DevSecOps and application
          security are supporting strengths, not separate product claims.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h4 className="mb-6 font-bold text-slate-900 text-xl font-heading">
            How I Work
          </h4>
          <ul className="space-y-4">
            {[
              "Maintainable full-stack architecture",
              "Security considered during development",
              "Containerised, repeatable deployments",
              "AI-assisted delivery with human review",
            ].map((item) => (
              <li key={item} className="flex items-start group">
                <CheckCircle
                  className="mr-4 mt-0.5 flex-shrink-0 text-emerald-500 transition-transform group-hover:scale-110"
                  size={20}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="mb-20">
      <SectionHeading
        title="The Banking & FinTech Differentiator"
        subtitle="Domain exposure that informs how I design and operate software — without conflating operations with systems engineering."
      />
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-900 font-heading">
              Banking Operations → Software
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Years in branch banking built a practical understanding of transaction
              accuracy, operational controls and customer-facing financial processes. That
              foundation shaped a careful approach to data integrity and workflow design
              when I moved into full-stack development for internal business applications.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-900 font-heading">
              Digital Payments & Cyber Cell
            </h4>
            <p className="text-slate-700 leading-relaxed">
              In my current role I support digital payment and settlement operations across{" "}
              <strong>UPI, IMPS, NEFT and RTGS</strong>, including exception handling,
              reconciliation and cyber-fraud monitoring. This is operational and
              investigative work with payment systems — distinct from claiming to have
              engineered the underlying payment rails.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-[2rem] border border-slate-200/60 glass bg-emerald-50/30 p-8 md:p-12 mb-12">
      <h3 className="mb-10 text-3xl font-bold text-slate-900 font-heading text-center">
        Why This Profile Fits FinTech Roles
      </h3>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex items-start">
          <CheckCircle className="mr-4 mt-1 flex-shrink-0 text-emerald-500" size={24} />
          <div>
            <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
              Domain + Engineering
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Banking-sector experience and full-stack development together — useful for
              products that must respect financial workflows and operational reality.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <CheckCircle className="mr-4 mt-1 flex-shrink-0 text-emerald-500" size={24} />
          <div>
            <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
              Payments Awareness
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Working knowledge of digital payment channels and exception handling,
              supporting clearer communication with operations and risk stakeholders.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <CheckCircle className="mr-4 mt-1 flex-shrink-0 text-emerald-500" size={24} />
          <div>
            <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
              Secure Delivery Habits
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Authentication, RBAC, containerisation and CI/CD practiced in portfolio
              systems and internal application work — with human review on security
              decisions.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <CheckCircle className="mr-4 mt-1 flex-shrink-0 text-emerald-500" size={24} />
          <div>
            <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
              Clear Boundaries
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Employment experience and portfolio projects are kept distinct. The HRMS
              platform demonstrates engineering depth; it is not presented as bank
              employment deliverable.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/experience">
        <Button variant="primary" className="w-full sm:w-auto">
          View Experience
        </Button>
      </Link>
      <Button href={PROFILE.resumeUrl} variant="outline" className="w-full sm:w-auto">
        Download Resume
      </Button>
    </div>
  </div>
);
