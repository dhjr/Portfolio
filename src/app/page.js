"use client";

import Image from "next/image";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import NameReveal from "@/components/NameReveal";

export default function Home() {
  const size = 420;

  return (
    <>
      {/* <div className="bg-red-900 w-100 absolute z-0 h-80 top-60 rounded-4xl"></div> */}
      <div className=" w-full flex flex-row justify-evenly items-center">
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
            {/* <p
              className={`font-rubik mr-5 font-bold text-7xl leading-20 bg-linear-to-b text-transparent from-[#00d19d] to-[#005e48] bg-clip-text`}
            >
              Dhananjay
            </p> */}

            <NameReveal />
            {/* <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Cat.png"
              alt="Grinning Cat"
              className="size-20"
            /> */}
          </div>
         
          <p>Full Stack Developer</p>
        </div>
      </div>

      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
