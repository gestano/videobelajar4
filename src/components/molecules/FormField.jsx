// src/components/molecules/FormField.jsx
import cn from "classnames";
import Input from "../atoms/Input.jsx";

export default function FormField({
  id,
  label,
  required,
  type = "text",
  rightAdornment,
  helpText,
  ...inputProps
}) {
  const { className: inputClassName, ...rest } = inputProps;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-slate-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <Input
          id={id}
          type={type}
          className={cn(inputClassName, rightAdornment && "pr-12")}
          {...rest}
        />
        {rightAdornment && (
          <div className="absolute inset-y-0 right-2 flex items-center">
            {rightAdornment}
          </div>
        )}
      </div>
      {helpText && <p className="text-xs text-slate-500">{helpText}</p>}
    </div>
  );
}