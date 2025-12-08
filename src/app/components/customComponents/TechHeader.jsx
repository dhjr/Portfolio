export default function TechHeader({ title, subtitle }) {
  return (
    <div className="flex items-end gap-6 border-b border-zinc-800 pb-6 mb-16 w-full">
      {/* 1. Main Title with Accent Dot */}
      <h2 className="text-5xl md:text-6xl font-bold text-white font-1boldonse tracking-tight leading-none">
        {title}
        <span className="text-emerald-500">.</span>
      </h2>

      {/* 2. The "Circuit Trace" Line 
          (Expands to fill space between title and subtitle) */}
      <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent mb-2"></div>

      {/* 3. The Technical Subtitle */}
      <p className="text-zinc-500 font-mono text-xs mb-1 uppercase tracking-widest shrink-0">
        // {subtitle}
      </p>
    </div>
  );
}
