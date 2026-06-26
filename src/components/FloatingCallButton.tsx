import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a 
      href="tel:+36301234567" 
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/20 active:scale-95 transition-all duration-300"
      aria-label="Hívás indítása"
    >
      {/* Pulzáló háttér effekt */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
      <Phone size={24} className="relative z-10" />
    </a>
  );
}
