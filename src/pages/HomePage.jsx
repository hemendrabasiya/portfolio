import { Link } from "react-router-dom";
import { ChevronRight, Code2, Building2, Shield } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { APPLICATIONS_DATA, PROFILE, SERVICES_DATA } from "../utils/portfolioData";
import { AppCard } from "../components/ui/AppCard";
import { GithubIcon, LinkedinIcon } from "../components/icons/SocialIcons";

const highlightMetrics = [
  { label: "Software Development", value: "4+ Years", icon: Code2 },
  { label: "Banking Sector", value: "9+ Years", icon: Building2 },
  { label: "Focus", value: "Full-Stack & FinTech", icon: Shield },
];

const previewCards = [
  {
    title: "Experience",
    description:
      "Employment history from banking operations through full-stack development to digital payment and cyber-cell work.",
    target: "/experience",
  },
  {
    title: "Featured Project",
    description:
      "Multi-tenant HRMS SaaS — a portfolio demonstration of full-stack engineering, RBAC, Docker and CI/CD.",
    target: "/hrms-case-study",
  },
  {
    title: "About",
    description:
      "How banking-domain knowledge and software engineering combine into a FinTech-oriented profile.",
    target: "/about",
  },
];

export const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex min-h-[85vh] flex-col justify-center py-20 md:py-32">
        <div className="max-w-4xl relative">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-emerald-500" />
              Open to international opportunities
            </div>

            <p className="mb-2 text-2xl font-bold tracking-tight text-slate-800 md:text-3xl font-heading">
              {PROFILE.name}
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl font-heading">
              Full-Stack Developer{" "}
              <span className="heading-gradient">&amp; Banking IT</span>
            </h1>

            <p className="mb-4 text-lg font-medium text-emerald-800 md:text-xl">
              FinTech · Digital Banking · DevSecOps
            </p>

            <p className="mb-10 text-xl text-slate-600 leading-relaxed max-w-3xl">
              Full-stack engineer with 4+ years of software development and 9+ years in
              banking. Building web applications with React, TypeScript, Node.js and
              PostgreSQL — informed by digital payment operations across UPI, IMPS, NEFT
              and RTGS.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap mb-8">
              <Link to="/applications">
                <Button variant="primary" className="w-full sm:w-auto h-12 px-6">
                  View Projects
                </Button>
              </Link>
              <Link to="/experience">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-6 bg-white/50 backdrop-blur-sm border-slate-300"
                >
                  View Experience
                </Button>
              </Link>
              <Button
                href={PROFILE.resumeUrl}
                variant="outline"
                className="w-full sm:w-auto h-12 px-6 bg-white/50 backdrop-blur-sm border-slate-300"
              >
                Download Resume
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <GithubIcon size={18} /> GitHub
              </a>
              <Link
                to="/contact"
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Contact
              </Link>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-slate-200 py-8 animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              {highlightMetrics.map((metric) => (
                <div key={metric.label} className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <metric.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      {metric.label}
                    </p>
                    <p className="text-xl font-bold text-slate-900 font-heading">
                      {metric.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {previewCards.map((card, index) => (
            <Link
              to={card.target}
              key={card.title}
              className="group block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="mb-4 flex items-center text-xl font-bold text-slate-900 font-heading transition-colors group-hover:text-emerald-600">
                {card.title}{" "}
                <ChevronRight
                  size={20}
                  className="ml-1 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-500"
                />
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="mt-8 rounded-[2rem] border border-slate-200/60 glass bg-white/50 p-8 md:p-12 mb-12 animate-slide-up"
        style={{ animationDelay: "300ms" }}
      >
        <SectionHeading
          title="Featured Work"
          subtitle="Portfolio projects that demonstrate engineering depth — separate from employment history."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mt-10">
          {APPLICATIONS_DATA.slice(0, 3).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link to="/applications">
            <Button variant="outline" className="group h-12 px-8 border-slate-300">
              View All Work
              <ChevronRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-20">
        <SectionHeading
          title="Professional Focus"
          subtitle="Capabilities I can credibly contribute in full-stack and FinTech-oriented roles."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
