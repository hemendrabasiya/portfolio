import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../utils/portfolioData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.replace(/^\/+|\/+$/g, "") || "home";

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-6 z-50 w-full px-4 transition-all duration-300 md:px-8">
      <div className="relative mx-auto max-w-5xl pointer-events-auto">
        <div className="flex items-center justify-between rounded-full glass px-6 py-3 md:py-4">
          <Link
            to="/"
            className="flex flex-shrink-0 cursor-pointer flex-col origin-left transition-transform hover:scale-105"
          >
            <span className="text-xl font-black tracking-tight text-slate-900 md:text-2xl font-heading">
              HB<span className="text-emerald-500">.</span>
            </span>
          </Link>

          <nav className="hidden items-center space-x-1 rounded-full border border-slate-200/50 bg-slate-50/50 p-1 md:flex">
            {NAV_LINKS.map((link) => {
              const path = link.id === "home" ? "/" : `/${link.id}`;
              const isActive = currentPath === link.id;

              return (
                <Link
                  key={link.id}
                  to={path}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-emerald-600 shadow-sm ring-1 ring-slate-200/50"
                      : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-slate-200 bg-white/50 p-2 text-slate-600 transition-colors hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-4 origin-top animate-fade-in duration-200 md:hidden">
            <div className="rounded-3xl glass p-3">
              {NAV_LINKS.map((link) => {
                const path = link.id === "home" ? "/" : `/${link.id}`;
                const isActive = currentPath === link.id;

                return (
                  <Link
                    key={link.id}
                    to={path}
                    className={`block w-full rounded-2xl px-5 py-3.5 text-left text-base font-semibold transition-all ${
                      isActive
                        ? "border border-emerald-100/50 bg-emerald-50/80 text-emerald-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
