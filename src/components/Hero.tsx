import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 md:py-32 flex items-center min-h-[70vh]">
      {/* Háttér izzás effektek */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Finom absztrakt vonalhálózat dekoráció a háttérben */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <Truck size={16} />
            <span>Prémium B2B Árufuvarozás</span>
          </div>

          {/* Főcím */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight md:leading-none">
            Expressz árufuvarozás és logisztika kompromisszumok nélkül
          </h1>

          {/* Alcím */}
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Kiemelt kapacitás, garantált szerződéses biztonság és precíz teljesítés céges partnereinknek.
          </p>

          {/* Akció gomb */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-xl shadow-blue-900/30 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
              <span>Gyors Ajánlatkérés</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <a 
              href="#kapcsolat" 
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-lg border border-slate-700/60 transition-all duration-300"
            >
              Kapcsolatfelvétel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
