// import { Github } from "lucide-react";

// export default function Card({ heading, description, tags, ghLink }) {
//   return (
//     <div
//       className="
//         w-80  m-2 p-4 rounded-xl relative bg-transparent backdrop-blur-sm"
//       style={{
//         boxShadow: "4px 4px 8px rgba(209, 130, 246, 0.2)",
//       }}
//     >
//       <h1 className="text-3xl font-1newamsterdam m-2">{heading}</h1>
//       <p className="font-1spaceGrotesk p-2 bg-zinc-700/20 rounded-2xl">
//         {description}
//       </p>

//       <div className="flex flex-wrap gap-1 my-4">
//         {tags &&
//           tags.map((tag, idx) => (
//             <p
//               key={idx}
//               className="text-sm font-1spaceGrotesk
//                bg-radial to-zinc-900 from-white/10 hover:border-zinc-200 transition-colors duration-300 p-1 px-2 border-2 border-neutral-700 shadow-xs shadow-black rounded-xl"
//             >
//               {tag}
//             </p>
//           ))}
//       </div>
//       <a
//         href="https://github.com"
//         target="__blank"
//         className="w-full flex justify-center items-center"
//       >
//         <button className="border rounded-xl border-gray-700 p-1 my-2 hover:bg-gray-500 transition-colors duration-150">
//           <Github />
//         </button>
//       </a>
//     </div>
//   );
// }

"use client";

import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  id = "01",
  heading,
  description,
  tags,
  ghLink,
  demoLink,
  image, // <--- New Prop for the screenshot path (e.g., "/projects/finance.png")
}) {
  return (
    // Added 'flex flex-col h-full' to ensure the card stretches and aligns buttons at the bottom
    <div className="group relative w-full bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      {/* 1. SCREENSHOT SECTION (Only renders if an image prop is provided) */}
      {image && (
        // h-52 sets the fixed height for the image area. overflow-hidden contains the zoom effect.
        <div className="relative w-full h-52 border-b border-zinc-800 bg-zinc-950 overflow-hidden">
          <Image
            src={image}
            alt={`${heading} Screenshot`}
            fill
            // object-cover: ensures image fills the space without stretching
            // grayscale group-hover:grayscale-0: The B&W to Color effect
            // group-hover:scale-105: Subtle zoom on hover
            className="object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
          {/* A subtle dark tint overlay that fades out on hover, making text pop more */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
        </div>
      )}

      {/* 2. CONTENT SECTION */}
      {/* flex-grow ensures this section fills remaining space */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            {/* Project ID */}
            <p className="text-[10px] font-mono text-emerald-500 tracking-widest mb-1 uppercase">
              // Project_{id}
            </p>
            {/* Heading */}
            <h3 className="text-xl font-1spaceGrotesk text-white font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
              {heading}
            </h3>
          </div>
          {/* Arrow Icon */}
          <ArrowUpRight
            className="text-zinc-600 group-hover:text-emerald-400 transition-colors duration-300 flex-shrink-0"
            size={20}
          />
        </div>

        {/* Description */}
        {/* flex-grow pushes the tags and buttons to the bottom */}
        <p className="font-1spaceGrotesk text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Divider Line */}
        <div className="w-full h-px bg-zinc-800 my-4 group-hover:bg-emerald-500/30 transition-colors"></div>

        {/* Footer Section (Tags + Buttons) */}
        <div className="flex flex-col gap-4 mt-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags &&
              tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono text-zinc-400 bg-zinc-800/50 rounded border border-zinc-700/50"
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-2">
            {/* Source Button (Gray) */}
            <Link
              href={ghLink || "#"}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-white/20 text-zinc-300 hover:text-white transition-all text-sm font-1spaceGrotesk group/btn"
            >
              <Github
                size={16}
                className="group-hover/btn:scale-110 transition-transform"
              />
              <span>Source</span>
            </Link>

            {/* Demo Button (Emerald - Only shows if link exists) */}
            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/50 text-emerald-400 transition-all text-sm font-1spaceGrotesk group/btn"
              >
                <ExternalLink
                  size={16}
                  className="group-hover/btn:scale-110 transition-transform"
                />
                <span>Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
