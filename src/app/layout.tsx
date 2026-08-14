import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import AudioPlayer from "@/components/AudioPlayer";
import ChatAssistant from "@/components/ChatAssistant";
import VideoBackground from "@/components/VideoBackground";

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
  metadataBase: new URL('https://nemethy-roland.vercel.app'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Némethy Roland E.V. | Prémium B2B Árufuvarozás és Logisztika",
    template: "%s | Némethy Roland E.V."
  },
  description: "Megbízható furgonos árufuvarozás, logisztika és költöztetés Érd vonzáskörzetéből, országos lefedettséggel. Mercedes Sprinter és Fiat Ducato kapacitás cégeknek.",
  keywords: [
    "árufuvarozás",
    "logisztika",
    "költöztetés",
    "belföldi fuvarozás",
    "Érd",
    "Budapest",
    "furgonos szállítás",
    "B2B fuvarozás",
    "B2B árufuvarozás",
    "zárt furgon bérlés sofőrrel",
    "expressz raklapos szállítás"
  ],
  authors: [{ name: "Némethy Roland" }],
  openGraph: {
    title: "Némethy Roland E.V. | Prémium B2B Árufuvarozás és Logisztika",
    description: "Megbízható furgonos árufuvarozás, logisztika és költöztetés Érd vonzáskörzetéből, országos lefedettséggel. Mercedes Sprinter és Fiat Ducato kapacitás cégeknek.",
    url: "https://nemethy-roland.vercel.app/",
    siteName: "Némethy Roland E.V.",
    images: [
      {
        url: "https://nemethy-roland.vercel.app/images/1.jpg",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LogisticsService",
  "name": "Némethy Roland E.V. - Prémium B2B Árufuvarozás",
  "image": "https://nemethy-roland.vercel.app/images/1.jpg",
  "telephone": "+36 70 626 0920",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Földmunkás u. 38",
    "addressLocality": "Érd",
    "postalCode": "2030",
    "addressCountry": "HU"
  },
  "areaServed": ["Érd", "Budapest", "Pest megye", "Magyarország"],
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="h-full antialiased dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} min-h-full flex flex-col font-sans pt-20 bg-transparent text-slate-100`}>
        <VideoBackground />
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


