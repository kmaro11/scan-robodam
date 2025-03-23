"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import ArrowDown from "@/icons/ArrowDown.svg";

const languages = [
  { code: "en", label: "EN" },
  { code: "lt", label: "LT" },
];

export default function AuthLangSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Change language while keeping the current path
  const changeLanguage = (lang: string) => {
    const newPath = `/${lang}${pathname.replace(/^\/(en|lt)/, "")}`;
    router.push(newPath);
    setIsOpen(false);
  };

  const getLanguage = (pathname: string) => {
    return (
      languages.find((l) => pathname.startsWith(`/${l.code}`))?.label || "EN"
    );
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-white flex items-center justify-center gap-1 text-xl text-blue"
      >
        {getLanguage(pathname)}
        <span
          className={twMerge(
            "transition-transform duration-300 w-[11px] h-[8px]",
            isOpen ? "rotate-180" : ""
          )}
        >
          <ArrowDown className="text-blue" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute bg-white shadow-xl rounded-md w-max border border-gray-100">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="block w-full px-4 py-2 text-left text-blue text-base border-b border-gray-100 last:border-0"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
