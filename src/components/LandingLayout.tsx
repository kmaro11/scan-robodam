"use client";
import { Header } from "@/components/Header";
import { Footer } from "./Footer";
import { usePathname } from "next/navigation";
export const LandingLayout = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "en" | "lt";
}) => {
  const pathName = usePathname();
  const isAuthHeader = pathName.includes("auth");

  if (isAuthHeader) return <main>{children}</main>;

  return (
    <main className="pt-[126px]">
      <Header lang="en" />
      {children}
      <Footer lang={lang} />
    </main>
  );
};
