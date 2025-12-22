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
      className="relative flex items-center justify-center w-9 h-9 rounded-xl 
                 bg-zinc-100 dark:bg-zinc-900 
                 border border-zinc-200 dark:border-zinc-800
                 shadow-[0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)]
                 transition-all duration-300 hover:scale-110 active:scale-90
                 group overflow-hidden [perspective:1000px]"
      aria-label="Toggle Theme"
    >
      {/* Icon Container with 3D Flip Animation */}
      <div
        className={`relative w-5 h-5 transition-all duration-500 [transform-style:preserve-3d] ${
          !isDark ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Dark Mode Icon (Moon) - Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
          <Moon size={20} className="text-white/50 " />
        </div>

        {/* Light Mode Icon (Sun) - Back Side (Flipped) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center">
          <Sun size={20} className="text-black/50" />
        </div>
      </div>

      {/* Subtle material hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-zinc-400 dark:bg-zinc-500" />
    </button>
  );
}
