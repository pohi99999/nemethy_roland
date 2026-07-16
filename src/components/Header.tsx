import React from 'react';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/10 text-white">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-6xl">
        
        {/* Bal oldal: Logó és név */}
        <a href="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Némethy Fuvarozás - Főoldal">
          <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path d="M4 18L10 12L4 6" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 18L16 12L10 6" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 18L22 12L16 6" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold tracking-wider text-lg bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:text-blue-400 transition-colors duration-200">
            Némethy Roland E.V.
          </span>
        </a>

        {/* Jobb oldal: Elérhetőség/CTA */}
        <div>
          <a 
            href="tel:+36706260920" 
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800/80 hover:bg-slate-800 hover:border-slate-700/80 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 shadow-xl hover:shadow-indigo-500/10"
            aria-label="Telefonhívás indítása: +36 70 626 0920"
          >
            <Phone size={15} strokeWidth={1.5} className="text-blue-500" />
            <span className="hidden sm:inline">+36 70 626 0920</span>
            <span className="sm:hidden">Hívás</span>
          </a>
        </div>

      </div>
    </header>
  );
}
