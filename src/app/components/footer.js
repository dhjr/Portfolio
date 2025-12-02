import { Github, Linkedin, Twitter, Mail, Youtube } from "lucide-react";

export default function footer() {
  return (
    <>
      <section className="relative w-full h-100 bg-zinc-700/50">
        <div className="w-[90%] mx-auto  h-[0.5px]  bg-zinc-500"></div>
        <h3 className="font-1boldonse m-5">Dhananjay R</h3>
        <div className="w-50 flex flex-row  ">
          <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
            <Github />
          </button>
          <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
            <Linkedin />
          </button>
          <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
            <Twitter />
          </button>
          <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
            <Mail />
          </button>
          <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
            <Youtube />
          </button>
        </div>
        <div className="absolute bottom-2 w-full text-center">
          <div className="w-[90%] mx-auto  h-[0.5px]  bg-zinc-500"></div>
          <p className="bottom-0 font-thin text-zinc-300">
            © 2025 Dhananjay R. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
