"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Folder,
  Cpu,
  BookOpen,
  Mail,
  Briefcase,
} from "lucide-react";
import ThemeToggle from "@/components/customComponents/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Education", href: "#education", icon: BookOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- IMPROVED SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Special case for hero section
      if (scrollY < windowHeight * 0.5) {
        setActiveSection("hero");
        return;
      }

      let currentSection = "hero";
      let maxVisibility = 0;

      for (const link of navLinks) {
        const id = link.href.substring(1);
        if (id === "hero") continue; // Skip hero as we handled it above

        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionHeight = rect.height;

        // Calculate how much of the section is visible
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, windowHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio =
          visibleHeight / Math.min(sectionHeight, windowHeight);

        // Method 1: If section is majority visible, use it immediately
        if (visibilityRatio > 0.5) {
          currentSection = id;
          break;
        }

        // Method 2: Track the most visible section
        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          currentSection = id;
        }

        // Method 3: Check if we're within section boundaries (with buffer)
        const buffer = 100; // pixels buffer
        if (
          scrollY + buffer >= sectionTop &&
          scrollY - buffer < sectionTop + sectionHeight
        ) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    window.addEventListener("resize", throttledScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", throttledScroll);
    };
  }, []);

  // --- IMPROVED CLICK HANDLER ---
  const handleLinkClick = useCallback((e, href) => {
    setIsMobileMenuOpen(false);
    const id = href.substring(1);

    if (href === "#hero") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
      return;
    }

    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const offset = 80; // Adjust based on navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active section immediately for better UX
      setActiveSection(id);
    }
  }, []);

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <div
        className={`
          fixed top-6 left-1/2 -translate-x-1/2 
          z-[999] pointer-events-auto
          hidden md:flex items-center gap-4 
          transition-all duration-300
        `}
      >
        <div
          className={`
            flex items-center gap-1 px-2 py-2 rounded-full
            border dark:shadow-lg 
            transition-all duration-300 pointer-events-auto
            
            /* Light Mode Colors */
            bg-white/70 border-zinc-200/50 shadow-lg shadow-zinc-200/40
            
            /* Dark Mode Colors */
            dark:bg-zinc-900/70 dark:border-zinc-800 dark:shadow-black/50

            /* Blur & Scale effects */
            ${scrolled ? "backdrop-blur-xl scale-90" : "backdrop-blur-md"}
          `}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative px-4 py-2 rounded-full group transition-all duration-300"
              >
                {/* Active Indicator Pill */}
                {isActive && (
                  <div
                    className="
                    absolute inset-0 rounded-full border shadow-sm transition-all duration-300 -z-10
                    bg-zinc-100 border-zinc-200
                    dark:bg-zinc-800 dark:border-zinc-700
                  "
                  ></div>
                )}

                {/* Text Styles */}
                <span
                  className={`
                    font-mono text-xs uppercase tracking-widest transition-colors duration-300
                    ${
                      isActive
                        ? "text-zinc-900 font-bold dark:text-white"
                        : "text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200"
                    }
                  `}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>

      {/* --- MOBILE NAVBAR --- */}
      <div className="fixed top-0 left-0 right-0 z-999 md:hidden flex justify-between items-center px-6 py-4">
        {/* Background Layer */}
        <div
          className={`
            absolute inset-0 -z-10 
            transition-all duration-500 ease-in-out bg-linear-to-b from-black/70 to-transparent
          
            ${scrolled ? "opacity-100" : "opacity-0"}
          `}
        >
          
        </div>

        {/* Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="flex items-center gap-2 relative z-10"
        >
          <span className="text-zinc-800 dark:text-white  text-2xl font-1boldonse">DR.</span>
        </Link>

        {/* Right Controls */}
        <div className="relative flex items-center gap-3 pointer-events-auto">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="
              p-2 rounded-lg transition-colors
              text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900
              dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100
            "
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <div
        className={`
          fixed inset-0 z-[1000] flex flex-col justify-center items-center gap-8
          transition-all duration-500 ease-in-out
          ${
            isMobileMenuOpen
              ? "opacity-100 visible pointer-events-auto backdrop-blur-xl bg-white/95 dark:bg-zinc-950/95"
              : "opacity-0 invisible pointer-events-none backdrop-blur-none"
          }
        `}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="
            absolute top-6 right-6 p-2 rounded-full border
            text-zinc-500 bg-zinc-100 border-zinc-200 hover:text-zinc-900
            dark:text-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:text-white
            transition-colors duration-300
          "
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-6 w-full px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4 text-zinc-400 dark:text-zinc-600">
            // NAVIGATION
          </p>

          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`
                  group flex items-center gap-4 w-full p-4 rounded-xl 
                  transition-all duration-300 border
                  ${
                    isActive
                      ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800"
                      : "bg-zinc-50 border-zinc-200 hover:bg-white hover:border-emerald-500/50 hover:shadow-lg dark:bg-zinc-900/50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                  }
                `}
              >
                <div
                  className={`
                    p-3 rounded-lg transition-colors border
                    ${
                      isActive
                        ? "text-emerald-600 border-emerald-200 bg-emerald-100 dark:text-emerald-400 dark:border-emerald-800 dark:bg-emerald-900/30"
                        : "text-zinc-500 border-zinc-200 group-hover:text-emerald-500 dark:text-zinc-400 dark:border-zinc-800"
                    }
                  `}
                >
                  <link.icon size={20} />
                </div>
                <span className="text-2xl font-bold tracking-wide text-zinc-800 dark:text-zinc-100">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
