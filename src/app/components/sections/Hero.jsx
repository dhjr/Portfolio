import { ChevronDown, Copy, FileText } from "lucide-react";
import NameReveal from "@/components/customComponents/NameReveal";
import HeroImage from "@/components/customComponents/HeroImage";
import BackgroundWrapper from "@/components/customComponents/BackgroundWrapper";
import Button from "@/components/customComponents/MacButton";
import Popup from "@/components/customComponents/Popup";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [popup, setPopup] = useState(false);
  const textRef = useRef();
  let timer = null;

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Full_Stack_Developer",
    "Frontend_Developer",
    "FOSS_Enthusiast",
  ];

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleTimer);
  }, []);

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
    <section
      id="hero"
      className="relative w-full h-dvh flex flex-col-reverse md:flex-row justify-center md:justify-around items-center overflow-hidden md:pt-0 pb-20 md:pb-0 md:gap-0"
    >
      <BackgroundWrapper />

      {/* POPUP */}
      <div className="fixed bottom-5 right-5 z-100 pointer-events-none">
        <div className="pointer-events-auto">
          <Popup message={"Mail successfully copied!"} showPopup={popup} />
        </div>
      </div>

      {/* LEFT COLUMN */}
      <div className="mt-5 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 w-full md:w-auto px-4 md:px-0">
        {/* Updated for Light/Dark Mode */}
        <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-1spaceGrotesk text-zinc-900 dark:text-white">
          Hey, I'm
        </p>

        <div className="w-full max-w-[95vw] flex justify-center md:justify-start pl-5 md:pl-0">
          <NameReveal />
        </div>

        {/* Updated Badge for Light/Dark Mode */}
        <div className="mb-5 md:mt-4 md:mb-6 px-4 py-1.5 md:py-2 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm flex items-center justify-center">
          <p className="font-1spaceGrotesk text-sm sm:text-base md:text-lg text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <span>&lt;</span>
            <span className="relative h-[28px] overflow-hidden flex items-center justify-center">
              <span className="invisible">Full_Stack_Developer</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span>/&gt;</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <a href="#about" className="hidden sm:block transition-all active:scale-95">
            <Button text={"Let's Connect!"} />
          </a>

          {/* Updated Copy Button for Light/Dark Mode */}
          <button
            onClick={handleMailClick}
            className="
                group flex flex-row items-center gap-2 px-5 py-2.5 rounded-lg justify-center w-fit sm:w-auto
                backdrop-blur-md transition-all duration-200 active:scale-95 shadow-md shadow-zinc-200/50 dark:shadow-black/70
                bg-white/90 dark:bg-white/5 border border-zinc-300 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500
              "
          >
            <p
              ref={textRef}
              className="font-1spaceGrotesk text-sm md:text-lg text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white truncate max-w-[200px] sm:max-w-none transition-colors"
            >
              dhjr.dev@gmail.com
            </p>
            <Copy
              size={16}
              className="text-zinc-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors shrink-0"
            />
          </button>

          <a
            href="https://drive.google.com/file/d/13UrN3RUdDW07Dl5i4YZB4nEqMwGuadMe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
                group flex items-center justify-center gap-2 px-5 py-2.5 w-fit sm:w-auto rounded-lg
                backdrop-blur-md transition-all duration-200 active:scale-95 shadow-md shadow-zinc-200/50 dark:shadow-black/70
                bg-white/90 dark:bg-white/5 border border-zinc-300 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500
              "
          >
            <p className="font-1spaceGrotesk text-sm md:text-lg text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">
              View Resume
            </p>
            <FileText
              size={16}
              className="text-zinc-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors shrink-0"
            />
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="relative z-10 scale-[0.8] sm:scale-90 md:scale-100 mb-[-40px] md:mb-0">
        <HeroImage />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50 z-20 select-none pointer-events-none">
        <span className="text-xs sm:text-sm font-thin font-1spaceGrotesk uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
          Scroll Down
        </span>
        <ChevronDown className="text-emerald-500" size={24} />
      </div>
    </section>
  );
}
