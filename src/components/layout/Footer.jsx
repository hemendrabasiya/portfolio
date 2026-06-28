import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";

export const Footer = () => (
  <footer className="border-t border-[#15345b] bg-[#0a2342] py-12 text-white">
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <span className="mb-4 block text-2xl font-black tracking-tight text-white">
            HB<span className="text-[#10b981]">.</span>
          </span>
          <p className="max-w-sm text-gray-400">
            Hemendra Basiya — Software Developer & DevOps/DevSecOps Enthusiast
            building scalable and secure digital infrastructure.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="https://github.com/hemendrabasiya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-colors hover:text-[#10b981]"
              >
                <GithubIcon size={16} className="mr-2" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hemendra-basiya-acbi-221793168"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-colors hover:text-[#10b981]"
              >
                <LinkedinIcon size={16} className="mr-2" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:hemendra.basia@gmail.com"
                className="flex items-center transition-colors hover:text-[#10b981]"
              >
                <Mail size={16} className="mr-2" /> Email
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Contact</h4>
          <p className="mb-2 flex items-center text-gray-400">
            <MapPin size={16} className="mr-2" /> Vadodara, Gujarat, India
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-[#15345b] pt-8 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Hemendra Basiya. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);
