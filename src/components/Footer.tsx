import React from 'react';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Oszlop 1: Rólunk */}
          <div className="space-y-4">
            <div className="text-white font-bold text-lg tracking-wider uppercase">Némethy Fuvarozás</div>
            <p className="leading-relaxed text-sm text-slate-300">
              Prémium minőségű, B2B fókuszú expressz árufuvarozás és logisztika. Megbízhatóság, jogi biztonság és pontos teljesítés Érdről országosan és nemzetközileg.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-blue-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
              <Shield size={12} strokeWidth={1.5} />
              <span>Garantált Árubiztosítás</span>
            </div>
          </div>

          {/* Oszlop 2: Kapcsolat */}
          <div className="space-y-4">
            <div className="text-white font-bold text-lg tracking-wider uppercase">Kapcsolat</div>
            <ul className="space-y-3 text-sm">
              <li className="font-semibold text-white text-base">Némethy Roland Egyéni Vállalkozó</li>
              <li className="flex items-center gap-2">
                <Phone size={16} strokeWidth={1.5} className="text-blue-500" />
                <a href="tel:+36706260920" className="hover:text-white transition-colors duration-200 text-slate-300" aria-label="Hívás: +36 70 626 0920">+36 70 626 0920</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} strokeWidth={1.5} className="text-blue-500" />
                <a href="mailto:info@nemethyfuvar.hu" className="hover:text-white transition-colors duration-200 text-slate-300" aria-label="E-mail küldése: info@nemethyfuvar.hu">info@nemethyfuvar.hu</a>
              </li>
            </ul>
          </div>

          {/* Oszlop 3: Cégadatok */}
          <div className="space-y-4">
            <div className="text-white font-bold text-lg tracking-wider uppercase">Cégadatok</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} strokeWidth={1.5} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">Székhely: 2030 Érd, Földmunkás u. 38.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-semibold">Adószám:</span>
                <span className="text-slate-300">67611054-2-33</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alsó copyright rész */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-400 text-center md:text-left w-full flex flex-col md:flex-row md:justify-between items-center">
            <p>© {new Date().getFullYear()} Némethy Roland Egyéni Vállalkozó. Minden jog fenntartva.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300 transition-colors duration-200">Adatkezelési tájékoztató</a>
              <a href="#" className="hover:text-slate-300 transition-colors duration-200">ÁSZF</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
