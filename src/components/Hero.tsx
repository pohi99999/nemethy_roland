"use client";

import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white py-24 md:py-32 flex items-center min-h-[75vh] bg-transparent">
      {/* Háttér izzás effektek */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_8px_32px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 ease-out"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-blue-400 text-sm font-semibold mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <Truck size={16} strokeWidth={1.5} />
            <span>Prémium B2B Árufuvarozás</span>
          </div>

          {/* Főcím - Gradiens Text Masking & text-wrap balance */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-tight md:leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-wrap:balance]">
            Expressz árufuvarozás és logisztika kompromisszumok nélkül
          </h1>

          {/* Alcím */}
          <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            Kiemelt kapacitás, garantált szerződéses biztonság és precíz teljesítés céges partnereinknek.
          </p>

          {/* Mágneses Akció Gombok */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a 
              href="#ajanlatkeres"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_24px_rgba(59,130,246,0.3)] transition-all duration-300 flex items-center gap-2"
            >
              <span>Gyors Ajánlatkérés</span>
              <ArrowRight size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a 
              href="#kapcsolat" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-semibold rounded-xl border border-white/15 hover:border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              Kapcsolatfelvétel
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
