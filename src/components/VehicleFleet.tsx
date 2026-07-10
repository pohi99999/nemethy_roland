"use client";

import React from 'react';
import Image from 'next/image';
import { Check, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VehicleFleet() {
  const fleetItems = [
    {
      title: "Mercedes-Benz Sprinter (Ponyvás)",
      description: "22 m³ kapacitás, 4.2m × 2.1m × 2.55m (H × Sz × M) raktér."
    },
    {
      title: "Fiat Ducato Maxi (Zárt furgon)",
      description: "17 m³ kapacitás, 5 palettás teherbírás."
    },
    {
      title: "Rugalmas utánfutós áruszállítás",
      description: "5 métertől egészen 8 méterig terjedő extra szállítási lehetőségek."
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          {/* Bal oldal: Szöveges tartalom */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <Compass size={16} strokeWidth={1.5} />
              <span>Modern Szállítókapacitás</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Professzionális Járműpark és Eszközök
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Flottánkat a B2B partnereink szigorú elvárásaihoz szabtuk. A modern zárt és ponyvás járműveink, valamint rugalmas szállítóeszközeink garantálják a precíz és sérülésmentes célba juttatást.
            </p>

            <div className="space-y-4">
              {fleetItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200/80 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1.5" y="3" width="21" height="18" rx="2" />
                      <path d="M7 21v-4" />
                      <path d="M17 21v-4" />
                      <path d="M1.5 8h21" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Jobb oldal: Kép */}
          <div className="relative group aspect-[4/3] w-full">
            {/* Díszítő háttér elemek */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl filter blur-lg opacity-10 group-hover:opacity-15 transition-opacity duration-300 z-0" />
            
            {/* Fő kép doboz */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 z-10 border border-slate-200/50">
              <Image 
                src="/1.jpg"
                alt="Némethy Roland szállító flotta"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
