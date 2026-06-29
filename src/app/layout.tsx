import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export const metadata: Metadata = {
  title: "Némethy Roland E.V. | Prémium B2B Árufuvarozás és Logisztika",
  description: "Kiszámítható, expressz árufuvarozás és logisztika Érd központtal. Mercedes Vito + 4,2m ponyvás utánfutó, stabil szerződéses háttér és 100% kártérítési fedezet céges partnereknek.",
  keywords: ["árufuvarozás", "logisztika", "B2B fuvarozás", "Érd", "furgonos szállítás", "ponyvás utánfutó", "belföldi fuvarozás", "expressz szállítás"],
  openGraph: {
    title: "Némethy Roland E.V. | Prémium B2B Árufuvarozás",
    description: "Expressz árufuvarozás és logisztika kompromisszumok nélkül. Kiemelt kapacitás és garantált szerződéses biztonság.",
    url: "https://nemethy-roland.vercel.app/",
    siteName: "Némethy Roland Logisztika",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Némethy Roland Árufuvarozás",
      }
    ],
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans pt-20">
        <Header />
        {children}
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}


