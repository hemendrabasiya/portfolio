import { SectionHeading } from "../components/ui/SectionHeading";
import { CheckCircle2, ShieldAlert, Cpu, Network, Layers, GitBranch, Terminal } from "lucide-react";

const Section = ({ title, icon: Icon, children }) => (
  <div className="mb-16">
    <h3 className="mb-6 flex items-center text-2xl font-bold text-slate-900 font-heading border-b border-slate-200 pb-4">
      {Icon && <Icon className="mr-3 text-emerald-600" size={28} />}
      {title}
    </h3>
    <div className="text-slate-700 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export const HrmsCaseStudyPage = () => {
  return (
    <div className="py-12 md:py-20 animate-fade-in max-w-4xl mx-auto">
      <SectionHeading
        title="Enterprise HRMS Case Study"
        subtitle="A deep dive into building a secure, scalable Human Resource Management System using the PERN stack."
      />
      
      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
        
        <Section title="Overview" icon={Layers}>
          <p>
            The HRMS (Human Resource Management System) is a comprehensive enterprise platform designed to centralize employee management, attendance tracking, payroll processing, and organizational performance monitoring. Built entirely on the PERN stack (PostgreSQL, Express, React, Node.js), it demonstrates my ability to architect full-stack solutions that solve real business operational bottlenecks.
          </p>
        </Section>

        <Section title="Business Problems & Solution" icon={Network}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-red-50 p-6 border border-red-100">
              <h4 className="font-bold text-red-900 mb-3">The Challenges</h4>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Fragmented employee data across spreadsheets.</li>
                <li>• Manual attendance and leave request tracking leading to payroll errors.</li>
                <li>• Lack of role-based access control (RBAC) exposing sensitive salary data.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-emerald-50 p-6 border border-emerald-100">
              <h4 className="font-bold text-emerald-900 mb-3">The Solution</h4>
              <ul className="space-y-2 text-emerald-800 text-sm">
                <li>• A centralized relational database ensuring data integrity.</li>
                <li>• Automated workflows for leave approvals and attendance.</li>
                <li>• Strict JWT-based authentication and granular RBAC.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Key Features" icon={CheckCircle2}>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Secure JWT Authentication & Sessions",
              "Comprehensive Employee Profiles",
              "Automated Leave Management Workflow",
              "Payroll Generation & Export",
              "Interactive Admin Dashboards",
              "Real-time Notifications",
              "Granular Role-Based Access Control (RBAC)",
              "Secure RESTful APIs"
            ].map((feature, i) => (
              <li key={i} className="flex items-center">
                <CheckCircle2 className="mr-2 text-emerald-500" size={18} />
                <span className="font-medium text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Engineering Decisions & Architecture" icon={Cpu}>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">Database Design (PostgreSQL + Prisma)</h4>
              <p>Selected PostgreSQL over NoSQL due to the highly relational nature of HR data (Employees &lt;-&gt; Departments &lt;-&gt; Payroll &lt;-&gt; Leaves). I utilized AI to rapidly brainstorm and validate normalized schema designs before implementation. Used Prisma ORM for type-safe database queries and automated schema migrations, ensuring data integrity across normalized tables.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">API Design (Node.js + Express)</h4>
              <p>Architected a RESTful API with a clear separation of concerns (Routes → Controllers → Services → Repositories). I used AI to help structure the RESTful endpoints logically during the planning phase. This isolates business logic from HTTP transport, making unit testing straightforward and allowing for future graphQL or gRPC implementations without massive refactors.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">Authentication & Authorization</h4>
              <p>Implemented stateless JWT authentication stored in secure, HttpOnly cookies to mitigate XSS attacks. Authorization is handled via custom middleware that checks Role-Based Access Control (RBAC) permissions before passing the request to the controller layer.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 mb-3">CI/CD Pipeline & Docker Deployment</h4>
              <p>The application is fully containerized. A <code>docker-compose</code> setup orchestrates the Node API, PostgreSQL, and Nginx reverse proxy. I actively use AI to optimize multi-stage Docker builds and troubleshoot complex deployment errors faster. GitHub Actions automate the CI/CD pipeline, running Jest tests, building images, and performing deployment to the production server upon successful merges.</p>
            </div>
          </div>
        </Section>

        <Section title="Security & DevSecOps" icon={ShieldAlert}>
          <p>
            Security is integrated directly into the CI/CD pipeline.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>SAST:</strong> Semgrep and GitLeaks run on pull requests to catch vulnerable code patterns and hardcoded secrets.</li>
            <li><strong>Container Security:</strong> Trivy scans the Docker images for CVEs before they are pushed to the registry.</li>
            <li><strong>Input Validation:</strong> Zod schema validation sanitizes all incoming payloads, preventing SQL injection and malformed data entry.</li>
          </ul>
        </Section>

        <Section title="Monitoring Strategy" icon={Terminal}>
          <p>
            Production observability is critical for enterprise software. I deployed <strong>Prometheus</strong> to scrape API metrics and <strong>Grafana</strong> to visualize them. <strong>Uptime Kuma</strong> provides active heartbeat monitoring, alerting me via webhooks if any container drops, ensuring high availability.
          </p>
        </Section>

        <Section title="Challenges & Lessons Learned" icon={GitBranch}>
          <p>
            <strong>Challenge:</strong> Handling complex transactional states for payroll generation where a failure halfway through could corrupt financial records.
          </p>
          <p className="mt-2">
            <strong>Solution:</strong> Implemented strict PostgreSQL transactions (BEGIN, COMMIT, ROLLBACK) within the Node.js service layer to ensure atomic operations.
          </p>
          <p className="mt-4 text-emerald-700 font-medium italic">
            "The biggest lesson was understanding that writing code is only 20% of the job. Designing the data models correctly, ensuring the system is observable in production, and leveraging AI to generate comprehensive technical documentation is what makes software truly enterprise-ready."
          </p>
        </Section>

      </div>
    </div>
  );
};
