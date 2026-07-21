"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function VideoBackground() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hatter1.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="fixed top-0 left-0 w-full h-full bg-slate-950/65 backdrop-blur-[3px] -z-40 pointer-events-none" />
      {/* Cinematic Film Grain Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-35 pointer-events-none opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </>
  );
}
