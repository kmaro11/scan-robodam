"use client";

import { Button } from "@/components/Button";
import { LINKS } from "@/constants/Links";
import { useI18n } from "@/contexts/I18nContext";
import { useParams } from "next/navigation";

export default function HowItWorks() {
  const params = useParams();
  const { lang } = params;
  const { t } = useI18n();

  const scanSteps = [
    "howItWorks.step1",
    "howItWorks.step2",
    "howItWorks.step3",
  ];

  const functionalities = [
    {
      left: "howItWorks.functionalitiesOneLeft",
      right: "howItWorks.functionalitiesOneRight",
    },
    {
      left: "howItWorks.functionalitiesTwoLeft",
      right: "howItWorks.functionalitiesTwoRight",
    },
    {
      left: "howItWorks.functionalitiesThreeLeft",
      right: "howItWorks.functionalitiesThreeRight",
    },
    {
      left: "howItWorks.functionalitiesFourLeft",
      right: "howItWorks.functionalitiesFourRight",
    },
    {
      left: "howItWorks.functionalitiesFiveLeft",
      right: "howItWorks.functionalitiesFiveRight",
    },
    {
      left: "howItWorks.functionalitiesSixLeft",
      right: "howItWorks.functionalitiesSixRight",
    },
    {
      left: "howItWorks.functionalitiesSevenLeft",
      right: "howItWorks.functionalitiesSevenRight",
    },
    {
      left: "howItWorks.functionalitiesEightLeft",
      right: "howItWorks.functionalitiesEightRight",
    },
  ];

  const scanList = [
    {
      title: "howItWorks.scanItemOne",
      texts: [
        "howItWorks.scanItemOneText",
        "howItWorks.scanItemOneText2",
        "howItWorks.scanItemOneText3",
        "howItWorks.scanItemOneText4",
        "howItWorks.scanItemOneText5",
        "howItWorks.scanItemOneText6",
        "howItWorks.scanItemOneText7",
        "howItWorks.scanItemOneText8",
        "howItWorks.scanItemOneText9",
        "howItWorks.scanItemOneText10",
      ],
    },
    {
      title: "howItWorks.scanItemTwo",
      texts: [
        "howItWorks.scanItemTwoText",
        "howItWorks.scanItemTwoText2",
        "howItWorks.scanItemTwoText3",
        "howItWorks.scanItemTwoText4",
        "howItWorks.scanItemTwoText5",
      ],
    },
    {
      title: "howItWorks.scanItemThree",
      texts: ["howItWorks.scanItemThreeText"],
    },
    {
      title: "howItWorks.scanItemFour",
      texts: [
        "howItWorks.scanItemFourText",
        "howItWorks.scanItemFourText2",
        "howItWorks.scanItemFourText3",
      ],
    },
  ];

  return (
    <div className="max-w-[1256px] mx-auto px-5">
      <section className="pt-[70px] lg:pt-[100px]">
        <h1 className="text-[30px] md:text-[40px] font-bold leading-[130%] lg:leading-[150%] text-center text-primary mb-5 lg:mb-7">
          {t("howItWorks.title")}
        </h1>

        <p className="text-[15px] md:text-[20px] leading-[150%] text-center mb-5">
          {t("howItWorks.subtextOne")}
        </p>

        <p className="text-[15px] md:text-[20px] leading-[150%] text-center">
          {t("howItWorks.subtextTwo")}
        </p>
      </section>

      <section className="pt-[160px] lg:pt-[140px] px-5">
        <h2 className="text-[30px] md:text-[40px] font-bold leading-[130%] text-center text-primary mb-8 lg:mb-[60px]">
          {t("howItWorks.stepTitle")}
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-[888px] mx-auto w-full mb-8 lg:mb-14 px-5 md:px-0">
          {scanSteps.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center bg-green-100 rounded-[5px] px-5 py-6 min-h-[337px] h-auto"
            >
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

      <section className="pt-[84px] md:pt-[142px]">
        <h2 className="text-[30px] md:text-[40px] font-bold leading-[130%] text-center text-primary mb-8 lg:mb-10">
          {t("howItWorks.functionalitiesTitle")}
        </h2>
        <ul className="bg-green-100 rounded-lg pb-[75px] pt-16 px-8 lg:px-12 lg:py-10 ">
          {functionalities.map((item, index) => (
            <li
              key={index}
              className="group grid grid-cols-1 md:grid-cols-2 font-bold "
            >
              <div className="group-last:md:border-b-0 flex-grow flex-shrink-0 group-last:md:pb-0 group-first:pt-0 text-[15px] leading-[30px] md:text-xl text-white py-3 md:py-2.5 border-b border-green md:border-r ">
                {t(item.left)}
              </div>
              <div className="group-last:border-b-0 flex-grow flex-shrink-0 group-last:pb-0 group-first:pt-0 text-[15px] leading-[30px] md:text-xl text-white py-3 md:py-2.5 border-b border-green md:pl-10">
                {t(item.right)}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-[113px] pb-[68px] lg:pt-[177px] lg:pb-[146px]">
        <ul className="max-w-[656px] mx-auto w-full">
          {scanList.map((item, index) => (
            <li key={index} className="mb-[113px] lg:mb-[103px] last:mb-0">
              <h2 className="text-[30px] leading-[40px] mb-7 lg:mb-5 font-bold text-primary text-center ">
                {t(item.title)}
              </h2>
              privacy-policy
              <ul>
                {item.texts.map((text, index) => (
                  <li
                    key={index}
                    className="text-center text-primary text-[15px] leading-[200%]"
                  >
                    {t(text)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <Button
          href={`${lang}/${LINKS.AUTH.REGISTER}`}
          variant="green"
          size="green-normal"
          className="w-full mx-auto mt-16 lg:mt-[90px]"
        >
          {t("home.heroButton")}
        </Button>
      </section>
    </div>
  );
}
