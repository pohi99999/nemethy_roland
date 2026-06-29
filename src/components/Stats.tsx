"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ShieldCheck, Zap, Truck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      end: 100,
      suffix: "%",
      decimals: 0,
      label: "Szerződéses kártérítési fedezet",
      description: "Teljes körű felelősségvállalás minden egyes fuvarra."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      end: 24,
      suffix: "h",
      decimals: 0,
      label: "Expressz kiállási idő belföldön",
      description: "Gyors reagálás, azonnali logisztikai megoldások."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      end: 3.5,
      suffix: "t",
      decimals: 1,
      label: "Rugalmas, útdíjmentes kategória",
      description: "Gyorsabb haladás, kedvezőbb díjszabás korlátozások nélkül."
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  return (
    <section className="bg-slate-900 text-white py-20 md:py-24 relative overflow-hidden">
      {/* Finom kék izzás a háttérben */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-slate-800/40 border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm hover:border-slate-700/50 hover:bg-slate-800/60 transition-all duration-300 group"
            >
              {/* Ikon */}
              <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300">
                {stat.icon}
              </div>

              {/* Szám */}
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 flex items-baseline justify-center">
                <CountUp
                  end={stat.end}
                  decimals={stat.decimals}
                  decimal="."
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <span className="text-blue-500">{stat.suffix}</span>
              </div>

              {/* Cím */}
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                {stat.label}
              </h3>

              {/* Leírás */}
              <p className="text-sm text-slate-400 leading-relaxed max-w-[260px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
