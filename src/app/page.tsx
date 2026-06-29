import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import TrustFeatures from "@/components/TrustFeatures";
import VehicleFleet from "@/components/VehicleFleet";
import HowItWorks from "@/components/HowItWorks";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Partners />
      <TrustFeatures />
      <VehicleFleet />
      <HowItWorks />
      <QuoteForm />
      <Faq />
    </main>
  );
}



