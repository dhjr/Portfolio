// import ProjectCard from "../components/card";
// import Header from "@/components/sectionHeader";

// export default function projects() {
//   return (
//     <>
//       <div className="relative min-h-screen bg-stone-950 overflow-hidden">
//         {/* BACKGROUND LAYER */}
//         <div className="absolute inset-0 z-0">
//           {/* The Grid Pattern */}
//           <div
//             className="absolute inset-0 opacity-[0.15]"
//             style={{
//               backgroundImage: 'url("/svgRepeat.svg")',
//               backgroundSize: "40px 40px", // Adjust size of squares
//             }}
//           ></div>

//           {/* THE MAGIC FIX: A Radial Mask Overlay */}
//           {/* This creates a fade that hides the grid at the edges */}
//           <div className="absolute inset-0 bg-stone-950 [mask-image:radial-gradient(transparent_0%,black_100%)]"></div>

//           {/* Optional: A central glow to highlight the cards */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
//         </div>

//         {/* CONTENT LAYER */}
//         <div className="relative z-10 container mx-auto px-4 py-20">
//           <Header name="Projects" />
//           <div className="flex flex-row justify-evenly ">
//             <ProjectCard
//               heading="Mentora"
//               description="Mentora.ai is a web-based extension used to assess your knowledge in realtime, while watching youtube videos.Avoid tutorial hell."
//               tags={[
//                 "html",
//                 "css",
//                 "javascript",
//                 "express.js",
//                 "chrome extension",
//               ]}
//             />
//             <ProjectCard
//               heading="Mentora"
//               description="Mentora.ai is a web-based extension used to assess your knowledge in realtime, while watching youtube videos.Avoid tutorial hell."
//               tags={[
//                 "html",
//                 "css",
//                 "javascript",
//                 "express.js",
//                 "chrome extension",
//               ]}
//             />

//             <ProjectCard
//               heading="Mentora"
//               description="Mentora.ai is a web-based extension used to assess your knowledge in realtime, while watching youtube videos.Avoid tutorial hell."
//               tags={[
//                 "html",
//                 "css",
//                 "javascript",
//                 "express.js",
//                 "chrome extension",
//               ]}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import ProjectCard from "@/components/card"; // Make sure this path is correct
import Header from "@/components/sectionHeader";

export default function Projects() {
  // 1. PROJECT DATA (Edit this to change your content)
  const projectsData = [
    {
      id: "01",
      heading: "Mentora",
      description:
        "A Chrome extension that fights 'tutorial hell' by assessing your knowledge in real-time while you watch YouTube coding tutorials.",
      tags: ["JavaScript", "Express.js", "Chrome API"],
      ghLink: "https://github.com/yourusername/mentora",
      demoLink: "https://mentora.ai",
      image: "/projects/mentora.png", // Ensure this image exists in public/projects/
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
      demoLink: null, // Example of a project with no live demo
      image: "/projects/ieee.png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-zinc-950 overflow-hidden"
    >
      {/* 2. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* The Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'url("/svgRepeat.svg")',
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Radial Fade (The Vignette) */}
        {/* Ensures the grid fades out at the edges into solid dark color */}
        <div className="absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] pointer-events-none"></div>

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
        {/* Section Header */}
        <div className="mb-16">
          <Header name="Selected_Works" />
        </div>

        {/* 4. THE GRID (Responsive Layout) */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
