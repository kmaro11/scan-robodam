import { Header } from "./components/Header";
export default function ScanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // check landingLayout!!!
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
}
