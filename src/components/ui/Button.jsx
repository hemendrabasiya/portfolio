export const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 focus:ring-slate-200",
    text: "text-slate-600 hover:text-slate-900 px-0 py-0",
  };

  const classes = `${baseStyle} ${variants[variant]} ${className}`.trim();

  if (href) {
    const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <a
        href={href}
        {...(isMailOrTel
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" })}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};
