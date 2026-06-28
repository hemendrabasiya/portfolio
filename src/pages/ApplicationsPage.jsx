import { SectionHeading } from "../components/ui/SectionHeading";
import { AppCard } from "../components/ui/AppCard";
import { APPLICATIONS_DATA } from "../utils/portfolioData";

export const ApplicationsPage = () => (
  <div className="py-12 animate-in fade-in duration-500">
    <SectionHeading
      title="Applications"
      subtitle="A showcase of full-stack projects built with modern technologies, focusing on clean code, responsiveness, and performance."
    />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {APPLICATIONS_DATA.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  </div>
);
