"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumBanner() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-y border-slate-800">
      {/* Finom sugárirányú háttérfények és pont-hálózat (parallax imitáció) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '30px 30px',
        backgroundPosition: 'center'
      }} />
      
      {/* Izzások */}
      <div className="absolute -top-12 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-12 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Díszítő elem */}
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full" />
            
            {/* Fő szlogen */}
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-relaxed md:leading-loose text-slate-100 max-w-3xl mx-auto">
              &bdquo;Nem csak árut szállítunk. Kiszámíthatóságot és nyugalmat garantálunk a vállalkozásának.&ldquo;
            </h2>
            
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-8 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
