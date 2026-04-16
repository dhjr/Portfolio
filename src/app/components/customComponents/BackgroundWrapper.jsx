"use client";
/**
 * BackgroundWrapper.jsx
 * Implements a high-performance grid background with twinkling 'sparkles' 
 * and interactive hover/touch effects.
 * 
 * Fixes for Mobile Chrome:
 * 1. High DPI (devicePixelRatio) support for crisp rendering.
 * 2. Mask moved to a wrapper div for better browser compatibility.
 * 3. Touch event support for interactions on mobile.
 */

import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";

export default function BackgroundWrapper() {
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: -100, y: -100 });
  const { resolvedTheme } = useTheme();
  const gridSize = 40;

  // Handle Input (Mouse & Touch)
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

  // Store twinkling tiles
  const sparklesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;

    // Handle High DPI Resize
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        canvas.style.width = `${displayWidth}px`;
        canvas.style.height = `${displayHeight}px`;
        ctx.resetTransform();
        ctx.scale(dpr, dpr);
      }
    };

    const render = () => {
      resize();
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Detect Theme State
      const isDarkMode = resolvedTheme === "dark";
      const strokeColor = isDarkMode
        ? "rgba(30, 41, 59, 0.5)"
        : "rgba(226, 232, 240, 1)";
      const highlightColor = "rgba(16, 185, 129, 0.2)";
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

      // SPAWN SPARKLES
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

      // UPDATE & DRAW SPARKLES
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

      // Draw Interaction Highlight
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
  }, [resolvedTheme]);

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
