import { Github, Linkedin, Twitter, Mail, Youtube } from "lucide-react";

export default function footer() {
  return (
    <>
      <section id="footer" className="relative w-full h-100 ">
        <div className="w-[90%] mx-auto h-[0.5px]  bg-zinc-500"></div>
        <div className="h-full flex flex-row justify-between">
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-1boldonse m-5 opacity-20">Dhananjay R</h3>

            <h2 className="text-6xl text-white/20 font-1boldonse font-extrabold">
              DR.
            </h2>
          </div>

          <div className="h-full flex flex-col justify-center items-center gap-5">
            <p className="hover:text-xl transition-normal duration-150">
              About
            </p>
            <p className="hover:text-xl transition-normal duration-150">
              Projects
            </p>
            <p className="hover:text-xl transition-normal duration-150">
              Education
            </p>
            <p className="hover:text-xl transition-normal duration-150">
              Contact
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="font-1boldonse">Socials</h2>
            <div className="w-50 flex flex-row  justify-center items-center">
              <a href="https://github.com/dhjr" target="_blank">
                <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
                  <Github />
                </button>
              </a>

              <a href="https://www.linkedin.com/in/dhananjayr/" target="_blank">
                <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
                  <Linkedin />
                </button>
              </a>

              <a href="https://x.com/dhananjayr_" target="_blank">
                <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
                  <Twitter />
                </button>
              </a>

              <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
                <Mail />
              </button>

              <a href="https://www.youtube.com/@letthedevscook" target="_blank">
                <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
                  <Youtube />
                </button>
              </a>
            </div>
          </div>
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
