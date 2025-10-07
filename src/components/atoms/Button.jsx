import cn from "classnames";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors";
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm md:text-base",
    lg: "px-5 py-3 text-base md:text-lg",
  };
  const variants = {
    primary:
      "bg-green-500 hover:bg-green-600 text-white shadow-sm focus:ring-2 focus:ring-green-400",
    secondary:
      "bg-green-100 hover:bg-green-200 text-green-700 focus:ring-2 focus:ring-green-200",
    outline:
      "border border-slate-300 hover:bg-slate-50 text-slate-700 bg-white",
    ghost: "text-slate-700 hover:bg-slate-100",

    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-sm focus:ring-2 focus:ring-red-400",
    muted:
      "bg-slate-100 hover:bg-slate-200 text-slate-700 focus:ring-2 focus:ring-slate-200",
  };

  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  );
}