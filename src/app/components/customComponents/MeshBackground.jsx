"use client";

import React from "react";

/**
 * MeshBackground.jsx
 * Provides a global dot grid background for the page.
 * 
 * Fixed for Mobile Chrome:
 * - Uses global CSS variables for colors (defined in globals.css)
 * - Removed style jsx to avoid potential hydration/rendering issues
 * - Increased contrast for better visibility on mobile screens
 */
export default function MeshBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Background (Transitioning color) */}
      <div className="absolute inset-0 bg-zinc-100 dark:bg-black transition-colors duration-500" />

      {/* Technical Dot Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--grid-dot-color) 1.2px, transparent 1.2px)`,
            backgroundSize: "var(--grid-size, 32px) var(--grid-size, 32px)",
          }}
        />
      </div>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1] pointer-events-none mix-blend-multiply dark:mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Responsive Grid Size Logic */}
      <style>{`
        :root {
          --grid-size: 64px;
        }
        @media (min-width: 768px) {
          :root {
            --grid-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}
