"use client";

import ProjectCard from "@/components/customComponents/ProjectCard";
import Header from "@/components/customComponents/SectionHeader";

export default function Projects() {
  const projectsData = [
    {
      id: "01",
      heading: "Mentora",
      description:
        "A Chrome extension that fights 'tutorial hell' by assessing your knowledge in real-time.",
      tags: ["JavaScript", "Express.js", "Chrome API"],
      ghLink: "#",
      demoLink: "#",
      image: "/baja.webp",
    },
    {
      id: "02",
      heading: "Financial Planner",
      description:
        "Comprehensive dashboard for tracking personal expenses, visualizing monthly spending habits.",
      tags: ["Next.js", "Tailwind", "Supabase"],
      ghLink: "#",
      demoLink: "#",
      image: "/baja.webp",
    },
    {
      id: "03",
      heading: "IEEE Event Portal",
      description:
        "Official event management site for the IEEE student branch with dynamic galleries.",
      tags: ["React", "GSAP", "Node.js"],
      ghLink: "#",
      demoLink: null,
      image: "/baja.webp",
    },
  ];

  return (
    <section
      id="projects"
      // EXPLICIT COLORS:
      // Light: Zinc-50 (Paper-like)
      // Dark: Zinc-950 (Deep Space)
      className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      {/* BACKGROUND: Clean and plain as requested */}

      {/* VIGNETTE: Adds subtle depth to the corners */}
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_100%)] pointer-events-none transition-colors duration-300"></div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
        <div className="mb-16">
          <Header name="Selected_Works" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full auto-rows-fr">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
