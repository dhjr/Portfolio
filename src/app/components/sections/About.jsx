"use client";

import Header from "@/components/customComponents/SectionHeader";
import { User, RefreshCw, BookOpen, Zap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 relative bg-transparent transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <Header name="About" />
        </div>

        <div className="relative group rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 overflow-hidden hover:shadow-lg dark:hover:shadow-emerald-900/10 transition-all duration-500">
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
      </div>
    </section>
  );
}