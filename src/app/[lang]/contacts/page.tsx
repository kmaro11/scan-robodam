"use client";

import { useI18n } from "@/contexts/I18nContext";
import Mail from "@/icons/Mail.svg";
import Phone from "@/icons/Phone.svg";

export default function Contacts() {
  const { t } = useI18n();
  return (
    <section className="pt-20 pb-[120px] lg:pb-[230px] lg:pt-[125px] max-w-[1256px] mx-auto px-5">
      <h1 className="max-w-[593px] w-full mx-auto text-center text-[30px] lg:text-[40px] font-bold leading-[130%] mb-24 mb:11">
        {t("contacts.title")}
      </h1>
      <div className="mx-auto max-w-max flex flex-col lg:flex-row items-center gap-x-20">
        <a
          href="mailto:admin@robodam.com"
          className="text-primary text-[22px] leading-[44px] flex items-center gap-4 mb-5 lg:mb-0"
        >
          <div className="w-[24px] flex justify-center">
            <Mail className="max-w-[24px] text-primary" />
          </div>
          admin@robodam.com
        </a>
        <a
          href="tel:+37065749748"
          className="text-primary text-[22px] leading-[44px] flex items-center gap-4"
        >
          <div className="w-[22px] flex justify-center">
            <Phone className="max-w-[18px] text-primary" />
          </div>
          +370 657 49 748
        </a>
      </div>
    </section>
  );
}
