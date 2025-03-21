"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

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

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 border rounded-md bg-white shadow-sm flex items-center gap-2"
      >
        {languages.find((l) => pathname.startsWith(`/${l.code}`))?.label ||
          "EN"}{" "}
        ▼
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white shadow-md rounded-md w-24">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
