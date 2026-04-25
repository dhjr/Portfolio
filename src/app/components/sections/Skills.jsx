"use client";

import {
  IconReact,
  IconNodeJs,
  IconPython,
  IconGit,
  IconUbuntu,
  IconHtml5,
  IconCss3,
  IconGithub,
  IconJava,
  IconDocker,
  IconNextdotjs,
  IconTailwindcss,
  IconTypescript,
  IconPostgresql,
  IconVercel,
  IconAstro,
  IconExpress,
  IconMysql,
  IconPostman,
  IconJavascript,
  IconMongodb,
  IconFastapi,
  IconC,
} from "@/components/customComponents/TechIcons";
import Header from "@/components/customComponents/SectionHeader";

const categories = [
  {
    name: "Languages",
    items: [
      { name: "TypeScript", icon: IconTypescript, color: "text-blue-500" },
      { name: "JavaScript", icon: IconJavascript, color: "text-yellow-500" },
      { name: "Python", icon: IconPython, color: "text-blue-400" },
      { name: "Java", icon: IconJava, color: "text-red-500" },
      { name: "C", icon: IconC, color: "text-blue-600" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "HTML5", icon: IconHtml5, color: "text-orange-600" },
      { name: "CSS3", icon: IconCss3, color: "text-blue-500" },
      {
        name: "Next.js",
        icon: IconNextdotjs,
        color: "text-black dark:text-white",
      },
      { name: "React", icon: IconReact, color: "text-cyan-400" },
      { name: "Astro", icon: IconAstro, color: "text-orange-500" },
      { name: "Tailwind", icon: IconTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: IconNodeJs, color: "text-green-500" },
      { name: "Express", icon: IconExpress, color: "text-zinc-600" },
      { name: "PostgreSQL", icon: IconPostgresql, color: "text-blue-400" },
      { name: "FastAPI", icon: IconFastapi, color: "text-emerald-500" },
      { name: "MySQL", icon: IconMysql, color: "text-blue-500" },
      { name: "MongoDB", icon: IconMongodb, color: "text-green-500" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: IconGit, color: "text-orange-600" },
      { name: "GitHub", icon: IconGithub, color: "text-black dark:text-white" },
      { name: "Postman", icon: IconPostman, color: "text-orange-500" },
      { name: "Docker", icon: IconDocker, color: "text-blue-500" },
      { name: "Vercel", icon: IconVercel, color: "text-black dark:text-white" },
      { name: "Ubuntu", icon: IconUbuntu, color: "text-orange-700" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="py-16 px-4 relative transition-colors duration-300 bg-transparent"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <Header name="Stack" />

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col">
              {/* Category Label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                <h3 className="text-sm font-1bricolage uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
                  {category.name}
                </h3>
              </div>

              {/* Internal Grid of SQUARES */}
              <div className="grid grid-cols-3 sm:grid-cols-2 gap-3 sm:gap-5">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative aspect-square flex flex-col items-center justify-center gap-2 sm:gap-3 p-2 sm:p-4 
                               rounded-xl sm:rounded-2xl transition-all duration-300
                               bg-white/90 dark:bg-zinc-900/70 
                               
                               shadow-md shadow-black/5
                               hover:shadow-lg hover:border-emerald-500/30 dark:hover:border-emerald-500/30
                               hover:-translate-y-1"
                  >
                    {/* Glassmorphic Icon Container */}
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-zinc-100/50 dark:bg-zinc-800/40 transition-colors group-hover:bg-white dark:group-hover:bg-zinc-700/30">
                      <tech.icon
                        className={`text-4xl sm:text-5xl ${tech.color} transition-all duration-500`}
                      />
                    </div>

                    <span className="text-sm font-1spaceGrotesk font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors text-center px-1 leading-tight">
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
