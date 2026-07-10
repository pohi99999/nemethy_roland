"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT: any;
  }
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initPlayer = () => {
      if (playerRef.current) return;

      try {
        playerRef.current = new window.YT.Player('youtube-player-container', {
          height: '0',
          width: '0',
          videoId: 'nrXVYGZewd4',
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            origin: window.location.origin
          },
          events: {
            onReady: () => {
              setIsReady(true);
            },
            onStateChange: (event: any) => {
              // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            }
          }
        });
      } catch (err) {
        console.error("YouTube Player init failed:", err);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };

      if (!document.getElementById('yt-iframe-api-script')) {
        const tag = document.createElement('script');
        tag.id = 'yt-iframe-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }
    }
  }, []);

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Failed to control YouTube Player:", err);
    }
  };

  return (
    <>
      {/* Rejtett YouTube Lejátszó */}
      <div className="fixed top-0 left-0 w-0 h-0 opacity-0 pointer-events-none z-[-50] overflow-hidden">
        <div id="youtube-player-container"></div>
      </div>

      {/* Lebegő lejátszó kapszula */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-slate-950/80 backdrop-blur-md border border-slate-800/60 px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90 text-xs">
        <button 
          onClick={togglePlay} 
          disabled={!isReady}
          className={`w-7 h-7 rounded-full text-white flex items-center justify-center transition-all duration-300 focus:outline-none ${
            isReady 
              ? 'bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 cursor-pointer shadow-md' 
              : 'bg-slate-800 opacity-50 cursor-not-allowed'
          }`}
          aria-label={isPlaying ? "Zene megállítása" : "Zene lejátszása"}
        >
          {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
        </button>
        <span className="font-semibold text-slate-300 tracking-wide select-none">
          The Sopranos - Don't Stop Believin'
        </span>
      </div>
    </>
  );
}
