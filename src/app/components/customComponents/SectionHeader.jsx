export default function sectionHeader({ name }) {
  // return (
  //   <>
  //     <div className="text-3xl m-5 bg-radial from-zinc-700 to-transparent rounded-xl w-fit text-gray-400 backdrop-blur-xs border-b-[0.1px] border-b-gray-300 p-2 font-1boldonse sticky">
  //       {name}
  //     </div>
  //   </>
  // );

  // return (
  //   <div className="flex items-center gap-4 py-8 w-full">
  //     {/* The Title with a glow effect */}
  //     <h2 className="text-3xl font-bold text-gray-200 tracking-wide font-1boldonse shadow-zinc-800 drop-shadow-lg shrink-0">
  //       {name}
  //       <span className="text-zinc-600">.</span> {/* Decorative period */}
  //     </h2>

  //     {/* The Line - Fades from gray to transparent */}
  //     <div className="h-[1px] w-full bg-gradient-to-r from-zinc-700 to-transparent opacity-50"></div>
  //   </div>
  // );

  return (
    <div className="relative py-10">
      {/* Background Line for depth */}
      <div className="absolute top-1/2 left-0 w-full border-t border-zinc-800/50 -z-10"></div>

      {/* The Pill */}
      <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-700/50 bg-zinc-900/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        {/* Optional: Small accent dot */}
        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>

        <span className="text-xl font-medium text-gray-300 tracking-wider font-1boldonse uppercase">
          {name}
        </span>
      </div>
    </div>
  );
}
