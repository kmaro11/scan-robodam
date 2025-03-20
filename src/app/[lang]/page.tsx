"use client";
import { useI18n } from "@/contexts/I18nContext";

export default function LangHome({ params }: { params: { lang: string } }) {
  const { t } = useI18n();

  return (
    <div>
      <h1 className="text-[70px] leading-[80px] font-bold mb-20 text-center text-blue">
        {t("home.heroTitle")}
      </h1>
    </div>
  );
}
