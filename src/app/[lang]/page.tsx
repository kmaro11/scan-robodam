"use client";
import { Button } from "@/components/Button";
import { useI18n } from "@/contexts/I18nContext";

export default function LangHome({ params }: { params: { lang: string } }) {
  const { t } = useI18n();

  return (
    <section>
      <div className="flex flex-col items-center max-w-[1212px] mx-auto w-full">
        <h1 className="text-[70px] leading-[80px] font-bold mb-20 text-center text-blue">
          {t("home.heroTitle")}
        </h1>
        <p className="text-[30px] leading-[40px] text-center mb-20">
          {t("home.heroDescription")}{" "}
          <span className="text-blue">“Robodam scan”</span>.
        </p>
        <div className="flex gap-4 items-center max-w-[540px] justify-between w-full">
          <Button
            href="/en"
            className="max-w-[195px] w-full"
            variant="secondary"
          >
            {t("common.login")}
          </Button>
          <Button href="/en" className="max-w-[195px] w-full">
            {t("common.register")}
          </Button>
        </div>
      </div>
    </section>
  );
}
