export const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12 max-w-3xl">
    <h2 className="text-3xl font-bold text-[#0a2342] sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
    <div className="mt-4 h-1 w-16 rounded-full bg-[#10b981]"></div>
  </div>
);
