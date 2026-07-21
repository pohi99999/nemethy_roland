'use client';
 
import React, { useState } from 'react';
import { Send, MapPin, Package, Calendar, Mail, Phone, User, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="ajanlatkeres" className="bg-transparent py-20 md:py-28 relative overflow-hidden text-white">
      {/* Háttér dekoráció */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Kérjen gyors árajánlatot!
            </h2>
            <p className="text-slate-200 text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              Töltse ki az alábbi űrlapot, és munkatársunk a lehető legrövidebb időn belül felveszi Önnel a kapcsolatot a személyre szabott ajánlattal.
            </p>
          </div>

          {/* Űrlap Kártya */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all duration-500 ease-out hover:border-white/20 p-8 md:p-12 rounded-3xl">
            
            {submitStatus === 'success' ? (
              <div className="text-center py-12 space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle size={44} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Sikeres ajánlatkérés!</h3>
                  <p className="text-slate-200 max-w-md mx-auto">
                    Köszönjük megkeresését. Az adatait rögzítettük, és munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségeken.
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold rounded-xl hover:-translate-y-0.5 active:scale-[0.98] shadow-md transition-all duration-200"
                  aria-label="Új ajánlatkérő űrlap megnyitása"
                >
                  Új ajánlatkérés
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-start gap-3 text-sm">
                    <AlertCircle size={20} strokeWidth={1.5} className="flex-shrink-0 mt-0.5 text-rose-400" />
                    <div>
                      <span className="font-semibold">Hiba történt:</span> {errorMessage}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Felvétel helye */}
                  <div>
                    <label htmlFor="pickup" className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                      <MapPin size={16} strokeWidth={1.5} className="text-blue-400" />
                      <span>Felvétel helye</span>
                    </label>
                    <input 
                      id="pickup"
                      type="text" 
                      required
                      disabled={isSubmitting}
                      placeholder="Város, irányítószám (pl. Budapest, 1118)"
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-200 disabled:opacity-50"
                      value={formData.pickup}
                      onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                    />
                  </div>

                  {/* Lerakás helye */}
                  <div>
                    <label htmlFor="delivery" className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                      <MapPin size={16} strokeWidth={1.5} className="text-indigo-400" />
                      <span>Lerakás helye</span>
                    </label>
                    <input 
                      id="delivery"
                      type="text" 
                      required
                      disabled={isSubmitting}
                      placeholder="Város, irányítószám (pl. Bécs, 1010)"
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-200 disabled:opacity-50"
                      value={formData.delivery}
                      onChange={(e) => setFormData({...formData, delivery: e.target.value})}
                    />
                  </div>

                  {/* Szállítandó áru leírása */}
                  <div className="md:col-span-2">
                    <label htmlFor="cargo" className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                      <Package size={16} strokeWidth={1.5} className="text-blue-400" />
                      <span>Szállítandó áru (rövid leírás)</span>
                    </label>
                    <textarea 
                      id="cargo"
                      required
                      disabled={isSubmitting}
                      rows={3}
                      placeholder="Áru jellege, súlya, mérete, raklapok száma..."
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-200 resize-none disabled:opacity-50"
                      value={formData.cargo}
                      onChange={(e) => setFormData({...formData, cargo: e.target.value})}
                    />
                  </div>

                  {/* Kívánt dátum */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                      <Calendar size={16} strokeWidth={1.5} className="text-blue-400" />
                      <span>Kívánt dátum</span>
                    </label>
                    <input 
                      id="date"
                      type="date" 
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-200 disabled:opacity-50"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>

                  {/* Név mező */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                      <User size={16} strokeWidth={1.5} className="text-blue-400" />
                      <span>Kapcsolattartó neve</span>
                    </label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      disabled={isSubmitting}
                      placeholder="Kovács János"
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-200 disabled:opacity-50"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  {/* E-mail cím */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                      <Mail size={16} strokeWidth={1.5} className="text-blue-400" />
                      <span>E-mail cím</span>
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      disabled={isSubmitting}
                      placeholder="pelda@cegnev.hu"
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-200 disabled:opacity-50"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  {/* Telefonszám */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                      <Phone size={16} strokeWidth={1.5} className="text-blue-400" />
                      <span>Telefonszám</span>
                    </label>
                    <input 
                      id="phone"
                      type="tel" 
                      required
                      disabled={isSubmitting}
                      placeholder="+36 30 123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-200 disabled:opacity-50"
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
                    className="w-full group py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    <span>{isSubmitting ? 'Küldés folyamatban...' : 'Ajánlatkérés elküldése'}</span>
                    {!isSubmitting && <Send size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
