"use client";

import { LINKS } from "@/constants/Links";
import { useI18n } from "@/contexts/I18nContext";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const NavigationItems = ({ lang }: { lang: "lt" }) => {
  const { t } = useI18n();
  const pathName = usePathname();
  const nav = [
    {
      name: "navigation.howItWorks",
      href: LINKS.HOWITWORKS,
    },
    {
      name: "navigation.price",
      href: LINKS.PRICES,
    },
    {
      name: "navigation.contacts",
      href: LINKS.CONTACTS,
    },
  ];
  return (
    <>
      {nav.map((item) => (
        <li
          key={item.href}
          className="list-none border-b border-primary md:border-0 pb-2.5 md:pb-0 mb-[14px] md:mb-0"
        >
          <a
            href={`/${lang}/${item.href}`}
            className={twMerge(
              "text-[30px] md:text-xl leading-[100%] text-primary font-bold md:font-normal",
              pathName === `/${lang}/${item.href}` && "underline"
            )}
          >
            {t(item.name)}
          </a>
        </li>
      ))}
    </>
  );
};
