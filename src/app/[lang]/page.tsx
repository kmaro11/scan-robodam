"use client";
import { Button } from "@/components/Button";
import { useI18n } from "@/contexts/I18nContext";

export default function LangHome({ params }: { params: { lang: string } }) {
  const { t } = useI18n();
  const whyItems = [
    "whyItemOne",
    "whyItemTwo",
    "whyItemThree",
    "whyItemFour",
    "whyItemFive",
    "whyItemSix",
  ];
  const payItems = [
    {
      docs: "<250 docs.",
      price: "0.30€",
    },
    {
      docs: ">2000 docs.",
      price: "0.23€",
    },
    {
      docs: ">10000 docs.",
      price: "0.18€",
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
    <>
      <section className="container mx-auto px-5">
        <div className="flex flex-col items-center max-w-[1212px] mx-auto w-full">
          <h1 className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold mb-10 md:mb-20 text-center text-blue">
            {t("home.heroTitle")}
          </h1>
          <p className="text-xl md:text-[30px] md:leading-[40px] text-center mb-10 md:mb-20">
            {t("home.heroDescription")}
            <span className="text-blue ml-1">“Robodam scan”</span>.
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
      <section className="mt-24 md:mt-[150px] container mx-auto px-5">
        <div className="max-w-[1302px] mx-auto w-full">
          <h2 className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold mb-10 md:mb-20 text-center text-blue">
            {t("home.whyTitle")}
          </h2>
          <ul className="grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2 gap-4">
            {whyItems.map((item) => (
              <li className="px-5 bg-gray-100 h-[100px] md:h-[170px] rounded-[30px] flex items-center justify-center">
                <p className="w-full md:w-11/12 text-blue font-bold text-xl md:text-[30px] md:leading-[40px] uppercase">
                  {t(`home.${item}`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mt-24 md:mt-[150px] container mx-auto px-5">
        <div className="max-w-[1302px] mx-auto w-full">
          <h2 className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold mb-10 md:mb-20 text-center text-blue">
            {t("home.howTitle")}
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
            <div className="max-w-[200px] md:max-w-[302px] w-full mx-auto">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 302 302"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M132.125 226.5V72.6688L83.05 121.744L56.625 94.375L151 0L245.375 94.375L218.95 121.744L169.875 72.6688V226.5H132.125ZM37.75 302C27.3687 302 18.4818 298.304 11.0891 290.911C3.69635 283.518 0 274.631 0 264.25V207.625H37.75V264.25H264.25V207.625H302V264.25C302 274.631 298.304 283.518 290.911 290.911C283.518 298.304 274.631 302 264.25 302H37.75Z"
                  fill="#0057FF"
                />
              </svg>
            </div>
            <ul className="flex flex-col gap-y-6 lg:gap-y-11">
              <li className="flex gap-x-5 items-start">
                <div className="bg-blue text-2xl lg:text-[60px] mt-1 lg:mt-2 lg:leading-[60px] flex-shrink-0 text-white lg:w-[70px] lg:h-[70px] w-10 h-10 rounded-[5px] flex items-center justify-center">
                  1
                </div>
                <p className="text-lg md:text-[25px] md:leading-[35px]">
                  <span>{t("home.howItemOne")}</span>
                  <span className="text-blue mx-1">“Robodam scan”.</span>
                  <br />
                  <span>{t("home.howItemTwo")}</span>
                </p>
              </li>
              <li className="flex gap-x-5 items-start">
                <div className="bg-blue text-2xl lg:text-[60px] mt-1 lg:mt-2 lg:leading-[60px] flex-shrink-0 text-white lg:w-[70px] lg:h-[70px] w-10 h-10 rounded-[5px] flex items-center justify-center">
                  2
                </div>
                <p className="text-lg md:text-[25px] md:leading-[35px]">
                  <span>{t("home.howItemThree")}</span>
                </p>
              </li>
              <li className="flex gap-x-5 items-start">
                <div className="bg-blue text-2xl lg:text-[60px] mt-1 lg:mt-2 lg:leading-[60px] flex-shrink-0 text-white lg:w-[70px] lg:h-[70px] w-10 h-10 rounded-[5px] flex items-center justify-center">
                  3
                </div>
                <p className="text-lg md:text-[25px] md:leading-[35px]">
                  <span className="text-blue mr-1">“Robodam scan”</span>
                  <span>{t("home.howItemFour")}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-24 md:mt-[150px] container mx-auto px-5">
        <div className="max-w-[1302px] mx-auto w-full">
          <h2 className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold mb-10 md:mb-20 text-center text-blue">
            {t("home.payTitle")}
          </h2>
          <p className="text-center text-xl md:text-[30px] md:leading-[40px]">
            {t("home.paySubtitle")}
          </p>
          <div className="max-w-[1124px] w-full">
            <div className="mt-14 md:mt-24 flex flex-col lg:flex-row justify-between gap-10">
              <div className="max-w-[200px] md:max-w-[302px] w-full mx-auto">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 302 302"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M138.338 302C134.558 302 130.778 301.245 126.999 299.735C123.219 298.225 119.817 295.96 116.793 292.94L8.69337 184.975C5.66959 181.955 3.46475 178.62 2.07885 174.971C0.692949 171.322 0 167.61 0 163.835C0 160.06 0.692949 156.285 2.07885 152.51C3.46475 148.735 5.66959 145.338 8.69337 142.318L141.74 9.06C144.511 6.29167 147.787 4.08958 151.567 2.45375C155.347 0.817917 159.252 0 163.284 0H271.762C280.078 0 287.196 2.95708 293.118 8.87125C299.039 14.7854 302 21.895 302 30.2V138.542C302 142.569 301.244 146.407 299.732 150.056C298.22 153.705 296.078 156.914 293.307 159.682L159.882 292.94C156.859 295.96 153.457 298.225 149.677 299.735C145.897 301.245 142.118 302 138.338 302ZM138.338 271.8L271.762 138.165V30.2H163.662L30.2378 163.835L138.338 271.8ZM233.965 90.6C240.264 90.6 245.619 88.3979 250.029 83.9938C254.438 79.5896 256.643 74.2417 256.643 67.95C256.643 61.6583 254.438 56.3104 250.029 51.9062C245.619 47.5021 240.264 45.3 233.965 45.3C227.665 45.3 222.311 47.5021 217.901 51.9062C213.491 56.3104 211.287 61.6583 211.287 67.95C211.287 74.2417 213.491 79.5896 217.901 83.9938C222.311 88.3979 227.665 90.6 233.965 90.6Z"
                    fill="#0057FF"
                  />
                </svg>
              </div>
              <div className="max-w-[700px] w-full">
                <p className="mb-6 text-center text-xl md:text-[30px] md:leading-[40px]">
                  <span>{t("home.paytextFirst")}</span>
                  <span className="text-blue mx-1 font-bold">0.18€</span>
                  <span>{t("home.paytextSecond")}</span>
                  <span className="text-blue mx-1 font-bold">0.30€</span>
                  <span>{t("home.paytextThird")}</span>
                </p>
                <ul className="flex flex-col gap-y-6">
                  {payItems.map((item) => (
                    <li className="flex items-center justify-between">
                      <p className="text-xl md:text-[50px] md:leading-[60px] text-blue font-bold underline">
                        {item.docs}
                      </p>
                      <p className="text-xl md:text-[50px] md:leading-[60px] bg-blue text-white px-2 flex items-center justify-center w-[100px] md:w-[155px] flex-shrink-0">
                        {item.price}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[196px] md:py-[243px] container mx-auto px-5">
        <div className="max-w-[1022px] mx-auto w-full">
          <h2 className="text-blue mb-10 text-center md:mb-20 text-xl md:text-[30px] md:leading-[40px]">
            {t("home.scansTitle")}:
          </h2>
          <ul className="list-disc p-0 pl-10 m-0 flex flex-col gap-y-2">
            {scanList.map((item) => (
              <li className="text-xl md:text-[30px] md:leading-[40px]">
                {t(`home.${item}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
