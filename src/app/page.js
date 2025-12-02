"use client";

import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Education from "./education/page";
import Footer from "@/components/footer";
import NameReveal from "@/components/NameReveal";
import HeroImage from "@/components/heroImage";
import { StarsBackground } from "@/components/stars";
import GlowComp from "./components/glowComponent";

export default function Home() {
  // const size = 420;

  return (
    <>

      <div className=" w-full h-dvh flex flex-row justify-evenly items-center">
        <HeroImage />

        <div className="flex flex-col justify-center items-start">
          <p className="text-5xl font-josefin ">Hey, I'm</p>
          <div className="flex flex-row items-center">
            <NameReveal />
          </div>

          <p>Full Stack Developer</p>
          <button className="border-2 my-5 rounded-2xl p-2 hover:bg-white hover:text-black transition-colors duration-300">
            Lets Connect!
          </button>
        </div>
        <div className="-z-10 absolute object-cover w-full h-full ">
          <StarsBackground />
        </div>
      </div>

      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
