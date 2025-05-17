"use client";
import { useI18n } from "@/contexts/I18nContext";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { useState } from "react";
import { Navigation } from "./Navigation";
import { Language } from "@/types/language";
import { LINKS } from "@/constants/Links";
import GreenLogo from "@/icons/GreenLogo.svg";
import { NavigationItems } from "./NavigationItems";
import Hamburger from "@/icons/Hamburger.svg";
import Close from "@/icons/Close.svg";

export const Header = ({ lang }: Language) => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  // return "";
  return (
    <header className="fixed flex items-center top-0 left-0 right-0 bg-white h-20 lg:h-[88px] pt-7 lg:pt-0 px-5 w-full">
      <div className="flex items-center max-w-[1256px] mx-auto w-full">
        <a
          href={`/${lang}`}
          className="z-50 mr-auto md:mr-6 max-w-[160px] xl:max-w-[261px] w-full"
        >
          <GreenLogo className="max-w-[131px] lg:max-w-[160px] w-full" />
        </a>

        <div
          className={twMerge(
            "absolute pointer-events-none lg:hidden pt-[88px] px-4 inset-0 lg:pt-0 h-0 lg:h-auto opacity-0 bg-white lg:relative lg:mr-auto transition-all duration-300",
            isOpen && "h-[100dvh] opacity-100 pointer-events-auto"
          )}
        >
          <Navigation lang={lang} />
        </div>

        <div className="hidden lg:flex gap-x-[30px] mr-14 flex-shrink-0 ml-auto">
          <NavigationItems lang={lang} />
        </div>

        <div className="z-50 flex gap-5 items-center">
          <Button
            href={`/${lang}/${LINKS.AUTH.LOGIN}`}
            variant="green-dark"
            size="green-normal"
            className="h-6 lg:h-11 text-sm px-4 lg:px-7"
          >
            {t("common.login")}
          </Button>

          <div className="flex lg:hidden relative w-[26px] items-center justify-center">
            <button
              aria-label="open menu"
              className={twMerge(
                "absolute opacity-100 transition-opacity duration-300 pointer-events-auto",
                isOpen && "opacity-0 pointer-events-none"
              )}
              onClick={() => setIsOpen(true)}
            >
              <Hamburger />
            </button>
            <button
              aria-label="close menu"
              className={twMerge(
                "absolute opacity-0 transition-opacity duration-300 pointer-events-none",
                isOpen && "opacity-100 pointer-events-auto"
              )}
              onClick={() => setIsOpen(false)}
            >
              <Close />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
