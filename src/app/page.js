"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Copy } from "lucide-react";

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

export default function Home() {
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
    <main className=" selection:bg-emerald-500/30 w-full">
      {/* FIX APPLIED: Changed 'min-h-[100dvh]' to 'h-[100dvh]'.
         This forces the section to be exactly the height of the mobile viewport,
         preventing it from pushing content down or creating an accidental scrollbar.
      */}
      <section className="relative w-full h-[100dvh] flex flex-col-reverse md:flex-row justify-center md:justify-around items-center overflow-hidden py-0 pb-48 md:pb-0 gap-4 md:gap-0">
        {/* 1. STARS BACKGROUND */}
        <div className="absolute inset-0 -z-20 w-full h-full">
          <StarsBackground />
        </div>

        {/* 2. POPUP */}
        <div className="fixed bottom-5 right-5 z-[100] pointer-events-none">
          <div className="pointer-events-auto">
            <Popup message={"Mail successfully copied!"} showPopup={popup} />
          </div>
        </div>

        {/* 3. LEFT COLUMN: TEXT & CONTENT */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 w-full md:w-auto px-4 md:px-0">
          <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-1spaceGrotesk text-white mb-2">
            Hey, I'm
          </p>

          <div className="w-full max-w-[95vw] flex justify-center md:justify-start">
            <NameReveal />
          </div>

          <div className="mt-4 mb-6 px-4 py-1.5 md:py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
            <p className="font-1spaceGrotesk text-xs sm:text-sm md:text-xl text-emerald-400">
              &lt; Full_Stack_Developer /&gt;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link href={"#footer"}>
              <Button text={"Let's Connect!"} />
            </Link>

            <button
              onClick={handleMailClick}
              className="group flex flex-row items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-200 active:scale-95 w-full sm:w-auto justify-center"
            >
              <p
                ref={textRef}
                className="font-1spaceGrotesk text-sm md:text-lg text-zinc-300 group-hover:text-white truncate max-w-[200px] sm:max-w-none"
              >
                something@gmail.com
              </p>
              <Copy
                size={16}
                className="text-zinc-500 group-hover:text-emerald-400 transition-colors shrink-0"
              />
            </button>
          </div>
        </div>

        {/* 4. RIGHT COLUMN: HERO IMAGE */}
        <div className="relative z-10 scale-[0.65] sm:scale-90 md:scale-100 mb-[-40px] md:mb-0">
          <HeroImage />
        </div>

        {/* 5. SCROLL INDICATOR */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-none opacity-50 z-20">
          <span className="text-[10px] font-1spaceGrotesk uppercase tracking-widest text-zinc-500">
            Scroll Down
          </span>
          <ChevronDown className="text-emerald-500" size={24} />
        </div>
      </section>

      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
