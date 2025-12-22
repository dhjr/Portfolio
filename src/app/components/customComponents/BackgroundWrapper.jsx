"use client";

import React, { useRef, useEffect, useState } from "react";

export default function BackgroundWrapper() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const gridSize = 40;

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get relative coordinates in case the canvas isn't at 0,0 (though it is here)
      const rect = canvasRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const render = () => {
      // time += 0.5; // Animation removed
      const offsetX = 0;
      const offsetY = 0;

      // Handle Resize
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      // Clear Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Detect Dark Mode (Simple class check on html/body)
      const isDarkMode = document.documentElement.classList.contains("dark");
      
      // Settings based on theme
      const strokeColor = isDarkMode ? "rgba(30, 41, 59, 0.5)" : "rgba(226, 232, 240, 1)"; // slate-800/50 : slate-200
      const highlightColor = isDarkMode ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.2)"; // Emerald with opacity

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;

      // Draw Vertical Lines
      // Start from -gridSize to cover the incoming edge during animation
      for (let x = -gridSize + (offsetX % gridSize); x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw Horizontal Lines
      for (let y = -gridSize + (offsetY % gridSize); y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw Highlighted Cell
      // We need to calculate which cell corresponds to the mouse position
      // considering the current animation offset.
      if (mousePos.x >= 0 && mousePos.y >= 0) {
        // The grid lines move by 'offsetX'.
        // So the "start" of a cell shifts.
        // Cell Index = floor((Coordinate - Offset) / GridSize)
        
        const cellX = Math.floor((mousePos.x - offsetX) / gridSize);
        const cellY = Math.floor((mousePos.y - offsetY) / gridSize);

        // Position to draw the rect
        const drawX = cellX * gridSize + offsetX;
        const drawY = cellY * gridSize + offsetY;

        ctx.fillStyle = highlightColor;
        ctx.fillRect(drawX, drawY, gridSize, gridSize);
      }
      
      // Vignette / Mask Effect manually drawn or assume CSS mask handles it?
      // Since this is a canvas, the CSS mask on the parent <div> works on the canvas element too!
      // So we don't need to draw the radial fade here.

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]); // Re-bind if mousePos logic changes (optimized by ref usually but this is clean)

  return (
    <div className="absolute inset-0 -z-10 w-full h-full bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
        <canvas
            ref={canvasRef}
            className="block w-full h-full"
            style={{
                maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
            }}
        />
    </div>
  );
}