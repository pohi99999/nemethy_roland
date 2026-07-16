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
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-6">
              <HelpCircle size={16} strokeWidth={1.5} className="text-blue-600" />
              <span>Gyakran Ismételt Kérdések</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Megválaszoljuk kérdéseit
            </h2>
            <p className="text-slate-600">
              Összegyűjtöttük a legfontosabb információkat a gördülékeny együttműködés érdekében.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-slate-200/80 dark:border-white/10 rounded-2xl bg-white/70 dark:bg-slate-950/40 backdrop-blur-md hover:bg-white dark:hover:bg-slate-900/60 transition-all duration-300 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-btn-${index}`}
                  >
                    <span className="font-bold text-slate-950 dark:text-white text-lg md:pr-8">{faq.q}</span>
                    <ChevronDown 
                      size={20} 
                      strokeWidth={1.5}
                      className={`text-slate-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'transform rotate-180 text-blue-600' : ''}`}
                    />
                  </button>
                  
                  <div 
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/80 dark:border-white/10 pt-4 bg-white/40 dark:bg-slate-950/20">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
