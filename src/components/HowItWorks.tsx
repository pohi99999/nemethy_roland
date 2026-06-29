"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, Box, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "1. Gyors Ajánlatkérés",
      description: "Töltse ki egyszerű online űrlapunkat percek alatt, megadva a főbb fuvaradatokat."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
      title: "2. Egyeztetés és Szerződés",
      description: "Személyre szabott, transzparens árajánlatot adunk, majd rögzítjük a szerződéses feltételeket."
    },
    {
      icon: <Box className="w-6 h-6 text-blue-600" />,
      title: "3. Biztonságos Árufelvétel",
      description: "Pontosan a megbeszélt időben megjelenünk a felrakóhelyen, és szakszerűen rögzítjük a rakományt."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "4. Pontos Teljesítés",
      description: "Az árut biztonságban, a határidőket szigorúan betartva szállítjuk le a célállomásra."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Háttér díszítés */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Hogyan dolgozunk?
          </h2>
          <p className="text-slate-600">
            Egyszerű, átlátható és megbízható folyamat az ajánlatkéréstől a zökkenőmentes lerakodásig.
          </p>
        </div>

        {/* Timeline Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {/* Összekötő vonal asztali nézetben */}
          <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -translate-y-8 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Ikon és kör */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 border-blue-100 bg-blue-50 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                <div className="group-hover:scale-110 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(step.icon, {
                    className: "w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  })}
                </div>
              </div>

              {/* Lépés száma és cím */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Leírás */}
              <p className="text-sm text-slate-600 leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
