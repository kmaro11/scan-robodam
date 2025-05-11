"use client";
import { Button } from "@/components/Button";
import { useI18n } from "@/contexts/I18nContext";
import { LINKS } from "@/constants/Links";
import { useParams } from "next/navigation";
import Check from "@/icons/Check.svg";

export default function Home() {
  const params = useParams();
  const { lang } = params;

  const { t } = useI18n();

  const whyItems = [
    "whyItemOne",
    "whyItemTwo",
    "whyItemThree",
    "whyItemFour",
    "whyItemFive",
    "whyItemSix",
  ];

  const howItWorksSteps = [
    "home.howItemOne",
    "home.howItemTwo",
    "home.howItemThree",
  ];

  return (
    <>
      <section className="pt-[70px] lg:pt-[68px] px-5">
        <div className="flex flex-col lg:flex-row items-center w-full gap-12 max-w-[1256px] mx-auto">
          <div className="max-w-[630px] w-full">
            <h1 className="text-[30px] lg:text-[50px] font-bold leading-[130%] mb-[14px] lg:mb-xl">
              {t("home.heroTitle")}
            </h1>
            <p className="mb-6 lg:mb-10 text-[15px] lg:text-xl leading-[150%] max-w-[500px]">
              {t("home.heroDescription")}
            </p>
            <Button
              href={`${lang}/${LINKS.AUTH.REGISTER}`}
              variant="green"
              size="green-normal"
              className="w-full lg:h-[50px]"
            >
              {t("home.heroButton")}
            </Button>
          </div>
          <div className="max-w-[630px] w-full rounded-[10px] h-[558px] bg-gray-100"></div>
        </div>
      </section>

      <section className="px-5 pt-[94px] lg:pt-[210px]">
        <h2 className="mb-9 lg:mb-11 text-[30px] md:text-[40px] font-bold leading-[130%] text-center text-primary">
          {t("home.whyTitle")}
        </h2>
        <ul className="grid grid-cols-1 gap-2.5 md:gap-4 md:grid-cols-2 max-w-[764px] mx-auto">
          {whyItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center bg-green-100 rounded pl-5 pr-7 py-6"
            >
              <span className="max-w-[30px] lg:max-w-[33px] flex-shrink-0 w-full mr-6 lg:mr-8">
                <Check className="w-full flex" />
              </span>

              <p className="text-white text-xl leading-[100%]">
                {t(`home.${item}`)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-[130px] lg:pt-[164px] px-5">
        <h2 className="text-[30px] md:text-[40px] font-bold leading-[130%] text-center text-primary mb-[60px]">
          {t(`home.programsTitle`)}
        </h2>
        <div className="max-w-[920px] w-full mx-auto"></div>
      </section>

      <section className="pt-[160px] lg:pt-[150px] px-5">
        <h2 className="text-[30px] md:text-[40px] font-bold leading-[130%] text-center text-primary mb-9 lg:mb-11">
          {t("home.howTitle")}
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[888px] mx-auto w-full mb-9 lg:mb-11">
          {howItWorksSteps.map((item, index) => (
            <li className="flex flex-col items-center bg-green-100 rounded-[5px] px-5 py-6 min-h-[337px] h-auto">
              <div className="text-white bg-green rounded-full w-[33px] h-[33px] flex items-center justify-center mb-6">
                {index + 1}
              </div>
              <p className="text-white text-center text-xl leading-[150%]">
                {t(item)}
              </p>
            </li>
          ))}
        </ul>

        <Button
          href={`${lang}/${LINKS.AUTH.REGISTER}`}
          variant="green"
          size="green-normal"
          className="w-full mx-auto"
        >
          {t("home.heroButton")}
        </Button>
      </section>

      <section className="pt-[117px] lg:pt-[220px] pb-[150px] lg:pb-[284px] px-5">
        <h2 className="text-center text-[30px] md:text-[40px] font-bold leading-[130%] text-primary mb-3">
          {t("home.priceTitle")}
        </h2>
        <p className="text-center text-[15px] lg:text-xl leading-[150%] mb-8 lg:mb-11">
          {t("home.priceSubtitle")}
        </p>
        <Button
          href={`${lang}/${LINKS.PRICES}`}
          variant="green"
          size="green-normal"
          className="w-full mx-auto"
        >
          {t("home.priceButton")}
        </Button>
      </section>
    </>
  );
}
