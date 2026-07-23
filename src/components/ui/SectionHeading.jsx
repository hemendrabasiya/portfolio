export const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12 max-w-3xl">
    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl font-heading">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
    <div className="mt-6 h-1.5 w-16 rounded-full bg-emerald-500"></div>
  </div>
);
