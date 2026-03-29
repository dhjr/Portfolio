import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      className="
        relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center 
        animate-[hero-entrance_1.5s_ease-out_forwards]
        will-change-[transform,opacity]
      "
    >
      {/* WRAPPER FOR UNIFIED FLOATING */}
      <div className="relative w-full h-full flex items-center justify-center md:animate-[float_6s_ease-in-out_infinite] will-change-transform">
        {/* THE CORE (Image Container) */}
        <div
          className="
            relative 
            w-[260px] h-[260px] md:w-[380px] md:h-[380px] 
            rounded-full overflow-hidden 
            bg-zinc-200 dark:bg-zinc-900
            shadow-2xl
            z-30
          "
        >
          {/* Background Layers */}
          <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.25),transparent_70%)]"></div>
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-zinc-400/50 dark:from-black/80 to-transparent z-0"></div>

          <Image
            className="relative z-10 object-cover opacity-95"
            fill
            src="/profile1.webp"
            alt="Profile photo of Dhananjay"
            priority
            sizes="(max-width: 768px) 260px, 380px"
          />

          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] z-20 pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes hero-entrance {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}
