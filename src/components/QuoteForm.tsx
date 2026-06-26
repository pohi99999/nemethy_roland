'use client';

import React, { useState } from 'react';
import { Send, MapPin, Package, Calendar, Mail, Phone, User } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    pickup: '',
    delivery: '',
    cargo: '',
    date: '',
    email: '',
    phone: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Köszönjük! Az ajánlatkérés elküldése funkció hamarosan elérhető lesz.');
  };

  return (
    <section id="ajanlatkeres" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Háttér dekoráció */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Kérjen gyors árajánlatot!
          </h2>
          <p className="text-slate-600">
            Töltse ki az alábbi űrlapot, és munkatársunk a lehető legrövidebb időn belül felveszi Önnel a kapcsolatot a személyre szabott ajánlattal.
          </p>
        </div>

        {/* Űrlap Kártya */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/80 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Felvétel helye */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" />
                  <span>Felvétel helye</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Város, irányítószám (pl. Budapest, 1118)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  value={formData.pickup}
                  onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                />
              </div>

              {/* Lerakás helye */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <MapPin size={16} className="text-indigo-600" />
                  <span>Lerakás helye</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Város, irányítószám (pl. Bécs, 1010)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  value={formData.delivery}
                  onChange={(e) => setFormData({...formData, delivery: e.target.value})}
                />
              </div>

              {/* Szállítandó áru leírása */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Package size={16} className="text-blue-600" />
                  <span>Szállítandó áru (rövid leírás)</span>
                </label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Áru jellege, súlya, mérete, raklapok száma..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none"
                  value={formData.cargo}
                  onChange={(e) => setFormData({...formData, cargo: e.target.value})}
                />
              </div>

              {/* Kívánt dátum */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} className="text-blue-600" />
                  <span>Kívánt dátum</span>
                </label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              {/* Név mező */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <User size={16} className="text-blue-600" />
                  <span>Kapcsolattartó neve</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Kovács János"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* E-mail cím */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Mail size={16} className="text-blue-600" />
                  <span>E-mail cím</span>
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="pelda@cegnev.hu"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Telefonszám */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Phone size={16} className="text-blue-600" />
                  <span>Telefonszám</span>
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="+36 30 123 4567"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

            </div>

            {/* Küldés gomb */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full group py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Ajánlatkérés elküldése</span>
                <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
