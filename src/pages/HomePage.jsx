import { ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { APPLICATIONS_DATA } from "../utils/portfolioData";

const previewCards = [
  {
    title: "About Me",
    description:
      "From Civil Engineering to Banking IT, and now focused on modern Software Development and DevSecOps.",
    target: "about",
  },
  {
    title: "Technical Skills",
    description:
      "PERN Stack, Docker, CI/CD, and Security tooling such as Trivy, Semgrep, and OWASP ZAP.",
    target: "skills",
  },
  {
    title: "Career Journey",
    description:
      "Explore my professional timeline and my goal of securing a role in Fintech.",
    target: "journey",
  },
];

export const HomePage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    <section className="flex min-h-[80vh] flex-col justify-center py-20 md:py-32">
      <div className="max-w-4xl">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[#0a2342] md:text-6xl">
          Hi, I'm <span className="text-[#10b981]">Hemendra Basiya</span>
        </h1>
        <p className="mb-2 text-xl font-medium text-gray-600 md:text-2xl">
          Software Developer
        </p>
        <p className="mb-2 text-xl font-medium text-gray-600 md:text-2xl">
          DevSecOps Enthusiast
        </p>
        <p className="mb-2 text-xl font-medium text-gray-600 md:text-2xl">
          Banking IT Professional
        </p>
        <p className="mb-10 text-xl font-medium text-gray-600 md:text-2xl">
          Chartered Banker
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button onClick={() => navigate("applications")} variant="primary">
            View Applications
          </Button>
          <Button variant="outline">Download Resume</Button>
        </div>
      </div>
    </section>

    <section className="border-t border-gray-100 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {previewCards.map((card) => (
          <div
            key={card.title}
            className="cursor-pointer rounded-lg bg-[#f8fafc] p-8 transition-shadow hover:shadow-md"
            onClick={() => navigate(card.target)}
          >
            <h3 className="mb-3 flex items-center text-xl font-bold text-[#0a2342]">
              {card.title}{" "}
              <ChevronRight size={20} className="ml-1 text-[#10b981]" />
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-8 rounded-lg border border-gray-100 bg-[#f8fafc] p-8">
      <SectionHeading
        title="Applications Preview"
        subtitle="A short look at the projects that reflect my engineering approach."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {APPLICATIONS_DATA.slice(0, 3).map((app) => (
          <div
            key={app.id}
            className="rounded-lg border border-gray-200 bg-white p-6"
          >
            <h3 className="text-lg font-bold text-[#0a2342]">{app.name}</h3>
            <p className="mt-3 text-sm text-gray-600">{app.description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);
