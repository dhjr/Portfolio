import Link from "next/link";
import { Play } from "lucide-react";

export default function VideoCard({ video }) {
  return (
    <Link 
      href={video.url} 
      target="_blank"
      className="group shrink-0 w-64 flex flex-col gap-3 cursor-pointer"
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-emerald-500/50 transition-colors shadow-sm">
         {/* Thumbnail Image */}
         <div className={`absolute inset-0 bg-cover bg-center ${video.color}`} style={video.thumbnail ? { backgroundImage: `url(${video.thumbnail})` } : {}}></div>
         
         {/* Simple Overlay for depth */}
         <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

         {/* Play Icon Overlay */}
         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300">
                <Play className="fill-zinc-900 text-zinc-900 ml-1" size={16} />
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
