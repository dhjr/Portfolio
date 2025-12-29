"use client";

import { useState, useEffect,useRef,                 useCallback } from "react";
import Link from "next/link";
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

  // --- IMPROVED SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Special case: Bottom of page -> Contact
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 20) {
        setActiveSection("contact");
        return;
      }

      // Special case for hero section
      if (scrollY < windowHeight * 0.5) {
        setActiveSection("hero");
        return;
      }

      let currentSection = null;
      let maxVisibility = 0;

      for (const link of navLinks) {
        const id = link.href.substring(1);
        if (id === "hero") continue;

        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const sectionHeight = rect.height;

        // Calculate visibility
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, windowHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio =
          visibleHeight / Math.min(sectionHeight, windowHeight);

        // Track the most visible section
        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          currentSection = id;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
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

  // --- MOBILE INDICATOR LOGIC ---
  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const activeIndex = navLinks.findIndex(
      (link) => link.href.substring(1) === activeSection
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
      <div className="fixed top-0 left-0 right-0 z-[1010] md:hidden flex justify-between items-center px-6 py-4">
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              p-2 rounded-lg transition-colors relative h-10 w-10 flex items-center justify-center
              text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900
              dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100
            "
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Animated Hamburger Icon */}
            <div className="relative flex flex-col justify-between w-5 h-4">
              <span 
                className={`
                  w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out
                  ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}
                `}
              />
              <span 
                className={`
                  w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out
                  ${isMobileMenuOpen ? "opacity-0" : ""}
                `}
              />
              <span 
                className={`
                  w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out
                  ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}
                `}
              />
            </div>
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
{/* --- MOBILE OVERLAY MENU --- */}
<div
  className={`
    fixed inset-0 z-[1000] flex flex-col
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
      <div className="absolute -left-2 sm:-left-6 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800">
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
            <span className={`
              font-mono text-[10px] sm:text-xs mb-1 transition-colors duration-300
              ${isActive ? "text-emerald-500" : "text-zinc-400 dark:text-zinc-600"}
            `}>
              0{index + 1} 
            </span>

            {/* Large Typography Stack - Reduced for better mobile fit */}
            <span className={`
              text-[8vw] sm:text-5xl font-1bricolage font-black tracking-tighter leading-none transition-all duration-300
              ${isActive 
                ? "text-zinc-900 dark:text-white translate-x-2 sm:translate-x-4" 
                : "text-zinc-300 dark:text-zinc-800 group-hover:text-zinc-400 dark:group-hover:text-zinc-700"}
            `}>
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
