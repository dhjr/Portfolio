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
import Button from "./components/macButton";
import { Copy } from "lucide-react";
import Popup from "./components/popup";
import { useState } from "react";

export default function Home() {
  // const size = 420;
  const [popup, setPopup] = useState(false);
  let timer = null;
  const handleMailClick = () => {
    setPopup(true);

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      setPopup(false);

      timer = null;
    }, 3000);
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
          <Popup message={"Mail successfully copied!"} showPopup={popup} />
          <p className="my-2 font-1spaceGrotesk font-semibold">
            Full Stack Developer
          </p>
          <Link href={"#footer"}>
            <Button text={"Let's Connect!"} />
          </Link>
          <button
            onClick={handleMailClick}
            className=" flex flex-row  cursor-pointer gap-2 my-2 hover:scale-104 duration-150 p-2 rounded-sm "
          >
            <p className="font-1spacegrotesk text-lg ">something@gmail.com</p>
            <Copy />
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
