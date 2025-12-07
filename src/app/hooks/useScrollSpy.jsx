// src/hooks/useScrollSpy.js
"use client";

import { useEffect } from "react";

export default function useScrollSpy() {
  useEffect(() => {
    // 1. Select all sections that have an ID
    const sections = document.querySelectorAll("section[id]");

    // 2. Create the observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is visible in the viewport...
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            // 3. Update the URL hash silently
            // We use 'replaceState' instead of 'window.location.hash = ...'
            // because replaceState doesn't cause the page to "jump" or scroll.
            if (id) {
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      {
        // Threshold: 0.6 means "When 60% of the section is visible, update the URL"
        threshold: 0.6,
      }
    );

    // 4. Start observing
    sections.forEach((section) => observer.observe(section));

    // 5. Cleanup when component unmounts
    return () => observer.disconnect();
  }, []);
}
