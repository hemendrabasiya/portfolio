import { SectionHeading } from "../components/ui/SectionHeading";
import { SKILLS_DATA } from "../utils/portfolioData";

export const SkillsPage = () => (
  <div className="py-12 animate-in fade-in duration-500">
    <SectionHeading
      title="Technical Skills"
      subtitle="Technologies, tools, and methodologies I use to build robust and secure software solutions."
    />
    <div className="grid gap-6 md:grid-cols-2">
      {SKILLS_DATA.map((group) => (
        <div
          key={group.category}
          className="rounded-lg border border-gray-100 bg-[#f8fafc] p-8"
        >
          <h3 className="mb-6 border-b border-gray-200 pb-2 text-xl font-bold text-[#0a2342]">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
