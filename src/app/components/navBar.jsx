"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Folder,
  Cpu,
  BookOpen,
  Mail,
  Terminal,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Education", href: "#education", icon: BookOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. SCROLL SPY & GLASS EFFECT LOGIC
  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact mode on scroll
      setScrolled(window.scrollY > 50);

      // Spy on sections
      const sections = document.querySelectorAll("section");
      let current = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // 150px offset to trigger change slightly before reaching the section
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- DESKTOP: FLOATING ISLAND --- */}
      <div
        className={`
          fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex
          items-center gap-1 px-2 py-2 rounded-full
          border border-white/10 shadow-lg shadow-black/20
          transition-all duration-300
          ${
            scrolled
              ? "bg-zinc-950/80 backdrop-blur-xl scale-90"
              : "bg-zinc-900/50 backdrop-blur-md"
          }
        `}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1); // remove '#'
          return (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 rounded-full group transition-all duration-300"
            >
              {/* 2. THE SLIDING PILL (Active Background) */}
              {isActive && (
                <div className="absolute inset-0 bg-zinc-800 rounded-full border border-zinc-700 shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300 -z-10"></div>
              )}

              {/* Link Text */}
              <span
                className={`
                  font-mono text-xs uppercase tracking-widest transition-colors duration-300
                  ${
                    isActive
                      ? "text-white font-bold"
                      : "text-zinc-400 group-hover:text-zinc-200"
                  }
                `}
              >
                {link.name}
              </span>

              {/* Hover Glow (Emerald) */}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          );
        })}
      </div>

      {/* --- MOBILE: HEADER + OVERLAY --- */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden flex justify-between items-center px-6 py-4">
        {/* 1. THE BACKGROUND LAYER (Absolute & Behind) */}
        {/* We move all the blur/gradient logic here. 
        It sits at -z-10 so it's strictly BEHIND the logo/buttons. */}
        <div
          className={`
        absolute inset-0 -z-10 
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "opacity-100 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent "
            : "opacity-0"
        }
      `}
        ></div>

        {/* 2. THE CONTENT (Logo & Button) */}
        {/* These stay sharp because they are not inside the blurred div */}

        {/* Logo / Name */}
        <div className="flex items-center gap-2 relative z-10">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
            <Terminal size={16} className="text-emerald-500" />
          </div>
          <span className="text-white font-1spaceGrotesk font-bold tracking-tight">
            DR.
          </span>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="relative z-10 p-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>
      {/* The Fullscreen Overlay (Mobile Menu) */}
      <div
        className={`
          fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8
          transition-all duration-500 ease-in-out
          ${
            isMobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-zinc-800"
        >
          <X size={24} />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center gap-6 w-full px-8">
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            // NAVIGATION
          </p>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                   group flex items-center gap-4 w-full p-4 rounded-xl 
                   bg-zinc-900/50 border border-zinc-800 
                   hover:bg-zinc-800 hover:border-emerald-500/50
                   transition-all duration-300
                 "
            >
              <div className="p-3 bg-black rounded-lg text-zinc-400 group-hover:text-emerald-500 transition-colors">
                <link.icon size={20} />
              </div>
              <span className="text-2xl font-1spaceGrotesk text-zinc-300 group-hover:text-white font-bold tracking-wide">
                {link.name}
              </span>

              {/* Arrow for tech feel */}
              <span className="ml-auto text-zinc-700 group-hover:text-emerald-500 font-mono text-xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="w-10 h-[1px] bg-zinc-800"></span>
          <span className="text-zinc-600 font-mono text-[10px]">
            SYSTEM_ONLINE
          </span>
        </div>
      </div>
    </>
  );
}
