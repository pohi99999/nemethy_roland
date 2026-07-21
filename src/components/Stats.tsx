"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ShieldCheck, Zap, Truck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" strokeWidth={1.5} />,
      end: 100,
      suffix: "%",
      decimals: 0,
      label: "Szerződéses kártérítési fedezet",
      description: "Teljes körű felelősségvállalás minden egyes fuvarra."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" strokeWidth={1.5} />,
      end: 24,
      suffix: "h",
      decimals: 0,
      label: "Expressz kiállási idő belföldön",
      description: "Gyors reagálás, azonnali logisztikai megoldások."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-400" strokeWidth={1.5} />,
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
    <section className="bg-transparent text-white py-20 md:py-24 relative overflow-hidden">
      {/* Finom kék izzás a háttérben */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="sr-only">Statisztikáink és Kiemelt Értékeink</h2>
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
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_8px_32px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 ease-out rounded-3xl p-8 flex flex-col items-center text-center group"
            >
              {/* Ikon */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-300">
                {stat.icon}
              </div>

              {/* Szám */}
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 flex items-baseline justify-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <CountUp
                  end={stat.end}
                  decimals={stat.decimals}
                  decimal="."
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <span className="text-blue-400">{stat.suffix}</span>
              </div>

              {/* Cím */}
              <h3 className="text-lg font-bold text-white mb-2">
                {stat.label}
              </h3>

              {/* Leírás */}
              <p className="text-sm text-slate-200 leading-relaxed max-w-[260px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
