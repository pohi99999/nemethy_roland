"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white py-24 md:py-32 flex items-center min-h-[75vh]">
      {/* Háttér kép Next.js Image-dzsel */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1920&q=80"
          alt="Prémium B2B furgon és logisztika háttér"
          fill
          priority
          className="object-cover"
        />
        {/* Sötét overlay a jó olvashatóságért */}
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>

      {/* Háttér izzás effektek a kép fölött és a tartalom mögött */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center bg-slate-950/45 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-14 shadow-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 text-blue-400 text-sm font-medium mb-8">
            <Truck size={16} strokeWidth={1.5} />
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
            <a 
              href="#ajanlatkeres"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <span>Gyors Ajánlatkérés</span>
              <ArrowRight size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#kapcsolat" 
              className="px-8 py-4 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-lg border border-slate-800/80 hover:border-slate-700/80 hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-slate-950/20 transition-all duration-300"
            >
              Kapcsolatfelvétel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
