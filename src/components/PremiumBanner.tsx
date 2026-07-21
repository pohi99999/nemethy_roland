"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumBanner() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-transparent text-white">
      {/* Izzások */}
      <div className="absolute -top-12 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10" />
      <div className="absolute -bottom-12 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_8px_32px_rgba(0,0,0,0.4)] hover:bg-white/10 transition-all duration-500 ease-out hover:border-white/20 p-8 md:p-14 rounded-3xl"
        >
          {/* Díszítő elem */}
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full shadow-md" />
          
          {/* Fő szlogen */}
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-relaxed md:leading-loose text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] max-w-3xl mx-auto">
            &bdquo;Nem csak árut szállítunk. Kiszámíthatóságot és nyugalmat garantálunk a vállalkozásának.&ldquo;
          </h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-8 rounded-full shadow-md" />
        </motion.div>
      </div>
    </section>
  );
}
