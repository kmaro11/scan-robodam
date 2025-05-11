import { NavigationItems } from "./NavigationItems";
import Mail from "@/icons/Mail.svg";
import Phone from "@/icons/Phone.svg";

export const Navigation = ({ lang }: { lang: "lt" }) => {
  console.log(lang);

  return (
    <nav className="flex flex-col pt-24 md:pt-0">
      <ul className="flex flex-col w-full">
        <NavigationItems lang={lang} />
      </ul>
      <div className="flex flex-col md:flex-row gap-y-5 mt-20">
        <a
          href="mailto:admin@robodam.com"
          className="text-primary text-[22px] leading-[44px] flex items-center gap-4"
        >
          <div className="w-[22px] flex justify-center">
            <Mail className="max-w-[25px] text-primary" />
          </div>
          admin@robodam.com
        </a>
        <a
          href="tel:+37065749748"
          className="text-primary text-[22px] leading-[44px] flex items-center gap-4"
        >
          <div className="w-[22px] flex justify-center">
            <Phone className="max-w-[18px] text-primary" />
          </div>
          +370 657 49 748
        </a>
      </div>
    </nav>
  );
};
