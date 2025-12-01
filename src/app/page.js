"use client";

import Image from "next/image";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Education from "./education/page";
import Footer from "@/components/footer";
import NameReveal from "@/components/NameReveal";

export default function Home() {
  const size = 420;

  return (
    <>
      {/* <div className="bg-red-900 w-100 absolute z-0 h-80 top-60 rounded-4xl"></div> */}
      <div className=" w-full h-dvh flex flex-row justify-evenly items-center">
        <Image
          className=" z-10"
          width={size}
          height={size}
          alt=" "
          src={"/profileBgRemoved.png"}
        ></Image>
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

        {/* <Image src={"/bottom.jpg"} width={size} height={size} /> */}
      </div>

      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
