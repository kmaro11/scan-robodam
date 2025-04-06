import { Header } from "./components/Header";
import { UploadBar } from "./components/UploadBar";
export default function ScanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // check landingLayout!!!
  return (
    <div className="relative">
      <Header />
      <UploadBar />
      {children}
    </div>
  );
}
