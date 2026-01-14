"use client";

import Header from "@/components/customComponents/SectionHeader";
import { Trophy } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      title: "B.Tech, Computer Science & Engineering",
      institution: "Government Engineering College (GEC), Kottayam",
      period: "2023 – Present",
      score: "CGPA: 8.0/10",
      description:
        "Focusing on core software engineering principles and fullstack development. Actively contributing to the campus technical ecosystem through IEEE, Tinkerhub, and SAE A-Baja teams.",
    },
    {
      title: "Higher Secondary Education (Class 12)",
      institution: "Silver Hills Public School, Kozhikode",
      period: "2021 – 2023",
      score: "96.4%",
      // Added highlight field for the perfect score
      highlight: "100/100 in Computer Science",
      description:
        "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics. Achieved a perfect score in Computer Science.",
    },
  ];

  return (
    <section
      id="education"
      className="relative z-10 w-full transition-colors duration-300 py-12 px-4 bg-transparent"
    >
      <div className="w-full max-w-6xl mx-auto">
        <Header name="Education" />

        <div className="flex flex-col mt-12">
          {educationData.map((item, idx) => (
            <div key={idx} className="flex flex-col group relative">
              {/* --- CARD CONTENT --- */}
              <div className="pb-12 flex flex-col flex-1 pl-10 md:pl-12">
                <div className="flex items-center relative">
                  {/* VERTICAL LINES: Connects dots */}
                  {/* Upper Line: Connects to previous item. Hidden for first item. */}
                  {idx !== 0 && (
                    <div
                      className="absolute -left-[29px] md:-left-[37px] -top-12 bottom-1/2 w-[2px] bg-zinc-400 dark:bg-zinc-800"
                      aria-hidden="true"
                    ></div>
                  )}
                  {/* Lower Line: Connects to next item. For last item, extends slightly with fade. */}
                  <div
                    className={`
                        absolute -left-[29px] md:-left-[37px] top-1/2 w-[2px] bg-zinc-400 dark:bg-zinc-800
                        ${
                          idx === educationData.length - 1
                            ? "h-24 mask-[linear-gradient(to_bottom,black,transparent)]"
                            : "-bottom-12"
                        }
                      `}
                    aria-hidden="true"
                  ></div>

                  {/* DOT - Absolute positioned (Center aligned at -29px/-37px) */}
                  <div
                    className="absolute -left-[36px] md:-left-[44px] top-1/2 -translate-y-1/2 
                        w-4 h-4 rounded-full border-2 border-emerald-500 z-10 
                        transition-all duration-300 group-hover:scale-125
                        bg-zinc-100 dark:bg-zinc-950 group-hover:bg-emerald-500"
                  ></div>

                  {/* Horizontal Line */}
                  <div className="hidden md:block w-8 h-px bg-zinc-200 dark:bg-zinc-800 shrink-0 mr-4"></div>

                  {/* Card */}
                  <div className="relative w-full p-6 rounded-xl border bg-white/90 border-zinc-200 dark:bg-zinc-900/70 dark:border-zinc-800 shadow-xl shadow-black/5 dark:shadow-md transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 font-1spaceGrotesk">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm mb-3 font-mono text-zinc-600 dark:text-zinc-400">
                      {item.institution} • {item.score}
                    </div>

                    {/* HIGHLIGHT BOX: This makes the 100/100 pop */}
                    {item.highlight && (
                      <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)] dark:shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                        <Trophy
                          size={16}
                          className="text-amber-500 fill-amber-500"
                        />
                        <span className="text-sm font-bold bg-linear-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent font-1spaceGrotesk">
                          {item.highlight}
                        </span>
                      </div>
                    )}

                    <p className="text-xs  text-zinc-700 dark:text-zinc-400 leading-relaxed font-1spaceGrotesk">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
