"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const languages = [
  { code: "en", label: "EN" },
  { code: "lt", label: "LT" },
];

export default function LanguageSwitcher() {
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
        className="w-12 h-12 lg:h-[77px] lg:w-[90px] bg-white flex items-center justify-center gap-1 font-bold text-xl xl:text-[28px]"
      >
        {getLanguage(pathname)}
        <span
          className={twMerge(
            "transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        >
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0H0L6.75862 10L14 0Z" fill="black" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute bg-white shadow-xl rounded-md w-24 border border-gray-100">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="block w-full px-4 py-2 text-left hover:text-blue text-base border-b border-gray-100 last:border-0"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
