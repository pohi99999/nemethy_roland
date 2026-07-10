"use client";

import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Shield, Play, Pause } from 'lucide-react';

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio play blocked/failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

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

        {/* Alsó copyright rész és zenelejátszó */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-400 text-center md:text-left">
            <p>© {new Date().getFullYear()} Némethy Roland Egyéni Vállalkozó. Minden jog fenntartva.</p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a href="#" className="hover:text-slate-300 transition-colors duration-200">Adatkezelési tájékoztató</a>
              <a href="#" className="hover:text-slate-300 transition-colors duration-200">ÁSZF</a>
            </div>
          </div>

          {/* Diszkrét Zenelejátszó */}
          <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800/60 px-4 py-2 rounded-full shadow-md text-xs">
            <button 
              onClick={togglePlay} 
              className="w-6 h-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none"
              aria-label={isPlaying ? "Zene megállítása" : "Zene lejátszása"}
            >
              {isPlaying ? <Pause size={10} fill="currentColor" /> : <Play size={10} fill="currentColor" className="ml-0.5" />}
            </button>
            <span className="font-semibold text-slate-300 tracking-wide">
              The Sopranos  Don't Stop Believin'
            </span>
            <audio 
              ref={audioRef}
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
              preload="none"
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
