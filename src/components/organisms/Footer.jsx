import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Bagian atas: brand + kolom menu */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Kiri: brand & info */}
          <div>
            <div className="text-2xl font-extrabold">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                videobelajar
              </span>
            </div>

            {/* Tagline di atas alamat & telepon */}
            <p className="mt-3 text-sm font-semibold text-slate-700">
              Gali potensi Anda melalui pembelajaran video berkualitas.
            </p>

            {/* Alamat & Telepon */}
            <address className="mt-3 not-italic text-sm text-slate-600">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </address>
            <p className="mt-1 text-sm text-slate-600">+62-877-7123-1234</p>
          </div>

          {/* Kanan: tiga kolom (didorong ke kanan) */}
          <div className="md:col-span-3 md:flex md:justify-end">
            <div className="grid w-max grid-cols-2 gap-y-8 gap-x-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-24">
              <div>
                <h4 className="mb-3 text-sm font-semibold text-slate-900">Kategori</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Digital & Teknologi</li>
                  <li>Pemasaran</li>
                  <li>Manajemen Bisnis</li>
                  <li>Pengembangan Diri</li>
                  <li>Desain</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold text-slate-900">Perusahaan</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <Link
                      to="/tentang-kami"
                      className="text-slate-600 font-normal hover:text-slate-900"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li>FAQ</li>
                  <li>Kebijakan Privasi</li>
                  <li>Ketentuan Layanan</li>
                  <li>Bantuan</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold text-slate-900">Komunitas</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Tips Sukses</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Garis pembatas horizontal */}
        <hr className="mt-10 border-slate-200" />

        {/* Bar bawah: copyright kiri, ikon sosmed kanan */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-slate-500">©2025 videobelajar</p>

          <div className="flex items-center gap-3">
            {/* Ikon: border tipis default, menebal saat hover */}
            <button
              type="button"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full box-border border border-slate-300 bg-transparent p-0 text-slate-600 transition-all hover:border-2 hover:border-slate-400 hover:text-slate-900 focus:outline-none"
            >
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="" className="h-4 w-4" loading="lazy" />
            </button>

            <button
              type="button"
              aria-label="Facebook"
              title="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full box-border border border-slate-300 bg-transparent p-0 text-slate-600 transition-all hover:border-2 hover:border-slate-400 hover:text-slate-900 focus:outline-none"
            >
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="" className="h-4 w-4" loading="lazy" />
            </button>

            <button
              type="button"
              aria-label="Instagram"
              title="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full box-border border border-slate-300 bg-transparent p-0 text-slate-600 transition-all hover:border-2 hover:border-slate-400 hover:text-slate-900 focus:outline-none"
            >
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="" className="h-4 w-4" loading="lazy" />
            </button>

            <button
              type="button"
              aria-label="X"
              title="X"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full box-border border border-slate-300 bg-transparent p-0 text-slate-600 transition-all hover:border-2 hover:border-slate-400 hover:text-slate-900 focus:outline-none"
            >
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="" className="h-4 w-4" loading="lazy" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}