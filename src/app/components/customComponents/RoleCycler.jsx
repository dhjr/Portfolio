"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RoleCycler({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleTimer);
  }, [roles]);

  return (
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
  );
}
