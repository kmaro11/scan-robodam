"use client";
import React, { useState, ChangeEvent, MouseEvent } from "react";
import Search from "@/icons/Search.svg";
import { useI18n } from "@/contexts/I18nContext";

interface SearchComponentProps {
  placeholder?: string;
  onSearch?: (searchTerm: string) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const { t } = useI18n();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default button behavior (e.g., form submission)
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div className="flex items-center justify-between w-full relative">
      <input
        className="pr-10 pl-[14px] py-3 w-full text-sm placeholder:text-gray-200"
        type="text"
        placeholder={t(placeholder) as string}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="absolute right-2.5" onClick={handleSearch}>
        <Search />
      </button>
    </div>
  );
};
