import { CheckCircle } from "lucide-react";

export default function Popup({ message, showPopup }) {
  return (
    <div
      className={`
        /* Layout & Size */
        flex items-center gap-3 px-5 py-4 min-w-[300px]
        rounded-r-lg rounded-l-sm 
        
        /* Glass & Colors */
        bg-white dark:bg-zinc-900
        border border-zinc-300 dark:border-zinc-800 border-l-4 border-l-emerald-500
        shadow-2xl shadow-zinc-400/20 dark:shadow-black/50 

        /* Animation State */
        transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)
        ${
          showPopup
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-90 pointer-events-none"
        }
      `}
    >
      {/* Icon */}
      <CheckCircle className="text-emerald-500 shrink-0" size={20} />

      {/* Text Wrapper */}
      <div className="flex flex-col">
        <span className="text-[10px] font-mono text-emerald-500/80 uppercase tracking-widest leading-none mb-1">
          Alert
        </span>
        <p className="font-1spaceGrotesk text-sm text-zinc-900 dark:text-zinc-200 leading-none">
          {message}
        </p>
      </div>
    </div>
  );
}
