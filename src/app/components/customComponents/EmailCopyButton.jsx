"use client";

import { useState, useRef } from "react";
import { Copy } from "lucide-react";
import Popup from "@/components/customComponents/Popup";

export default function EmailCopyButton({ email }) {
  const [popup, setPopup] = useState(false);
  const textRef = useRef(null);
  const timerRef = useRef(null);

  const handleMailClick = () => {
    if (!textRef.current) return;
    const mailText = textRef.current.textContent;
    navigator.clipboard.writeText(mailText);
    
    setPopup(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setPopup(false);
      timerRef.current = null;
    }, 3000);
  };

  return (
    <>
      <div className="fixed bottom-20 sm:bottom-5 right-5 z-[10000] pointer-events-none">
        <div className="pointer-events-auto">
          <Popup message={"Mail successfully copied!"} showPopup={popup} />
        </div>
      </div>

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
          {email}
        </p>
        <Copy
          size={16}
          className="text-zinc-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors shrink-0"
        />
      </button>
    </>
  );
}
