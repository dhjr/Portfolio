"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/customComponents/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // --- OPTIMIZED SCROLL & ACTIVE SECTION SPY ---
  useEffect(() => {
    // 1. Sentinel Observer for Navbar Background (Replaces scroll event)
    const sentinelEl = document.getElementById("navbar-sentinel");
    const sentinelObserver = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );
    if (sentinelEl) sentinelObserver.observe(sentinelEl);

    // 2. IntersectionObserver for Active Section Tracking
    const sectionObserverOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Active when element is in the middle 10% of screen
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const sectionObserver = new IntersectionObserver(
      handleIntersect,
      sectionObserverOptions,
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) sectionObserver.observe(element);
    });

    return () => {
      if (sentinelEl) sentinelObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  // --- MOBILE INDICATOR LOGIC ---
  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const activeIndex = navLinks.findIndex(
      (link) => link.href.substring(1) === activeSection,
    );
    const activeEl = itemRefs.current[activeIndex];
    const indicator = indicatorRef.current;

    if (activeEl && indicator) {
      // Find the text element (2nd child) to center the dot relative to the TEXT, not the whole block
      const textEl = activeEl.children[1];

      let top;
      if (textEl) {
        // Calculate center of the text element
        // textEl.offsetTop is relative to activeEl (which is relative)
        top = activeEl.offsetTop + textEl.offsetTop + textEl.offsetHeight / 2;
      } else {
        // Fallback to center of container if text not found
        top = activeEl.offsetTop + activeEl.offsetHeight / 2;
      }

      indicator.style.transform = `translateY(-50%)`;
      indicator.style.top = `${top}px`;
    }
  }, [activeSection, isMobileMenuOpen]);

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
      {/* 0. SCROLL SENTINEL - Tracks when page is scrolled */}
      <div
        id="navbar-sentinel"
        className="absolute top-0 w-full h-1px pointer-events-none bg-transparent"
      />

      {/* --- DESKTOP NAVBAR --- */}
      {/* Top Gradient for Desktop Visibility */}
      <div
        className={`
          fixed top-0 left-0 right-0 h-20 z-998 pointer-events-none
          bg-linear-to-b from-black/40 to-transparent
          dark:from-black/80 dark:via-black/50 dark:to-transparent
          transition-opacity duration-300 hidden md:block
          ${scrolled ? "opacity-100" : "opacity-0"}
        `}
      />
      <div
        className={`
          fixed top-6 left-1/2 -translate-x-1/2 
          z-999 pointer-events-none
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

          <div className="pointer-events-auto ml-1 pl-3 py-1 border-l border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* --- MOBILE NAVBAR --- */}
      {/* --- MOBILE NAVBAR (Floating Pill) --- */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-1010 md:hidden w-[92%] max-w-lg pointer-events-none">
        <div className="relative flex justify-between items-center px-4 py-2 rounded-full bg-white/70 dark:bg-zinc-900/80 backdrop-blur-xs border border-white/20 dark:border-zinc-800/50 shadow-2xl shadow-black/10 pointer-events-auto overflow-hidden">
          {/* Logo */}
          <Link
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-3 relative z-10 group/logo"
          >
            <div className="relative p-1 transition-all duration-300 group-hover/logo:scale-110">
              <div className="relative w-7 h-7">
                <Image
                  src="/favicon.webp"
                  alt="Logo"
                  fill
                  className="object-contain dark:hidden"
                  priority
                  sizes="28px"
                />
                <Image
                  src="/favicon_dark.webp"
                  alt="Logo"
                  fill
                  className="object-contain hidden dark:block"
                  priority
                  sizes="28px"
                />
              </div>
            </div>
          </Link>

          {/* Right Controls */}
          <div className="relative flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                relative group h-11 w-11 flex items-center justify-center
                transition-all duration-500
                hover:scale-110 active:scale-95
              "
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {/* Unique Animated Icon */}
              <div className="relative w-6 h-5 flex flex-col items-end justify-center">
                {/* Top Bar */}
                <span
                  className={`
                    h-0.5 bg-zinc-900 dark:bg-white rounded-full transition-all duration-500 ease-in-out
                    ${
                      isMobileMenuOpen
                        ? "w-full absolute rotate-45"
                        : "w-full mb-1.5 group-hover:w-4"
                    }
                  `}
                />

                {/* Accent Dot (Only Visible When Closed) */}
                <span
                  className={`
                  absolute right-0 h-0.5 bg-emerald-500 rounded-full transition-all duration-500
                  ${isMobileMenuOpen ? "w-0 opacity-0" : "w-1.5 translate-y-0"}
                `}
                />

                {/* Bottom Bar */}
                <span
                  className={`
                    h-0.5 bg-zinc-900 dark:bg-white rounded-full transition-all duration-500 ease-in-out
                    ${
                      isMobileMenuOpen
                        ? "w-full absolute -rotate-45"
                        : "w-4 mt-0 group-hover:w-full"
                    }
                  `}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* --- MOBILE OVERLAY MENU --- */}
      <div
        className={`
    fixed inset-0 z-1000 flex flex-col
    transition-all duration-500 ease-in-out
    ${
      isMobileMenuOpen
        ? "opacity-100 visible pointer-events-auto backdrop-blur-3xl bg-white/95 dark:bg-zinc-950/98"
        : "opacity-0 invisible pointer-events-none"
    }
  `}
      >
        {/* Spacer for sticky icon visibility */}
        <div className="flex justify-end p-6 pointer-events-none opacity-0">
          <div className="p-3 w-10 h-10"></div>
        </div>

        {/* Main Content Area - Preventing overflow for short screens */}
        <div className="relative flex-1 overflow-hidden flex flex-col justify-center px-6 sm:px-12 pb-8">
          <div className="relative flex flex-col items-start gap-4 sm:gap-8">
            {/* The Vertical Timeline Line */}
            <div className="absolute -left-2 sm:-left-6 top-0 bottom-0 w-1px bg-zinc-200 dark:bg-zinc-800">
              {/* Animated Glowing Node */}
              {/* Animated Glowing Node */}
              <div
                ref={indicatorRef}
                className="absolute w-3 h-3 -left-[5.5px] bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                style={{ top: "0px" }} // Initial fallback
              />
            </div>

            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group relative flex flex-col w-full"
                >
                  {/* Index Number */}
                  <span
                    className={`
              font-mono text-[10px] sm:text-xs mb-1 transition-colors duration-300
              ${
                isActive
                  ? "text-emerald-500"
                  : "text-zinc-400 dark:text-zinc-600"
              }
            `}
                  >
                    0{index + 1}
                  </span>

                  {/* Large Typography Stack - Reduced for better mobile fit */}
                  <span
                    className={`
              text-[8vw] sm:text-5xl font-1bricolage font-black tracking-tighter leading-none transition-all duration-300
              ${
                isActive
                  ? "text-zinc-900 dark:text-white translate-x-2 sm:translate-x-4"
                  : "text-zinc-300 dark:text-zinc-800 group-hover:text-zinc-400 dark:group-hover:text-zinc-700"
              }
            `}
                  >
                    {link.name}
                  </span>

                  {/* Subtle indicator for active section on small screens */}
                  {isActive && (
                    <div className="mt-1 h-0.5 w-8 bg-emerald-500 rounded-full sm:hidden" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
