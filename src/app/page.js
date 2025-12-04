"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Copy } from "lucide-react";
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
  // const size = 420;
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
    <>
      <section className="relative w-full min-h-dvh flex flex-col-reverse md:flex-row justify-center md:justify-around items-center overflow-hidden py-20 md:py-0 gap-10 md:gap-0">
        {/* 1. BACKGROUND (Restored & Fixed) */}
        <div className="absolute inset-0 -z-20 w-full h-full">
          <StarsBackground />
        </div>

        {/* 2. LEFT COLUMN: TEXT & CONTENT */}
        {/* w-full on mobile, w-auto on desktop. Padding added for mobile edges. */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 w-full md:w-auto px-4">
          {/* Intro Text */}
          <p className="text-3xl md:text-5xl lg:text-6xl font-1spaceGrotesk text-white mb-2">
            Hey, I'm
          </p>

          {/* Name Reveal Component */}
          {/* We ensure it doesn't overflow on small screens */}
          <div className="w-full max-w-[90vw] flex justify-center md:justify-start">
            <NameReveal />
          </div>

          {/* Popup (Floating above content to prevent layout shift) */}
          <div className="relative w-full flex justify-center md:justify-start h-8 my-2">
            <div className="absolute top-0 z-50">
              <Popup message={"Mail successfully copied!"} showPopup={popup} />
            </div>
          </div>

          {/* Role Badge */}
          <div className="mt-2 mb-6 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
            <p className="font-1spaceGrotesk text-sm md:text-xl text-emerald-400">
              &lt; Full_Stack_Developer /&gt;
            </p>
          </div>

          {/* Buttons Row */}
          {/* Stacks vertically on tiny screens, horizontal on normal screens */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link href={"#footer"}>
              <Button text={"Let's Connect!"} />
            </Link>

            <button
              onClick={handleMailClick}
              className="group flex flex-row items-center gap-2 px-4 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-200 active:scale-95"
            >
              {/* Truncate email on very small screens if needed */}
              <p
                ref={textRef}
                className="font-1spaceGrotesk text-sm md:text-lg text-zinc-300 group-hover:text-white truncate max-w-[200px] sm:max-w-none"
              >
                something@gmail.com
              </p>
              <Copy
                size={18}
                className="text-zinc-500 group-hover:text-emerald-400 transition-colors"
              />
            </button>
          </div>
        </div>

        {/* 3. RIGHT COLUMN: HERO IMAGE */}
        {/* Scaled for mobile vs desktop */}
        <div className="relative z-10 scale-90 md:scale-100">
          <HeroImage />
        </div>

        {/* 4. SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-none opacity-60">
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
    </>
  );
}
