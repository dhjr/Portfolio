// "use client";

// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     if (!theme) setTheme("dark");
//   }, [theme, setTheme]);

//   if (!mounted) return <div className="w-16 h-8 rounded-full bg-zinc-800 animate-pulse" />;

//   const isDark = theme === "dark";

//   return (
//     <button
//       onClick={() => setTheme(isDark ? "light" : "dark")}
//       className={`
//         relative flex items-center w-[68px] h-9 p-1 rounded-full 
//         transition-all duration-500 ease-in-out
//         ${isDark 
//           ? "bg-zinc-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-zinc-800" 
//           : "bg-zinc-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-zinc-300"
//         }
//       `}
//       aria-label="Toggle Theme"
//     >
//       {/* The Sliding Knob (The "Physical" Switch) */}
//       <div
//         className={`
//           absolute w-7 h-7 rounded-full flex items-center justify-center
//           transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
//           shadow-[0_4px_10px_rgba(0,0,0,0.3)]
//           ${isDark 
//             ? "translate-x-0 bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600" 
//             : "translate-x-8 bg-white border border-zinc-200"
//           }
//         `}
//       >
//         {/* Glow effect behind the knob */}
//         <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-500 ${isDark ? "bg-blue-500/20 opacity-100" : "bg-orange-400/20 opacity-100"}`} />
//       </div>

//       {/* Static Icons Layer */}
//       <div className="flex justify-between w-full px-2 z-10 pointer-events-none">
//         {/* Moon Icon (Visible when Light - knob is on the right) */}
//         <div className={`transition-all duration-500 ${!isDark ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
//           <Moon size={16} className="text-zinc-500 fill-zinc-500/20" />
//         </div>

//         {/* Sun Icon (Visible when Dark - knob is on the left) */}
//         <div className={`transition-all duration-500 ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
//           <Sun size={16} className="text-amber-500 fill-amber-500/20" />
//         </div>
//       </div>
//     </button>
//   );
// }