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
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#0a2342] text-white hover:bg-[#15345b] focus:ring-[#0a2342]",
    secondary:
      "bg-[#10b981] text-white hover:bg-[#059669] focus:ring-[#10b981]",
    outline:
      "border-2 border-[#0a2342] text-[#0a2342] hover:bg-gray-50 focus:ring-[#0a2342]",
    text: "text-gray-600 hover:text-[#0a2342] px-0 py-0",
  };

  const classes = `${baseStyle} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
