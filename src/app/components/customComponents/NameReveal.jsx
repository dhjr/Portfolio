// "use client";

// import { useLayoutEffect, useRef, useEffect } from "react";
// import gsap from "gsap";

// export default function NameReveal() {
//   const nameRef = useRef([]);
//   const imgRef = useRef(null);

//   useLayoutEffect(() => {
//     const letters = nameRef.current;
//     const wavingHand = imgRef.current;

//     const tl = gsap.timeline();

//     // Initial reveal animation
//     tl.fromTo(
//       letters,
//       { opacity: 0, y: 40, scale: 0.8, filter: "blur(8px)" },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         filter: "blur(0px)",
//         duration: 1,
//         ease: "power3.out",
//         stagger: 0.1,
//       }
//     );

//     tl.to(
//       wavingHand,
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         ease: "power2.out",
//       },
//       "+=0.2"
//     );
//   }, []);

//   // GSAP Hover Effect on each letter
//   useEffect(() => {
//     nameRef.current.forEach((el) => {
//       if (!el) return;

//       const hoverIn = () => {
//         gsap.to(el, {
//           scale: 1.25,
//           y: -8,
//           filter: "blur(0px)",
//           duration: 0.25,
//           ease: "power2.out",
//         });
//       };

//       const hoverOut = () => {
//         gsap.to(el, {
//           scale: 1,
//           y: 0,

//           duration: 0.25,
//           ease: "power2.out",
//         });
//       };

//       el.addEventListener("mouseenter", hoverIn);
//       el.addEventListener("mouseleave", hoverOut);

//       // cleanup
//       return () => {
//         el.removeEventListener("mouseenter", hoverIn);
//         el.removeEventListener("mouseleave", hoverOut);
//       };
//     });
//   }, []);

//   const name = "Dhananjay".split("");

//   return (
//     <div className="flex items-center justify-center">
//       {name.map((letter, i) => (
//         <span
//           key={i}
//           ref={(el) => (nameRef.current[i] = el)}
//           className="font-1cormorantupright h-20 tracking-widest font-bold text-7xl bg-linear-to-b
//             text-transparent from-[#00d19d] to-[#005e48] bg-clip-text
//             inline-block opacity-0 blur-sm cursor-pointer"
//         >
//           {letter}
//         </span>
//       ))}

//       <img
//         ref={imgRef}
//         src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
//         alt="Waving Hand"
//         width={100}
//         height={100}
//         className="opacity-0 ml-5"
//         style={{ transformOrigin: "center" }}
//       />
//     </div>
//   );
// }

"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";

export default function NameReveal() {
  const containerRef = useRef(null);
  const nameRef = useRef([]);
  const cursorRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const letters = nameRef.current;
      const cursor = cursorRef.current;

      const tl = gsap.timeline();

      // 1. Letters Float Up
      tl.fromTo(
        letters,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "back.out(1.7)",
          stagger: 0.05,
          delay: 0.2, // Small delay to ensure layout is ready
        }
      );

      // 2. Cursor Blink Animation
      // We start it visible, then toggle opacity
      gsap.to(cursor, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Hover Effect Logic
  useEffect(() => {
    const letters = nameRef.current;

    letters.forEach((el) => {
      if (!el) return;

      const hoverIn = () => {
        gsap.to(el, {
          y: -10,
          scale: 1.1,
          color: "#10b981",
          textShadow: "0 0 15px rgba(16,185,129,0.5)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const hoverOut = () => {
        gsap.to(el, {
          y: 0,
          scale: 1,
          color: "transparent",
          textShadow: "none",
          duration: 0.3,
          ease: "power2.in",
        });
      };

      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);

      return () => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
      };
    });
  }, []);

  const name = "Dhananjay".split("");

  return (
    <div
      ref={containerRef}
      className="flex items-end justify-center md:justify-start overflow-hidden py-2"
    >
      {/* THE NAME */}
      {name.map((letter, i) => (
        <span
          key={i}
          ref={(el) => (nameRef.current[i] = el)}
          className="
            font-1spaceGrotesk h-14 md:h-26 font-bold tracking-tight cursor-default
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
            bg-gradient-to-b from-white via-emerald-100 to-emerald-600 bg-clip-text text-transparent
            hover:select-none
            opacity-0 translate-y-10  /* <--- THE FIX: Hidden by default in CSS */
          "
          style={{ willChange: "transform, opacity, filter" }}
        >
          {letter}
        </span>
      ))}

      {/* THE TERMINAL CURSOR */}
      <span
        ref={cursorRef}
        className="
          font-1spaceGrotesk font-bold text-emerald-500
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          ml-1 md:ml-2 pb-1 md:-mb-2
          opacity-100 /* Cursor stays visible immediately */
        "
      >
        _
      </span>
    </div>
  );
}
