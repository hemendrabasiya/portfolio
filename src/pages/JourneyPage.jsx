import { Briefcase, CheckCircle, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { JOURNEY_DATA } from "../utils/portfolioData";

const iconMap = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  check: CheckCircle,
  map: MapPin,
};

export const JourneyPage = () => (
  <div className="py-12 animate-in fade-in duration-500">
    <SectionHeading
      title="Career Journey"
      subtitle="The progression of my academic and professional life, showing my path to software engineering."
    />
    <div className="relative mx-auto mt-8 max-w-3xl">
      <div className="absolute bottom-0 left-6 top-0 w-0.5 -translate-x-1/2 bg-gray-200 md:left-1/2"></div>

      {JOURNEY_DATA.map((item, index) => {
        const Icon = iconMap[item.icon];
        return (
          <div
            key={item.year}
            className={`relative mb-12 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#10b981] bg-white text-[#0a2342] md:left-1/2">
              <Icon size={20} />
            </div>
            <div
              className={`w-full pl-16 pr-4 md:w-1/2 md:pl-8 md:pr-12 ${index % 2 === 0 ? "md:pl-12 md:pr-8" : ""}`}
            >
              <div className="rounded-lg border border-gray-100 bg-[#f8fafc] p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="mb-1 block text-sm font-bold uppercase tracking-wider text-[#10b981]">
                  {item.year}
                </span>
                <h3 className="mb-2 text-xl font-bold text-[#0a2342]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
