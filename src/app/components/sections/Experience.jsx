"use client";

import {
  Briefcase,
  Trophy,
  Users,
  Code2,
  Cpu,
  Globe,
  FileText,
  ExternalLink,
  Github,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/customComponents/SectionHeader";

export default function Experience() {
  return (
    <section
      className="py-12 px-4 relative bg-transparent transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Header name="Experience" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* --- CARD 1: INTERNSHIP (Large) --- */}
          <div className="md:col-span-2 relative group rounded-3xl p-[1.5px] overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl dark:hover:shadow-emerald-900/20 transition-all duration-300">
            {/* Masked Border Animation: Strictly restricted to the perimeter */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                padding: "1.5px",
                borderRadius: "inherit",
                maskImage:
                  "linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)",
                maskClip: "content-box, border-box",
                maskComposite: "exclude",
                WebkitMaskComposite: "destination-out",
              }}
            >
              <div className="absolute -inset-[200%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_60deg,#10b981_90deg,transparent_120deg,transparent_360deg)] will-change-transform opacity-100" />
            </div>

            <div className="relative h-full bg-white/95 dark:bg-zinc-900/90 rounded-[23px] p-8 border border-zinc-200 dark:border-transparent">
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

                  <h3 className="text-2xl font-bold font-1spaceGrotesk text-zinc-900 dark:text-white mb-1">
                    Machine Learning Intern
                  </h3>
                  <p className="font-mono text-zinc-500 dark:text-zinc-400 text-sm mb-6">
                    IIIT Kottayam • May - Aug 2025
                  </p>

                  <p className="font-1spaceGrotesk text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-lg mb-6">
                    Architected a{" "}
                    <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                      2D CNN-based model
                    </span>{" "}
                    to classify cardiac arrhythmia with 99.10% accuracy.
                    Integrated{" "}
                    <span className="text-emerald-500 font-medium">
                      Grad-CAM
                    </span>{" "}
                    to visualize decision-making regions, enhancing model
                    transparency for clinical use cases.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://drive.google.com/file/d/1WckhjFNDy4Fx0t84xtC9ATofwGcOtQ2n/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-medium text-sm hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors w-fit"
                    >
                      <FileText size={16} />
                      <span className="font-1spaceGrotesk">
                        View Internship Report
                      </span>
                    </a>

                    <a
                      href="https://github.com/dhjr/IIIT-Internship"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors w-fit"
                    >
                      <Github size={16} />
                      <span className="font-1spaceGrotesk">
                        View Source Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- CARD 2: HACKATHONS (Compact) --- */}
          <div className="md:col-span-1 relative group rounded-3xl p-[1.5px] overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-300">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                padding: "1.5px",
                borderRadius: "inherit",
                maskImage:
                  "linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)",
                maskClip: "content-box, border-box",
                maskComposite: "exclude",
                WebkitMaskComposite: "destination-out",
              }}
            >
              <div className="absolute -inset-[200%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_60deg,#a855f7_90deg,transparent_120deg,transparent_360deg)] will-change-transform opacity-100" />
            </div>

            <div className="relative h-full rounded-[23px] bg-white/95  dark:bg-zinc-900/90 p-8 flex flex-col justify-between border border-zinc-200 dark:border-transparent">
              <div>
                {/* <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                    <Briefcase size={20} />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    Freelance & Projects
                  </span>
                </div> */}

                <ul className="space-y-6">
                  <li>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400 mb-1 block">
                      Freelance
                    </span>
                    <h4 className="font-bold font-1spaceGrotesk text-zinc-900 dark:text-white">
                      Victoria Film
                    </h4>
                    <p className="font-1spaceGrotesk text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      Developed the official website for the malayalam feature
                      film{" "}
                      <span className="text-zinc-900 dark:text-zinc-200 font-medium">
                        Victoria
                      </span>
                      .<br></br>Site achieved over{" "}
                      <span className="text-emerald-500 font-bold">
                        60k+ impressions
                      </span>
                      .
                    </p>
                    <a
                      href="https://victoriafilm.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/tag inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 mt-3 rounded-md transition-all duration-300
                        bg-zinc-100 border border-zinc-200 text-zinc-600
                        dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:text-zinc-400
                        
                        hover:scale-105 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-sm
                        dark:hover:bg-emerald-500/10 dark:hover:border-emerald-500/30 dark:hover:text-emerald-400
                      "
                    >
                      victoriafilm.in
                      <ExternalLink
                        size={8}
                        className="opacity-50 group-hover/tag:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                  <li className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-purple-600 dark:text-purple-400 mb-1 block">
                      Hackathon
                    </span>
                    <h4 className="font-bold font-1spaceGrotesk text-zinc-900 dark:text-white">
                      Code-RECET 2.0
                    </h4>
                    <p className="font-1spaceGrotesk text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      AI-powered Chrome extension to bridge the gap between
                      binge-watching tutorials and active learning.
                    </p>
                    <a
                      href="https://github.com/dhjr/Mentora.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/tag inline-flex items-center gap-2 text-[10px] px-3 py-2 mt-3 rounded-md transition-all duration-300
                        bg-zinc-100 border border-zinc-200 text-zinc-600
                        dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:text-zinc-400
                        
                        hover:scale-105 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-sm
                        dark:hover:bg-emerald-500/10 dark:hover:border-emerald-500/30 dark:hover:text-emerald-400
                      "
                    >
                      <Github size={14} />
                      Mentora.ai
                      <ExternalLink
                        size={12}
                        className="opacity-50 group-hover/tag:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- CARD 3: LEADERSHIP / WEBMASTER (Large/Wide) --- */}
          <div className="md:col-span-2 relative group rounded-3xl p-[1.5px] overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-300">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                padding: "1.5px",
                borderRadius: "inherit",
                maskImage:
                  "linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)",
                maskClip: "content-box, border-box",
                maskComposite: "exclude",
                WebkitMaskComposite: "destination-out",
              }}
            >
              <div className="absolute -inset-[200%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_60deg,#3b82f6_90deg,transparent_120deg,transparent_360deg)] will-change-transform opacity-100" />
            </div>

            <div className="relative h-full rounded-[23px] bg-white/95 dark:bg-zinc-900/90 p-8 border border-zinc-200 dark:border-transparent">
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
                    <h3 className="text-xl font-bold font-1spaceGrotesk text-zinc-900 dark:text-white flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm border border-zinc-100 dark:border-zinc-800">
                        <Image
                          src="/ieee.webp"
                          alt="IEEE"
                          fill
                          sizes="32px"
                          className="object-cover p-1"
                        />
                      </div>
                      IEEE SB RIT
                    </h3>
                    <p className="text-sm font-mono text-zinc-600 dark:text-zinc-400 mb-3">
                      Webmaster • Current
                    </p>
                    <ul className="list-disc list-outside space-y-2 ml-4 font-1spaceGrotesk text-sm text-zinc-700 dark:text-zinc-300 mb-4 marker:text-zinc-400 dark:marker:text-zinc-600">
                      <li>
                        Led end-to-end web development, from initial design to
                        final deployment.
                      </li>
                      <li>
                        Conducted a multi-day bootcamp introducing HTML, CSS,
                        JavaScript, and React.
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {[
                        {
                          name: "Techfuse 2.0",
                          url: "https://techfuse20.ieeesbrit.com",
                          ghUrl: "https://github.com/dhjr/TechFuse-2.0",
                        },
                        {
                          name: "Roboignite",
                          url: "https://roboignite.ieeesbrit.com",
                          ghUrl: "https://github.com/dhjr/Roboignite",
                        },
                        {
                          name: "ReX 5.0",
                          url: "https://rex.ieeesbrit.com",
                          ghUrl: "https://github.com/dhjr/rex5",
                        },
                      ].map((site) => (
                        <div
                          key={site.name}
                          className="flex items-center gap-1"
                        >
                          <a
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              group/tag flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-md transition-all duration-300
                              bg-zinc-100 border border-zinc-200 text-zinc-600
                              dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:text-zinc-400
                              
                              hover:scale-105 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-sm
                              dark:hover:bg-emerald-500/10 dark:hover:border-emerald-500/30 dark:hover:text-emerald-400
                            "
                          >
                            {site.name}
                            <ExternalLink
                              size={10}
                              className="opacity-50 group-hover/tag:opacity-100 transition-opacity"
                            />
                          </a>
                          {site.ghUrl && (
                            <a
                              href={site.ghUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                group/github p-2 rounded-md border transition-all duration-300
                                bg-zinc-100 border-zinc-200 text-zinc-600
                                dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:text-zinc-400
                                hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-emerald-600 dark:hover:text-emerald-400
                              "
                              aria-label={`${site.name} Source Code`}
                            >
                              <Github size={20} />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:pl-8 md:border-l border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-xl font-bold font-1spaceGrotesk text-zinc-900 dark:text-white">
                      RITU College Techfest
                    </h3>
                    <p className="text-sm font-mono text-zinc-600 dark:text-zinc-400 mb-3">
                      Contributor • 2025
                    </p>
                    <div className="space-y-4">
                      <p className="font-1spaceGrotesk text-sm text-zinc-700 dark:text-zinc-300">
                        Contributed in the development of the official website
                        for the college's main techno-cultural fest.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="https://ritu25.live"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/tag inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-md transition-all duration-300
                            bg-zinc-100 border border-zinc-200 text-zinc-600
                            dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:text-zinc-400
                            
                            hover:scale-105 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-sm
                            dark:hover:bg-emerald-500/10 dark:hover:border-emerald-500/30 dark:hover:text-emerald-400
                          "
                        >
                          RITU 25
                          <ExternalLink
                            size={10}
                            className="opacity-50 group-hover/tag:opacity-100 transition-opacity"
                          />
                        </a>

                        <a
                          href="https://github.com/dhjr/RITU-2025"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/github inline-flex items-center gap-2 text-[10px] px-3 py-2 rounded-md transition-all duration-300
                            bg-zinc-100 border border-zinc-200 text-zinc-600
                            dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:text-zinc-400
                            hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-emerald-600 dark:hover:text-emerald-400
                          "
                        >
                          <Github size={20} />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- CARD 4: VOLUNTEERING (Compact) --- */}
          <div className="md:col-span-1 relative group rounded-3xl p-[1.5px] overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-300">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                padding: "1.5px",
                borderRadius: "inherit",
                maskImage:
                  "linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)",
                maskClip: "content-box, border-box",
                maskComposite: "exclude",
                WebkitMaskComposite: "destination-out",
              }}
            >
              <div className="absolute -inset-[200%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_60deg,#f97316_90deg,transparent_120deg,transparent_360deg)] will-change-transform opacity-100" />
            </div>

            <div className="relative h-full rounded-[23px] bg-linear-to-br from-white to-zinc-50 dark:from-zinc-900/90 dark:to-zinc-900/50 p-8 flex flex-col justify-center border border-zinc-200 dark:border-transparent">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                  <Users size={20} />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  Volunteering
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-white shadow-sm border border-zinc-100 dark:border-zinc-800">
                    <Image
                      src="/baja.webp"
                      alt="Baja"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold font-1spaceGrotesk text-zinc-900 dark:text-white mb-2">
                      SAE A-Baja 2025
                    </h4>

                    <div className="flex flex-col gap-1.5 border-l-2 border-orange-200 dark:border-orange-500/20 pl-3">
                      <div className="flex flex-col mb-1.5">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1.5">
                          <Trophy size={10} />
                          All India Rank - 9
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">
                          Module Lead
                        </span>
                        <div className="flex flex-col gap-2">
                          <span className="text-sm font-1spaceGrotesk text-zinc-700 dark:text-zinc-300">
                            Adaptive Cruise Control (ACC)
                          </span>
                          <a
                            href="https://github.com/dhjr/Adaptive-Cruise-Control/tree/main"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              group/github inline-flex items-center gap-2 text-[10px] px-3 py-2 rounded-md transition-all duration-300
                              bg-zinc-50 border border-zinc-200 text-zinc-600 w-fit
                              dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:text-zinc-400
                              hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-emerald-600 dark:hover:text-emerald-400
                            "
                          >
                            <Github size={20} />
                            Source
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col text-zinc-500">
                        <span className="text-[10px] uppercase tracking-wider font-bold">
                          Contributor
                        </span>
                        <span className="text-sm font-1spaceGrotesk text-zinc-700 dark:text-zinc-400">
                          AEB, LKA & Computer Vision
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-white shadow-sm border border-zinc-100 dark:border-zinc-800">
                    <Image
                      src="/tinkerhub.webp"
                      alt="Tinkerhub"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold font-1spaceGrotesk text-zinc-900 dark:text-white">
                      Tinkerhub RIT
                    </h4>
                    <p className="font-1spaceGrotesk text-sm text-zinc-600 dark:text-zinc-400">
                      Community Volunteer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
