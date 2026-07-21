"use client";

import React from 'react';
import Image from 'next/image';
import { Compass, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VehicleFleet() {
  const fleetItems = [
    {
      title: "Mercedes-Benz Vito & Utánfutó",
      description: "Megbízható zárt furgon, amely igény esetén 58 méter hosszú utánfutóval is kiegészíthető, így maximálisan alkalmazkodik az egyedi szállítási feladatokhoz.",
      image: "/images/1.jpg",
      capacity: "Rugalmas szerelvény",
      featured: true
    },
    {
      title: "Mercedes-Benz Sprinter (Ponyvás)",
      description: "22 m³ kapacitás, 4.2m × 2.1m × 2.55m (H × Sz × M) raktér. Nagy térfogatú áruk gyors és biztonságos célba juttatása.",
      image: "/images/MERCEDES-SPRINTER.jpg",
      capacity: "22 m³ kapacitás",
      featured: false
    },
    {
      title: "Fiat Ducato Maxi (Zárt furgon)",
      description: "17 m³ kapacitás, 5 palettás kiszerelés. Zárt, biztonságos felépítmény precíz rakománykezeléssel.",
      image: "/images/Fiat-Ducato.jpg",
      capacity: "17 m³ (5 palettás)",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  return (
    <section className="bg-transparent py-20 md:py-28 relative overflow-hidden text-white">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-blue-400 text-sm font-semibold mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <Compass size={16} strokeWidth={1.5} />
            <span>Modern Szállítókapacitás</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-wrap:balance]">
            Professzionális Járműpark és Eszközök
          </h2>
          
          <p className="text-slate-200 text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            Flottánkat a B2B partnereink szigorú elvárásaihoz szabtuk. Modern zárt és ponyvás járműveink garantálják a precíz és sérülésmentes célba juttatást.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {fleetItems.map((item, index) => {
            if (item.featured) {
              return (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="md:col-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_8px_32px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-white/20 rounded-3xl overflow-hidden flex flex-col md:flex-row group transition-all duration-500 ease-out"
                >
                  {/* Kép konténer a Bento Kiemelt kártyához */}
                  <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden bg-slate-900">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide shadow-lg flex items-center gap-1.5 border border-white/20">
                      <Sparkles size={14} />
                      <span>Kiemelt Flotta Elem</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide shadow-md">
                      {item.capacity}
                    </div>
                  </div>
                  
                  {/* Kártya tartalom */}
                  <div className="p-8 md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-white text-2xl mb-4 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-200 text-base leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-blue-400 font-bold text-xs tracking-wider uppercase">
                      <span>Kiemelt Szerelvény Kapacitás</span>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="md:col-span-1 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_8px_32px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-white/20 rounded-3xl overflow-hidden flex flex-col group transition-all duration-500 ease-out"
              >
                {/* Kép konténer */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Kapacitás badge */}
                  <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide shadow-md">
                    {item.capacity}
                  </div>
                </div>
                
                {/* Kártya tartalom */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-white text-xl mb-2 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-200 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-blue-400 font-semibold text-xs tracking-wider uppercase">
                    <span>Részletek</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
