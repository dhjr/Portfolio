"use client";

// Components
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/customComponents/Footer";

export default function Home() {
  return (
    <main className="selection:bg-emerald-500/30 w-full">
      <Hero />

      <div className="relative z-10 transition-colors duration-300">
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
