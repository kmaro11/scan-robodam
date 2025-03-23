import React, { ChangeEvent, useState } from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
  required?: boolean;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full flex flex-col">
      <label htmlFor={name} className="mb-6 text-xl font-bold text-blue">
        {label}
        {required && <>*</>}
      </label>
      <div className="relative w-full">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
          autoComplete="off"
          className="border border-gray-200 w-full rounded-[5px] placeholder:text-gray-200 text-xl h-[50px] px-4"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-0 right-0 bottom-0 rounded-tr-[5px] rounded-br-[5px] bg-blue w-[56px]"
          >
            {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
            {showPassword ? "icona" : "icona"}
          </button>
        )}
      </div>
    </div>
  );
};
