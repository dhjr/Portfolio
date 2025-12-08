export default function SectionHeader({ name }) {
  return (
    <div className="relative py-10 w-full flex items-center">
      
      {/* Background Line for depth */}
      {/* Light: Zinc-200 | Dark: Zinc-800 */}
      <div className="absolute top-1/2 left-0 w-full border-t border-zinc-200 dark:border-zinc-800/50 -z-10 transition-colors duration-300"></div>

      {/* The Pill */}
      {/* We use flex-none to ensure it doesn't shrink on small screens */}
      <div className="
        inline-flex items-center gap-2 px-6 py-2 rounded-full 
        backdrop-blur-md transition-all duration-300
        
        /* Light Mode Styles */
        bg-white/60 border border-zinc-200 shadow-sm
        
        /* Dark Mode Styles */
        dark:bg-zinc-900/30 dark:border-zinc-700/50 dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]
      ">
        
        {/* Accent Dot */}
        {/* Emerald-500 works great on both White and Black */}
        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>

        {/* Text */}
        <span className="text-xl font-medium tracking-wider font-1boldonse uppercase transition-colors duration-300 text-zinc-800 dark:text-zinc-300">
          {name}
        </span>
      </div>
    </div>
  );
}