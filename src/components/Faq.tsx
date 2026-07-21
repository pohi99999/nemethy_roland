'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Faq() {
  const faqs = [
    {
      q: "Milyen területeken vállalnak fuvarozást?",
      a: "Fő bázisunk Érd, így a budapesti agglomerációban és országosan is rendkívül gyors reakcióidővel dolgozunk."
    },
    {
      q: "Rendelkeznek árubiztosítással?",
      a: "Igen, minden fuvarunk teljes körű árubiztosítással és precíz szerződéses háttérrel történik."
    },
    {
      q: "Milyen fizetési módokat fogadnak el?",
      a: "Állandó céges partnereink (B2B) számára szerződéses, utólagos átutalási lehetőséget biztosítunk. Ezen felül készpénzes és azonnali utalásos fizetés is megoldott."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-transparent py-20 md:py-28 relative overflow-hidden text-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-blue-400 text-sm font-semibold mb-6 shadow-md">
              <HelpCircle size={16} strokeWidth={1.5} className="text-blue-400" />
              <span>Gyakran Ismételt Kérdések</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Megválaszoljuk kérdéseit
            </h2>
            <p className="text-slate-200 text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              Összegyűjtöttük a legfontosabb információkat a gördülékeny együttműködés érdekében.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div 
                  key={index}
                  whileHover={{ y: -2 }}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_8px_32px_rgba(0,0,0,0.4)] hover:bg-white/10 transition-all duration-500 ease-out hover:border-white/20 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-btn-${index}`}
                  >
                    <span className="font-bold text-white text-lg md:pr-8">{faq.q}</span>
                    <ChevronDown 
                      size={20} 
                      strokeWidth={1.5}
                      className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'transform rotate-180 text-blue-400' : ''}`}
                    />
                  </button>
                  
                  <div 
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 text-slate-200 leading-relaxed border-t border-white/10 pt-4 bg-white/5">
                      {faq.a}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
