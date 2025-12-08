"use client";

// Components
import Hero from "./components/sections/Hero"; // Make sure path is correct
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Experience from "./components/sections/Experience";
import Footer from "@/components/customComponents/Footer";

export default function Home() {
  return (
    <main className="selection:bg-emerald-500/30 w-full">
      {/* FIX: Don't wrap this in a section. The component IS the section. */}
      <Hero />

      {/* Overlapping Content Layer */}
      {/* This needs to be relative + z-10 + background color to cover the hero */}
      <div className="relative z-10 transition-colors duration-300">
        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Experience />
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
