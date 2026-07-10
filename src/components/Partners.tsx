"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Warehouse, Truck, Factory, Compass, Shield } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: "Eviron System Zrt.",
      icon: <Factory className="w-5 h-5" strokeWidth={1.5} />
    },
    {
      name: "Econix Zrt.",
      icon: <Compass className="w-5 h-5" strokeWidth={1.5} />
    },
    {
      name: "Kgb Zrt.",
      icon: <Building2 className="w-5 h-5" strokeWidth={1.5} />
    },
    {
      name: "Mobil Art Kft.",
      icon: <Truck className="w-5 h-5" strokeWidth={1.5} />
    },
    {
      name: "Königsberg Kft.",
      icon: <Warehouse className="w-5 h-5" strokeWidth={1.5} />
    },
    {
      name: "Open Metal Building System Kft.",
      icon: <Shield className="w-5 h-5" strokeWidth={1.5} />
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
    <section className="bg-slate-950 border-y border-slate-900 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
          Megbízható partnereink & együttműködéseink
        </p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-5xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300 cursor-default"
            >
              <div className="opacity-70 transition-opacity">
                {partner.icon}
              </div>
              <span className="font-semibold text-sm tracking-wide text-slate-300">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
