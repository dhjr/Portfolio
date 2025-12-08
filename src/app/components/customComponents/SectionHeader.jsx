export default function SectionHeader({ name }) {
  return (
    <div className="relative py-10 w-full flex items-center">
      {/* Background Line */}
      {/* Light: Zinc-200 | Dark: Zinc-800 */}
      <div className="absolute top-1/2 left-0 w-full h-[0.1px] bg-black/20 dark:bg-white/20 -z-10 transition-colors duration-300"></div>

      {/* The Pill */}
      <div
        className="
        inline-flex items-center gap-2 px-6 py-2 rounded-full 
        backdrop-blur-md transition-all duration-300
        border shadow-sm
        
        /* Light Mode: White box with Grey Border & subtle shadow */
        bg-white/80 border-zinc-200 
        
        /* Dark Mode: Dark Glass with Glow */
        dark:bg-zinc-900/50 dark:border-zinc-700/50 dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]
      "
      >
        {/* Accent Dot */}
        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>

        {/* Text */}
        <span className="text-xl font-medium tracking-wider font-1boldonse uppercase transition-colors duration-300 text-zinc-800 dark:text-zinc-200">
          {name}
        </span>
      </div>
    </div>
  );
}
