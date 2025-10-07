import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/atoms/Button.jsx";
import FormField from "../components/molecules/FormField.jsx";
import PasswordField from "../components/molecules/PasswordField.jsx";
import PhoneField from "../components/molecules/PhoneField.jsx";
import AuthHeader from "../components/organisms/AuthHeader.jsx";

const googleLogo = "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg";

export default function Register() {
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen bg-amber-50/40 flex flex-col">
      {/* Header kiri-atas, sticky */}
      <AuthHeader />

      {/* Main: center form */}
      <main className="flex-1 grid place-items-center px-4 py-8">
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800">Buat Akun</h1>
            <p className="mt-1 text-slate-600">Gabung dan mulai belajar di videobelajar.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const data = Object.fromEntries(fd);
              data.phone = phone;

              if (data.password !== data.confirmPassword) {
                alert("Konfirmasi kata sandi tidak cocok.");
                return;
              }

              console.log("REGISTER:", data);
              alert("Register (dummy) tersimpan!");
            }}
            className="mt-6 space-y-4"
          >
            <FormField id="name" name="name" label="Nama Lengkap" required placeholder="Nama lengkapmu" />
            <FormField id="email" name="email" type="email" label="E-Mail" required placeholder="nama@email.com" />
            <PhoneField id="phone" label="No. Hp" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            <PasswordField id="password" name="password" label="Kata Sandi" required />
            <PasswordField id="confirmPassword" name="confirmPassword" label="Konfirmasi Kata Sandi" required />

            <Button type="submit" variant="primary" className="w-full">Daftar</Button>

            <Link to="/login">
              <Button type="button" variant="secondary" className="mt-2 w-full">Masuk</Button>
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
              Daftar dengan Google
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}