"use client";

import { Briefcase, Trophy, Users, Code2, Cpu, Globe } from "lucide-react";
import Header from "@/components/customComponents/SectionHeader";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <Header name="Experience" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* --- CARD 1: INTERNSHIP (Large) --- */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 transition-all hover:shadow-lg dark:hover:shadow-emerald-900/20">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                    <Briefcase size={20} />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
                    Internship
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                  Machine Learning Intern
                </h3>
                <p className="font-mono text-zinc-500 dark:text-zinc-400 text-sm mb-6">
                  IIIT Kottayam • May - Aug 2025
                </p>

                <p className="font-1spaceGrotesk text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg">
                  Developed a 2D CNN-based architecture for classifying cardiac
                  arrhythmia from ECG data. Implemented Grad-CAM for model
                  explainability to highlight decision regions.
                </p>
              </div>
            </div>
          </div>

          {/* --- CARD 2: HACKATHONS (Compact) --- */}
          <div className="md:col-span-1 relative group rounded-3xl bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between hover:border-purple-500/50 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                  <Trophy size={20} />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Hackathons
                </span>
              </div>

              <ul className="space-y-6">
                <li>
                  <h4 className="font-bold text-zinc-900 dark:text-white">
                    Winner - Useless Projects
                  </h4>
                  <p className="font-1spaceGrotesk text-xs text-zinc-500 mt-1">
                    Built a Phaser.js game. Won for creativity.
                  </p>
                </li>
                <li className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-bold text-zinc-900 dark:text-white">
                    Code-RECET 2.0
                  </h4>
                  <p className="font-1spaceGrotesk text-xs text-zinc-500 mt-1">
                    Real-time data processing solution.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* --- CARD 3: LEADERSHIP / WEBMASTER (Large/Wide) --- */}
          <div className="md:col-span-2 relative group rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={120} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                  <Code2 size={20} />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Positions of Responsibility
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    IEEE SB RIT
                  </h3>
                  <p className="text-sm font-mono text-zinc-500 mb-3">
                    Webmaster • Current
                  </p>
                  <p className="font-1spaceGrotesk text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                    Lead the web team, overseeing design & deployment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Techfuse 2.0", "Roboignite", "ReX 5.0"].map((site) => (
                      <span
                        key={site}
                        className="text-[10px] px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                      >
                        {site}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:pl-8 md:border-l border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    RITU Fest
                  </h3>
                  <p className="text-sm font-mono text-zinc-500 mb-3">
                    Lead Developer • 2024
                  </p>
                  <p className="font-1spaceGrotesk text-sm text-zinc-600 dark:text-zinc-300">
                    Designed and built the official website for the college's
                    main techno-cultural fest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- CARD 4: VOLUNTEERING (Compact) --- */}
          <div className="md:col-span-1 relative group rounded-3xl bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900/50 dark:to-zinc-900/20 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                <Users size={20} />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Volunteering
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-white">
                  SAE A-Baja RIT
                </h4>
                <p className="font-1spaceGrotesk text-xs text-zinc-500">Event Volunteer</p>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-white">
                  Tinkerhub
                </h4>
                <p className="font-1spaceGrotesk text-xs text-zinc-500">Community Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
