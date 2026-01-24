import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram, // <--- Imported Instagram
  Mail,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative z-10 w-full bg-zinc-50 dark:bg-stone-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 transition-colors duration-300">
          {/* Column 1: Brand & Status */}
          <div className="p-6 md:p-10 flex flex-col justify-between h-full min-h-[200px]">
            <div>
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src="/favicon.webp"
                  alt="Logo"
                  fill
                  className="object-contain dark:hidden"
                  sizes="64px"
                />
                <Image
                  src="/favicon_dark.webp"
                  alt="Logo"
                  fill
                  className="object-contain hidden dark:block"
                  sizes="64px"
                />
              </div>
              <p className="text-zinc-500 text-sm mt-2">Full Stack Developer</p>
            </div>
            <div className="mt-8 flex flex-col gap-1">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                Local Time // Kerala, IN
              </span>
              <span className="text-xs font-mono font-medium tabular-nums text-zinc-600 dark:text-zinc-400 min-h-[20px]">
                {time ? (
                  time.toLocaleTimeString("en-US", {
                    hour12: true,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "Asia/Kolkata",
                  })
                ) : (
                  <span className="opacity-0">00:00:00 AM</span>
                )}
              </span>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="p-6 md:p-10 flex flex-col gap-4">
            <span className="text-zinc-400 dark:text-zinc-600 text-xs font-mono uppercase tracking-widest">
              Sitemap
            </span>
            <nav className="flex flex-col gap-3">
              {[
                "Projects",
                "About",
                "Experience",
                "Skills",
                "Education",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="
                    text-sm text-zinc-500 font-1spaceGrotesk hover:text-zinc-900 hover:translate-x-2 
                    dark:text-zinc-400 dark:hover:text-white 
                    transition-all duration-200 w-fit
                  "
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials (Stacked) */}
          <div className="p-6 md:p-10 flex flex-col gap-4">
            <span className="text-zinc-400 dark:text-zinc-600 text-xs font-mono uppercase tracking-widest">
              Connect
            </span>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Github",
                  Icon: Github,
                  url: "https://github.com/dhjr",
                },
                {
                  label: "LinkedIn",
                  Icon: Linkedin,
                  url: "https://linkedin.com/in/dhananjayr",
                },
                {
                  label: "Twitter",
                  Icon: Twitter,
                  url: "https://x.com/dhananjayr_",
                },
                {
                  label: "Instagram",
                  Icon: Instagram,
                  url: "https://www.instagram.com/dhananjayr_/",
                },
                {
                  label: "Email",
                  Icon: Mail,
                  url: "mailto:dhjr.dev@gmail.com",
                },
                {
                  label: "YouTube",
                  Icon: Youtube,
                  url: "https://www.youtube.com/@letthedevscook",
                },
              ].map((social) => {
                const isYouTube = social.label === "YouTube";
                return isYouTube ? (
                  // ANIMATED BORDER BUTTON FOR YOUTUBE
                  // CUSTOM BRANDED BUTTON FOR LTDC
                  // CUSTOM BRANDED BUTTON FOR LTDC
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    className="group relative flex w-fit items-center justify-center overflow-hidden rounded-full p-[1px] mt-2 transition-transform duration-300 hover:scale-[1.02] focus:outline-none bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 h-14"
                  >
                    <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-zinc-50 dark:bg-zinc-950 px-5 text-sm font-bold text-zinc-700 dark:text-zinc-200 transition-all group-hover:bg-white dark:group-hover:bg-zinc-900 group-hover:text-amber-600 dark:group-hover:text-amber-500">
                      <Image
                        src="/ltdc.webp"
                        alt="LTDC Logo"
                        width={26}
                        height={26}
                        className="rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="font-1spaceGrotesk tracking-wide">
                        Let The Devs Cook
                      </span>
                    </span>
                  </a>
                ) : (
                  // STANDARD LINK FOR OTHERS
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    className="
                    flex items-center gap-3 transition-colors group
                    text-zinc-500 hover:text-emerald-600
                    dark:text-zinc-400 dark:hover:text-emerald-400 w-fit
                  "
                  >
                    <social.Icon size={18} />
                    <span className="text-sm font-1spaceGrotesk           group-hover:underline decoration-emerald-500/50 underline-offset-4">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div
          className="
          border-t p-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono transition-colors
          border-zinc-200 text-zinc-400
          dark:border-zinc-800 dark:text-zinc-600
        "
        >
          <p>© {new Date().getFullYear()} Dhananjay R.</p>
          <p>Designed & Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
