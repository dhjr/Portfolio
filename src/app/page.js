"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Copy } from "lucide-react";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Education from "./education/page";
import Footer from "@/components/footer";
import NameReveal from "@/components/NameReveal";
import HeroImage from "@/components/heroImage";
import { StarsBackground } from "@/components/stars";
import Button from "./components/macButton";
import Popup from "./components/popup";

export default function Home() {
  // const size = 420;
  const [popup, setPopup] = useState(false);
  const textRef = useRef();

  let timer = null;
  const handleMailClick = () => {
    const mail = textRef.current.textContent;
    navigator.clipboard.writeText(mail);

    setPopup(true);

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      setPopup(false);

      timer = null;
    }, 3000);
  };
  return (
    <>
      <section className="relative w-full h-dvh flex flex-row justify-evenly items-center overflow-hidden">
        <HeroImage />
        {/* <Aurora /> */}
        <div className="flex flex-col justify-center items-start">
          <p className="text-5xl font-1spaceGrotesk ">Hey, I'm</p>
          <div className="flex flex-row items-center">
            <NameReveal />
          </div>
          <Popup message={"Mail successfully copied!"} showPopup={popup} />
          <p className="my-2 font-1spaceGrotesk ">Full Stack developer</p>
          <Link href={"#footer"}>
            <Button text={"Let's Connect!"} />
          </Link>
          <button
            onClick={handleMailClick}
            className=" flex flex-row justify-center items-center cursor-pointer gap-2 my-2 hover:scale-104 duration-150 p-2 rounded-sm "
          >
            <p ref={textRef} className="font-1spaceGrotesk text-lg ">
              something@gmail.com
            </p>
            <Copy />
          </button>
        </div>

        <div className="-z-20 absolute object-cover w-full h-full ">
          <StarsBackground />
        </div>

        <p className="text-center absolute bottom-12 text-lg font-1spaceGrotesk text-zinc-500">
          Swipe down
        </p>
        <img
          src="crystal.png"
          className="absolute  size-10 bottom-0 animate-bounce "
          alt=""
        />
      </section>

      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
