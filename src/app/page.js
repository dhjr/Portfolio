"use client";

import Link from "next/link";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Education from "./education/page";
import Footer from "@/components/footer";
import NameReveal from "@/components/NameReveal";
import HeroImage from "@/components/heroImage";
import { StarsBackground } from "@/components/stars";
import GlowComp from "./components/glowComponent";
import Button from "./components/macButton";
import { Copy } from "lucide-react";

export default function Home() {
  // const size = 420;
  const handleMailClick = () => {
    console.log("mail copied");
  };
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
          <Link href={"#footer"}>
            <Button text={"Let's Connect!"} />
          </Link>
          <button
            onClick={handleMailClick}
            className=" flex flex-row  gap-2 my-2 hover:scale-104 duration-150 p-2 rounded-sm "
          >
            mail@123 <Copy />
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
