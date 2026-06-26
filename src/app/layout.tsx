import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export const metadata: Metadata = {
  title: "Némethy Roland - Expressz árufuvarozás és logisztika",
  description: "Kiemelt kapacitás, garantált szerződéses biztonság és precíz teljesítés céges partnereinknek. Prémium B2B áruszállítás Mercedes-Benz Vito szerelvénnyel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}


