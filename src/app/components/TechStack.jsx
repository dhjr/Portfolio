// "use client";

// // Using the stable 'fa6' and 'si' imports
// import {
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaGitAlt,
//   FaDocker,
//   FaAws,
//   FaJava,
//   FaRust,
// } from "react-icons/fa6";
// import {
//   SiNextdotjs,
//   SiTailwindcss,
//   SiTypescript,
//   SiPostgresql,
//   SiMongodb,
//   SiFramer,
//   SiGraphql,
//   SiFirebase,
// } from "react-icons/si";

// // Split your skills into two logical groups
// const row1 = [
//   { name: "React", icon: FaReact, color: "#61DAFB" },
//   { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
//   { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
//   { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
//   { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
//   { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
// ];

// const row2 = [
//   { name: "Node.js", icon: FaNodeJs, color: "#339933" },
//   { name: "Python", icon: FaPython, color: "#3776AB" },
//   { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
//   { name: "AWS", icon: FaAws, color: "#FF9900" },
//   { name: "Docker", icon: FaDocker, color: "#2496ED" },
//   { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
//   { name: "Git", icon: FaGitAlt, color: "#F05032" },
// ];

// export default function TechStack() {
//   return (
//     <section className="py-24 bg-stone-950 overflow-hidden relative flex flex-col gap-10">
//       {/* HEADER */}
//       <div className="text-center mb-8">
//         <h2 className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
//           // TECHNOLOGIES_DETECTED
//         </h2>
//       </div>

//       {/* GRADIENT MASKS (Fades the edges) */}
//       <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-stone-950 to-transparent pointer-events-none"></div>
//       <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-stone-950 to-transparent pointer-events-none"></div>

//       {/* --- ROW 1: SCROLL LEFT --- */}
//       <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
//         {/* We duplicate the array 4 times to ensure smooth infinite loop on wide screens */}
//         {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
//           <SkillItem key={`row1-${index}`} skill={skill} />
//         ))}
//       </div>

//       {/* --- ROW 2: SCROLL RIGHT --- */}
//       <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
//         {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
//           <SkillItem key={`row2-${index}`} skill={skill} />
//         ))}
//       </div>

//       {/* GLOBAL STYLES FOR ANIMATION */}
//       <style jsx>{`
//         .animate-scroll-left {
//           animation: scrollLeft 30s linear infinite;
//         }
//         .animate-scroll-right {
//           animation: scrollRight 35s linear infinite;
//         }

//         @keyframes scrollLeft {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes scrollRight {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// // Sub-component to keep code clean
// function SkillItem({ skill }) {
//   return (
//     <div className="flex items-center gap-3 mx-8 group cursor-default">
//       {skill.icon ? (
//         <skill.icon
//           className="text-4xl text-zinc-800 group-hover:text-[var(--color)] transition-colors duration-500"
//           style={{ "--color": skill.color }}
//         />
//       ) : (
//         <span className="text-2xl text-zinc-800 font-mono">?</span>
//       )}
//       <span className="text-zinc-800 font-bold font-mono text-xl uppercase group-hover:text-zinc-300 transition-colors duration-500">
//         {skill.name}
//       </span>
//     </div>
//   );
// }

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

// DATA STRUCTURE: Separated by Rows
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
        color: "text-blue-400",
      },
      {
        id: "02",
        symbol: "Js",
        name: "JavaScript",
        icon: FaNodeJs,
        color: "text-yellow-400",
      },
      {
        id: "03",
        symbol: "Py",
        name: "Python",
        icon: FaPython,
        color: "text-blue-500",
      },
      {
        id: "04",
        symbol: "Ja",
        name: "Java",
        icon: FaJava,
        color: "text-red-400",
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
        color: "text-cyan-400",
      },
      {
        id: "07",
        symbol: "Nx",
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        id: "08",
        symbol: "Tw",
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-cyan-300",
      },
      {
        id: "09",
        symbol: "Fm",
        name: "Framer",
        icon: SiFramer,
        color: "text-pink-500",
      },
      {
        id: "10",
        symbol: "Rx",
        name: "Redux",
        icon: SiRedux,
        color: "text-purple-500",
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
        color: "text-orange-500",
      },
      {
        id: "12",
        symbol: "Do",
        name: "Docker",
        icon: FaDocker,
        color: "text-blue-500",
      },
      {
        id: "13",
        symbol: "Aw",
        name: "AWS",
        icon: FaAws,
        color: "text-yellow-500",
      },
      {
        id: "14",
        symbol: "Fi",
        name: "Figma",
        icon: FaFigma,
        color: "text-purple-400",
      },
      {
        id: "15",
        symbol: "Ve",
        name: "Vercel",
        icon: SiVercel,
        color: "text-white",
      },
    ],
  },
];

export default function TechElements() {
  return (
    <section className="py-24 px-4 bg-stone-950 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Header */}
        <div className="mb-20 flex items-end gap-6 border-b border-zinc-800 pb-6">
          <h2 className="text-5xl font-bold text-white font-1boldonse tracking-tight">
            Stack<span className="text-emerald-500">.</span>
          </h2>
          <div className="hidden md:block h-px flex-1 bg-linear-to-r from-zinc-800 to-transparent mb-4"></div>
          <p className="text-zinc-500 font-mono text-xs mb-2">
            // SYSTEM_COMPOSITION_V1.0
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              {/* Row Label (The 'Series' Header) */}
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-6">
                <span className="text-emerald-500 font-mono text-xs tracking-widest bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 w-fit">
                  {category.id}
                </span>
                <h3 className="text-xl font-bold text-zinc-200 font-1boldonse tracking-wide">
                  {category.name}
                </h3>
                <span className="text-zinc-600 text-xs font-mono uppercase hidden md:block">
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
                      bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60
                      hover:bg-zinc-800/80 hover:border-zinc-600
                      transition-all duration-300
                      flex flex-col justify-between p-4 cursor-default
                    "
                  >
                    {/* Top Row: Number & Code */}
                    <div className="flex justify-between items-start opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono text-zinc-500">
                        {tech.id}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-zinc-600">
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
                      <span className="block text-xs font-bold text-zinc-400 group-hover:text-white transition-colors tracking-wide">
                        {tech.name}
                      </span>
                      {/* Fake 'Mass' Number for techy feel */}
                      <span className="block text-[8px] text-zinc-700 group-hover:text-zinc-500 font-mono mt-1">
                        12.011
                      </span>
                    </div>

                    {/* Corner Accents (Only visible on hover) */}
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-white/30 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-white/30 transition-colors"></div>
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
