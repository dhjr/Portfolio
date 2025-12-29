"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function HeroImage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.8, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 1.5, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center opacity-0 invisible will-change-[transform,opacity]"
    >
      {/* WRAPPER FOR UNIFIED FLOATING */}
      <div className="relative w-full h-full flex items-center justify-center md:animate-[float_6s_ease-in-out_infinite] will-change-transform">
        {/* SIMPLE PULSING BORDER - Soft & Natural */}
        <div className="absolute w-[262px] h-[262px] md:w-[382px] md:h-[382px] rounded-full border-2 border-emerald-500/50 animate-[pulse-opacity_5s_ease-in-out_infinite] z-40 blur-[2px] will-change-[opacity,transform]"></div>

        {/* 4. THE CORE (Image Container) */}
        <div
          className="
            relative 
            w-[260px] h-[260px] md:w-[380px] md:h-[380px] 
            rounded-full overflow-hidden 
            bg-zinc-900
            shadow-2xl
            z-30
          "
        >
          {/* Background Layers */}
          <div className="absolute inset-0 bg-zinc-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.25),transparent_70%)]"></div>
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-black/80 to-transparent z-0"></div>

          <Image
            className="relative z-10 object-cover opacity-95"
            fill
            src="/profile1.png"
            alt="Profile"
            priority
          />

          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] z-20 pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes pulse-opacity {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
