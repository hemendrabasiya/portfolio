import { ExternalLink } from "lucide-react";
import { Button } from "./Button";
import { GithubIcon } from "../icons/SocialIcons";

export const AppCard = ({ app }) => (
  <div className="flex h-full flex-col rounded-lg border border-gray-100 bg-[#f8fafc] p-6 transition-all duration-300 hover:shadow-lg">
    <div className="mb-4 flex items-start justify-between">
      <h3 className="text-xl font-bold text-[#0a2342]">{app.name}</h3>
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          app.status === "Live"
            ? "bg-green-100 text-green-800"
            : "bg-blue-100 text-blue-800"
        }`}
      >
        {app.status}
      </span>
    </div>
    <p className="mb-6 flex-grow text-gray-600">{app.description}</p>
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {app.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-auto flex gap-4">
      <Button href={app.url} variant="primary" className="flex-1 py-2 text-sm">
        <ExternalLink size={16} className="mr-2" /> Open
      </Button>
      <Button
        href={app.github}
        variant="outline"
        className="flex-1 py-2 text-sm"
      >
        <GithubIcon size={16} className="mr-2" /> Code
      </Button>
    </div>
  </div>
);
