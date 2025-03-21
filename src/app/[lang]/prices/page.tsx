"use client";
import { useI18n } from "@/contexts/I18nContext";

export default function Prices() {
  const { t } = useI18n();
  const data = [
    {
      doc_count: "0 - 250",
      discount: null,
      price: "30",
      average_price: "30",
    },
    {
      doc_count: "251 - 500",
      discount: "5",
      price: "28,5",
      average_price: "29",
    },
    {
      doc_count: "501 - 1 000",
      discount: "10",
      price: "27",
      average_price: "28",
    },
    {
      doc_count: "1 001 - 1 500",
      discount: "15",
      price: "25,5",
      average_price: "27",
    },
    {
      doc_count: "1 501 - 2 000",
      discount: "20",
      price: "24",
      average_price: "26",
    },
    {
      doc_count: "2 001 - 3 000",
      discount: "25",
      price: "22,5",
      average_price: "25",
    },
    {
      doc_count: "3 001 - 6 000",
      discount: "30",
      price: "21",
      average_price: "23",
    },
    {
      doc_count: "6 001 - 10 000",
      discount: "35",
      price: "19,5",
      average_price: "21",
    },
    {
      doc_count: "> 10 000",
      discount: "40",
      price: "18",
      average_price: "18",
    },
  ];
  return (
    <section className="py-24 md:pb-[180px] pt-[126px]">
      <div className="custom-container">
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="lg:pl-11 pb-16 md:pb-[94px] max-w-[945px]">
            <h1 className="text-[40px] md:text-[70px] leading-[50px] md:leading-[80px] font-bold mb-11 text-blue">
              {t("prices.title")}
            </h1>
            <p className="text-2xl md:text-[30px] md:leading-[40px]">
              {t("prices.subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className="md:custom-container">
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="grid grid-cols-4 gap-x-1 bg-blue/10 py-5">
            <div className="text-center text-gray-200 text-xs md:text-xl font-bold px-1 lg:px-8">
              {t("prices.tableColOne")}
            </div>
            <div className="text-center text-gray-200 text-xs md:text-xl font-bold px-1 lg:px-8">
              {t("prices.tableColTwo")}
            </div>
            <div className="text-center text-gray-200 text-xs md:text-xl font-bold px-1 lg:px-8">
              {t("prices.tableColThree")}
            </div>
            <div className="text-center text-gray-200 text-xs md:text-xl font-bold px-1 lg:px-8">
              {t("prices.tableColFour")}
            </div>
          </div>

          {data.map((item) => (
            <div
              className="grid grid-cols-4 gap-x-3 py-5 border-b border-gray-100 last:border-0"
              key={item.doc_count}
            >
              <div className="text-xs md:text-xl text-center px-1 lg:px-8">
                {item.doc_count}
              </div>
              <div className="text-xs md:text-xl text-center px-1 lg:px-8">
                {item.discount}%
              </div>
              <div className="text-xs md:text-xl text-center px-1 lg:px-8">
                {item.price} {t("prices.cents")}
              </div>
              <div className="text-xs md:text-xl text-center px-1 lg:px-8">
                {item.average_price} {t("prices.cents")}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-4 gap-x-1 bg-blue/10 py-5 border-b border-gray-100">
            <div className="text-center col-span-3 text-gray-200 text-xs md:text-xl font-bold px-1 lg:px-8">
              {t("prices.textOne")}
            </div>
            <div className="text-center text-xs md:text-xl px-1 lg:px-8">
              2 {t("prices.cents")}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-1 bg-blue/10 py-5">
            <div className="text-center col-span-3 text-gray-200 text-xs md:text-xl font-bold px-1 lg:px-8">
              {t("prices.textTwo")}
            </div>
            <div className="text-center text-xs md:text-xl px-1 lg:px-8">
              5 {t("prices.pieces")}
            </div>
          </div>
        </div>
      </div>

      <div className="custom-container pt-10 md:pt-20">
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="max-w-[1423px] w-full mx-auto">
            <p className="mb-6 md:mb-[50px] text-gray-200 text-xl md:text-[30px] md:leading-[40px]">
              <strong>{t("prices.forExample")}</strong>
              {t("prices.example")}
            </p>
            <p className="text-xl md:text-[30px] md:leading-[40px]">
              <strong>{t("prices.exempt")}</strong>
              <span> {t("prices.exemptText")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
