

// Components
// Components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/customComponents/Footer";
import MeshBackground from "@/components/customComponents/MeshBackground";
import dynamic from "next/dynamic";

const Videos = dynamic(() => import("@/components/sections/Videos"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Education = dynamic(() => import("@/components/sections/Education"));
const Experience = dynamic(() => import("@/components/sections/Experience"));

import ViewportSection from "@/components/customComponents/ViewportSection";

export default function Home() {
  return (
    <main className="selection:bg-emerald-500/30 w-full">
      <Hero />

      <div className="relative z-10 transition-colors duration-300">
        {/* Global Mesh Background for all sections below Hero */}
        <MeshBackground />

        <div className="content-visibility-auto">
          <ViewportSection threshold={0.05}>
            <About />
          </ViewportSection>
          
          <ViewportSection threshold={0.05}>
            <Videos />
          </ViewportSection>
          
          <ViewportSection threshold={0.05}>
            <Projects />
          </ViewportSection>
          
          <ViewportSection threshold={0.05}>
            <Experience />
          </ViewportSection>
          
          <ViewportSection threshold={0.05}>
            <Skills />
          </ViewportSection>
          
          <ViewportSection threshold={0.05}>
            <Education />
          </ViewportSection>
          
          <ViewportSection threshold={0.05}>
            <Contact />
          </ViewportSection>
          
          <Footer />
        </div>
      </div>
    </main>
  );
}
