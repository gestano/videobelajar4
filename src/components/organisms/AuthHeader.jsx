import { Link } from "react-router-dom";

export default function AuthHeader({ position = "sticky", className = "" }) {
  const positionClass =
    position === "fixed" ? "fixed top-0 left-0 right-0" : "sticky top-0";

  return (
    <header className={`${positionClass} z-30 w-full bg-transparent ${className}`}>
      <div className="px-4 py-4 text-left">
        <Link to="/" className="block text-2xl font-extrabold">
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            videobelajar
          </span>
        </Link>
      </div>
    </header>
  );
}