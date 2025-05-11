"use client";

import { LINKS } from "@/constants/Links";
import { useI18n } from "@/contexts/I18nContext";
import Link from "next/link";
import Phone from "@/icons/Phone.svg";
import Mail from "@/icons/Mail.svg";
import GreenLightLogo from "@/icons/GreenLightLogo.svg";

export const Footer = ({ lang }: { lang: "en" | "lt" }) => {
  const { t } = useI18n();
  return (
    <footer className="bg-green-100 px-5 pb-7 md:pb-12 pt-11">
      <div className="max-w-[1256px] mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-x-10 justify-between md:items-center px-4 md:px-0 mb-[90px] md:mb-[150px]">
            <Link href="/" className="mb-20 md:mb-0">
              <GreenLightLogo />
            </Link>
            <div className="flex flex-col md:flex-row gap-x-7 gap-y-6">
              <a
                href={`/${lang}/${LINKS.HOWITWORKS}`}
                className="underline text-white text-lg leading-[100%]"
              >
                {t("navigation.howItWorks")}
              </a>
              <a
                href={`/${lang}/${LINKS.PRICES}`}
                className="text-white text-lg leading-[100%]"
              >
                {t("navigation.price")}
              </a>
              <a
                href={`/${lang}/${LINKS.CONTACTS}`}
                className="text-white text-lg leading-[100%]"
              >
                {t("navigation.contacts")}
              </a>
              <a
                href={`/${lang}/${LINKS.PRIVACYPOLICY}`}
                className="md:hidden text-white text-lg leading-[100%]"
              >
                {t("navigation.privacyPolicy")}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="order-2 lg:order-none mt-[105px] lg:mt-0 flex items-center gap-x-14">
              <div className="text-white text-lg leading-[100%]">
                {t("navigation.copyright")}
              </div>
              <a
                href={`/${lang}/${LINKS.PRIVACYPOLICY}`}
                className="hidden md:inline text-white text-lg leading-[100%]"
              >
                {t("navigation.privacyPolicy")}
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-y-6 px-4 md:px-0 gap-x-10">
              <a
                href="mailto:admin@robodam.com"
                className="text-white text-lg leading-[100%] flex items-center gap-4"
              >
                <div className="w-[22px] flex justify-center">
                  <Mail classNa me="max-w-[22px]" />
                </div>
                admin@robodam.com
              </a>
              <a
                href="tel:+37065749748"
                className="text-white text-lg leading-[100%] flex items-center gap-4"
              >
                <div className="w-[22px] flex justify-center">
                  <Phone className="max-w-[16px]" />
                </div>
                +370 657 49 748
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
