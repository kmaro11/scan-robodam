import BlueLogo from "@/icons/BlueLogo.svg";
// import AuthLangSwitch from "./components/AuthLangSwitch";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-20 relative">
      {/* <div className="absolute top-6 right-8">
        <AuthLangSwitch />
      </div> */}
      <BlueLogo className="mx-auto max-w-[260px] md:max-w-[363px] mb-12" />
      {children}
    </div>
  );
}
