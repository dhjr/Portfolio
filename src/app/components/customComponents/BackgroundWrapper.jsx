"use client";

import React from "react";

export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-700">
      {/* Layer 1: The Base Grid with Radial Mask */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(#888 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)",
        }}
      />

      {/* Layer 2: Enhanced Mesh Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Center Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 dark:bg-emerald-500/10 blur-[120px] rounded-full" />
        
        {/* Left Side Glow */}
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[100px] rounded-full" />
        
        {/* Right Side Glow */}
        <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Layer 3: Noise Texture (Optional but adds high-end feel) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none brightness-100 contrast-150" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3	%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}