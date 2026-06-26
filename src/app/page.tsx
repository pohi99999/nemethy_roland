import Hero from "@/components/Hero";
import TrustFeatures from "@/components/TrustFeatures";
import VehicleFleet from "@/components/VehicleFleet";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <TrustFeatures />
      <VehicleFleet />
      <QuoteForm />
      <Faq />
    </main>
  );
}



