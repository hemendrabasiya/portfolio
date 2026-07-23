import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Button } from "./components/ui/Button";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { JourneyPage } from "./pages/JourneyPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ContactPage } from "./pages/ContactPage";
import { EngineeringPage } from "./pages/EngineeringPage";
import { HrmsCaseStudyPage } from "./pages/HrmsCaseStudyPage";

const NotFound = () => (
  <div className="py-32 flex flex-col items-center justify-center animate-fade-in">
    <h1 className="mb-4 text-6xl font-black heading-gradient">404</h1>
    <p className="mb-8 text-xl text-slate-600">Page not found.</p>
    <Link to="/">
      <Button variant="primary">Return Home</Button>
    </Link>
  </div>
);

export default function PortfolioApp() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 selection:bg-emerald-500 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="mx-auto flex-grow w-full max-w-6xl px-4 md:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hrms-case-study" element={<HrmsCaseStudyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
