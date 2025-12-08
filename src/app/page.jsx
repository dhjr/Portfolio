"use client";

// Components
import Hero from "./components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Footer from "@/components/customComponents/Footer";

import useScrollSpy from "@/hooks/useScrollSpy";

export default function Home() {
  {
    useScrollSpy();
  }

  return (
    <main className="selection:bg-emerald-500/30 w-full">
      {/* 1. HERO SECTION (Sticky Layer) 
         PERMANENT DARK MODE: We use hardcoded 'bg-zinc-950' and 'text-white' 
         here so it ignores the Theme Toggle and stays as a "Space" section.
      */}

      {/* 2. THE CONTENT WRAPPER (Sliding Layer) */}
      {/* This layer DOES use 'bg-background'. 
          So when you toggle the theme, this layer will turn White or Black,
          and slide over the permanently black Hero section.
      */}
      <div className="relative z-10 bg-background transition-colors duration-300">
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  );
}
