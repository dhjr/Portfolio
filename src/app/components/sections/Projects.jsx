"use client";

// UPDATED IMPORTS: Pointing to your new folder structure
import ProjectCard from "@/components/customComponents/ProjectCard";
import Header from "@/components/customComponents/SectionHeader";

export default function Projects() {
  // 1. PROJECT DATA
  const projectsData = [
    {
      id: "01",
      heading: "Mentora",
      description:
        "A Chrome extension that fights 'tutorial hell' by assessing your knowledge in real-time while you watch YouTube coding tutorials.",
      tags: ["JavaScript", "Express.js", "Chrome API"],
      ghLink: "https://github.com/yourusername/mentora",
      demoLink: "https://mentora.ai",
      image: "/projects/mentora.png", // Ensure image exists in public/projects/
    },
    {
      id: "02",
      heading: "Financial Planner",
      description:
        "Comprehensive dashboard for tracking personal expenses, visualizing monthly spending habits with Recharts, and setting budget goals.",
      tags: ["Next.js", "Tailwind", "Supabase"],
      ghLink: "https://github.com/yourusername/finance",
      demoLink: "https://finance-app.vercel.app",
      image: "/projects/finance.png",
    },
    {
      id: "03",
      heading: "IEEE Event Portal",
      description:
        "Official event management site for the IEEE student branch, featuring registration forms, timeline tracking, and dynamic galleries.",
      tags: ["React", "GSAP", "Node.js"],
      ghLink: "https://github.com/yourusername/ieee",
      demoLink: null,
      image: "/projects/ieee.png",
    },
  ];

  return (
    <section
      id="projects"
      // EXPLICIT THEME: Light (zinc-50) / Dark (zinc-950)
      className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      {/* 2. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        {/* 'invert' makes the white SVG black for Light Mode */}
        {/* 'dark:invert-0' keeps it white for Dark Mode */}
        <div
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15] invert dark:invert-0 transition-all duration-300"
          style={{
            backgroundImage: 'url("/svgRepeat.svg")',
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Radial Vignette Mask */}
        {/* Matches the background color so the fade is seamless */}
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] pointer-events-none transition-colors duration-300"></div>

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
        {/* Section Header */}
        <div className="mb-16">
          <Header name="Selected_Works" />
        </div>

        {/* 4. THE GRID */}
        {/* Responsive: 1 col (mobile) -> 2 cols (tablet) -> 3 cols (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full auto-rows-fr">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
