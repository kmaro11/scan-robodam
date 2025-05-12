import { LandingLayout } from "@/components/LandingLayout";
import { I18nProvider } from "@/contexts/I18nContext";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: { lang: "lt" };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await Promise.resolve(params);

  return (
    <I18nProvider lang={lang}>
      <LandingLayout lang={lang}>{children}</LandingLayout>
    </I18nProvider>
  );
}

export function generateStaticParams() {
  return [{ lang: "lt" }];
}
