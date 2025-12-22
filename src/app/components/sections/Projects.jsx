"use client";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Header from "@/components/customComponents/SectionHeader";

export default function Projects() {
  const projectsData = [
    {
      id: "01",
      heading: "Mentora.ai",
      description:
        "A Chrome extension that fights 'tutorial hell' by assessing your knowledge in real-time.",
      tags: ["JavaScript", "Express.js", "Chrome API"],
      ghLink: "https://github.com/dhjr/mentora.ai",
      demoLink: null,
      image: "/baja.webp",
    },
    {
      id: "02",
      heading: "COC Gem Calculator",
      description:
        "Top-ranked Clash of Clans tool with 500k+ visits. Calculates gem costs for time and resources.",
      tags: ["Next.js", "SEO", "Calculator"],
      ghLink: "https://github.com/dhjr/COC-gem-calculator",
      demoLink: "https://dhjr.github.io/COC-gem-calculator/",
      image: "/baja.webp",
    },
    {
      id: "03",
      heading: "Pakkaran",
      description:
        "A comprehensive project management tool designed for streamlined team collaboration.",
      tags: ["React", "Node.js", "MongoDB"],
      ghLink: "#",
      demoLink: "https://pakkaran.vercel.app/",
      image: "/baja.webp",
    },
    {
      id: "04",
      heading: "Rage Roll",
      description:
        "Physics-based browser game built with Phaser.js. Winner of 'Useless Projects' Hackathon.",
      tags: ["Phaser.js", "JavaScript", "Game Dev"],
      ghLink: "#",
      demoLink: "https://dhjr.github.io/Useless_project/",
      image: "/baja.webp",
    },
    {
      id: "05",
      heading: "TripSync",
      description:
        "Collaborative travel planning application allowing groups to coordinate itineraries in real-time.",
      tags: ["React", "Firebase", "Maps API"],
      ghLink: "https://github.com/dhjr/groupMapper",
      demoLink: null,
      image: "/baja.webp",
    },
    {
      id: "06",
      heading: "Victoria Film",
      description:
        "Portfolio and booking platform for a professional film production house.",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      ghLink: "#",
      demoLink: "https://victoriafilm.in",
      image: "/baja.webp",
    },
    {
      id: "07",
      heading: "Little House London",
      description:
        "Elegant hospitality website for a boutique London residence, featuring booking integrations.",
      tags: ["Web Design", "React", "UX/UI"],
      ghLink: "#",
      demoLink: "https://littlehouselondon.netlify.app/",
      image: "/baja.webp",
    },
    {
      id: "08",
      heading: "Quicksave",
      description:
        "A lightweight browser utility for saving and organizing snippets and links efficiently.",
      tags: ["Browser Ext", "JavaScript", "Local Storage"],
      ghLink: "https://github.com/dhjr/quicksave",
      demoLink: null,
      image: "/baja.webp",
    },
    {
      id: "09",
      heading: "Techfuse 2.0",
      description:
        "Official event platform for IEEE SB RIT's flagship tech fest. Managed registrations and updates.",
      tags: ["IEEE", "Webmaster", "Event Site"],
      ghLink: "#",
      demoLink: "https://www.techfuse20.ieeesbirit.com",
      image: "/baja.webp",
    },
    {
      id: "10",
      heading: "Roboignite",
      description:
        "Landing page and management system for the premier robotics workshop series.",
      tags: ["React", "Design", "Robotics"],
      ghLink: "#",
      demoLink: "https://www.roboignite.ieeesbrit.com",
      image: "/baja.webp",
    },
    {
      id: "11",
      heading: "IEEE ReX 5.0",
      description:
        "Dynamic website for the Regional Exhibition 5.0, showcasing innovative student projects.",
      tags: ["IEEE", "Showcase", "Interactive"],
      ghLink: "#",
      demoLink: "https://rex.ieeesbrit.com/",
      image: "/baja.webp",
    },
    {
      id: "12",
      heading: "RITU Fest",
      description:
        "Official website for RIT's main techno-cultural fest. Handled high traffic and event scheduling.",
      tags: ["Lead Dev", "College Fest", "Scalability"],
      ghLink: "#",
      demoLink: "https://www.ritu25.live/",
      image: "/baja.webp",
    },
  ];

  return (
    <section
      id="projects"
      // EXPLICIT COLORS:
      // Light: Zinc-50 (Paper-like)
      // Dark: Zinc-950 (Deep Space)
      className="py-16 md:py-24 relative bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >


      
      {/* CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
        <div className="mb-16">
          <Header name="Projects" />
        </div>

        <div className="flex flex-col w-full">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group py-12 border-b border-zinc-200 dark:border-zinc-800/50 last:border-0 flex flex-col lg:flex-row gap-8 lg:items-center transition-all duration-300 hover:bg-zinc-50/50 dark:hover:bg-white/2 px-4 -mx-4 rounded-3xl"
            >
              {/* IMAGE THUMBNAIL */}
              <div className="relative w-full lg:w-64 aspect-video rounded-xl overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800/50">
                <Image 
                  src={project.image} 
                  alt={project.heading}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* ID & Title */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-emerald-500 bg-emerald-100/50 dark:bg-emerald-500/10 px-2 py-1 rounded-md">
                    {project.id}
                  </span>
                  <h3 className="text-3xl font-1bricolage font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.heading}
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="flex flex-col gap-6 lg:items-end shrink-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  <a
                    href={project.ghLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Source</span>
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
