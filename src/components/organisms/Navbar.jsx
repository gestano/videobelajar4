import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const categories = [
    "Digital & Teknologi",
    "Pemasaran",
    "Manajemen Bisnis",
    "Pengembangan Diri",
    "Desain",
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Kiri: Logo */}
        <Link to="/" className="text-2xl font-extrabold">
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            videobelajar
          </span>
        </Link>

        {/* Kanan: Kategori (teks + dropdown) + Auth */}
        <div className="flex items-center gap-3">
          {/* Trigger teks (tanpa kotak saat hover) */}
          <div className="relative" ref={menuRef}>
            <span
              role="button"
              tabIndex={0}
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen((s) => !s);
                }
              }}
              className="text-sm font-normal text-slate-600 hover:text-slate-900 cursor-pointer select-none outline-none"
            >
              Kategori
            </span>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-60 rounded-lg border border-slate-200 bg-white shadow-lg z-50"
              >
                <ul className="py-2">
                  {categories.map((item) => (
                    <li key={item}>
                      {/* Klikable, gaya 'tulisan biasa' */}
                      <a
                        href="#"
                        role="menuitem"
                        className="block w-full px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-normal"
                        style={{ fontWeight: 400 }}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Masuk: tombol biru */}
          <NavLink
            to="/login"
            className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Masuk
          </NavLink>

          {/* Daftar: tombol hijau */}
          <NavLink
            to="/register"
            className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Daftar
          </NavLink>
        </div>
      </nav>
    </header>
  );
}