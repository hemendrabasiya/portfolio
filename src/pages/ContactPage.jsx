import { Briefcase, Mail, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "../components/icons/SocialIcons";

const CONTACT_EMAIL = "hemendra.basia@gmail.com";
const MAILTO_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Portfolio inquiry — Hemendra Basiya",
)}`;

export const ContactPage = () => {
  return (
    <div className="py-12 md:py-20 animate-fade-in">
      <SectionHeading
        title="Get in Touch"
        subtitle="I am currently open to new opportunities, especially roles in fintech and enterprise tech. Reach out directly by email."
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
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="mr-5 rounded-2xl bg-emerald-50 p-4 text-emerald-600 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:shadow-md">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">Location</h4>
                <p className="text-slate-600 font-medium">Vadodara, Gujarat, India</p>
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

          <div className="mt-16">
            <h4 className="mb-6 text-lg font-bold text-slate-900 font-heading">
              Connect on Social
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hemendrabasiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:text-slate-900 hover:shadow-md"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hemendra-basiya-acbi-221793168"
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
            <span className="font-medium text-slate-700">{CONTACT_EMAIL}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
