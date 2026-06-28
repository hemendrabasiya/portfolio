import { useEffect, useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Button } from "./components/ui/Button";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { JourneyPage } from "./pages/JourneyPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ContactPage } from "./pages/ContactPage";

const PAGE_PATHS = {
  home: "/",
  about: "/about",
  applications: "/applications",
  journey: "/journey",
  skills: "/skills",
  contact: "/contact",
};

const getPageFromLocation = () => {
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, "");

  if (!pathname) return "home";

  const match = Object.entries(PAGE_PATHS).find(
    ([, path]) => path === `/${pathname}`,
  );
  return match ? match[0] : "not-found";
};

const getPathForPage = (page) => PAGE_PATHS[page] ?? "/not-found";

export default function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromLocation());

  const navigate = (page) => {
    setCurrentPage(page);
    const nextPath = getPathForPage(page);

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromLocation());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const nextPath = getPathForPage(currentPage);

    if (window.location.pathname !== nextPath) {
      window.history.replaceState({}, "", nextPath);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigate={navigate} />;
      case "about":
        return <AboutPage />;
      case "applications":
        return <ApplicationsPage />;
      case "journey":
        return <JourneyPage />;
      case "skills":
        return <SkillsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return (
          <div className="py-32 text-center animate-in fade-in">
            <h1 className="mb-4 text-6xl font-black text-[#0a2342]">404</h1>
            <p className="mb-8 text-xl text-gray-600">Page not found.</p>
            <Button onClick={() => navigate("home")} variant="primary">
              Return Home
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 selection:bg-[#10b981] selection:text-white">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="mx-auto flex-grow w-full max-w-6xl px-4 md:px-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
