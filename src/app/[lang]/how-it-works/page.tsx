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

  // const functionalities = [
  //   {
  //     left: "howItWorks.functionalitiesOneLeft",
  //     right: "howItWorks.functionalitiesOneRight",
  //   },
  //   {
  //     left: "howItWorks.functionalitiesTwoLeft",
  //     right: "howItWorks.functionalitiesTwoRight",
  //   },
  //   {
  //     left: "howItWorks.functionalitiesThreeLeft",
  //     right: "howItWorks.functionalitiesThreeRight",
  //   },
  //   {
  //     left: "howItWorks.functionalitiesFourLeft",
  //     right: "howItWorks.functionalitiesFourRight",
  //   },
  //   {
  //     left: "howItWorks.functionalitiesFiveLeft",
  //     right: "howItWorks.functionalitiesFiveRight",
  //   },
  //   {
  //     left: "howItWorks.functionalitiesSixLeft",
  //     right: "howItWorks.functionalitiesSixRight",
  //   },
  //   {
  //     left: "howItWorks.functionalitiesSevenLeft",
  //     right: "howItWorks.functionalitiesSevenRight",
  //   },
  //   {
  //     left: "howItWorks.functionalitiesEightLeft",
  //     right: "howItWorks.functionalitiesEightRight",
  //   },
  // ];

  // const scanList = [
  //   "scanItemOne",
  //   "scanItemTwo",
  //   "scanItemThree",
  //   "scanItemFour",
  //   "scanItemFive",
  //   "scanItemSix",
  //   "scanItemSeven",
  //   "scanItemEight",
  //   "scanItemNine",
  //   "scanItemTen",
  //   "scanItemEleven",
  //   "scanItemTwelve",
  //   "scanItemThirteen",
  //   "scanItemFourteen",
  //   "scanItemFifteen",
  //   "scanItemSixteen",
  //   "scanItemSeventeen",
  //   "scanItemEighteen",
  //   "scanItemNineteen",
  //   "scanItemTwenty",
  //   "scanItemTwentyOne",
  // ];

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

      {/* <section className="pt-10 md:pt-20">
        <h2 className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold mb-10 md:mb-20 text-blue">
          {t("howItWorks.functionalities")}
        </h2>
        <ul className="bg-blue rounded-[10px] p-3 md:pt-10 md:pr-8 md:pl-9 md:pb-10">
          {functionalities.map((item, index) => (
            <li key={index} className="group grid grid-cols-2 font-bold ">
              <div className="group-last:border-b-0 flex-grow flex-shrink-0 group-last:pb-0 group-first:pt-0 text-sm font-bold md:text-[30px] md:leading-[40px] text-white py-2 md:pb-4 md:pt-3 border-b border-white border-r ">
                {t(item.left)}
              </div>
              <div className="group-last:border-b-0 flex-grow flex-shrink-0 group-last:pb-0 group-first:pt-0 text-sm font-bold md:text-[30px] md:leading-[40px] text-white py-2 md:pb-4 md:pt-3 border-b border-white pl-1.5 md:pl-2.5">
                {t(item.right)}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 md:mt-20 pb-[196px] md:pb-[243px]">
        <h2 className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold mb-10 md:mb-20 text-blue">
          {t("howItWorks.whatScan")}
        </h2>
        <h2 className="text-blue mb-10 md:mb-20 text-xl md:text-[30px] md:leading-[40px]">
          {t("home.scansTitle")}:
        </h2>
        <div className="max-w-[1022px] mx-auto w-full">
          <ul className="list-disc p-0 pl-5 md:pl-11 m-0 flex flex-col gap-y-2">
            {scanList.map((item, index) => (
              <li
                key={index}
                className="text-xl md:text-[30px] md:leading-[40px]"
              >
                {t(`home.${item}`)}
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </div>
  );
}
