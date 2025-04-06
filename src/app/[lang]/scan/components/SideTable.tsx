"use client";
import { SearchComponent } from "@/components/Search";
import { useI18n } from "@/contexts/I18nContext";
import Settings from "@/icons/Setting.svg";
import Archive from "@/icons/Archive.svg";
import Star from "@/icons/Star.svg";
export const SideTable = ({
  header,
  list,
}: {
  header: string;
  list: {
    id: number;
    name: string;
    invoices: number;
  }[];
}) => {
  const { t } = useI18n();
  const handlePartySearch = (searchTerm: string) => {
    console.log("Searching for parties:", searchTerm);
  };

  return (
    <div className="border-r border-t border-gray-200 max-w-[250px] w-full flex-shrink-0 flex-grow">
      <div className="h-[45px] flex items-center justify-between border-b border-gray-200 bg-gray-300 pl-[14px] pr-2 ">
        <div className="flex items-center gap-1">
          <Star />
          <div className="text-lg text-gray-200 ">{t(header)}</div>
        </div>
        <button>
          <Archive />
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <li className="group transition duration-300 flex items-center justify-between pl-[14px] pr-2 py-2 border-b border-gray-200 hover:bg-blue/10 cursor-pointer">
            <div className="text-lg">
              {item.name} ({item.invoices})
            </div>
            <button className="group-hover:opacity-100 opacity-0 transition duration-300">
              <Settings />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-20 border-y border-gray-200">
        <SearchComponent
          placeholder="app.findParty"
          onSearch={handlePartySearch}
        />
      </div>
    </div>
  );
};
