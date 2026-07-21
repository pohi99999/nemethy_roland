import React from 'react';

export default function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-50"
      >
        <source src="/hatter1.mp4" type="video/mp4" />
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-slate-950/65 backdrop-blur-[3px] -z-40 pointer-events-none" />
    </>
  );
}
