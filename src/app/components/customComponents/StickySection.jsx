// SectionLayout.jsx
export default function StickySection({ title, children }) {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-24">
      {/* GRID LAYOUT: Left Column (Header) / Right Column (Content) */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12">
        {/* --- LEFT COLUMN: STICKY HEADER --- */}
        <div className="relative">
          {/* 1. sticky: Enables behavior 
             2. top-24: Stops sticking 24px/6rem from the top of viewport
             3. h-fit: Essential so it doesn't stretch to full height 
          */}
          <div className="sticky top-24 h-fit hidden md:block">
            <SectionHeader name={title} />
          </div>

          {/* Mobile Only Header (Static) */}
          <div className="md:hidden mb-8">
            <SectionHeader name={title} />
          </div>
        </div>

        {/* --- RIGHT COLUMN: CONTENT --- */}
        <div className="w-full min-h-[50vh]">{children}</div>
      </div>
    </section>
  );
}

// Your Styled Header Component (Refined)
function SectionHeader({ name }) {
  return (
    <div className="group flex flex-col items-start">
      {/* The Glass Pill */}
      <div
        className="
        relative overflow-hidden
        inline-flex items-center gap-3 px-5 py-2.5 
        rounded-xl 
        bg-zinc-900/40 backdrop-blur-md 
        border border-zinc-800/50 hover:border-zinc-600/50
        transition-all duration-300 ease-out
        shadow-lg
      "
      >
        {/* Subtle radial gradient background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* The Dot (pulses on hover) */}
        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] group-hover:animate-pulse" />

        {/* Text */}
        <h2 className="text-xl font-bold text-gray-200 tracking-wide font-1boldonse uppercase">
          {name}
        </h2>
      </div>

      {/* Decorative vertical line (Only visible on Desktop Sticky) */}
      <div className="hidden md:block w-px h-32 bg-gradient-to-b from-zinc-700 to-transparent ml-6 mt-4 opacity-30" />
    </div>
  );
}
