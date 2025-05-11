import "@/css/global.css";
import localFont from "next/font/local";

const customFonts = localFont({
  src: [
    {
      path: "../../public/fonts/Px-Grotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Px-Grotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt">
      <body className={customFonts.className}>{children}</body>
    </html>
  );
}
