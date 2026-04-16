"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!theme) setTheme("dark");
  }, [theme, setTheme]);

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-11 h-11 
                 transition-all duration-500 hover:scale-110 active:scale-90
                 group overflow-hidden perspective"
      aria-label="Toggle Theme"
    >
      {/* Icon Container with 3D Flip Animation */}
      <div
        className={`relative w-5 h-5 transition-all duration-700 transform-3d ${
          !isDark ? "rotate-y-180" : ""
        }`}
        style={{
          transform: !isDark ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Dark Mode Icon (Moon) - Front Side */}
        <div className="absolute inset-0 backface-hidden flex items-center justify-center">
          <Moon size={20} className="text-zinc-500 dark:text-zinc-400" />
        </div>

        {/* Light Mode Icon (Sun) - Back Side (Flipped) */}
        <div 
          className="absolute inset-0 backface-hidden flex items-center justify-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <Sun size={20} className="text-zinc-600" />
        </div>
      </div>

      {/* Subtle material hover overlay */}
      <div className="absolute inset-0 opacity-0 transition-opacity bg-zinc-400 dark:bg-zinc-500" />
    </button>
  );
}
