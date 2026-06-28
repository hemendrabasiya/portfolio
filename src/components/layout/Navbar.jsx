import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../utils/portfolioData";

export const Navbar = ({ currentPage, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (pageId) => {
    navigate(pageId);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-6 z-50 w-full px-4 transition-all duration-300 md:px-8">
      <div className="relative mx-auto max-w-5xl pointer-events-auto">
        <div className="flex items-center justify-between rounded-full border border-gray-200/80 bg-white/85 px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md md:py-4">
          <div
            className="flex flex-shrink-0 cursor-pointer flex-col origin-left transition-transform hover:scale-105"
            onClick={() => handleNavClick("home")}
          >
            <span className="text-xl font-black tracking-tight text-[#0a2342] md:text-2xl">
              HB<span className="text-[#10b981]">.</span>
            </span>
          </div>

          <nav className="hidden items-center space-x-1 rounded-full border border-gray-100 bg-gray-50/50 p-1 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  currentPage === link.id
                    ? "bg-white text-[#10b981] shadow-sm ring-1 ring-gray-200/50"
                    : "text-gray-600 hover:bg-white/60 hover:text-[#0a2342]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-gray-100 bg-gray-50 p-2 text-gray-600 transition-colors hover:text-[#0a2342]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-4 origin-top animate-in fade-in slide-in-from-top-4 duration-200 md:hidden">
            <div className="rounded-3xl border border-gray-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-md">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full rounded-2xl px-5 py-3.5 text-left text-base font-semibold transition-all ${
                    currentPage === link.id
                      ? "border border-emerald-100/50 bg-emerald-50/80 text-[#10b981]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#0a2342]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
