"use client";

// Components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Videos from "@/components/sections/Videos";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/customComponents/Footer";
import MeshBackground from "@/components/customComponents/MeshBackground";

export default function Home() {
  return (
    <main className="selection:bg-emerald-500/30 w-full">
      <Hero />

      <div className="relative z-10 transition-colors duration-300">
        {/* Global Mesh Background for all sections below Hero */}
        <MeshBackground />
        
        <div className="content-visibility-auto">
          <About />
          <Videos />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
