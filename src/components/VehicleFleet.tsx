"use client";

import React from 'react';
import Image from 'next/image';
import { Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VehicleFleet() {
  const fleetItems = [
    {
      title: "Mercedes-Benz Vito + Ponyvás utánfutó",
      description: "Rugalmas utánfutós áruszállítás, 5 métertől egészen 8 méterig terjedő extra szállítási lehetőségek.",
      image: "/images/1.jpg",
      capacity: "Rugalmas hosszúság (5-8m)"
    },
    {
      title: "Mercedes-Benz Sprinter (Ponyvás)",
      description: "22 m³ kapacitás, 4.2m × 2.1m × 2.55m (H × Sz × M) raktér. Nagy térfogatú áruk gyors és biztonságos célba juttatása.",
      image: "/images/MERCEDES-SPRINTER.jpg",
      capacity: "22 m³ kapacitás"
    },
    {
      title: "Fiat Ducato Maxi (Zárt furgon)",
      description: "17 m³ kapacitás, 5 palettás kiszerelés. Zárt, biztonságos felépítmény precíz rakománykezeléssel.",
      image: "/images/Fiat-Ducato.jpg",
      capacity: "17 m³ (5 palettás)"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
            <Compass size={16} strokeWidth={1.5} />
            <span>Modern Szállítókapacitás</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Professzionális Járműpark és Eszközök
          </h2>
          
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Flottánkat a B2B partnereink szigorú elvárásaihoz szabtuk. A modern zárt és ponyvás járműveink, valamint rugalmas szállítóeszközeink garantálják a precíz és sérülésmentes célba juttatást.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col group"
            >
              {/* Kép konténer */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
                {/* Kapacitás badge */}
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide">
                  {item.capacity}
                </div>
              </div>
              
              {/* Kártya tartalom */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-blue-600 font-medium text-xs tracking-wider uppercase">
                  <span>Részletek</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
