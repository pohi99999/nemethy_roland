import React from 'react';
import Image from 'next/image';
import { Check, Compass } from 'lucide-react';

export default function VehicleFleet() {
  const advantages = [
    "Akár 7-8 EUR raklap kapacitás",
    "Oldalsó rakodhatóság targoncával a gyors anyagmozgatásért",
    "Nincs HU-GO e-útdíj és tachográf kötöttség – gyorsabb és rugalmasabb szállítás",
    "Ideális építőanyagok, raklapos áruk és terjedelmes csomagok expressz szállítására"
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Bal oldal: Szöveges tartalom */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <Compass size={16} />
              <span>Modern Szállítókapacitás</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Mercedes-Benz Vito & 4,2m ponyvás utánfutó kombináció
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Járműparkunk gerincét a megbízhatóságáról híres Mercedes-Benz Vito képezi, melyet egy speciális ponyvás utánfutóval egészítünk ki. Ez a párosítás tökéletes egyensúlyt teremt a nagy kapacitás és a rugalmas expressz szállítás között.
            </p>

            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Jobb oldal: Kép */}
          <div className="relative group aspect-[4/3] w-full">
            {/* Díszítő háttér elemek */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl filter blur-lg opacity-10 group-hover:opacity-15 transition-opacity duration-300 z-0" />
            
            {/* Fő kép doboz */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 z-10 border border-slate-200/50">
              <Image 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                alt="B2B Árufuvarozás és Rakodás"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
