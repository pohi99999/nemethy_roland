'use client';

import React, { useState } from 'react';
import { Send, MapPin, Package, Calendar, Mail, Phone, User, CheckCircle, AlertCircle } from 'lucide-react';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Hiba történt a küldés során.');
      }

      setSubmitStatus('success');
      setFormData({
        pickup: '',
        delivery: '',
        cargo: '',
        date: '',
        email: '',
        phone: '',
        name: ''
      });
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Hálózati hiba történt. Kérjük, próbálja meg később.');
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/80 p-8 md:p-12 transition-all duration-300">
          
          {submitStatus === 'success' ? (
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle size={44} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Sikeres ajánlatkérés!</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Köszönjük megkeresését. Az adatait rögzítettük, és munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségeken.
                </p>
              </div>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors duration-200"
              >
                Új ajánlatkérés
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-800 flex items-start gap-3 text-sm">
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Hiba történt:</span> {errorMessage}
                  </div>
                </div>
              )}

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
                    disabled={isSubmitting}
                    placeholder="Város, irányítószám (pl. Budapest, 1118)"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-500"
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
                    disabled={isSubmitting}
                    placeholder="Város, irányítószám (pl. Bécs, 1010)"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-500"
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
                    disabled={isSubmitting}
                    rows={3}
                    placeholder="Áru jellege, súlya, mérete, raklapok száma..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none disabled:bg-slate-50 disabled:text-slate-500"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-500"
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
                    disabled={isSubmitting}
                    placeholder="Kovács János"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-500"
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
                    disabled={isSubmitting}
                    placeholder="pelda@cegnev.hu"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-500"
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
                    disabled={isSubmitting}
                    placeholder="+36 30 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

              </div>

              {/* Küldés gomb */}
              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  <span>{isSubmitting ? 'Küldés folyamatban...' : 'Ajánlatkérés elküldése'}</span>
                  {!isSubmitting && <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
