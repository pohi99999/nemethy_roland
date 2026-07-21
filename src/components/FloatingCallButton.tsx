"use client";

import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingCallButton() {
  return (
    <motion.a 
      href="tel:+36706260920" 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_24px_rgba(16,185,129,0.4)] transition-all duration-300"
      aria-label="Hívás indítása"
    >
      {/* Pulzáló háttér effekt */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
      <Phone size={24} strokeWidth={1.5} className="relative z-10" />
    </motion.a>
  );
}
