import Card from "../components/card";
import Header from "@/components/sectionHeader";

export default function projects() {
  return (
    <>
      <div className="relative min-h-screen bg-stone-950 overflow-hidden">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          {/* The Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'url("/svgRepeat.svg")',
              backgroundSize: "40px 40px", // Adjust size of squares
            }}
          ></div>

          {/* THE MAGIC FIX: A Radial Mask Overlay */}
          {/* This creates a fade that hides the grid at the edges */}
          <div className="absolute inset-0 bg-stone-950 [mask-image:radial-gradient(transparent_0%,black_100%)]"></div>

          {/* Optional: A central glow to highlight the cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <Header name="Projects" />
          <div className="flex flex-row justify-evenly ">
            <Card
              heading="Mentora"
              description="Mentora.ai is a web-based extension used to assess your knowledge in realtime, while watching youtube videos.Avoid tutorial hell."
              tags={[
                "html",
                "css",
                "javascript",
                "express.js",
                "chrome extension",
              ]}
            />
            <Card
              heading="Mentora"
              description="Mentora.ai is a web-based extension used to assess your knowledge in realtime, while watching youtube videos.Avoid tutorial hell."
              tags={[
                "html",
                "css",
                "javascript",
                "express.js",
                "chrome extension",
              ]}
            />

            <Card
              heading="Mentora"
              description="Mentora.ai is a web-based extension used to assess your knowledge in realtime, while watching youtube videos.Avoid tutorial hell."
              tags={[
                "html",
                "css",
                "javascript",
                "express.js",
                "chrome extension",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
