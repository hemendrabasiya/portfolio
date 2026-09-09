import { Link } from "react-router-dom";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "./Button";
import { GithubIcon } from "../icons/SocialIcons";

export const AppCard = ({ app }) => {
  const hasGithub = Boolean(app.github);
  const hasCaseStudy = Boolean(app.caseStudy);
  const openLabel =
    app.status === "Public Demo"
      ? "Public Demo"
      : app.status === "Live Demo" || app.status === "Live Product"
        ? "Live Demo"
        : app.status === "Capability"
          ? "Open Demo"
          : app.status === "Case Study"
            ? "Open"
            : "Open";
  const isLiveStatus =
    app.status === "Live" ||
    app.status === "Live Demo" ||
    app.status === "Live Product" ||
    app.status === "Public Demo";
  const isCapability = app.status === "Capability";

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-slate-900 font-heading">{app.name}</h3>
          {app.badge && (
            <span className="mt-2 inline-block rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold tracking-wide text-slate-600 uppercase">
              {app.badge}
            </span>
          )}
        </div>
        <span
          className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
            isLiveStatus
              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
              : app.status === "Case Study" || isCapability
                ? "bg-slate-100 text-slate-700 border border-slate-200"
                : "bg-blue-50 text-blue-700 border border-blue-100"
          }`}
        >
          {app.status}
        </span>
      </div>
      <p className="mb-8 flex-grow text-slate-600 leading-relaxed">{app.description}</p>
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {app.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {app.url && (
          <Button
            href={app.url}
            variant="primary"
            className="flex-1 min-w-[7.5rem] py-2 text-sm shadow-none hover:shadow-md"
          >
            <ExternalLink size={16} className="mr-2" /> {openLabel}
          </Button>
        )}
        {hasCaseStudy && (
          <Link
            to={app.caseStudy}
            className="flex-1 min-w-[7.5rem] inline-flex items-center justify-center px-6 py-2 rounded-xl font-semibold text-sm border-2 border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
          >
            <FileText size={16} className="mr-2" /> Case Study
          </Link>
        )}
        {hasGithub && (
          <Button
            href={app.github}
            variant="outline"
            className="flex-1 min-w-[7.5rem] py-2 text-sm shadow-none hover:shadow-md"
          >
            <GithubIcon size={16} className="mr-2" /> Code
          </Button>
        )}
      </div>
    </div>
  );
};
