"use client";

import { useI18n } from "@/contexts/I18nContext";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const Navigation = ({ lang }: { lang: "en" | "lt" }) => {
  const { t } = useI18n();
  const pathName = usePathname();
  const nav = [
    {
      name: "navigation.howItWorks",
      href: "how-it-works",
    },
    {
      name: "navigation.price",
      href: "prices",
    },
    {
      name: "navigation.contacts",
      href: "contacts",
    },
  ];
  return (
    <nav className="flex pt-20">
      <ul className="flex flex-col lg:flex-row gap-y-5 max-w-max w-full">
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={`/${lang}/${item.href}`}
              className={twMerge(
                "px-4 2xl:px-6 py-3 text-3xl lg:text-xl xl:text-[28px] hover:text-blue transition-colors duration-200",
                pathName === `/${lang}/${item.href}` && "text-blue"
              )}
            >
              {t(item.name)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
