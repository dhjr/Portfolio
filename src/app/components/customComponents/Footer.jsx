// import { Github, Linkedin, Twitter, Mail, Youtube } from "lucide-react";

// export default function footer() {
//   return (
//     <>
//       <section id="footer" className="relative w-full h-100 ">
//         <div className="w-[90%] mx-auto h-[0.5px]  bg-zinc-500"></div>
//         <div className="h-full flex flex-row justify-between">
//           <div className="flex flex-col justify-center items-center">
//             <h3 className="font-1boldonse m-5 opacity-20">Dhananjay R</h3>

//             <h2 className="text-6xl text-white/20 font-1boldonse font-extrabold">
//               DR.
//             </h2>
//           </div>

//           <div className="h-full flex flex-col justify-center items-center gap-5">
//             <p className="hover:text-xl transition-normal duration-150">
//               About
//             </p>
//             <p className="hover:text-xl transition-normal duration-150">
//               Projects
//             </p>
//             <p className="hover:text-xl transition-normal duration-150">
//               Education
//             </p>
//             <p className="hover:text-xl transition-normal duration-150">
//               Contact
//             </p>
//           </div>

//           <div className="flex flex-col justify-center items-center">
//             <h2 className="font-1boldonse">Socials</h2>
//             <div className="w-50 flex flex-row  justify-center items-center">
//               <a href="https://github.com/dhjr" target="_blank">
//                 <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
//                   <Github />
//                 </button>
//               </a>

//               <a href="https://www.linkedin.com/in/dhananjayr/" target="_blank">
//                 <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
//                   <Linkedin />
//                 </button>
//               </a>

//               <a href="https://x.com/dhananjayr_" target="_blank">
//                 <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
//                   <Twitter />
//                 </button>
//               </a>

//               <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
//                 <Mail />
//               </button>

//               <a href="https://www.youtube.com/@letthedevscook" target="_blank">
//                 <button className="rounded-2xl p-2 hover:bg-zinc-600 transition-colors duration-100">
//                   <Youtube />
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-2 w-full text-center">
//           <div className="w-[90%] mx-auto  h-[0.5px]  bg-zinc-500"></div>
//           <p className="bottom-0 font-thin text-zinc-300">
//             © 2025 Dhananjay R. All rights reserved.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }

// import {
//   Github,
//   Linkedin,
//   Twitter,
//   Mail,
//   Youtube,
//   ArrowUpRight,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="relative w-full bg-stone-950 pt-20 pb-10 overflow-hidden">
//       {/* Background Gradient for depth */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-50"></div>

//       <div className="w-[90%] max-w-7xl mx-auto flex flex-col gap-16">
//         {/* TOP SECTION: The Big CTA */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
//           <div className="flex flex-col gap-2">
//             <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">
//               Ready to collaborate?
//             </span>
//             <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter font-1boldonse leading-[0.9]">
//               LET'S BUILD <br />
//               <span className="text-zinc-600">THE FUTURE.</span>
//             </h2>
//           </div>

//           {/* "Get in Touch" Button */}
//           <a
//             href="mailto:your@email.com"
//             className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full hover:scale-105 transition-transform duration-300"
//           >
//             <span className="font-bold text-lg">Get in Touch</span>
//             <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//           </a>
//         </div>

//         {/* MIDDLE SECTION: Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-zinc-800 pt-10">
//           {/* Brand Column */}
//           <div className="col-span-1 md:col-span-2">
//             <h3 className="text-2xl font-bold text-white mb-4">Dhananjay R.</h3>
//             <p className="text-zinc-500 max-w-sm">
//               Crafting digital experiences with code and creativity. Based in
//               India, working worldwide.
//             </p>
//           </div>

//           {/* Links Column */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-white font-mono text-sm uppercase mb-2">
//               Navigation
//             </h4>
//             {["About", "Projects", "Education", "Contact"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-2 group"
//               >
//                 {item}
//                 <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
//               </a>
//             ))}
//           </div>

//           {/* Socials Column */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-white font-mono text-sm uppercase mb-2">
//               Socials
//             </h4>
//             <div className="flex gap-3">
//               {[
//                 { Icon: Github, href: "https://github.com/dhjr" },
//                 { Icon: Linkedin, href: "https://linkedin.com/in/dhananjayr" },
//                 { Icon: Twitter, href: "https://x.com" },
//                 { Icon: Youtube, href: "https://youtube.com" },
//               ].map(({ Icon, href }, idx) => (
//                 <a
//                   key={idx}
//                   href={href}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
//                 >
//                   <Icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM BAR */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm font-mono pt-4">
//           <p>© 2025 Dhananjay R. All rights reserved.</p>
//           <p>
//             Local Time:{" "}
//             {new Date().toLocaleTimeString("en-IN", {
//               hour: "2-digit",
//               minute: "2-digit",
//               timeZone: "Asia/Kolkata",
//             })}{" "}
//             IST
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

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
    <footer className="relative z-10 w-full bg-stone-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {/* Column 1: Brand & Status */}
          <div className="p-10 flex flex-col justify-between h-full min-h-[200px]">
            <div>
              <h2 className="text-4xl font-bold text-white font-1boldonse tracking-tighter">
                DR.
              </h2>
              <p className="text-zinc-500 text-sm mt-2">Full Stack Developer</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-500">
                OPEN TO WORK
              </span>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="p-10 flex flex-col gap-4">
            <span className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
              Sitemap
            </span>
            <nav className="flex flex-col gap-3">
              {["Projects", "Education", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-zinc-300 hover:text-white hover:translate-x-2 transition-transform duration-200 w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials (Stacked) */}
          <div className="p-10 flex flex-col gap-4">
            <span className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
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
                  className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group"
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
          <div className="p-10 flex flex-col justify-between bg-zinc-900/20">
            <div>
              <span className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
                Have an idea?
                <span className="animate-ping absolute inline-flex rounded-full bg-emerald-400 opacity-75"></span>
              </span>

              <a
                href="mailto:dhjr.dev@gmail.com"
                className="block text-xl text-white font-bold mt-2 hover:text-emerald-400 transition-colors"
                title="Click to send me an email"
              >
                Let's do it &nbsp;📧
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="self-end p-4 rounded-full bg-zinc-800 text-white hover:bg-emerald-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono">
          <p>© 2025 Dhananjay R.</p>
          <p>Designed & Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
