"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Warehouse, Truck, Factory, Compass } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: "Logisztikai Partner Kft.",
      icon: <Truck className="w-5 h-5" />
    },
    {
      name: "Építőanyag Kereskedés",
      icon: <Building2 className="w-5 h-5" />
    },
    {
      name: "Raktárbázis Kft.",
      icon: <Warehouse className="w-5 h-5" />
    },
    {
      name: "Gyártástechnika Nyrt.",
      icon: <Factory className="w-5 h-5" />
    },
    {
      name: "Trans-Sped Expressz",
      icon: <Compass className="w-5 h-5" />
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
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  } as const;

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-10">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
          Megbízható partnereink & együttműködéseink
        </p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-5xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors duration-300 cursor-default"
            >
              <div className="opacity-60 transition-opacity">
                {partner.icon}
              </div>
              <span className="font-semibold text-sm tracking-wide">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
