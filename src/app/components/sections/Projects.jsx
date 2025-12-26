"use client";

import { Github, ExternalLink, FolderGit } from "lucide-react";
import Image from "next/image";
import Header from "@/components/customComponents/SectionHeader";
import { useState, useRef } from "react";

export default function Projects() {
  const buttonWrapperRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const toggleProjects = () => {
    if (showAll) {
      // We are collapsing (showing less)
      setShowAll(false);
      // Wait for re-render then scroll
      setTimeout(() => {
        buttonWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } else {
      // We are expanding
      setShowAll(true);
    }
  };

  const projectsData = [
        {
      id: "01",
      heading: "Victoria Film Official Website",
      description:
        "Portfolio site for Victoria(വിക്ടോറിയ). A KSFDC initiative and IEFFK winner feature film",
      tags: ["Astro.js", "Swiper","MUX API","Tailwind"],
      ghLink: null,
      demoLink: "https://victoriafilm.in",
      image: "/projects/victoria.png",
    },
    {
      id: "02",
      heading: "Mentora.ai",
      description:
        "A Chrome extension that fights 'tutorial hell' by assessing your knowledge in real-time.Made as part of the Code-RECET 2.0 Hackathon Hosted by TinkerHub CET",
      tags: ["Youtube Transcript", "Express.js", "Chrome Extension"],
      ghLink: "https://github.com/dhjr/mentora.ai",
      demoLink: null,
      image: null,
    },
    {
      id: "03",
      heading: "Goblin Ledger",
      description:
        "Progressive Web App for calculating time required to obtain gems in Clash of Clans without any in-app-purchases.",
      tags: ["PWA", "SEO", "Javascript"],
      ghLink: "https://github.com/dhjr/goblin-ledger/",
      demoLink: "https://dhjr.github.io/goblin-ledger/",
      image: "/projects/coc2.png",
    },
    {
      id: "04",
      heading: "Service Dashboard",
      description:
        "A full-stack service provider application with features like user authentication, service listing, booking.",
      tags: ["Next.js", "Express.js", "PostgreSQL"],
      ghLink: "https://github.com/dhjr/pakkaran-app",
      demoLink: "https://pakkaran-app.vercel.app/",
      image: "/projects/serviceWorker.png",
    },
  
    {
      id: "05",
      heading: "TripSync",
      description:
        "Collaborative travel planning application allowing groups to coordinate itineraries in real-time.",
      tags: ["Next.js", "Socket.io","Prisma ORM", "OpenStreetMap"],
      ghLink: "https://github.com/dhjr/groupMapper",
      demoLink: null,
      image: null,
    },
  {
      id: "06",
      heading: "Rage Roll",
      description:
        "Physics-based browser game built with Phaser.js for the 'Useless Projects' hackathon hosted by Tinkerhub.",
      tags: ["Phaser.js", "JavaScript", "Game Dev"],
      ghLink: "#",
      demoLink: "https://dhjr.github.io/Useless_project/",
      image: "/projects/rageRoll.png",
    },
    {
      id: "07",
      heading: "Little House London",
      description:
        "Website designed for a UK based client, who runs a miniature model business.Responsive and elegant design with focus on SEO and performance.",
      tags: ["Astro.js", "Tailwind", "Freelance"],
      ghLink: "#",
      demoLink: "https://littlehouselondon.netlify.app/",
      image: "/projects/lhl.png",
    },
    {
      id: "08",
      heading: "Quicksave",
      description:
        "A lightweight browser utility for saving and organizing snippets and links efficiently.",
      tags: ["Browser Ext", "JavaScript", "Local Storage"],
      ghLink: "https://github.com/dhjr/quicksave",
      demoLink: null,
      image: "/projects/quicksave.png",
    },
    {
      id: "09",
      heading: "Techfuse 2.0",
      description:
        "Official website for IEEE SPS SBC RIT flagship event. Led the team on timely updation and deployment.",
      tags: ["Next.js", "Vercel", "Webmaster"],
      ghLink: "#",
      demoLink: "https://www.techfuse20.ieeesbrit.com",
      image: "/projects/techfuse.png",
    },
    {
      id: "10",
      heading: "Roboignite",
      description:
        "Lead developer of official website for IEEE RAS SBC RIT in collaboration with IEEE RAS Kerala Chapter.",
      tags: ["Next.js", "Typescript", "Three.js"],
      ghLink: "#",
      demoLink: "https://www.roboignite.ieeesbrit.com",
      image: "/projects/roboignite.png",
    },
    {
      id: "11",
      heading: "IEEE ReX 5.0",
      description:
        "Contributed in the development of IEEE ReX 5.0 official website.",
      tags: ["HTML", "CSS", "Javascript"],
      ghLink: "#",
      demoLink: "https://rex.ieeesbrit.com/",
      image: "/projects/rex.png",
    },
    {
      id: "12",
      heading: "RITU '25 | Official Tech-Fest Portal",
      description:
        "Contributed in development of RITU College Techfest official website.",
      tags: ["Next.js", "Tailwind", "Swiper.js"],
      ghLink: "#",
      demoLink: "https://www.ritu25.live/",
      image: "/projects/ritu.png",
    },
  ];

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 5);

  return (
    <section
      id="projects"
      // EXPLICIT COLORS:
      // Light: Zinc-50 (Paper-like)
      // Dark: Zinc-950 (Deep Space)
      className="py-12 md:py-20 relative bg-transparent transition-colors duration-300 overflow-hidden"
    >


      
      {/* CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <Header name="Projects" />
        </div>


        <div className="flex flex-col w-full gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col lg:flex-row gap-8 lg:items-center p-6 lg:p-8 rounded-3xl bg-zinc-50/95 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all duration-300 shadow-md hover:shadow-lg hover:border-emerald-500/30 hover:-translate-y-1"
            >
              {/* IMAGE THUMBNAIL */}
              <div className="relative w-full lg:w-md aspect-video rounded-2xl overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-emerald-500/30 bg-zinc-100 dark:bg-zinc-800/50">
                {project.image ? (
                  <>
                  <Image 
                    src={project.image} 
                    alt={project.heading}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 group-hover:scale-105 transition-transform duration-700">
                    <FolderGit 
                      strokeWidth={1.5} 
                      className="w-16 h-16 text-zinc-300 dark:text-zinc-700 group-hover:text-emerald-500/50 transition-colors duration-500" 
                    />
                  </div>
                )}
              </div>

              {/* CONTENT SECTION */}
              <div className="flex-1 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl lg:text-4xl font-1bricolage font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.heading}
                    </h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-1spaceGrotesk text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tags & Action */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover:border-emerald-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 shrink-0">
         {/* Logic: Only show if ghLink exists AND is not just a hash/placeholder */}
{project.ghLink && project.ghLink !== "#" && (
    <a
      href={project.ghLink}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all duration-300 group/btn"
    >
      <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
      <span>Source</span>
    </a>
)}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 group/btn"
                      >
                        <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- VIEW MORE BUTTON --- */}
        <div 
            className="mt-16 flex justify-center"
            ref={buttonWrapperRef}
        >
            <button
                onClick={toggleProjects}
                className="
                    px-8 py-3 rounded-full 
                    bg-white dark:bg-zinc-900 
                    border border-zinc-300 dark:border-zinc-700 
                    text-zinc-700 dark:text-zinc-300 
                    font-bold uppercase tracking-wider text-sm
                    hover:bg-emerald-500 hover:text-white hover:border-emerald-500
                    dark:hover:bg-emerald-600 dark:hover:text-white dark:hover:border-emerald-600
                    transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1
                "
            >
                {showAll ? "Show Less" : "View More"}
            </button>
        </div>
      </div>

    </section>
  );
}
