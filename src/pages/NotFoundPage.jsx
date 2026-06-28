import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";

export const NotFoundPage = () => (
  <div className="flex min-h-[70vh] items-center justify-center py-20">
    <div className="max-w-xl rounded-3xl border border-gray-100 bg-[#f8fafc] p-10 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#10b981]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-[#0a2342]">
        Page not found
      </h1>
      <p className="mt-4 text-base leading-8 text-gray-600">
        The page you are looking for is unavailable or may have moved.
      </p>
      <Button
        onClick={() => window.location.replace("/")}
        variant="primary"
        className="mx-auto mt-8"
      >
        <ArrowLeft size={16} /> Return Home
      </Button>
    </div>
  </div>
);
