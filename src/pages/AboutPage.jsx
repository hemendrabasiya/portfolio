import { CheckCircle } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";

export const AboutPage = () => (
  <div className="py-12 animate-in fade-in duration-500">
    <SectionHeading
      title="About Me"
      subtitle="A journey of continuous learning, bridging infrastructure, banking operations, and software engineering."
    />
    <div className="grid gap-12 text-lg leading-relaxed text-gray-700 md:grid-cols-2">
      <div>
        <h3 className="mb-4 text-2xl font-bold text-[#0a2342]">
          Professional Background
        </h3>
        <p className="mb-4">
          My career didn't start in a traditional computer science lab. I began
          with a foundation in <strong>Civil Engineering</strong>, which taught
          me structural thinking and rigorous problem-solving.
        </p>
        <p className="mb-4">
          In 2017, I transitioned into the <strong>Banking</strong> sector. Over
          the years, culminating in my role as Office Assistant and then
          promoted to Assistant Manager into IT department, I managed critical
          infrastructure, ensured high availability, and learned the vital
          importance of security and reliability in enterprise environments.
        </p>
        <p>
          Driven by a passion for creating and automating, I pivoted towards
          software engineering, specializing in the <strong>PERN stack</strong>{" "}
          (PostgreSQL, Express, React, Node.js) and integrating{" "}
          <strong>DevSecOps</strong> methodologies to build scalable, secure
          applications.
        </p>
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-bold text-[#0a2342]">
          Career Goals & Values
        </h3>
        <p className="mb-4">
          My immediate long-term goal is to secure a Software Developer, DevOps,
          or DevSecOps role in <strong>Fintech</strong>, contributing to
          forward-thinking engineering teams.
        </p>
        <div className="mt-6 rounded-lg border border-gray-100 bg-[#f8fafc] p-6">
          <h4 className="mb-3 font-bold text-[#0a2342]">
            Core Engineering Values:
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle
                className="mr-3 mt-1 flex-shrink-0 text-[#10b981]"
                size={18}
              />{" "}
              Clean, Maintainable Architecture
            </li>
            <li className="flex items-start">
              <CheckCircle
                className="mr-3 mt-1 flex-shrink-0 text-[#10b981]"
                size={18}
              />{" "}
              Security as Code (Shift-Left Approach)
            </li>
            <li className="flex items-start">
              <CheckCircle
                className="mr-3 mt-1 flex-shrink-0 text-[#10b981]"
                size={18}
              />{" "}
              Automation & Robust CI/CD Pipelines
            </li>
            <li className="flex items-start">
              <CheckCircle
                className="mr-3 mt-1 flex-shrink-0 text-[#10b981]"
                size={18}
              />{" "}
              Continuous Learning & Adaptation
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
