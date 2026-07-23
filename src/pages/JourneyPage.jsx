import { Briefcase, CheckCircle, GraduationCap, MapPin, Server, Code, GitBranch, ShieldCheck, Cloud } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { JOURNEY_DATA } from "../utils/portfolioData";

const iconMap = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  check: CheckCircle,
  map: MapPin,
  server: Server,
  code: Code,
  "git-branch": GitBranch,
  "shield-check": ShieldCheck,
  cloud: Cloud,
};

export const JourneyPage = () => (
  <div className="py-12 md:py-20 animate-fade-in">
    <SectionHeading
      title="Engineering Journey"
      subtitle="How I evolved from Civil Engineering to Banking IT, and finally to Enterprise DevOps and Platform Engineering."
    />
    <div className="relative mx-auto mt-16 max-w-4xl">
      <div className="absolute bottom-0 left-6 top-0 w-0.5 -translate-x-1/2 bg-slate-200 md:left-1/2 rounded-full"></div>

      {JOURNEY_DATA.map((item, index) => {
        const Icon = iconMap[item.icon] || CheckCircle;
        return (
          <div
            key={item.year}
            className={`relative mb-16 flex items-center w-full animate-slide-up ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute left-6 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-50 bg-emerald-500 text-white shadow-lg md:left-1/2">
              <Icon size={24} />
            </div>
            <div
              className={`w-full pl-16 pr-4 md:w-1/2 md:pl-10 md:pr-12 ${index % 2 === 0 ? "md:pl-12 md:pr-10" : ""}`}
            >
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="mb-3 inline-block rounded-full bg-emerald-50 px-4 py-1 text-sm font-bold uppercase tracking-wider text-emerald-600">
                  {item.year}
                </span>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
