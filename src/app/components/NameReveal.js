"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NameReveal() {
  const nameRef = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = nameRef.current;

    gsap.from(elements, {
      opacity: 0,
      y: 40,
      scale: 0.8,
      filter: "blur(8px)",
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.15,
    });
  }, []);

  const name = "DHANANJAY".split("");

  return (
    <div className="flex gap-2 text-6xl font-bold justify-center mt-[300px]">
      {name.map((letter, i) => (
        <span
          key={i}
          ref={(el) => (nameRef.current[i] = el)}
          className="inline-block "
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
