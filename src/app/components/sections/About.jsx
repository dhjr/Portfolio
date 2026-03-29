import Link from "next/link";
import Image from "next/image";
import Header from "@/components/customComponents/SectionHeader";
import { 
  User, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Instagram, 
  Youtube,
  Twitter
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="pt-12 pb-2 px-4 relative bg-transparent transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Header name="About" />
        </div>

        <div className="relative group rounded-3xl bg-white/90 dark:bg-zinc-900/80  border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 overflow-hidden shadow-xl shadow-black/5 dark:shadow-md hover:shadow-2xl dark:hover:shadow-emerald-900/10 transition-all duration-500">
          {/* Background Decoration */}
          <div className="absolute -top-10 -right-10 md:top-0 md:right-0 p-8 md:p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
            <User size={120} className="md:w-[200px] md:h-[200px]" />
          </div>

          <div className="relative z-10 flex flex-col gap-8">
            <h3 className="text-2xl md:text-3xl font-bold font-1spaceGrotesk text-zinc-900 dark:text-white leading-tight">
              Crafting digital experiences with{" "}
              <span className="text-emerald-500">code</span> and{" "}
              <span className="text-emerald-500">creativity</span>.
            </h3>

            {/* Split into multiple <p> tags with bold highlights */}
            <div className="flex flex-col gap-5 text-zinc-700 dark:text-zinc-300 font-1spaceGrotesk leading-relaxed text-base md:text-md">
              <p>
                I build things, break them, figure out why, and build them
                better. As a{" "}
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  fullstack developer
                </span>
                , I care about the whole picture. From how data flows on the
                backend to how it feels when someone actually uses what I made.
              </p>

              <p>
                I am genuinely excited about where technology is heading. The
                growth of{" "}
                <span className="text-emerald-500 font-medium">LLMs</span>,{" "}
                <span className="text-emerald-500 font-medium">AI agents</span>,
                and open-source tooling feels like one of those rare moments
                where the ground is shifting fast enough to reward curiosity. I
                lean into that.
              </p>

              <p>
                Open-source software is something I believe in, not just use.
                There is something worth appreciating about software built
                transparently, by people who care about it working well for
                everyone.
              </p>

              <p>
                Beyond my IDE, I have contributed to communities like{" "}
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  IEEE
                </span>
                ,{" "}
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  Tinkerhub
                </span>{" "}
                and{" "}
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  SAE
                </span>
                . Spaces where people build things together and push each other
                to think bigger. That kind of environment is what I look for in
                a team too. I work well when the problems are hard and the
                people around me take their craft seriously.
              </p>

              <p>
                Outside of tech, I track personal finance, catch standup comedy
                whenever I can, and have a healthy rotation of music and new
                films going at all times. It balances out the screen time.
              </p>

              <p className="text-zinc-900 dark:text-zinc-100 font-medium">
                Let’s connect :D
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              {[
                { icon: Github, href: "https://github.com/dhjr", label: "Github" },
                { icon: Linkedin, href: "https://linkedin.com/in/dhananjayr", label: "LinkedIn" },
                { icon: Mail, href: "mailto:dhjr.dev@gmail.com", label: "Mail" },
                { icon: Twitter, href: "https://x.com/dhananjayr_", label: "Twitter" },
                { icon: Youtube, href: "https://youtube.com/@letthedevscook", label: "YouTube" },
                { icon: Instagram, href: "https://www.instagram.com/dhananjayr_/", label: "Instagram" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* YouTube Channel Promo */}
        <div className="mt-20 group relative rounded-3xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-black/5 dark:shadow-md hover:shadow-2xl dark:hover:shadow-red-900/10 transition-all duration-300">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-black dark:border-white shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/ltdc.webp"
                alt="Let the Devs Cook Logo"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl font-bold font-1spaceGrotesk text-zinc-900 dark:text-white flex items-center gap-2">
                Let the Devs Cook
              </h4>
              <p className="text-sm max-w-lg text-zinc-700 dark:text-zinc-400 font-1spaceGrotesk leading-relaxed">
                A youtube channel run be me and my brother. We share what we
                learn, from exploring simple experiments to the latest in web
                development.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch justify-between md:justify-end gap-4">
            {/* Stats */}
            <div className="relative hidden sm:flex items-center gap-4 px-5 py-3 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-500">
              <span className="absolute top-2 right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-zinc-900 dark:text-white font-1spaceGrotesk leading-none">
                  590
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Subscribers
                  </span>
                </div>
              </div>
            </div>

            {/* Visit Button */}
            <Link
              href="https://www.youtube.com/@LetTheDevsCook"
              target="_blank"
              className="relative flex items-center gap-2 px-5 py-3 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-sm tracking-wide shadow-lg shadow-zinc-200 dark:shadow-zinc-900/20 hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <span>Visit Channel</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
