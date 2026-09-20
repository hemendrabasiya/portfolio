import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  JOURNEY_DATA,
} from "../utils/portfolioData";
import { CheckCircle, Code, GitBranch, ShieldCheck, Server } from "lucide-react";

const journeyIconMap = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  check: CheckCircle,
  map: MapPin,
  server: Server,
  code: Code,
  "git-branch": GitBranch,
  "shield-check": ShieldCheck,
};

export const ExperiencePage = () => (
  <div className="py-12 md:py-20 animate-fade-in">
    <SectionHeading
      title="Experience"
      subtitle="Professional employment history aligned with banking operations, full-stack development, and digital payment operations."
    />

    <div className="mt-12 space-y-8 mb-24">
      {EXPERIENCE_DATA.map((job, index) => (
        <article
          key={job.id}
          className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                {job.role}
              </h3>
              <p className="mt-1 text-lg font-semibold text-emerald-700">
                {job.employer}
              </p>
            </div>
            <div className="md:text-right text-slate-600 shrink-0">
              <p className="font-medium">{job.period}</p>
              <p className="mt-1 flex items-center md:justify-end gap-1.5 text-sm">
                <MapPin size={14} className="text-emerald-500" />
                {job.location}
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {job.highlights.map((item) => (
              <li key={item} className="flex items-start text-slate-700 leading-relaxed">
                <span className="mt-2 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>

    <div className="mb-24">
      <SectionHeading
        title="Career Progression"
        subtitle="How banking-domain experience and software engineering connect."
      />
      <div className="relative mx-auto mt-12 max-w-4xl">
        <div className="absolute bottom-0 left-6 top-0 w-0.5 -translate-x-1/2 bg-slate-200 md:left-1/2 rounded-full" />
        {JOURNEY_DATA.map((item, index) => {
          const Icon = journeyIconMap[item.icon] || CheckCircle;
          return (
            <div
              key={`${item.year}-${item.title}`}
              className={`relative mb-12 flex items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-50 bg-emerald-500 text-white shadow-lg md:left-1/2">
                <Icon size={20} />
              </div>
              <div
                className={`w-full pl-16 pr-4 md:w-1/2 md:pl-10 md:pr-12 ${
                  index % 2 === 0 ? "md:pl-12 md:pr-10" : ""
                }`}
              >
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="mb-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600">
                    {item.year}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <div className="grid gap-8 md:grid-cols-2 mb-12">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="mb-6 flex items-center text-2xl font-bold text-slate-900 font-heading">
          <GraduationCap className="mr-3 text-emerald-600" size={28} />
          Education
        </h3>
        {EDUCATION_DATA.map((edu) => (
          <div key={edu.id}>
            <p className="font-bold text-slate-900">{edu.degree}</p>
            <p className="mt-1 text-emerald-700 font-medium">{edu.institution}</p>
            <p className="mt-1 text-sm text-slate-600">
              {edu.location} · {edu.period}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="mb-6 flex items-center text-2xl font-bold text-slate-900 font-heading">
          <Award className="mr-3 text-emerald-600" size={28} />
          Certifications
        </h3>
        <ul className="space-y-5">
          {CERTIFICATIONS_DATA.map((cert) => (
            <li key={cert.id}>
              <p className="font-bold text-slate-900">{cert.name}</p>
              <p className="text-sm text-slate-600">
                {cert.issuer} · {cert.date}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>

    <p className="text-sm text-slate-500 text-center max-w-2xl mx-auto">
      Portfolio projects such as the Multi-Tenant HRMS SaaS are listed under Work. They
      demonstrate engineering capabilities separately from employment responsibilities.
    </p>
  </div>
);
