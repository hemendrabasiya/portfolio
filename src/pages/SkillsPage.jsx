import { Code2, Server, Database, Cloud, Activity, ShieldCheck, Rocket, ChevronRight, Briefcase, Bot } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SKILLS_DATA } from "../utils/portfolioData";

const getIconForCategory = (category) => {
  switch (category) {
    case "Frontend Engineering":
      return <Code2 size={24} className="text-emerald-500" />;
    case "Backend Engineering":
      return <Server size={24} className="text-emerald-500" />;
    case "Database Engineering":
      return <Database size={24} className="text-emerald-500" />;
    case "DevOps":
      return <Cloud size={24} className="text-emerald-500" />;
    case "Secure Development":
      return <ShieldCheck size={24} className="text-emerald-500" />;
    case "Monitoring":
      return <Activity size={24} className="text-emerald-500" />;
    case "Enterprise Tools":
      return <Briefcase size={24} className="text-emerald-500" />;
    case "AI Productivity":
      return <Bot size={24} className="text-emerald-500" />;
    case "Cloud (Learning)":
      return <Rocket size={24} className="text-emerald-500" />;
    default:
      return <Code2 size={24} className="text-emerald-500" />;
  }
};

const currentlyLearning = [
  "AWS",
  "Azure",
  "Kubernetes",
  "Terraform",
  "Platform Engineering"
];

const longTermGoals = [
  "Cloud Architecture",
  "Enterprise Platform Engineering",
  "Site Reliability Engineering (SRE)"
];

export const SkillsPage = () => (
  <div className="py-12 md:py-20 animate-fade-in">
    <SectionHeading
      title="Engineering Capabilities"
      subtitle="The technologies, tools, and methodologies I leverage to build robust, secure enterprise software."
    />
    
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-20">
      {SKILLS_DATA.map((group, index) => (
        <div
          key={group.category}
          className="rounded-3xl glass bg-white/70 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up flex flex-col h-full"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center mb-4">
            <div className="mr-4 rounded-xl bg-emerald-50 p-3 shadow-sm border border-emerald-100/50">
              {getIconForCategory(group.category)}
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              {group.category}
            </h3>
          </div>
          
          <p className="text-slate-600 text-sm mb-6 pb-6 border-b border-slate-200/60 flex-grow">
            {group.description}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-emerald-300 transition-colors hover:text-emerald-700 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Future Roadmap Section */}
    <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 md:p-12 text-slate-300 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-700 pb-8 md:pb-0 md:pr-12">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-emerald-400 mb-6 shadow-inner border border-slate-700">
            <Rocket size={32} />
          </div>
          <h3 className="text-3xl font-bold text-white font-heading mb-4">Future Roadmap</h3>
          <p className="text-slate-400 leading-relaxed">
            Technology evolves rapidly. To maintain an enterprise-ready skill set, I am actively researching and upskilling in critical areas of cloud orchestration and infrastructure automation.
          </p>
        </div>
        
        <div className="md:w-2/3 flex flex-col justify-center">
          <div className="mb-8">
            <h4 className="text-lg font-bold text-white font-heading mb-4 uppercase tracking-wider text-slate-400">Currently Learning</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentlyLearning.map((skill, i) => (
                <div key={i} className="flex items-center p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <ChevronRight className="text-emerald-500 mr-3" size={18} />
                  <span className="font-medium text-slate-200 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white font-heading mb-4 uppercase tracking-wider text-slate-400">Long-Term Goals</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {longTermGoals.map((goal, i) => (
                <div key={i} className="flex items-center p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <ChevronRight className="text-emerald-500 mr-3" size={18} />
                  <span className="font-medium text-slate-200 text-sm">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
