import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import AudioPlayer from "@/components/AudioPlayer";
import ChatAssistant from "@/components/ChatAssistant";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Némethy Roland E.V. | Prémium B2B Árufuvarozás és Logisztika",
    template: "%s | Némethy Roland E.V."
  },
  description: "Megbízható furgonos árufuvarozás, logisztika és költöztetés Érd vonzáskörzetéből, országos lefedettséggel. Mercedes Sprinter és Fiat Ducato kapacitás cégeknek.",
  keywords: ["árufuvarozás", "logisztika", "költöztetés", "belföldi fuvarozás", "Érd", "Budapest", "furgonos szállítás", "B2B fuvarozás"],
  authors: [{ name: "Némethy Roland" }],
  openGraph: {
    title: "Némethy Roland E.V. | Prémium B2B Árufuvarozás és Logisztika",
    description: "Megbízható furgonos árufuvarozás, logisztika és költöztetés Érd vonzáskörzetéből, országos lefedettséggel. Mercedes Sprinter és Fiat Ducato kapacitás cégeknek.",
    url: "https://nemethy-roland.vercel.app/",
    siteName: "Némethy Roland E.V.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="h-full antialiased">
      <body className={`${inter.variable} ${montserrat.variable} min-h-full flex flex-col font-sans pt-20`}>
        <Header />
        {children}
        <Footer />
        <FloatingCallButton />
        <AudioPlayer />
        <ChatAssistant />
      </body>
    </html>
  );
}


