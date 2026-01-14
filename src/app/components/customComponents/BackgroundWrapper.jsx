"use client";

import React, { useRef, useEffect } from "react";

export default function BackgroundWrapper() {
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: -100, y: -100 });
  const gridSize = 40;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Store twinkling tiles
  const sparklesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const render = () => {
      // Handle Resize
      if (
        canvas.width !== window.innerWidth ||
        canvas.height !== window.innerHeight
      ) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      // Clear Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Detect Dark Mode
      const isDarkMode = document.documentElement.classList.contains("dark");
      const strokeColor = isDarkMode
        ? "rgba(30, 41, 59, 0.5)"
        : "rgba(226, 232, 240, 1)";
      const highlightColor = isDarkMode
        ? "rgba(16, 185, 129, 0.2)"
        : "rgba(16, 185, 129, 0.2)";
      // Subtle sparkle color: slightly lower max opacity
      const sparkleBaseColor = isDarkMode
        ? "148, 163, 184" // Slate-400 (Grayish)
        : "100, 116, 139"; // Slate-500 (Darker Gray)

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;

      // Draw Grid Lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // --- SPAWN SPARKLES ---
      // Chance to spawn a new sparkle (approx once every 4 frames)
      if (Math.random() < 0.25) {
        const col = Math.floor(Math.random() * (canvas.width / gridSize));
        const row = Math.floor(Math.random() * (canvas.height / gridSize));

        // Add if not already active
        const exists = sparklesRef.current.some(
          (s) => s.col === col && s.row === row
        );
        if (!exists) {
          sparklesRef.current.push({
            col,
            row,
            opacity: 0,
            phase: 0, // 0 to PI
            speed: 0.02 + Math.random() * 0.03, // Random speed
            maxOpacity: Math.random() * 0.15, // Random max opacity
          });
        }
      }

      // --- UPDATE & DRAW SPARKLES ---
      // Filter out completed sparkles in proper way to mutate or replace arrays
      // We will mutate and filter in-place or rebuild
      const activeSparkles = [];

      for (let sparkle of sparklesRef.current) {
        // Increment phase (0 -> PI)
        sparkle.phase += sparkle.speed;

        // Calculate smooth opacity using Sine
        // sin(0) = 0, sin(PI/2) = 1, sin(PI) = 0
        sparkle.opacity = Math.sin(sparkle.phase) * sparkle.maxOpacity;

        if (sparkle.phase < Math.PI) {
          // Draw Tile
          const drawX = sparkle.col * gridSize;
          const drawY = sparkle.row * gridSize;

          ctx.fillStyle = `rgba(${sparkleBaseColor}, ${sparkle.opacity})`;
          ctx.fillRect(drawX, drawY, gridSize, gridSize);

          activeSparkles.push(sparkle);
        }
      }
      sparklesRef.current = activeSparkles;

      // Draw Mouse Highlight
      const mPos = mousePosRef.current;
      if (mPos.x >= 0 && mPos.y >= 0) {
        const cellX = Math.floor(mPos.x / gridSize);
        const cellY = Math.floor(mPos.y / gridSize);
        const drawX = cellX * gridSize;
        const drawY = cellY * gridSize;

        ctx.fillStyle = highlightColor;
        ctx.fillRect(drawX, drawY, gridSize, gridSize);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 w-full h-full bg-zinc-100 dark:bg-black transition-colors duration-500 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 60%, transparent 100%)",
        }}
      />
    </div>
  );
}
