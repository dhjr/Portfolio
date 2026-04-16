"use client";

import React, { useRef, useEffect } from "react";

/**
 * BackgroundWrapper.jsx
 * High-performance interactive grid background.
 * 
 * Fixed for Theme Toggle Flickering (Brave):
 * - Animation loop no longer restarts on theme change.
 * - Theme detection is done synchronously inside the frame loop.
 * - Improved grid visibility and High-DPI support.
 */
export default function BackgroundWrapper() {
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: -100, y: -100 });
  const gridSize = 40;

  // Track Input (Mouse & Touch)
  useEffect(() => {
    const handleInput = (e) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      let clientX, clientY;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      
      mousePosRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleInput, { passive: true });
    window.addEventListener("touchstart", handleInput, { passive: true });
    window.addEventListener("touchmove", handleInput, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleInput);
      window.removeEventListener("touchstart", handleInput);
      window.removeEventListener("touchmove", handleInput);
    };
  }, []);

  const sparklesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;

    // Cache dimensions to avoid constant resizing on mobile scroll
    let lastWidth = 0;
    let lastHeight = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      // Only resize if dimensions significantly change (avoiding navbar hiding/showing shifts)
      if (Math.abs(lastWidth - displayWidth) > 5 || Math.abs(lastHeight - displayHeight) > 5) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        canvas.style.width = `${displayWidth}px`;
        canvas.style.height = `${displayHeight}px`;
        
        ctx.resetTransform();
        ctx.scale(dpr, dpr);
        
        lastWidth = displayWidth;
        lastHeight = displayHeight;
      }
    };

    const render = () => {
      resize();
      
      const width = lastWidth;
      const height = lastHeight;
      
      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // --- THEME-BASED COLORS (Sourced directly from document to avoid React State delays) ---
      const isDarkMode = document.documentElement.classList.contains("dark");
      
      // Lines: slightly more prominent than before
      const strokeColor = isDarkMode
        ? "rgba(63, 63, 70, 0.4)"   // zinc-700
        : "rgba(212, 212, 216, 0.8)"; // zinc-300

      const highlightColor = "rgba(16, 185, 129, 0.2)"; // Emerald highlight
      const sparkleBaseColor = isDarkMode ? "148, 163, 184" : "100, 116, 139";

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;

      // Draw Grid Lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Sparkles logic
      if (Math.random() < 0.25) {
        const col = Math.floor(Math.random() * (width / gridSize));
        const row = Math.floor(Math.random() * (height / gridSize));
        const exists = sparklesRef.current.some(s => s.col === col && s.row === row);
        
        if (!exists) {
          sparklesRef.current.push({
            col, row, phase: 0,
            speed: 0.02 + Math.random() * 0.03,
            maxOpacity: Math.random() * 0.15
          });
        }
      }

      sparklesRef.current = sparklesRef.current.filter(sparkle => {
        sparkle.phase += sparkle.speed;
        const opacity = Math.sin(sparkle.phase) * sparkle.maxOpacity;
        
        if (sparkle.phase < Math.PI) {
          ctx.fillStyle = `rgba(${sparkleBaseColor}, ${opacity})`;
          ctx.fillRect(sparkle.col * gridSize, sparkle.row * gridSize, gridSize, gridSize);
          return true;
        }
        return false;
      });

      // Mouse/Touch Highlight
      const mPos = mousePosRef.current;
      if (mPos.x >= 0 && mPos.y >= 0) {
        const cellX = Math.floor(mPos.x / gridSize);
        const cellY = Math.floor(mPos.y / gridSize);
        ctx.fillStyle = highlightColor;
        ctx.fillRect(cellX * gridSize, cellY * gridSize, gridSize, gridSize);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Run ONCE on mount

  return (
    <div className="absolute inset-0 -z-10 w-full h-full bg-zinc-100 dark:bg-black transition-colors duration-500 overflow-hidden">
      <div 
        className="w-full h-full"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
        }}
      >
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>
    </div>
  );
}
