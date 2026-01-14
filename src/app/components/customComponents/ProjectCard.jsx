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
  image,
}) {
  return (
    <div
      className="
      group relative w-full flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2
      
      /* FIX: Use semantic variables from global.css */
      bg-card border border-border
      
      /* HOVER: Keep Emerald accent */
      hover:border-emerald-500/50
    "
    >
      {/* 1. SCREENSHOT SECTION */}
      {image && (
        <div className="relative w-full h-52 border-b border-border bg-muted overflow-hidden">
          <Image
            src={image}
            alt={`${heading} Screenshot`}
            fill
            className="object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
          {/* Overlay to dim image slightly until hover */}
          <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
        </div>
      )}

      {/* 2. CONTENT SECTION */}
      <div className="p-6 flex flex-col grow relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] font-mono text-emerald-600 dark:text-emerald-500 tracking-widest mb-1 uppercase">
              // Project_{id}
            </p>
            {/* Use text-foreground for the main title */}
            <h3 className="text-xl font-1spaceGrotesk font-bold tracking-tight transition-colors group-hover:text-emerald-500 text-foreground">
              {heading}
            </h3>
          </div>
          <ArrowUpRight
            className="text-muted-foreground group-hover:text-emerald-500 transition-colors duration-300 shrink-0"
            size={20}
          />
        </div>

        {/* Description */}
        <p className="font-1spaceGrotesk text-sm leading-relaxed mb-6 grow text-muted-foreground">
          {description}
        </p>

        {/* Divider Line */}
        <div className="w-full h-px my-4 transition-colors bg-border group-hover:bg-emerald-500/30"></div>

        {/* Footer Section */}
        <div className="flex flex-col gap-4 mt-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags &&
              tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono rounded border 
                  text-muted-foreground bg-muted border-border"
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-2">
            {/* Source Button */}
            <Link
              href={ghLink || "#"}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all text-sm font-1spaceGrotesk group/btn
              bg-muted border border-border text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-500/20"
            >
              <Github
                size={16}
                className="group-hover/btn:scale-110 transition-transform"
              />
              <span>Source</span>
            </Link>

            {/* Demo Button */}
            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all text-sm font-1spaceGrotesk group/btn
                bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20"
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
