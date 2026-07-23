import { SectionHeading } from "../components/ui/SectionHeading";
import { GitPullRequest, Code, TestTube, ShieldCheck, Container, ServerCog, Activity, Database, Blocks, Layers, FileCode, CheckCircle2, GitBranch, Terminal, RefreshCw, BarChart, Bot, Sparkles, Search, Lightbulb, Zap, Rocket } from "lucide-react";

const workflowSteps = [
  { icon: Search, title: "Research & Analysis", desc: "Understanding business goals, market constraints, and technical feasibility." },
  { icon: Sparkles, title: "AI-Assisted Exploration", desc: "Leveraging LLMs to brainstorm architectures, compare frameworks, and explore design patterns rapidly." },
  { icon: FileCode, title: "Architecture Design", desc: "Translating business needs into technical specifications and scalable system designs." },
  { icon: Layers, title: "UI / UX Planning", desc: "Mapping out user flows and component hierarchies." },
  { icon: Code, title: "Development", desc: "Writing clean, maintainable, and type-safe code using the PERN stack, augmented by AI copilots." },
  { icon: GitBranch, title: "Code Review", desc: "Feature branching, pull requests, and peer reviews via Git and GitHub." },
  { icon: TestTube, title: "Testing", desc: "Executing unit and integration tests to guarantee logic integrity." },
  { icon: ShieldCheck, title: "Security Review", desc: "Automated SAST and secret scanning integrated into the workflow." },
  { icon: Container, title: "Docker", desc: "Packaging applications with Docker to ensure environmental consistency." },
  { icon: GitPullRequest, title: "CI/CD", desc: "GitHub Actions automating the build, test, and security check processes." },
  { icon: ServerCog, title: "Deployment", desc: "Zero-downtime deployment strategies behind Nginx reverse proxies." },
  { icon: Activity, title: "Monitoring", desc: "Tracking application health, metrics, and logs in real-time." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "Iterating based on monitoring data and user feedback." }
];

export const EngineeringPage = () => {
  return (
    <div className="py-12 md:py-20 animate-fade-in">
      <SectionHeading
        title="Engineering Philosophy & Workflow"
        subtitle="How I design, build, deploy, operate, monitor, and continuously improve enterprise software."
      />
      
      {/* Enterprise Software Mindset */}
      <div className="mb-24 mt-12">
        <div className="rounded-[2rem] border border-slate-200 glass bg-emerald-50/30 p-8 md:p-12">
          <h3 className="mb-8 text-3xl font-bold text-slate-900 font-heading text-center">
            The Enterprise Mindset
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700 leading-relaxed"><strong>Software must solve business problems.</strong> Code is just a tool; the goal is operational efficiency, revenue generation, or risk mitigation.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700 leading-relaxed"><strong>Maintainability over cleverness.</strong> Good software is easy to read, easy to test, and easy for the next engineer to understand.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700 leading-relaxed"><strong>Deployment is part of development.</strong> An application isn't "done" when it works on localhost. It's done when it's securely running in production.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700 leading-relaxed"><strong>Automation improves reliability.</strong> Manual processes lead to human error. CI/CD pipelines ensure consistency and quality.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700 leading-relaxed"><strong>Security by design.</strong> Security cannot be an afterthought. It must be woven into the SDLC via DevSecOps practices.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700 leading-relaxed"><strong>Modern engineering leverages AI.</strong> Human expertise combined with AI-assisted productivity accelerates research, development, and documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The SDLC / DevOps Workflow */}
      <div className="mb-24">
        <h3 className="mb-10 text-3xl font-bold text-slate-900 font-heading text-center">
          The Engineering Lifecycle
        </h3>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          I manage the complete Software Development Lifecycle (SDLC). This workflow ensures that every line of code is researched, tested, secure, and ready for production.
        </p>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>
          
          {/* Left Line for Mobile */}
          <div className="md:hidden absolute left-6 top-4 bottom-4 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-8 relative z-10">
            {workflowSteps.map((step, idx) => {
              const isEven = idx % 2 === 0; // true = Left side, false = Right side
              return (
                <div key={idx} className="relative flex items-center w-full">
                  
                  {/* Timeline Node (Icon) */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-emerald-100 text-emerald-600 shadow-sm z-20">
                    <step.icon size={20} />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <h4 className="mb-2 text-xl font-bold text-slate-900 font-heading">{step.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="mb-24">
        <h3 className="mb-10 text-3xl font-bold text-slate-900 font-heading text-center">
          Enterprise Architecture Pattern
        </h3>
        <div className="rounded-[2rem] border border-slate-200 glass bg-slate-50 p-8 md:p-12 overflow-x-auto">
          <div className="min-w-[800px] flex flex-col items-center space-y-6">
            
            {/* Frontend Tier */}
            <div className="w-full max-w-3xl rounded-xl border-2 border-slate-200 bg-white p-6 text-center shadow-sm relative">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center justify-center"><Layers className="mr-2" size={20}/> Presentation Layer (Frontend)</h4>
              <p className="text-slate-600 text-sm">React, Tailwind CSS, Vite (SPA)</p>
            </div>
            
            <div className="h-8 w-1 bg-emerald-400"></div>
            
            {/* Gateway Tier */}
            <div className="w-full max-w-xl rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm relative">
              <h4 className="font-bold text-emerald-900 mb-2 flex items-center justify-center"><ServerCog className="mr-2" size={20}/> API Gateway / Reverse Proxy</h4>
              <p className="text-emerald-700 text-sm">Nginx (SSL Termination, Rate Limiting, Routing)</p>
            </div>
            
            <div className="h-8 w-1 bg-emerald-400"></div>
            
            {/* Application Tier */}
            <div className="w-full max-w-3xl flex gap-6">
              <div className="flex-1 rounded-xl border-2 border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center justify-center"><Blocks className="mr-2" size={20}/> Core Backend API</h4>
                <p className="text-blue-700 text-sm">Node.js, Express, RESTful endpoints</p>
              </div>
              <div className="flex-1 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 text-center shadow-sm">
                <h4 className="font-bold text-purple-900 mb-2 flex items-center justify-center"><ShieldCheck className="mr-2" size={20}/> Auth Service</h4>
                <p className="text-purple-700 text-sm">JWT, Redis Sessions, RBAC</p>
              </div>
            </div>

            <div className="h-8 w-1 bg-blue-400"></div>

            {/* Data Tier */}
            <div className="w-full max-w-xl rounded-xl border-2 border-slate-300 bg-slate-800 p-6 text-center shadow-sm">
              <h4 className="font-bold text-white mb-2 flex items-center justify-center"><Database className="mr-2" size={20}/> Data Persistence</h4>
              <p className="text-slate-300 text-sm">PostgreSQL (Relational Data), Prisma ORM</p>
            </div>

          </div>
        </div>
      </div>

      {/* AI Productivity Principles */}
      <div className="mb-24 rounded-[2rem] border border-slate-200 bg-slate-900 text-white p-8 md:p-12 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Bot size={120} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h3 className="mb-6 flex items-center text-3xl font-bold font-heading">
            <Sparkles className="mr-4 text-emerald-400" size={32} /> AI Productivity Principles
          </h3>
          <p className="text-xl text-slate-300 leading-relaxed mb-8 italic">
            "I use AI to automate repetitive engineering tasks, explore alternative solutions, improve documentation quality, and accelerate learning."
          </p>
          <p className="text-emerald-400 font-medium text-lg border-l-4 border-emerald-500 pl-4 py-2">
            Engineering judgment, architecture decisions, and production responsibility always remain mine.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        {/* DevSecOps Focus */}
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="flex items-center mb-6">
            <ShieldCheck className="text-emerald-500 mr-4" size={32} />
            <h3 className="text-2xl font-bold text-slate-900 font-heading">Integrated DevSecOps</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            Security is not a separate phase; it is an integrated checkpoint within the CI/CD pipeline to ensure quality and prevent vulnerabilities before deployment.
          </p>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Trivy:</span> Container image scanning for CVEs.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Semgrep:</span> Static application security testing (SAST).
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">ESLint / SonarLint:</span> Code quality and linting checks.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">OWASP ZAP:</span> Dynamic application security testing.
            </li>
          </ul>
        </div>

        {/* Monitoring & Observability */}
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="flex items-center mb-6">
            <BarChart className="text-emerald-500 mr-4" size={32} />
            <h3 className="text-2xl font-bold text-slate-900 font-heading">Monitoring & Observability</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            Enterprise applications require real-time visibility. I implement robust observability stacks to proactively identify and resolve production issues.
          </p>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Prometheus:</span> Time-series metric collection.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Grafana:</span> Dashboards for visual system monitoring.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Loki & Dozzle:</span> Centralized log aggregation and container log viewing.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">Uptime Kuma:</span> Active heartbeat and uptime monitoring.
            </li>
          </ul>
        </div>
      </div>

      {/* AI Impact */}
      <div className="rounded-[2rem] border border-slate-200/60 glass bg-white/70 p-8 md:p-12">
        <h3 className="mb-10 text-3xl font-bold text-slate-900 font-heading text-center">
          How AI Improves My Engineering Workflow
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Architecture", text: "Faster architecture exploration and system design discussions." },
            { title: "Research", text: "Better technical research and rapid evaluation of open-source frameworks." },
            { title: "Documentation", text: "Improved technical writing and comprehensive API documentation generation." },
            { title: "Debugging", text: "More effective troubleshooting for complex Docker and infrastructure issues." },
            { title: "Code Quality", text: "Cleaner code reviews, refactoring suggestions, and SQL query optimizations." },
            { title: "Continuous Learning", text: "Accelerated upskilling in AWS, Kubernetes, and Platform Engineering." }
          ].map((item, i) => (
            <div key={i} className="flex items-start p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <Zap className="text-amber-500 mt-1 mr-4 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};
