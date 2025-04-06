"use client";
import { Button } from "@/components/Button";
import AuthLangSwitch from "../../auth/components/AuthLangSwitch";
import BlueLogo from "@/icons/BlueLogo.svg";
import Profile from "@/icons/Profile.svg";
import Info from "@/icons/Info.svg";
import { useI18n } from "@/contexts/I18nContext";

export const Header = () => {
  const { t } = useI18n();
  return (
    <div className="flex items-center px-5 pt-6 pb-4">
      <BlueLogo className="mr-4 max-w-[142px] w-full" />

      <div className="flex gap-5 items-center">
        <button className="text-lg font-bold">{t("app.upload")}</button>
        <button className="text-lg text-gray-200">
          {t("app.processedInvoices")}
        </button>
        <Button size="small" className="xl:text-lg">
          {t("app.signContract")}
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <button>
          <Info />
        </button>
        <AuthLangSwitch />
        <button>
          <Profile />
        </button>
      </div>
    </div>
  );
};
