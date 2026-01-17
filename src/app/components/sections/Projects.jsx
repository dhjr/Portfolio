import Header from "@/components/customComponents/SectionHeader";
import ProjectCard from "@/components/customComponents/ProjectCard";
import { useState, useRef } from "react";

export default function Projects() {
  const buttonWrapperRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const toggleProjects = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => {
        buttonWrapperRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } else {
      setShowAll(true);
    }
  };

  const projectsData = [
    {
      id: "00",
      heading: "LivePoll",
      description:
        "A real-time polling application built with Next.js 16 & Socket.io. Users can create poll rooms, share codes for instant joining, and visualize live voting results via dynamic charts. Features IP-based voting logic and persisted data patterns.",
      tags: ["Next.js", "Socket.io", "MongoDB", "Tailwind v4"],
      ghLink: "#",
      demoLink: null,
      images: [
        "/projects/livePoll1.webp",
        "/projects/livePoll2.webp",
        "/projects/livePoll3.webp",
      ],
      status: "In Progress",
    },
    {
      id: "01",
      heading: "Mentora.ai",
      description:
        "A hybrid Chrome Extension transforming passive watching into active learning via Google Gemini. Features auto-pause quizzes with smart context, proactive prefetching, and a secure Node.js backend.",
      tags: ["Chrome Extension", "Gemini API", "Node.js", "Express"],
      ghLink: "https://github.com/dhjr/mentora.ai",
      demoLink: null,
      images: ["/projects/mentora1-v2.webp", "/projects/mentora2-v2.webp"],
      status: "Completed",
    },
    {
      id: "02",
      heading: "Victoria Film Official Website",
      description:
        "Official high-performance site for the award-winning film 'Victoria'. Built with Astro and Tailwind v4, featuring immersive vertical scrolling via Swiper.js and seamless video streaming with Mux Player.",
      tags: ["Astro", "Tailwind v4", "Motion", "Swiper.js", "Mux Player"],
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
        "A lightweight PWA for Clash of Clans players. Features complex time-calculation logic for gem acquisition, custom game-specific assets, and offline functionality via Service Workers.",
      tags: ["PWA", "JavaScript", "Service Worker", "HTML/CSS"],
      ghLink: "https://github.com/dhjr/goblin-ledger/",
      demoLink: "https://dhjr.github.io/goblin-ledger/",
      images: ["/projects/goblinLedger1.webp", "/projects/goblinLedger2.webp"],
      status: "Completed",
    },
    {
      id: "04",
      heading: "Pakkaran",
      description:
        "A full-stack service provider application built with Next.js and a custom Express.js backend. Features secure authentication and a robust PostgreSQL database",
      tags: ["Next.js", "PostgreSQL", "Express.js", "Tailwind v4"],
      ghLink: "https://github.com/dhjr/pakkaran-app",
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
        "A physics-driven web game developed with Phaser.js. Built for the Tinkerhub RIT 'Useless Projects' hackathon, focusing on collision logic and browser-based rendering.",
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
      tags: ["Astro.js", "Tailwind", "SEO", "UI/UX"],
      ghLink: "#",
      demoLink: "https://littlehouselondon.netlify.app/",
      image: "/projects/lhl.webp",
      status: "Completed",
    },
    {
      id: "08",
      heading: "Quicksave",
      description:
        "A Manifest V3 Chrome Extension for instant image downloads. Features context-menu integration, on-the-fly format conversion (WebP, JPG, PNG) via Canvas API, and smart filename templating.",
      tags: ["Chrome Extension", "Manifest V3", "Service Worker", "Canvas API"],
      ghLink: "https://github.com/dhjr/quicksave",
      demoLink: null,
      image: "/projects/quicksave.webp",
      status: "Completed",
    },
    {
      id: "09",
      heading: "RITU'25 College Techfest Website",
      description:
        "Contributed in development of RITU College Techfest official website.",
      tags: ["Next.js", "Tailwind", "Swiper.js"],
      ghLink: "#",
      demoLink: "https://www.ritu25.live/",
      image: "/projects/ritu.webp",
      status: "Completed",
    },
    {
      id: "10",
      heading: "Techfuse 2.0 Event Website",
      description:
        "Led the development and deployment of the flagship event website for IEEE Signal Processing Society RIT, ensuring timely updates.",
      tags: ["Next.js", "Vercel", "IEEE"],
      ghLink: "#",
      demoLink: "https://www.techfuse20.ieeesbrit.com",
      image: "/projects/techfuse.webp",
      status: "Completed",
    },
    {
      id: "11",
      heading: "Roboignite Event Website",
      description:
        "Developed the Roboignite official website hosted by IEEE Robotics and Automation Society RIT. Integrated 3D elements using Three.js to provide an immersive user experience.",
      tags: ["Next.js", "Typescript", "Three.js"],
      ghLink: "#",
      demoLink: "https://www.roboignite.ieeesbrit.com",
      image: "/projects/roboignite.webp",
      status: "Completed",
    },

    {
      id: "12",
      heading: "IEEE ReX 5.0 Event Website",
      description:
        "Contributed in the development of IEEE ReX 5.0 official website.Hosted by IEEE Robotics and Automation Society RIT",
      tags: ["HTML", "CSS", "Javascript"],
      ghLink: "#",
      demoLink: "https://rex.ieeesbrit.com/",
      image: "/projects/rex.webp",
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
