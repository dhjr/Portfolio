"use client";

import { useState, useEffect, useRef } from "react";

export default function ViewportSection({ children, threshold = 0.1, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // If the browser doesn't support IntersectionObserver, render naturally
    if (!window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "200px" } // Load slightly before it enters
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={sectionRef} className={className}>
      {isVisible ? children : <div className="h-40" />}
    </div>
  );
}
