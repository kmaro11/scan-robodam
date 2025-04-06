import { Button } from "@/components/Button";
import AuthLangSwitch from "../../auth/components/AuthLangSwitch";
import BlueLogo from "@/icons/BlueLogo.svg";
import Profile from "@/icons/Profile.svg";
import Info from "@/icons/Info.svg";

export const Header = () => {
  return (
    <div className="flex items-center px-5 pt-6 pb-4">
      <BlueLogo className="mr-4 max-w-[142px] w-full" />

      <div className="flex gap-5 items-center">
        <button className="text-lg font-bold">Upload</button>
        <button className="text-lg text-gray-200">Processed invoices</button>
        <Button size="small" className="xl:text-lg">
          Sign a contract
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
