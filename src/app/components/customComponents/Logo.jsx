"use client";

// ==========================================
// LOGO 1: The "Holographic Glitch"
// Vibe: Cyberpunk, high-energy, distorted reality.
// Why: Uses color channel splitting (CMYK offset) on hover for a raw, digital feel.
// ==========================================
const LogoGlitch = () => {
  return (
    <div className="relative inline-block group select-none">
      {/* Cyan Channel (Left Offset) */}
      <span className="absolute top-0 left-0 -ml-[2px] text-cyan-500 opacity-0 group-hover:opacity-70 mix-blend-screen animate-pulse font-1boldonse font-black text-3xl tracking-tighter transition-all">
        DR.
      </span>

      {/* Magenta Channel (Right Offset) */}
      <span className="absolute top-0 left-0 ml-[2px] text-rose-500 opacity-0 group-hover:opacity-70 mix-blend-screen animate-pulse font-1boldonse font-black text-3xl tracking-tighter transition-all delay-75">
        DR.
      </span>

      {/* Main White Layer */}
      <span className="relative z-10 text-white font-black text-3xl tracking-tighter font-1boldonse">
        DR.
      </span>

      {/* Strikethrough Scanline */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-110 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

// ==========================================
// LOGO 2: The "Brutalist Badge"
// Vibe: Stark, architectural, heavy industrial.
// Why: Uses high contrast borders and heavy shadows. It feels solid and unmovable.
// ==========================================
const LogoBrutalist = () => {
  return (
    <div className="relative group cursor-pointer select-none">
      {/* The Shadow Block (Offset) */}
      <div className="absolute top-1 left-1 w-full h-full bg-zinc-800 border border-zinc-700 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"></div>

      {/* The Main Block */}
      <div className="relative bg-white border-2 border-zinc-200 px-3 py-1 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
        <span className="text-black font-1boldonse font-extrabold text-2xl tracking-tighter">
          DR<span className="text-emerald-600">.</span>
        </span>
      </div>
    </div>
  );
};

// ==========================================
// LOGO 3: The "Eclipse"
// Vibe: Mysterious, premium, sci-fi.
// Why: The text is masked by a passing shadow/light source.
// ==========================================
const LogoEclipse = () => {
  return (
    <div className="relative overflow-hidden group rounded-lg select-none">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/0 via-emerald-500/0 to-emerald-500/0 group-hover:via-emerald-500/20 transition-all duration-700"></div>

      {/* Text with gradient mask */}
      <span className="relative z-10 font-1boldonse font-bold text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 group-hover:to-white transition-all duration-500">
        DR.
      </span>

      {/* The "Eclipse" Circle moving behind */}
      <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-emerald-500 blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 group-hover:-translate-x-6 group-hover:-translate-y-4"></div>
    </div>
  );
};

// ==========================================
// LOGO 4: The "Variable Terminal"
// Vibe: Coding, dynamic, functional.
// Why: It mimics a variable definition in an IDE with a strict monospaced housing.
// ==========================================
const LogoVariable = () => {
  return (
    <div className="flex items-center gap-2 group select-none">
      <div className="flex flex-col items-end leading-none">
        <span className="text-[10px] font-mono text-zinc-500 group-hover:text-emerald-500 transition-colors">
          const
        </span>
        <span className="text-white font-1boldonse font-bold text-2xl tracking-wide group-hover:tracking-widest transition-all duration-300">
          DR.
        </span>
      </div>
      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
    </div>
  );
};

// ==========================================
// LOGO 5: The "Architectural Frame"
// Vibe: Minimalist, structural, precise.
// Why: Uses thin lines to create a "blueprint" feel around the name.
// ==========================================
const LogoFrame = () => {
  return (
    <div className="relative px-3 py-2 group select-none">
      {/* Top Border (Scales width) */}
      <div className="absolute top-0 left-0 w-2 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></div>
      {/* Right Border (Scales height) */}
      <div className="absolute top-0 right-0 w-[2px] h-2 bg-white transition-all duration-500 group-hover:h-full delay-100"></div>
      {/* Bottom Border */}
      <div className="absolute bottom-0 right-0 w-2 h-[2px] bg-white transition-all duration-500 group-hover:w-full delay-200"></div>
      {/* Left Border */}
      <div className="absolute bottom-0 left-0 w-[2px] h-2 bg-white transition-all duration-500 group-hover:h-full delay-300"></div>

      <span className="text-white font-1boldonse font-bold text-xl tracking-wider">
        DR.
      </span>
    </div>
  );
};

// =====================================================================
// FINAL EXPORT
// =====================================================================
export default function Logo() {
  return (
    <>
      {/* UNCOMMENT THE ONE YOU LIKE */}

      {/* <LogoGlitch /> */}
      {/* <LogoBrutalist /> */}
      {/* <LogoEclipse /> */}
      {/* <LogoVariable /> */}
      {/* <LogoFrame /> */}
    </>
  );
}
