"use client";

import React from "react";

export default function MeshBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-zinc-100 dark:bg-black transition-colors duration-500" />

      {/* Masked technical pattern container - Mask removed for uniform background */}
      <div className="absolute inset-0">
        {/* Technical Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.3] dark:opacity-[0.2] text-zinc-900 dark:text-zinc-200"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1.2px, transparent 1.2px)`,
            backgroundSize: "var(--grid-size, 32px) var(--grid-size, 32px)",
          }}
        />
      </div>

      <style jsx>{`
        div {
          --grid-size: 64px;
        }
        @media (min-width: 768px) {
          div {
            --grid-size: 32px;
          }
        }
      `}</style>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1] pointer-events-none mix-blend-multiply dark:mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
