import { Link } from "react-router-dom";
import Button from "../components/atoms/Button.jsx";
import FormField from "../components/molecules/FormField.jsx";
import PasswordField from "../components/molecules/PasswordField.jsx";
import AuthHeader from "../components/organisms/AuthHeader.jsx";

const googleLogo = "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg";

export default function Login() {
  return (
    <div className="min-h-screen bg-amber-50/40 flex flex-col">
      {/* Header kiri-atas, sticky */}
      <AuthHeader />

      {/* Main: center form */}
      <main className="flex-1 grid place-items-center px-4 py-8">
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800">Masuk ke Akun</h1>
            <p className="mt-1 text-slate-600">Yuk, lanjutin belajarmu di videobelajar.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              console.log("LOGIN:", Object.fromEntries(form));
              alert("Login (dummy) berhasil!");
            }}
            className="mt-6 space-y-4"
          >
            <FormField id="email" name="email" label="E-Mail" required placeholder="nama@email.com" />
            <PasswordField id="password" name="password" label="Kata Sandi" required />

            <div className="flex items-center justify-end">
              <Link to="#" className="text-sm text-slate-600 hover:text-slate-900">Lupa Password?</Link>
            </div>

            <Button type="submit" variant="primary" className="w-full">Masuk</Button>

            <Link to="/register">
              <Button type="button" variant="secondary" className="mt-2 w-full">Daftar</Button>
            </Link>

            <div className="flex items-center gap-3 py-2">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-500">atau</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <Button type="button" variant="outline" className="w-full">
              <img
                src={googleLogo}
                alt="Google"
                className="mr-2 h-5 w-5"
                loading="lazy"
                width={20}
                height={20}
              />
              Masuk dengan Google
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}