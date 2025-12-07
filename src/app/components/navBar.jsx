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
import ThemeToggle from "@/components/ThemeToggle";

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

  // --- LOGIC 1: SCROLL SPY (Fixed for Sticky Hero) ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // A. Special Check: Are we at the top?
      // If yes, force "hero" active, regardless of intersection
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      // B. Standard Spy for other sections
      // We look for sections excluding hero to avoid sticky confusion
      const sections = document.querySelectorAll("section:not(#hero)");
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Trigger when section hits top 1/3 of screen

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- LOGIC 2: CLICK HANDLER (The Fix) ---
  const handleLinkClick = (e, href) => {
    // Always close mobile menu
    setIsMobileMenuOpen(false);

    // FIX: If clicking Home, prevent default anchor jump and force scroll to top
    if (href === "#hero") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-4 transition-all duration-300`}
      >
        <div
          className={`
            flex items-center gap-1 px-2 py-2 rounded-full
            border border-border shadow-lg
            transition-all duration-300
            ${
              scrolled
                ? "bg-background/80 backdrop-blur-xl scale-90 shadow-black/10"
                : "bg-background/50 backdrop-blur-md"
            }
          `}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                // ATTACH CLICK HANDLER HERE
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative px-4 py-2 rounded-full group transition-all duration-300"
              >
                {isActive && (
                  <div className="absolute inset-0 bg-muted rounded-full border border-border shadow-sm transition-all duration-300 -z-10"></div>
                )}
                <span
                  className={`
                    font-mono text-xs uppercase tracking-widest transition-colors duration-300
                    ${
                      isActive
                        ? "text-foreground font-bold"
                        : "text-muted-foreground group-hover:text-foreground"
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
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden flex justify-between items-center px-6 py-4">
        {/* Background Layer */}
        <div
          className={`
            absolute inset-0 -z-10 
            transition-all duration-500 ease-in-out
            ${
              scrolled
                ? "opacity-100 bg-background/90 backdrop-blur-xl border-b border-border"
                : "opacity-0"
            }
          `}
        ></div>

        {/* Logo */}
        <div className="flex items-center gap-2 relative z-10">
          <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center border border-border">
            <Terminal size={16} className="text-emerald-500" />
          </div>
          <span className="text-foreground font-1spaceGrotesk font-bold tracking-tight">
            DR.
          </span>
        </div>

        {/* Right Controls */}
        <div className="relative z-10 flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <div
        className={`
          fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8
          transition-all duration-500 ease-in-out
          ${
            isMobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground bg-muted rounded-full border border-border"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-6 w-full px-8">
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.3em] mb-4">
            // NAVIGATION
          </p>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // ATTACH CLICK HANDLER HERE TOO
              onClick={(e) => handleLinkClick(e, link.href)}
              className="
                   group flex items-center gap-4 w-full p-4 rounded-xl 
                   bg-muted/50 border border-border 
                   hover:bg-muted hover:border-emerald-500/50
                   transition-all duration-300
                 "
            >
              <div className="p-3 bg-background rounded-lg text-muted-foreground group-hover:text-emerald-500 transition-colors border border-border">
                <link.icon size={20} />
              </div>
              <span className="text-2xl font-1spaceGrotesk text-foreground font-bold tracking-wide">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
