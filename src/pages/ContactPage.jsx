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
    <div className="py-12 animate-in fade-in duration-500">
      <SectionHeading
        title="Get in Touch"
        subtitle="I am currently open to new opportunities, especially roles based in fintech. Feel free to reach out."
      />
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-[#e2e8f0] p-3 text-[#0a2342]">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0a2342]">Email</h4>
                <a
                  href="mailto:hemendra.basia@gmail.com"
                  className="text-gray-600 transition-colors hover:text-[#10b981]"
                >
                  hemendra.basia@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-[#e2e8f0] p-3 text-[#0a2342]">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0a2342]">Location</h4>
                <p className="text-gray-600">Vadodara, Gujarat, India</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-[#e2e8f0] p-3 text-[#0a2342]">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0a2342]">
                  Availability
                </h4>
                <p className="text-gray-600">
                  Open for full-time opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="mb-4 text-lg font-bold text-[#0a2342]">
              Connect on Social
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hemendrabasiya"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-200 bg-[#f8fafc] p-3 text-gray-600 transition-all hover:border-[#0a2342] hover:text-[#0a2342]"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hemendra-basiya-acbi-221793168"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-200 bg-[#f8fafc] p-3 text-gray-600 transition-all hover:border-[#0077b5] hover:text-[#0077b5]"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-100 bg-[#f8fafc] p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#0a2342]">
            Send a Message
          </h3>
          {formStatus === "success" ? (
            <div className="flex items-center rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
              <CheckCircle className="mr-2" size={20} />
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none transition-shadow focus:border-transparent focus:ring-2 focus:ring-[#10b981]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none transition-shadow focus:border-transparent focus:ring-2 focus:ring-[#10b981]"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  rows="4"
                  className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-2 outline-none transition-shadow focus:border-transparent focus:ring-2 focus:ring-[#10b981]"
                  placeholder="How can we work together?"
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="primary"
                className="flex w-full justify-center py-3"
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
