import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";

export const Footer = () => (
  <footer className="border-t border-slate-800 bg-slate-900 py-16 text-slate-400">
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <span className="mb-4 block text-2xl font-black tracking-tight text-white font-heading">
            HB<span className="text-emerald-500">.</span>
          </span>
          <p className="max-w-sm text-slate-400 leading-relaxed">
            Hemendra Basiya — Enterprise Full-Stack Engineer building secure,
            production-deployed business applications with AI-augmented workflows.
          </p>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-bold text-white font-heading">
            Quick Links
          </h4>
          <ul className="space-y-4 text-slate-400">
            <li>
              <a
                href="https://github.com/hemendrabasiya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-fit transition-colors hover:text-emerald-400"
              >
                <GithubIcon size={18} className="mr-3" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hemendra-basiya-acbi-221793168"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-fit transition-colors hover:text-emerald-400"
              >
                <LinkedinIcon size={18} className="mr-3" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:hemendra.basia@gmail.com"
                className="flex items-center w-fit transition-colors hover:text-emerald-400"
              >
                <Mail size={18} className="mr-3" /> Email
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-bold text-white font-heading">
            Location
          </h4>
          <p className="flex items-center text-slate-400">
            <MapPin size={18} className="mr-3 text-emerald-500" /> Vadodara,
            Gujarat, India
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-slate-800 pt-8 text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Hemendra Basiya. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);
