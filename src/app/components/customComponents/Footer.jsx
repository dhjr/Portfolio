import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Youtube,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full bg-zinc-50 dark:bg-stone-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* MAIN GRID */}
        {/* Added divide-zinc-200 for light mode dividers */}
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 transition-colors duration-300">
          {/* Column 1: Brand & Status */}
          <div className="p-10 flex flex-col justify-between h-full min-h-[200px]">
            <div>
              <h2 className="text-4xl font-bold font-1boldonse tracking-tighter text-zinc-900 dark:text-white transition-colors">
                DR.
              </h2>
              <p className="text-zinc-500 text-sm mt-2">Full Stack Developer</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-500">
                OPEN TO WORK
              </span>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="p-10 flex flex-col gap-4">
            <span className="text-zinc-400 dark:text-zinc-600 text-xs font-mono uppercase tracking-widest">
              Sitemap
            </span>
            <nav className="flex flex-col gap-3">
              {["Projects", "Education", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="
                    text-zinc-600 hover:text-zinc-900 hover:translate-x-2 
                    dark:text-zinc-300 dark:hover:text-white 
                    transition-all duration-200 w-fit
                  "
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials (Stacked) */}
          <div className="p-10 flex flex-col gap-4">
            <span className="text-zinc-400 dark:text-zinc-600 text-xs font-mono uppercase tracking-widest">
              Connect
            </span>
            <div className="flex flex-col gap-3">
              {[
                { label: "Github", Icon: Github, url: "https://github.com" },
                {
                  label: "LinkedIn",
                  Icon: Linkedin,
                  url: "https://linkedin.com",
                },
                { label: "Twitter", Icon: Twitter, url: "https://x.com" },
                { label: "YouTube", Icon: Youtube, url: "https://youtube.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  className="
                    flex items-center gap-3 transition-colors group
                    text-zinc-500 hover:text-emerald-600
                    dark:text-zinc-400 dark:hover:text-emerald-400
                  "
                >
                  <social.Icon size={18} />
                  <span className="text-sm group-hover:underline decoration-emerald-500/50 underline-offset-4">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Action */}
          <div
            className="
            p-10 flex flex-col justify-between 
            bg-zinc-100 dark:bg-zinc-900/20 
            transition-colors duration-300
          "
          >
            <div>
              <span className="text-zinc-400 dark:text-zinc-600 text-xs font-mono uppercase tracking-widest relative">
                Have an idea?
              </span>

              <a
                href="mailto:dhjr.dev@gmail.com"
                className="
                  block text-xl font-bold mt-2 transition-colors
                  text-zinc-900 hover:text-emerald-600
                  dark:text-white dark:hover:text-emerald-400
                "
                title="Click to send me an email"
              >
                Let's do it &nbsp;📧
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="
                self-end p-4 rounded-full transition-colors border shadow-sm
                bg-white border-zinc-200 text-zinc-900 hover:bg-emerald-500 hover:text-white hover:border-emerald-500
                dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:hover:bg-emerald-600
              "
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
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
          <p>© 2025 Dhananjay R.</p>
          <p>Designed & Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
