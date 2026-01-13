"use client";

import { Github, ExternalLink, FolderGit, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/customComponents/SectionHeader";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';




const ProjectCard = ({ project }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Normalize images: accept single `image` or `images` array
  const images = project.images || (project.image ? [project.image] : []);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col lg:flex-row gap-0 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-emerald-900/10"
    >
      {/* GLOW EFFECT LAYER */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.04), transparent 40%)`,
          filter: 'blur(20px)',
        }}
      />
      
      {/* BORDER GLOW */}
       <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
          maskImage: 'linear-gradient(black, black), content-box',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
             padding: '1px'
        }}
      />

      {/* STATUS BANNER */}
      {project.status && (
        <div className={`absolute top-6 -right-14 z-30 w-52 transform rotate-45 text-center py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm ${
          project.status === 'Completed' 
            ? 'bg-yellow-400 text-yellow-950' 
            : 'bg-emerald-500 text-white'
        }`}>
          {project.status}
        </div>
      )}

      {/* IMAGE THUMBNAIL - Full Bleed with Swiper */}
      <div className="relative z-10 w-full lg:w-[450px] aspect-video shrink-0 bg-zinc-100 dark:bg-zinc-800/50 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 group/image overflow-hidden">
        {images.length > 0 ? (
          <>
            <Swiper
              modules={[Pagination, Navigation, Autoplay, EffectFade]}
              effect={'fade'}
              spaceBetween={0}
              slidesPerView={1}
              loop={images.length > 1}
              allowTouchMove={images.length > 1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                stopOnLastSlide: images.length === 1,
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: `.swiper-button-next-${project.id}`,
                prevEl: `.swiper-button-prev-${project.id}`,
              }}
              className="w-full h-full"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx} className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`${project.heading} - Image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                    priority={idx === 0}
                  />
                   {/* Overlay inside slide to protect image from interaction/download */}
                   <div className="absolute inset-0 z-10 w-full h-full bg-transparent" onContextMenu={(e) => e.preventDefault()} />
                </SwiperSlide>
              ))}
              
              {/* Custom Navigation Buttons (Visible on Hover) */}
              {images.length > 1 && (
                <>
                   <div className={`swiper-button-prev-${project.id} select-none absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800 text-white z-20 cursor-pointer opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center hover:bg-zinc-700`}>
                     <ChevronLeft size={16} />
                   </div>
                   <div className={`swiper-button-next-${project.id} select-none absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800 text-white z-20 cursor-pointer opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center hover:bg-zinc-700`}>
                     <ChevronRight size={16} />
                   </div>
                </>
              )}
            </Swiper>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <FolderGit
              strokeWidth={1.5}
              className="w-16 h-16 text-zinc-300 dark:text-zinc-700 group-hover:text-emerald-500 transition-colors duration-500"
            />
          </div>
        )}
      </div>

      {/* CONTENT SECTION */}
      <div className="relative z-10 flex-1 flex flex-col justify-between gap-6 p-6 lg:p-8">
        <div className="space-y-4 lg:pr-28">
          <h3 className="select-none text-2xl lg:text-3xl font-1bricolage font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.heading}
          </h3>
          <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-1spaceGrotesk text-sm lg:text-base">
            {project.description}
          </p>
        </div>

        {/* Footer: Tags & Action */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-mono font-medium px-3 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700/50 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.ghLink && project.ghLink !== "#" && (
              <a
                href={project.ghLink}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-colors"
                aria-label="Source Code"
              >
                <Github size={20} />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const buttonWrapperRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const toggleProjects = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => {
        buttonWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } else {
      setShowAll(true);
    }
  };

  const projectsData = [

    {
      id: "01",
      heading: "Mentora.ai",
      description:
        "A Chrome extension that fights 'tutorial hell' by assessing your knowledge in fixed intervals. Made as part of the Code-RECET 2.0 hackathon hosted by TinkerHub CET",
      tags: ["API Integration", "Express.js", "Chrome Extension"],
      ghLink: "https://github.com/dhjr/mentora.ai",
      demoLink: null,
      images: ["/projects/mentora1-v2.webp", "/projects/mentora2-v2.webp"],
      status: "Completed",
    },    {
      id: "02",
      heading: "Victoria Film Official Website",
      description:
        "Official website for Victoria(വിക്ടോറിയ) feature film. A KSFDC initiative and IEFFK winner movie",
      tags: ["Astro.js", "Swiper", "MUX API", "Tailwind"],
      ghLink: null,
      demoLink: "https://victoriafilm.in",
      image: "/projects/victoria1.webp",
      images: ["/projects/victoria1.webp", "/projects/victoria2.webp"],
      status: "Completed",
    },
    {
      id: "03",
      heading: "Goblin Ledger",
      description:
        "Progressive Web App for calculating time required to obtain gems in Clash of Clans without any in-app-purchases.",
      tags: ["PWA", "SEO", "Javascript"],
      ghLink: "https://github.com/dhjr/goblin-ledger/",
      demoLink: "https://dhjr.github.io/goblin-ledger/",
      images: ["/projects/goblinLedger1.webp", "/projects/goblinLedger2.webp"],
      status: "Completed",
    },
    {
      id: "04",
      heading: "Service Dashboard",
      description:
        "A full-stack service provider application with features like user authentication, service listing and booking.",
      tags: ["Next.js", "Express.js", "PostgreSQL"],
      ghLink: "https://github.com/dhjr/         karan-app",
      demoLink: "https://pakkaran-app.vercel.app/",
      image: "/projects/serviceWorker.webp",
      status: "Completed",
    },

    {
      id: "05",
      heading: "TripSync",
      description:
        "A real-time collaborative travel planner enabling multi-user location sharing and live updates via WebSockets and OpenStreetMap integration.",
      tags: ["Next.js", "Socket.io", "Prisma ORM", "OpenStreetMap"],
      ghLink: "https://github.com/dhjr/groupMapper",
      demoLink: null,
      image: "/projects/tripSync.webp",
      status: "In Progress",
    },
    {
      id: "06",
      heading: "Rage Roll",
      description:
        "A physics-driven web game developed with Phaser.js. Built for the Tinkerhub RIT 'Useless Projects' hackathon, focusing on complex collision logic and browser-based rendering.",
      tags: ["Phaser.js", "JavaScript", "Game Development"],
      ghLink: "#",
      demoLink: "https://dhjr.github.io/Useless_project/",
      image: "/projects/rageRoll.webp",
      status: "Completed",
    },
    {
      id: "07",
      heading: "Little House London",
      description:
        "A freelance commercial project for a UK-based client. Delivered a responsive, SEO-optimized landing page with high Core Web Vitals scores to enhance business visibility.",
      tags: ["Astro.js", "Tailwind", "SEO","UI/UX"],
      ghLink: "#",
      demoLink: "https://littlehouselondon.netlify.app/",
      images: ["/projects/lhl.webp", "/projects/lhl.webp"],
      status: "Completed",
    },
    {
      id: "08",
      heading: "Quicksave",
      description:
        "A productivity-focused browser utility that streamlines workflow by allowing instant image downloads in multiple formats, bypassing standard conversion steps.",
      tags: ["Browser Ext", "JavaScript", "Local Storage"],
      ghLink: "https://github.com/dhjr/quicksave",
      demoLink: null,
      image: "/projects/quicksave.webp",
      status: "Completed",
    },
    {
      id: "09",
      heading: "Techfuse 2.0",
      description:
        "Led the development and deployment of the flagship event website for IEEE SPS SBC RIT, ensuring timely updates.",
      tags: ["Next.js", "Vercel", "IEEE"],
      ghLink: "#",
      demoLink: "https://www.techfuse20.ieeesbrit.com",
      image: "/projects/techfuse.webp",
      status: "Completed",
    },
    {
      id: "10",
      heading: "Roboignite",
      description:
        "Developed the Roboignite official website hosted by IEEE RAS SBC RIT. Integrated 3D elements using Three.js to provide an immersive user experience.",
      tags: ["Next.js", "Typescript", "Three.js"],
      ghLink: "#",
      demoLink: "https://www.roboignite.ieeesbrit.com",
      image: "/projects/roboignite.webp",
      status: "Completed",
    },
    {
      id: "11",
      heading: "IEEE ReX 5.0",
      description:
        "Contributed in the development of IEEE ReX 5.0 official website.",
      tags: ["HTML", "CSS", "Javascript"],
      ghLink: "#",
      demoLink: "https://rex.ieeesbrit.com/",
      image: "/projects/rex.webp",
      status: "Completed",
    },
    {
      id: "12",
      heading: "RITU '25 | Official Tech-Fest Portal",
      description:
        "Contributed in development of RITU College Techfest official website.",
      tags: ["Next.js", "Tailwind", "Swiper.js"],
      ghLink: "#",
      demoLink: "https://www.ritu25.live/",
      image: "/projects/ritu.webp",
      status: "Completed",
    },
  ];

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 5);

  return (
    <section
      id="projects"
      className="py-12 md:py-20 px-4 relative bg-transparent transition-colors duration-300"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <Header name="Projects" />
        </div>

        <div className="flex flex-col w-full gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* --- VIEW MORE BUTTON --- */}
        <div className="mt-16 flex justify-center" ref={buttonWrapperRef}>
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
