"use client";
import { createContext, useContext, ReactNode } from "react";

type TranslationObject = { [key: string]: string | TranslationObject };

interface I18nContextProps {
  t: (key: string, values?: Record<string, ReactNode>) => ReactNode;
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
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    translations = require(`@/locales/${lang}.json`);
  } catch {
    console.warn(`Missing translations for ${lang}`);
  }

  const t = (key: string, values?: Record<string, ReactNode>): ReactNode => {
    const result = key
      .split(".")
      .reduce<TranslationObject | string | undefined>(
        (obj, part) => (obj && typeof obj === "object" ? obj[part] : undefined),
        translations
      );

    if (typeof result !== "string") return key; // Fallback if key is missing

    if (!values) return result;

    // Handle multiple placeholders dynamically
    return result.split(/(\{\w+\})/g).map((part) => {
      const match = part.match(/^\{(\w+)\}$/);
      return match ? values[match[1]] ?? part : part; // Replace if exists, else keep original
    });
  };

  return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextProps {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within an I18nProvider");
  return context;
}
