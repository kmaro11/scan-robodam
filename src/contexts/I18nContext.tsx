"use client";
import { createContext, useContext, ReactNode } from "react";

type TranslationObject = { [key: string]: string | TranslationObject };

interface I18nContextProps {
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextProps | null>(null);

export function I18nProvider({
  lang,
  children,
}: {
  lang: string;
  children: ReactNode;
}) {
  let translations: TranslationObject = {};

  try {
    translations = require(`@/locales/${lang}.json`);
  } catch {
    console.warn(`Missing translations for ${lang}`);
  }

  const t = (key: string): string => {
    return (
      key
        .split(".")
        .reduce(
          (obj: any, part) =>
            obj && typeof obj === "object" ? obj[part] : undefined,
          translations
        ) || key
    );
  };

  return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within an I18nProvider");
  return context;
}
