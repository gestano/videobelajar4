// src/components/molecules/PasswordField.jsx
import { useState } from "react";
import FormField from "./FormField.jsx";

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Heroicons Eye (outline) */}
    <path d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.403 4.5 12 4.5c4.598 0 8.578 3.01 9.964 7.178.07.2.07.445 0 .644C20.578 16.49 16.598 19.5 12 19.5c-4.597 0-8.577-3.01-9.964-7.178z" />
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Heroicons Eye Slash (outline) */}
    <path d="M3.98 8.223a10.477 10.477 0 00-2.122 3.777C3.43 16.046 7.398 19.5 12 19.5c1.73 0 3.372-.406 4.82-1.126" />
    <path d="M6.228 6.228A10.451 10.451 0 0112 4.5c4.602 0 8.57 3.454 10.142 7.5a10.523 10.523 0 01-4.195 4.944" />
    <path d="M9.879 9.879a3 3 0 104.242 4.242" />
    <path d="M3 3l18 18" />
  </svg>
);

export default function PasswordField(props) {
  const [show, setShow] = useState(false);

  return (
    <FormField
      {...props}
      type={show ? "text" : "password"}
      rightAdornment={
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
          className="inline-flex h-9 w-9 items-center justify-center p-0 !bg-transparent !border-0 shadow-none text-slate-400 hover:text-slate-600 focus:outline-none"
        >
          {show ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      }
    />
  );
}