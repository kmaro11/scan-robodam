"use client";
import { Button } from "@/components/Button";
import { useI18n } from "@/contexts/I18nContext";
import { useParams } from "next/navigation";
import { LINKS } from "@/constants/Links";

export default function Registered() {
  const { t } = useI18n();
  const params = useParams();
  const { lang } = params;
  return (
    <div className="">
      <h1 className="text-[60px] leading-[70px] font-bold text-center mt-24">
        {t("auth.normalText", {
          blue: <span className="text-blue">{t("auth.blueText")}</span>,
        })}
      </h1>
      <Button
        href={`/${lang}/${LINKS.AUTH.LOGIN}`}
        className="md:h-20 max-w-[400px] mx-auto w-full mt-24"
      >
        {t("common.login")}
      </Button>
    </div>
  );
}
