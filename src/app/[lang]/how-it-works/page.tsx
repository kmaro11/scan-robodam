"use client";

import { useI18n } from "@/contexts/I18nContext";

export default function HowItWorks() {
  const { t } = useI18n();

  const scanSteps = [
    "howItWorks.stepOne",
    "howItWorks.stepTwo",
    "howItWorks.stepThree",
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
    "scanItemOne",
    "scanItemTwo",
    "scanItemThree",
    "scanItemFour",
    "scanItemFive",
    "scanItemSix",
    "scanItemSeven",
    "scanItemEight",
    "scanItemNine",
    "scanItemTen",
    "scanItemEleven",
    "scanItemTwelve",
    "scanItemThirteen",
    "scanItemFourteen",
    "scanItemFifteen",
    "scanItemSixteen",
    "scanItemSeventeen",
    "scanItemEighteen",
    "scanItemNineteen",
    "scanItemTwenty",
    "scanItemTwentyOne",
  ];

  return (
    <div className="custom-container max-w-[1485px]">
      <section>
        <h1 className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold mb-11 text-blue">
          {t("howItWorks.title")}
        </h1>

        <p className="text-xl md:text-[30px] md:leading-[40px] mb-8">
          {t("howItWorks.textOne", {
            scan: <span className="text-blue">“Robodam Scan”</span>,
          })}
        </p>

        <p className="text-xl md:text-[30px] md:leading-[40px] mb-10 md:mb-20">
          {t("howItWorks.textTwo", {
            scan: <span className="text-blue">“Robodam Scan”</span>,
          })}
        </p>

        <p className="text-xl md:text-[30px] md:leading-[40px] text-blue">
          {t("howItWorks.subtitle")}
        </p>

        <div className="relative -z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10 lg:mt-[122px]">
          <div className="flex items-start space-x-5 lg:col-span-5">
            <span className="text-6xl xl:text-[120px] xl:leading-[144px] font-bold text-blue transform lg:-translate-y-10 xl:-translate-y-[72px]">
              1
            </span>
            <p className="text-xl xl:text-[30px] xl:leading-[40px]">
              {t("howItWorks.step1", {
                scan: <span className="text-blue">“Robodam Scan”</span>,
              })}
            </p>
          </div>

          <div className="flex items-start space-x-4 lg:col-span-5 lg:col-end-13">
            <span className="text-6xl xl:text-[120px] xl:leading-[144px] font-bold text-blue transform lg:-translate-y-10 xl:-translate-y-[72px]">
              2
            </span>
            <p className="text-xl xl:text-[30px] xl:leading-[40px]">
              {t("howItWorks.step2", {
                scan: <span className="text-blue">“Robodam Scan”</span>,
              })}
            </p>
          </div>

          <div className="flex items-start space-x-4 lg:col-start-4 lg:col-span-5">
            <span className="text-6xl xl:text-[120px] xl:leading-[144px] font-bold text-blue transform lg:-translate-y-10 xl:-translate-y-[72px]">
              3
            </span>
            <p className="text-xl xl:text-[30px] xl:leading-[40px]">
              The accountant then imports the account data into his accounting
              program using the standard functionality of the accounting
              program.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-20">
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
            {scanList.map((item) => (
              <li className="text-xl md:text-[30px] md:leading-[40px]">
                {t(`home.${item}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
