import cn from "classnames";

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 placeholder-slate-400",
        "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500",
        className
      )}
      {...props}
    />
  );
}