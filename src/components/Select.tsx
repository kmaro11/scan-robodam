"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import SelectArrows from "@/icons/SelectArrows.svg";

export default function Select({
  options,
  selected,
  setSelected,
  placeholder = "Select an option",
}: {
  options: string[];
  selected: string;
  setSelected: (option: string) => void;
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        e.preventDefault();
        setIsOpen(true);
        setHighlightedIndex(0);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev === null ? 0 : (prev + 1) % options.length
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev === null
          ? options.length - 1
          : (prev - 1 + options.length) % options.length
      );
    } else if (e.key === "Enter" && highlightedIndex !== null) {
      e.preventDefault();
      setSelected(options[highlightedIndex]);
      setIsOpen(false);
      setHighlightedIndex(null);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      setHighlightedIndex(null);
    }
  };

  return (
    <div ref={ref} className="relative w-full">
      <button
        className="border border-gray-200 w-full rounded-[5px] placeholder:text-gray-200 text-xl h-[50px] pl-4 pr-3 flex items-center justify-between"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        <span>{selected || placeholder}</span>
        <SelectArrows className="ml-2" />
      </button>

      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-auto">
          {options.map((option, index) => (
            <li
              key={option}
              className={`px-4 py-2 cursor-pointer ${
                index === highlightedIndex ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
                setHighlightedIndex(null);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
