// import { useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// export default function HeroImage({ size }) {
//   const imgRef = useRef(null);

//   const handleLoad = () => {
//     gsap.to(imgRef.current, {
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <div>
//       <Image
//         ref={imgRef}
//         className="opacity-0 bg-radial from-amber-500 to-amber-300 z-10 object-cover shadow-lg shadow-white/20 border border-white hover:-e-6 transition-transform duration-300 rounded-full"
//         width={420}
//         height={420}
//         src="/profileBW.png"
//         alt="profile"
//         onLoad={handleLoad}
//       />
//     </div>
//   );
// }

// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// export default function HeroImage() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Initial entrance animation (Scale & Opacity)
//     gsap.fromTo(
//       containerRef.current,
//       { scale: 0.8, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
//     );
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center"
//     >
//       {/* WRAPPER FOR UNIFIED FLOATING
//          We wrap everything inside this div so the rings + image bob up and down together.
//       */}
//       <div className="relative w-full h-full flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
//         {/* 1. OUTER RING (Counter-Clockwise, Very Slow) */}
//         <div className="absolute inset-0 rounded-full border border-zinc-700/50 border-t-emerald-500/50 animate-[spin_20s_linear_infinite_reverse]"></div>

//         {/* 2. INNER RING (Clockwise, Dashed, Techy) */}
//         <div className="absolute inset-4 rounded-full border border-dashed border-emerald-500/20 animate-[spin_12s_linear_infinite]"></div>

//         {/* 3. GLOWING ORBITAL DOT (Follows Inner Ring) */}
//         <div className="absolute inset-4 animate-[spin_12s_linear_infinite]">
//           <div className="h-2 w-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1"></div>
//         </div>

//         {/* 4. THE IMAGE CONTAINER */}
//         <div
//           className="
//             relative
//             w-[260px] h-[260px] md:w-[380px] md:h-[380px]
//             rounded-full overflow-hidden
//             border-4 border-zinc-900
//             shadow-[0_0_50px_rgba(16,185,129,0.15)]
//           "
//         >
//           {/* Background Gradient */}
//           <div className="absolute inset-0 backdrop-blur-lg  "></div>

//           <Image
//             className="relative z-10 object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
//             fill
//             src="/profileBW.png"
//             alt="Profile"
//             priority
//           />

//           {/* REMOVED: The Scanline/Glitch Overlay div was here */}
//         </div>
//       </div>

//       <style>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// export default function HeroImage() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       containerRef.current,
//       { scale: 0.8, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
//     );
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center"
//     >
//       {/* WRAPPER FOR UNIFIED FLOATING */}
//       <div className="relative w-full h-full flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
//         {/* 1. OUTER RING (Zinc, Slow Reverse Spin) */}
//         <div className="absolute inset-0 rounded-full border border-zinc-800/60 border-t-zinc-500/30 animate-[spin_25s_linear_infinite_reverse]"></div>

//         {/* 2. INNER RING (Emerald Accent, Faster Spin) */}
//         <div className="absolute inset-5 rounded-full border border-dashed border-emerald-500/20 animate-[spin_15s_linear_infinite]"></div>

//         {/* 3. ORBITING PARTICLE */}
//         <div className="absolute inset-5 animate-[spin_15s_linear_infinite]">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]"></div>
//         </div>

//         {/* 4. THE CORE (Image Container) */}
//         <div
//           className="
//             relative
//             w-[260px] h-[260px] md:w-[380px] md:h-[380px]
//             rounded-full overflow-hidden
//             border-[3px] border-zinc-800

//             bg-zinc-900
//             shadow-2xl
//           "
//         >
//           {/* --- BACKGROUND MAGIC STARTS HERE --- */}

//           {/* Layer A: Deep Base */}
//           <div className="absolute inset-0 bg-zinc-900"></div>

//           {/* Layer B: The "Halo" Backlight (Separates head from background) */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.25),transparent_70%)]"></div>
//           {/* Layer C: Noise Texture (Removes the 'plastic' feel) */}
//           <div
//             className="absolute inset-0 opacity-20 mix-blend-overlay"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//             }}
//           ></div>

//           {/* Layer D: Bottom Fade (Grounds the image) */}
//           <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-black/80 to-transparent z-0"></div>

//           {/* ----------------------------------- */}

//           <Image
//             className="relative z-10 object-cover opacity-95 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
//             fill
//             src="/profileBW.png"
//             alt="Profile"
//             priority
//           />

//           {/* Inner Shadow (Inset) to make image sit 'inside' the circle */}
//           <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] z-20 pointer-events-none"></div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function HeroImage() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center"
    >
      {/* WRAPPER FOR UNIFIED FLOATING */}
      <div className="relative w-full h-full flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
        {/* 1. OUTER RING (Zinc, Slow Reverse Spin) */}
        <div className="absolute inset-0 rounded-full border border-zinc-800/60 border-t-zinc-500/30 animate-[spin_25s_linear_infinite_reverse]"></div>

        {/* 2. INNER RING (Emerald Accent, Faster Spin) */}
        <div className="absolute inset-5 rounded-full border border-dashed border-emerald-500/20 animate-[spin_15s_linear_infinite]"></div>

        {/* --- OBJECT 1: THE RADAR BLIP (Pulsing Dot) --- */}
        {/* Looks like an active signal being tracked */}
        <div className="absolute inset-5 animate-[spin_reverse_12s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399] relative">
              {/* The Ping Animation creates a ripple effect */}
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        {/* --- OBJECT 2: THE DATA ARC (Curved Shield) --- */}
        {/* A 90-degree arc that rotates slowly on the outer track */}
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-[3px] border-emerald-600 rounded-tl-full opacity-60"></div>
        </div>

        {/* --- OBJECT 4: THE NANO CHIP (Rectangular) --- */}
        {/* A small glass rectangle orbiting close to the center */}
        <div className="absolute inset-8 animate-[spin_25s_linear_infinite]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-4 border border-emerald-500/30 bg-emerald-500/70 rounded-[2px] backdrop-blur-sm"></div>
        </div>

        {/* 4. THE CORE (Image Container) */}
        <div
          className="
            relative 
            w-[260px] h-[260px] md:w-[380px] md:h-[380px] 
            rounded-full overflow-hidden 
            border-[3px] border-zinc-800
            bg-zinc-900
            shadow-2xl
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
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0"></div>

          <Image
            className="relative z-10 object-cover opacity-95 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            fill
            src="/profileBW.png"
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
      `}</style>
    </div>
  );
}
