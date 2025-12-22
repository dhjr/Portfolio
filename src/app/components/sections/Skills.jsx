"use client";

import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaUbuntu, FaHtml5, FaCss3Alt,
} from "react-icons/fa6";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiVercel,
  SiAstro, SiExpress, SiMysql, SiPostman, SiJavascript,
} from "react-icons/si";

const categories = [
  {
    name: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
    ],
  },
  {
    name: "Frameworks",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Astro", icon: SiAstro, color: "text-orange-500" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-zinc-500" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    name: "Database & Cloud",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
    ],
  },
  {
    name: "Workflow",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Ubuntu", icon: FaUbuntu, color: "text-orange-700" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-5xl font-1bricolage font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Stack<span className="text-emerald-500">.</span>
          </h2>
          <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800/50"></div>
        </div>

        {/* 4-Column Layout for Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col">
              {/* Category Label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                  {category.name}
                </h3>
              </div>

              {/* Internal Grid for each category column */}
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="group relative flex flex-col items-center justify-center gap-2 p-3 
                               rounded-2xl transition-all duration-300
                               bg-white/40 dark:bg-white/[0.02] 
                               border border-zinc-200/50 dark:border-white/[0.05]
                               backdrop-blur-md shadow-sm
                               hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/30
                               hover:-translate-y-1"
                  >
                    {/* Glassmorphic Icon Container */}
                    <div className="p-2 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/40 transition-colors group-hover:bg-white dark:group-hover:bg-zinc-700/30">
                      <tech.icon className={`text-xl ${tech.color} transition-all duration-500`} />
                    </div>

                    <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors text-center">
                      {tech.name}
                    </span>
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