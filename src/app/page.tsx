import Hero from "@/components/Hero";
import TrustFeatures from "@/components/TrustFeatures";
import VehicleFleet from "@/components/VehicleFleet";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <TrustFeatures />
      <VehicleFleet />
      <QuoteForm />
    </main>
  );
}


