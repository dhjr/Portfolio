"use client";

import {
  Github,
  ExternalLink,
  FolderGit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function ProjectCard({ project }) {
  const divRef = useRef(null);

  // Normalize images: accept single `image` or `images` array
  const images = project.images || (project.image ? [project.image] : []);

  return (
    <div
      ref={divRef}
      className="group relative flex flex-col lg:flex-row gap-0 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-emerald-900/10"
    >
      {/* STATUS BANNER */}
      {project.status && (
        <div
          className={`absolute top-6 -left-14 lg:left-auto lg:-right-14 z-30 w-52 transform -rotate-45 lg:rotate-45 text-center py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm ${
            project.status === "Completed"
              ? "bg-yellow-400 text-yellow-950"
              : "bg-emerald-500 text-white"
          }`}
        >
          {project.status}
        </div>
      )}

      {/* IMAGE THUMBNAIL - Full Bleed with Swiper */}
      <div className="relative z-10 w-full lg:w-[450px] aspect-video shrink-0 bg-zinc-100 dark:bg-zinc-800/50 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 group/image overflow-hidden">
        {images.length > 0 ? (
          <>
            <Swiper
              modules={[Pagination, Navigation, Autoplay, EffectFade]}
              effect={"fade"}
              spaceBetween={0}
              slidesPerView={1}
              loop={images.length > 1}
              allowTouchMove={images.length > 1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                stopOnLastSlide: images.length === 1,
              }}
              pagination={
                images.length > 1
                  ? {
                      clickable: true,
                      dynamicBullets: true,
                    }
                  : false
              }
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
                  <div
                    className="absolute inset-0 z-10 w-full h-full bg-transparent"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </SwiperSlide>
              ))}

              {/* Custom Navigation Buttons (Visible on Hover) */}
              {images.length > 1 && (
                <>
                  <div
                    className={`swiper-button-prev-${project.id} select-none absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800 text-white z-[100] pointer-events-auto cursor-pointer opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center hover:bg-zinc-700`}
                  >
                    <ChevronLeft size={16} />
                  </div>
                  <div
                    className={`swiper-button-next-${project.id} select-none absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800 text-white z-[100] pointer-events-auto cursor-pointer opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center hover:bg-zinc-700`}
                  >
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
              className="w-16 h-16 text-zinc-300 dark:text-zinc-700  transition-colors duration-500"
            />
          </div>
        )}
      </div>

      {/* CONTENT SECTION */}
      <div className="relative z-10 flex-1 flex flex-col min-w-0">
        {/* Adjusted padding: p-4 for mobile, lg:px-8 */}
        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 lg:px-8 relative overflow-hidden">
          <h3 className="relative z-10 select-none text-2xl lg:text-3xl font-1bricolage font-bold text-zinc-800 dark:text-zinc-100   transition-colors lg:pr-24">
            {project.heading}
          </h3>
        </div>

        {/* Adjusted padding: p-4 for mobile, p-6/8 for larger screens */}
        <div className="flex-1 flex flex-col justify-between gap-6 p-4 md:p-6 lg:p-8 pt-2 lg:pt-4">
          <div className="lg:pr-4">
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
    </div>
  );
}
