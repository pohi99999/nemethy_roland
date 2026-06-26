'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-6">
            <HelpCircle size={16} className="text-blue-600" />
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
                className="border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-950 text-lg md:pr-8">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'transform rotate-180 text-blue-600' : ''}`}
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-white">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
