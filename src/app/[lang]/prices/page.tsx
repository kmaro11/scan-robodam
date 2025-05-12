"use client";
import { Button } from "@/components/Button";
import { LINKS } from "@/constants/Links";
import { useI18n } from "@/contexts/I18nContext";
import { useParams } from "next/navigation";

export default function Prices() {
  const params = useParams();
  const { lang } = params;
  const { t } = useI18n();
  return (
    <section className="py-[70px] lg:pt-[105px] lg:pb-[147px] max-w-[1256px] mx-auto px-5">
      <h1 className="max-w-[800px] w-full mx-auto text-center text-[30px] lg:text-[40px] font-bold leading-[130%] lg:leading-[150%] text-primary mb-5 lg:mb-7">
        {t("prices.title")}
      </h1>
      <p className="max-w-[940px] w-full mx-auto text-center text-[15px] lg:text-[20px] leading-[150%] mb-14 lg:mb-[105px]">
        {t("prices.subtitle")}
      </p>
      <div className=" mb-[60px] lg:mb-[73px] max-w-[515px] w-full mx-auto px-2.5 md:px-0">
        <div className="bg-green-100 pt-6 pb-7 lg:pt-10 lg:pb-12 rounded-[10px]">
          <p className="text-[25px] lg:text-[40px] leading-[150%] text-center text-white font-bold mb-0.5 lg:mb-2.5">
            15 ct + PVM už sąsk.
          </p>
          <p className="text-sm lg:text-[15px] leading-[150%] text-center text-white">
            10 000 ir daugiau sąskaitų 10 ct + pvm
          </p>
        </div>
      </div>
      <p className="text-[15px] lg:text-[20px] leading-[150%] text-center mb-5">
        {t("prices.infoTextOne", {
          text: <strong>Neapmokestinama:</strong>,
        })}
      </p>
      <p className="text-[15px] lg:text-[20px] leading-[150%] text-center mb-14 lg:mb-[74px]">
        {t("prices.infoTextTwo")}
      </p>

      <Button
        href={`${lang}/${LINKS.AUTH.REGISTER}`}
        variant="green"
        size="green-normal"
        className="w-full mx-auto"
      >
        {t("home.heroButton")}
      </Button>
    </section>
  );
}
