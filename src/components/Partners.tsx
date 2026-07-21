"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Warehouse, Truck, Factory, Compass, Shield } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: "Eviron System Zrt.",
      icon: <Factory className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
    },
    {
      name: "Econix Zrt.",
      icon: <Compass className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
    },
    {
      name: "Kgb Zrt.",
      icon: <Building2 className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
    },
    {
      name: "Mobil Art Kft.",
      icon: <Truck className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
    },
    {
      name: "Königsberg Kft.",
      icon: <Warehouse className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
    },
    {
      name: "Open Metal Building System Kft.",
      icon: <Shield className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  } as const;

  return (
    <section className="bg-transparent py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <p className="text-center text-xs font-semibold text-slate-200 uppercase tracking-widest mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Megbízható partnereink & együttműködéseink
        </p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-500 ease-out hover:border-white/20 px-5 py-3 rounded-2xl cursor-default group"
            >
              <div className="transition-transform group-hover:scale-110">
                {partner.icon}
              </div>
              <span className="font-semibold text-sm tracking-wide text-white">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
