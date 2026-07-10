"use client";

import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log("Audio play blocked or format not supported:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-slate-950/80 backdrop-blur-md border border-slate-800/60 px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90 text-xs">
      <button 
        onClick={togglePlay} 
        className="w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label={isPlaying ? "Zene megállítása" : "Zene lejátszása"}
      >
        {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
      </button>
      <span className="font-semibold text-slate-300 tracking-wide select-none">
        The Sopranos - Don't Stop Believin'
      </span>
      <audio 
        ref={audioRef}
        src="https://youtu.be/nrXVYGZewd4?si=WE0nmzVcVvO5IMoW" 
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
