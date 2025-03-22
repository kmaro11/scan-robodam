"use client";

import { useI18n } from "@/contexts/I18nContext";

export default function Contacts() {
  const { t } = useI18n();
  return (
    <section className="custom-container py-24 md:pt-[126px] md:pb-[180px]">
      <h1 className="flex flex-col mb-20 md:mb-[350px]">
        <span className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold text-blue">
          {t("contacts.title")}
        </span>
        <span className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold text-blue">
          {t("contacts.title2")}
        </span>
      </h1>
      <div className="flex flex-wrap gap-10 md:gap-y-20 gap-x-10 justify-between">
        <div>
          <div className="text-xl md:text-[30px] md:leading-[40px] mb-5 md:mb-10 underline">
            {t("contacts.contact")}:
          </div>
          <a
            href="mailto:admin@robodam.com"
            className="text-3xl md:text-[40px] 2xl:text-[70px] md:leading-[50px] 2xl:leading-[80px] font-bold text-blue block"
          >
            admin@robodam.com
          </a>
          <a
            href="phone:+370 657 59 563"
            className="text-3xl md:text-[40px] 2xl:text-[70px] md:leading-[50px] 2xl:leading-[80px] font-bold text-blue block"
          >
            +370 657 59 563
          </a>
        </div>
        <div>
          <div className="text-xl md:text-[30px] md:leading-[40px] mb-5 md:mb-10 underline">
            {t("contacts.visit")}:
          </div>
          <div className="text-xl 2xl:text-[30px] 2xl:leading-[40px]">
            <p>UAB Robodam</p>
            <p>Vytauto pr. 27, LT- 44352, Kaunas, Lietuva</p>
          </div>
        </div>
        <ul>
          <li className="text-xl 2xl:text-[30px] 2xl:leading-[40px]">
            <strong>{t("contacts.company")}:</strong> 306717588
          </li>
          <li className="text-xl 2xl:text-[30px] 2xl:leading-[40px]">
            <strong>{t("contacts.vat")}:</strong> LT100017242115
          </li>
          <li className="text-xl 2xl:text-[30px] 2xl:leading-[40px]">
            <strong>{t("contacts.iban")}:</strong> LT653250069399734426
          </li>
          <li className="text-xl 2xl:text-[30px] 2xl:leading-[40px]">
            <strong>{t("contacts.email")}:</strong> admin@robodam.com
          </li>
          <li className="text-xl 2xl:text-[30px] 2xl:leading-[40px]">
            <strong>{t("contacts.phone")}:</strong> +370 657 59 563
          </li>
        </ul>
      </div>
    </section>
  );
}
