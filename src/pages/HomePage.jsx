import { Link } from "react-router-dom";
import { ChevronRight, Server, Database, GitBranch } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { APPLICATIONS_DATA } from "../utils/portfolioData";
import { AppCard } from "../components/ui/AppCard";

const highlightMetrics = [
  { label: "Banking Experience", value: "10+ Years", icon: Database },
  { label: "Enterprise IT", value: "3+ Years", icon: Server },
  { label: "Focus", value: "Full-Stack & Production Eng.", icon: GitBranch },
];

const previewCards = [
  {
    title: "Engineering Workflow",
    description:
      "Explore my end-to-end SDLC process, architecture patterns, AI-augmented delivery, and production operations.",
    target: "/engineering",
  },
  {
    title: "Enterprise HRMS",
    description:
      "A live multi-tenant HRMS demo—RBAC, payroll, leave, attendance—deployed on Hetzner with the PERN stack.",
    target: "/hrms-case-study",
  },
  {
    title: "About Me",
    description:
      "From infrastructure management to software development. See how enterprise IT shapes my engineering mindset.",
    target: "/about",
  },
];

export const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <section className="flex min-h-[85vh] flex-col justify-center py-20 md:py-32">
        <div className="max-w-4xl relative">
          {/* Subtle background glow effect */}
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          
          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-emerald-500"></span>
              Available for Full-Time Roles
            </div>
            
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl font-heading">
              Enterprise Software <span className="heading-gradient">Engineer</span>
            </h1>
            
            <p className="mb-10 text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Bridging 10+ years of Banking IT operations with modern full-stack (PERN) development and AI-augmented engineering workflows to build maintainable, secure, production-deployed business applications.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row mb-16">
              <Link to="/hrms-case-study">
                <Button variant="primary" className="w-full sm:w-auto h-14 px-8 text-lg">
                  View HRMS Case Study
                </Button>
              </Link>
              <Link to="/engineering">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/50 backdrop-blur-sm border-slate-300">
                  Explore My Workflow
                </Button>
              </Link>
            </div>

            {/* Metrics Highlight Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-slate-200 py-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
              {highlightMetrics.map((metric, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <metric.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">{metric.label}</p>
                    <p className="text-xl font-bold text-slate-900 font-heading">{metric.value}</p>
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

      <section className="mt-8 rounded-[2rem] border border-slate-200/60 glass bg-white/50 p-8 md:p-12 mb-20 animate-slide-up" style={{ animationDelay: "300ms" }}>
        <SectionHeading
          title="Featured Work"
          subtitle="Portfolio site plus verified HRMS capability areas—multi-tenancy, domain modules, tenant routing, and demo operations."
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
              <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
