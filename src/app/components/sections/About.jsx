import Link from "next/link";
import Image from "next/image";
import Header from "@/components/customComponents/SectionHeader";
import { User, RefreshCw, BookOpen, Zap, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="pt-12 pb-2 relative bg-transparent transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <Header name="About" />
        </div>

        <div className="relative group rounded-3xl bg-white/90 dark:bg-zinc-900/80  border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 overflow-hidden shadow-xl shadow-black/5 dark:shadow-md hover:shadow-2xl dark:hover:shadow-emerald-900/10 transition-all duration-500">
          {/* Background Decoration */}
          <div className="absolute -top-10 -right-10 md:top-0 md:right-0 p-8 md:p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
            <User size={120} className="md:w-[200px] md:h-[200px]" />
          </div>

          <div className="relative z-10 flex flex-col gap-8">
            <h3 className="text-2xl md:text-3xl font-bold font-1spaceGrotesk text-zinc-900 dark:text-white leading-tight">
              Crafting digital experiences with{" "}
              <span className="text-emerald-500">code</span> and{" "}
              <span className="text-emerald-500">creativity</span>.
            </h3>

            {/* Split into multiple <p> tags with bold highlights */}
            <div className="flex flex-col gap-5 text-zinc-600 dark:text-zinc-400 font-1spaceGrotesk leading-relaxed text-base md:text-md">
              <p>
                Hey, I&apos;m <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Dhananjay</span>. 
                I’m a Computer Science student and an aspiring <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Full Stack Developer</span> with a passion for building applications that are as accessible and performant as they are visually striking.
              </p>

              <p>
                While my core strength lies in <span className="text-emerald-500 font-medium">frontend development</span>, 
                I’m currently expanding my expertise into <span className="text-zinc-900 dark:text-zinc-100 font-semibold">backend systems</span> to build robust, end-to-end solutions. I stay at the forefront of the industry by constantly exploring the latest web standards and emerging technologies.
              </p>

              <p>
                Outside of my IDE, I dive into the worlds of <span className="italic">personal finance</span> and <span className="italic">standup comedy</span>. 
                When I’m not coding, you’ll likely find me catching a movie or discovering new music to fuel my next build.
              </p>

              <p className="text-zinc-900 dark:text-zinc-100 font-medium">
                I thrive on challenges and am currently looking for an opportunity to contribute to a forward-thinking team. Let’s connect!
              </p>
            </div>

            {/* Highlights / Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <RefreshCw size={20} />
                </span>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 font-1spaceGrotesk">
                  Unlearn & Relearn
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                  <BookOpen size={20} />
                </span>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 font-1spaceGrotesk">
                  Lifelong Learning
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Zap size={20} />
                </span>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 font-1spaceGrotesk">
                  Exploring Tech
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* YouTube Channel Promo */}
        <div className="mt-20 group relative rounded-3xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-black/5 dark:shadow-md hover:shadow-2xl dark:hover:shadow-red-900/10 transition-all duration-300">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-zinc-100 dark:border-zinc-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
             <Image
                src="/ltdc.webp"
                alt="Let the Devs Cook Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl font-bold font-1spaceGrotesk text-zinc-900 dark:text-white flex items-center gap-2">
                Let the Devs Cook
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-1spaceGrotesk leading-relaxed">
                Dishing out fresh front-end content to a global, organic community of developers.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center justify-between md:justify-end gap-4">
             {/* Stats */}
            <div className="hidden sm:flex items-center gap-4 px-5 py-3 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-zinc-900 dark:text-white font-1spaceGrotesk leading-none">
                    586
                  </span>
                  <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                    Subscribers
                  </span>
                </div>

            </div>

            {/* Visit Button */}
            <Link
              href="https://www.youtube.com/@LetTheDevsCook"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-sm tracking-wide shadow-lg shadow-zinc-200 dark:shadow-zinc-900/20 hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <span>Visit Channel</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}