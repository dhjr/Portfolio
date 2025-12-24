"use client";

import Header from "@/components/customComponents/SectionHeader";
import { User, RefreshCw, BookOpen, Zap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <Header name="About" />
        </div>

        <div className="relative group rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 overflow-hidden hover:shadow-lg dark:hover:shadow-emerald-900/10 transition-all duration-500">
            {/* Background Decorations */}
             <div className="absolute -top-10 -right-10 md:top-0 md:right-0 p-8 md:p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
              <User size={120} className="md:w-[200px] md:h-[200px]" />
            </div>
            
          <div className="relative z-10 flex flex-col gap-8">
            <h3 className="text-2xl md:text-3xl font-bold font-1spaceGrotesk text-zinc-900 dark:text-white leading-tight">
              Crafting digital experiences with <span className="text-emerald-500">code</span> and <span className="text-emerald-500">creativity</span>.
            </h3>

            <div className="flex flex-col gap-6 text-zinc-600 dark:text-zinc-400 font-1spaceGrotesk leading-relaxed">
              <p>
                I'm an aspiring Full Stack Developer passionate about building accessible, pixel-perfect, and performant web applications. My journey involves a blend of technical expertise and a keen eye for design, ensuring that every project I touch is not only functional but also visually compelling.
              </p>
              <p>
                When I'm not coding, I'm likely exploring the latest tech trends or refining my craft. I also love listening to music (especially the 90s-2000s hits), enjoying a good session of standup comedy, and occasionally binge-watching movies and series. I'm also passionate about personal finance and the journey toward financial freedom.
              </p>
            </div>

             {/* Highlights / Stats */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <RefreshCw size={20} />
                    </span>
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 font-1spaceGrotesk">Unlearn & Relearn</span>
                </div>
                 <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                        <BookOpen size={20} />
                    </span>
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 font-1spaceGrotesk">Lifelong Learning</span>
                </div>
                 <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        <Zap size={20} />
                    </span>
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 font-1spaceGrotesk">Exploring new tech..</span>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
