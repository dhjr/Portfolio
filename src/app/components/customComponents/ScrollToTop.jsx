"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "./SmoothScroll";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
        lenis.scrollTo(0);
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-1000 
        flex items-center justify-center
        p-3 rounded-full shadow-lg cursor-pointer
        transition-all duration-300 ease-in-out
        bg-white border border-zinc-200 text-zinc-600
        dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400
        hover:bg-emerald-500 hover:text-white hover:border-emerald-500
        dark:hover:bg-emerald-600 dark:hover:text-white dark:hover:border-emerald-600
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
