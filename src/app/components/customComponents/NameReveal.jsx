export default function NameReveal() {
  const name = "Dhananjay".split("");

  return (
    <h1 className="flex items-end justify-center md:justify-start overflow-hidden py-2">
      {/* THE NAME */}
      {name.map((letter, i) => (
        <span
          key={i}
          className="
            font-1spaceGrotesk h-14 md:h-26 font-bold tracking-tight cursor-default
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
            bg-linear-to-b from-zinc-700 via-emerald-600 to-emerald-800 dark:from-white dark:via-emerald-100 dark:to-emerald-600 bg-clip-text text-transparent
            hover:select-none
            opacity-0
            animate-[letter-reveal_0.8s_ease-out_forwards]
          "
          style={{ 
            animationDelay: `${0.2 + i * 0.05}s`,
            willChange: "transform, opacity, filter" 
          }}
        >
          {letter}
        </span>
      ))}

      {/* THE TERMINAL CURSOR */}
      <span
        className="
          font-1spaceGrotesk font-bold text-emerald-500
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          ml-1 md:ml-2 pb-1 md:-mb-2
          animate-[cursor-blink_0.8s_infinite]
        "
      >
        _
      </span>

      <style>{`
        @keyframes letter-reveal {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(-90deg);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
            filter: blur(0px);
          }
        }
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </h1>
  );
}
