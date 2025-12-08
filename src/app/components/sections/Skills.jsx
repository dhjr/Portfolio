"use client";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaJava,
  FaRust,
  FaFigma,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiFramer,
  SiGraphql,
  SiFirebase,
  SiVercel,
  SiPrisma,
  SiRedux,
} from "react-icons/si";

// DATA STRUCTURE
const categories = [
  {
    name: "SYNTAX & LOGIC",
    id: "SERIES_01",
    description: "Core Languages",
    items: [
      {
        id: "01",
        symbol: "Ts",
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-600 dark:text-blue-400", // Adjusted for contrast
      },
      {
        id: "02",
        symbol: "Js",
        name: "JavaScript",
        icon: FaNodeJs,
        color: "text-yellow-500 dark:text-yellow-400",
      },
      {
        id: "03",
        symbol: "Py",
        name: "Python",
        icon: FaPython,
        color: "text-blue-600 dark:text-blue-500",
      },
      {
        id: "04",
        symbol: "Ja",
        name: "Java",
        icon: FaJava,
        color: "text-red-600 dark:text-red-400",
      },
      {
        id: "05",
        symbol: "Sq",
        name: "SQL",
        icon: SiPostgresql,
        color: "text-cyan-600",
      },
    ],
  },
  {
    name: "STRUCTURE & UI",
    id: "SERIES_02",
    description: "Frameworks / Libraries",
    items: [
      {
        id: "06",
        symbol: "Re",
        name: "React",
        icon: FaReact,
        color: "text-cyan-500 dark:text-cyan-400",
      },
      {
        id: "07",
        symbol: "Nx",
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white", // FIX: Visible on both backgrounds
      },
      {
        id: "08",
        symbol: "Tw",
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-cyan-400 dark:text-cyan-300",
      },
      {
        id: "09",
        symbol: "Fm",
        name: "Framer",
        icon: SiFramer,
        color: "text-pink-600 dark:text-pink-500",
      },
      {
        id: "10",
        symbol: "Rx",
        name: "Redux",
        icon: SiRedux,
        color: "text-purple-600 dark:text-purple-500",
      },
    ],
  },
  {
    name: "INFRA & UTILITY",
    id: "SERIES_03",
    description: "Tools / DevOps",
    items: [
      {
        id: "11",
        symbol: "Gi",
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-600 dark:text-orange-500",
      },
      {
        id: "12",
        symbol: "Do",
        name: "Docker",
        icon: FaDocker,
        color: "text-blue-600 dark:text-blue-500",
      },
      {
        id: "13",
        symbol: "Aw",
        name: "AWS",
        icon: FaAws,
        color: "text-yellow-600 dark:text-yellow-500",
      },
      {
        id: "14",
        symbol: "Fi",
        name: "Figma",
        icon: FaFigma,
        color: "text-purple-500 dark:text-purple-400",
      },
      {
        id: "15",
        symbol: "Ve",
        name: "Vercel",
        icon: SiVercel,
        color: "text-black dark:text-white", // FIX: Visible on both backgrounds
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden bg-zinc-50 dark:bg-stone-950 transition-colors duration-300"
    >
      {/* Background Grid - Now responsive to mode */}
      <div
        className="
          absolute inset-0 opacity-[0.05] dark:opacity-[0.03]
          bg-[size:30px_30px]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
        "
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Header */}
        <div className="mb-20 flex items-end gap-6 border-b border-zinc-300 dark:border-zinc-800 pb-6 transition-colors">
          <h2 className="text-5xl font-bold font-1boldonse tracking-tight text-zinc-900 dark:text-white transition-colors">
            Stack<span className="text-emerald-500">.</span>
          </h2>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-zinc-300 to-transparent dark:from-zinc-800 mb-4 transition-colors"></div>
          <p className="font-mono text-xs mb-2 text-zinc-500 dark:text-zinc-500">
            // SYSTEM_COMPOSITION_V1.0
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              {/* Row Label */}
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-6">
                <span className="text-emerald-600 dark:text-emerald-500 font-mono text-xs tracking-widest bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 w-fit">
                  {category.id}
                </span>
                <h3 className="text-xl font-bold font-1boldonse tracking-wide text-zinc-800 dark:text-zinc-200 transition-colors">
                  {category.name}
                </h3>
                <span className="text-xs font-mono uppercase hidden md:block text-zinc-500 dark:text-zinc-600">
                  — {category.description}
                </span>
              </div>

              {/* THE ELEMENTAL ROW */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="
                      group relative aspect-square 
                      backdrop-blur-sm transition-all duration-300
                      flex flex-col justify-between p-4 cursor-default
                      
                      /* Light Mode */
                      bg-white border border-zinc-200 
                      hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-lg
                      
                      /* Dark Mode */
                      dark:bg-zinc-900/40 dark:border-zinc-800/60
                      dark:hover:bg-zinc-800/80 dark:hover:border-zinc-600 dark:hover:shadow-none
                    "
                  >
                    {/* Top Row: Number & Code */}
                    <div className="flex justify-between items-start opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                        {tech.id}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-600">
                        {tech.symbol}
                      </span>
                    </div>

                    {/* Middle: The Icon */}
                    <div className="self-center transform group-hover:scale-110 transition-transform duration-300">
                      <tech.icon
                        className={`text-4xl ${tech.color} opacity-40 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-500`}
                      />
                    </div>

                    {/* Bottom: Name */}
                    <div>
                      <span className="block text-xs font-bold transition-colors tracking-wide text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white">
                        {tech.name}
                      </span>
                      {/* Fake 'Mass' Number */}
                      <span className="block text-[8px] font-mono mt-1 text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-700 dark:group-hover:text-zinc-500">
                        12.011
                      </span>
                    </div>

                    {/* Corner Accents (Hover) */}
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-zinc-300 dark:group-hover:border-white/30 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-zinc-300 dark:group-hover:border-white/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
