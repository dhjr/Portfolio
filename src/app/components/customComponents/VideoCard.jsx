import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function VideoCard({ video, className }) {
  return (
    <Link
      href={video.url}
      target="_blank"
      className={twMerge(
        "group shrink-0 w-64 flex flex-col gap-3 cursor-pointer",
        className
      )}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-emerald-500/50 transition-colors shadow-sm">
        {/* Thumbnail Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center ${video.color}`}
          style={
            video.thumbnail
              ? { backgroundImage: `url(${video.thumbnail})` }
              : {}
          }
        ></div>

        {/* Simple Overlay for depth */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

        {/* Play Icon Overlay */}
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 backdrop-blur-[1px]">
          <div
            className="
            relative w-20 h-16
            flex items-center justify-center
            transform scale-90 group-hover:scale-100
            transition-all duration-300 drop-shadow-lg
          "
          >
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 drop-shadow-sm"
              fill="currentColor"
            >
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                className="text-[#FF0000]"
              />
              <path
                d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                className="text-white"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Text Content - Now below the thumbnail */}
      <div className="flex flex-col gap-0.5 px-1">
        <h5 className="text-zinc-900 dark:text-zinc-100 text-sm font-bold font-1spaceGrotesk leading-tight line-clamp-2 group-hover:text-emerald-500 transition-colors">
          {video.title}
        </h5>
        <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-mono">
          {video.views} views
        </span>
      </div>
    </Link>
  );
}
