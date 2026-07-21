"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Kiszámítható, gyors és hihetetlenül precíz. Az építőanyagok mindig percre pontosan érkeznek a projektjeinkre.",
      author: "Logisztikai vezető",
      company: "Építőipari Kft."
    },
    {
      text: "Végre egy fuvarozó, aki mögött komoly jogi és adminisztratív háttér áll. A számlázás és a szerződéskötés is hibátlan.",
      author: "Beszerzési menedzser",
      company: "Kereskedelmi Partner"
    },
    {
      text: "Az oldalsó ponyvás rakodhatóság rengeteg időt spórol a raktárunkban. Csak ajánlani tudom a cégeknek!",
      author: "Raktárvezető",
      company: "Logisztikai Központ"
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
      {/* Finom díszítő kör a háttérben */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Mit mondanak rólunk partnereink?
          </h2>
          <p className="text-slate-200 text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            B2B ügyfeleink elégedettsége a legfontosabb visszajelzés számunkra a mindennapi munka során.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-500 ease-out hover:border-white/20 rounded-2xl p-8 relative flex flex-col justify-between group"
            >
              <Quote strokeWidth={1.5} className="absolute top-6 right-8 w-10 h-10 text-white/10 pointer-events-none group-hover:text-white/20 transition-colors" />

              <div className="relative z-10 mb-6">
                <p className="text-slate-200 italic leading-relaxed text-base">
                  &bdquo;{review.text}&ldquo;
                </p>
              </div>

              {/* Szerző */}
              <div className="border-t border-white/10 pt-6">
                <p className="font-bold text-white text-sm">
                  {review.author}
                </p>
                <p className="text-xs text-blue-400 font-semibold tracking-wide uppercase mt-0.5">
                  {review.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
