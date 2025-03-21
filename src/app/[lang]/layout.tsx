import { Header } from "@/components/Header";
import { I18nProvider } from "@/contexts/I18nContext";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: { lang: "en" | "lt" };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await Promise.resolve(params);
  console.log("Current language:", lang);

  return (
    <I18nProvider lang={lang}>
      <div className="pt-[126px]">
        {/* <Header lang={lang} /> */}
        {children}
      </div>
    </I18nProvider>
  );
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "lt" }];
}
