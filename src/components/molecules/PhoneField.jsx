import { useState } from "react";
import Input from "../atoms/Input.jsx";

export default function PhoneField({ id = "phone", label = "No. HP", value, onChange, required }) {
  const [code, setCode] = useState("+62");
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex">
        <select
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="mr-2 inline-flex h-10 items-center rounded-md border border-slate-300 bg-white px-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="+62">🇮🇩 +62</option>
          <option value="+60">🇲🇾 +60</option>
          <option value="+65">🇸🇬 +65</option>
        </select>
        <Input
          id={id}
          type="tel"
          value={value}
          onChange={onChange}
          placeholder="81234567890"
          className="flex-1"
        />
      </div>
      <p className="text-xs text-slate-500">Kode negara: {code}</p>
    </div>
  );
}