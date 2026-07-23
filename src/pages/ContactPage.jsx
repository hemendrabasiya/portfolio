import { useState } from "react";
import { Briefcase, CheckCircle, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "../components/icons/SocialIcons";

export const ContactPage = () => {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1000);
  };

  return (
    <div className="py-12 md:py-20 animate-fade-in">
      <SectionHeading
        title="Get in Touch"
        subtitle="I am currently open to new opportunities, especially roles based in fintech. Feel free to reach out."
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
                  href="mailto:hemendra.basia@gmail.com"
                  className="text-slate-600 transition-colors hover:text-emerald-600 font-medium"
                >
                  hemendra.basia@gmail.com
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
                className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:text-slate-900 hover:shadow-md"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hemendra-basiya-acbi-221793168"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/60 glass bg-white/70 p-8 md:p-10 shadow-sm">
          <h3 className="mb-8 text-2xl font-bold text-slate-900 font-heading">
            Send a Message
          </h3>
          {formStatus === "success" ? (
            <div className="flex items-center rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-800 shadow-inner">
              <CheckCircle className="mr-3 text-emerald-500" size={24} />
              <span className="font-medium">Thank you! Your message has been sent successfully.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 placeholder:text-slate-400 shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 placeholder:text-slate-400 shadow-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  rows="4"
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white/80 px-4 py-3 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 placeholder:text-slate-400 shadow-sm"
                  placeholder="How can we work together?"
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="primary"
                className="flex w-full justify-center py-4 text-base"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
