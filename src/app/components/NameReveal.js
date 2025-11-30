"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function NameReveal() {
  const nameRef = useRef([]);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const letters = nameRef.current;
    const wavingHand = imgRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      letters,
      { opacity: 0, y: 40, scale: 0.8, filter: "blur(8px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      }
    );

    tl.to(
      wavingHand,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "+=0.2"
    );
  }, []);

  const name = "Dhananjay".split("");

  return (
    <div className="flex items-center justify-center">
      {name.map((letter, i) => (
        <span
          key={i}
          ref={(el) => (nameRef.current[i] = el)}
          className="font-rubik tracking-widest font-bold text-7xl bg-linear-to-b text-transparent from-[#00d19d] to-[#005e48] bg-clip-text inline-block opacity-0 blur-sm"
        >
          {letter}
        </span>
      ))}

      <img
        ref={imgRef}
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
        alt="Waving Hand"
        width={100}
        height={100}
        className="opacity-0 ml-5"
        style={{ transformOrigin: "center" }}
      />
    </div>
  );
}
