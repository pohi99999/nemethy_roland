"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, Box, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
      title: "1. Gyors Ajánlatkérés",
      description: "Töltse ki egyszerű online űrlapunkat percek alatt, megadva a főbb fuvaradatokat."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
      title: "2. Egyeztetés és Szerződés",
      description: "Személyre szabott, transzparens árajánlatot adunk, majd rögzítjük a szerződéses feltételeket."
    },
    {
      icon: <Box className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
      title: "3. Biztonságos Árufelvétel",
      description: "Pontosan a megbeszélt időben megjelenünk a felrakóhelyen, és szakszerűen rögzítjük a rakományt."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
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
    <section className="bg-transparent py-20 md:py-28 relative overflow-hidden text-white">
      {/* Háttér díszítés */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Hogyan dolgozunk?
          </h2>
          <p className="text-slate-200 text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
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
          <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-400/50 to-blue-500/20 -translate-y-8 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-500 ease-out hover:border-white/20 p-6 rounded-2xl group"
            >
              {/* Ikon és kör */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 border-white/15 bg-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                <div className="group-hover:scale-110 transition-all duration-300">
                  {React.cloneElement(step.icon, {
                    className: "w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300",
                    strokeWidth: 1.5
                  })}
                </div>
              </div>

              {/* Lépés száma és cím */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Leírás */}
              <p className="text-sm text-slate-200 leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
