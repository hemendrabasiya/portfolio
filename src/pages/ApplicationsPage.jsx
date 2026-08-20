import { SectionHeading } from "../components/ui/SectionHeading";
import { AppCard } from "../components/ui/AppCard";
import { APPLICATIONS_DATA } from "../utils/portfolioData";

export const ApplicationsPage = () => (
  <div className="py-12 md:py-20 animate-fade-in">
    <SectionHeading
      title="Work"
      subtitle="The portfolio site and capability areas from the production-deployed HRMS live demo—presented as platform modules, not separate microservices."
    />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 mt-12">
      {APPLICATIONS_DATA.map((app, index) => (
        <div 
          key={app.id} 
          className="animate-slide-up h-full"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <AppCard app={app} />
        </div>
      ))}
    </div>
  </div>
);
