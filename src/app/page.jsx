"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Copy } from "lucide-react";
import Image from "next/image";

// Components
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Education from "./education/page";
import Footer from "@/components/footer";
import NameReveal from "@/components/NameReveal";
import HeroImage from "@/components/heroImage";
import { StarsBackground } from "@/components/stars";
import Button from "./components/macButton";
import Popup from "./components/popup";
import useScrollSpy from "@/hooks/useScrollSpy";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  useScrollSpy();

  const [popup, setPopup] = useState(false);
  const textRef = useRef();
  let timer = null;

  const handleMailClick = () => {
    const mail = textRef.current.textContent;
    navigator.clipboard.writeText(mail);
    setPopup(true);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setPopup(false);
      timer = null;
    }, 3000);
  };

  return (
    <main className="selection:bg-emerald-500/30 w-full">
      {/* 1. HERO SECTION (Sticky Layer) 
         PERMANENT DARK MODE: We use hardcoded 'bg-zinc-950' and 'text-white' 
         here so it ignores the Theme Toggle and stays as a "Space" section.
      */}
      <section
        id="hero"
        className="sticky top-0 z-0 w-full h-dvh flex flex-col-reverse md:flex-row justify-center md:justify-around items-center overflow-hidden py-0 pb-48 md:pb-0 gap-4 md:gap-0 bg-zinc-950"
      >
        {/* BACKGROUND: Stars always visible */}
        <div className="absolute inset-0 -z-20 w-full h-full">
          <StarsBackground />
        </div>
        <ThemeToggle />
        {/* POPUP */}
        <div className="fixed bottom-5 right-5 z-[100] pointer-events-none">
          <div className="pointer-events-auto">
            <Popup message={"Mail successfully copied!"} showPopup={popup} />
          </div>
        </div>

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 w-full md:w-auto px-4 md:px-0">
          <Image
            src="/walle.png"
            className="absolute w-20 spin-slow"
            width={80}
            height={20}
            alt="Wall-E"
          />

          {/* Hardcoded 'text-white' to force dark mode look */}
          <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-1spaceGrotesk text-white mb-2">
            Hey, I'm
          </p>

          <div className="w-full max-w-[95vw] flex justify-center md:justify-start">
            <NameReveal />
          </div>

          {/* Hardcoded Dark styles for the badge */}
          <div className="mt-4 mb-6 px-4 py-1.5 md:py-2 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-full">
            <p className="font-1spaceGrotesk text-xs sm:text-sm md:text-xl text-emerald-400">
              &lt; Full_Stack_Developer /&gt;
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link href="#contact">
              <Button text={"Let's Connect!"} />
            </Link>

            {/* Hardcoded Dark styles for the copy button */}
            <button
              onClick={handleMailClick}
              className="
                group flex flex-row items-center gap-2 px-5 py-2.5 rounded-lg justify-center
                backdrop-blur-2xl transition-all duration-200 active:scale-95 shadow-md shadow-black/70
                bg-white/5 border border-white/10 hover:border-emerald-500
              "
            >
              <p
                ref={textRef}
                className="font-1spaceGrotesk text-sm md:text-lg text-zinc-300 group-hover:text-white truncate max-w-[200px] sm:max-w-none transition-colors"
              >
                dhjr.dev@gmail.com
              </p>
              <Copy
                size={16}
                className="text-zinc-500 group-hover:text-emerald-400 transition-colors shrink-0"
              />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative z-10 scale-[0.65] sm:scale-90 md:scale-100 mb-[-40px] md:mb-0">
          <HeroImage />
        </div>

        {/* SCROLL INDICATOR */}
        <Link
          href="#projects"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 z-20 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] font-1spaceGrotesk uppercase tracking-widest text-zinc-500">
            Scroll Down
          </span>
          <ChevronDown className="text-emerald-500" size={24} />
        </Link>
      </section>

      {/* 2. THE CONTENT WRAPPER (Sliding Layer) */}
      {/* This layer DOES use 'bg-background'. 
          So when you toggle the theme, this layer will turn White or Black,
          and slide over the permanently black Hero section.
      */}
      <div className="relative z-10 bg-background transition-colors duration-300">
        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  );
}
