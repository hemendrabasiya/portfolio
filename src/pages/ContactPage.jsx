import { Briefcase, Mail, MapPin, Phone, Send, FileText } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "../components/icons/SocialIcons";
import { PROFILE } from "../utils/portfolioData";

const MAILTO_HREF = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
  "Portfolio inquiry — Hemendra Basiya",
)}`;

export const ContactPage = () => {
  return (
    <div className="py-12 md:py-20 animate-fade-in">
      <SectionHeading
        title="Contact"
        subtitle="Open to full-stack, software engineering and FinTech / banking technology roles — including international opportunities."
      />
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <div className="space-y-8">
            <div className="flex items-start group">
              <div className="mr-5 rounded-2xl bg-emerald-50 p-4 text-emerald-600 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:shadow-md">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">Email</h4>
                <a
                  href={MAILTO_HREF}
                  className="text-slate-600 transition-colors hover:text-emerald-600 font-medium"
                >
                  {PROFILE.email}
                </a>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="mr-5 rounded-2xl bg-emerald-50 p-4 text-emerald-600 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:shadow-md">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">Phone</h4>
                <a
                  href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                  className="text-slate-600 transition-colors hover:text-emerald-600 font-medium"
                >
                  {PROFILE.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="mr-5 rounded-2xl bg-emerald-50 p-4 text-emerald-600 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:shadow-md">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">Location</h4>
                <p className="text-slate-600 font-medium">{PROFILE.location}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="mr-5 rounded-2xl bg-emerald-50 p-4 text-emerald-600 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:shadow-md">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Availability
                </h4>
                <p className="text-slate-600 font-medium">
                  Open for full-time opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button href={PROFILE.resumeUrl} variant="outline" className="mb-10">
              <FileText size={18} className="mr-2" />
              Download Resume (PDF)
            </Button>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-slate-900 font-heading">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:text-slate-900 hover:shadow-md"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/60 glass bg-white/70 p-8 md:p-10 shadow-sm flex flex-col justify-center">
          <h3 className="mb-4 text-2xl font-bold text-slate-900 font-heading">
            Email Me Directly
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            Prefer a quick start? Open your email client with a pre-filled subject line. I
            read every message and typically reply within a few business days.
          </p>
          <Button
            href={MAILTO_HREF}
            variant="primary"
            className="flex w-full justify-center py-4 text-base"
          >
            <Send size={18} className="mr-2" />
            Compose Email
          </Button>
          <p className="mt-6 text-sm text-slate-500 text-center">
            Or copy:{" "}
            <span className="font-medium text-slate-700">{PROFILE.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
