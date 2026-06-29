import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import PremiumBanner from "@/components/PremiumBanner";
import Stats from "@/components/Stats";
import VehicleFleet from "@/components/VehicleFleet";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Partners />
      <PremiumBanner />
      <Stats />
      <VehicleFleet />
      <HowItWorks />
      <Testimonials />
      <QuoteForm />
      <Faq />
    </main>
  );
}



