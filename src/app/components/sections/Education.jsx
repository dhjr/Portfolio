// import Header from "@/components/customComponents/SectionHeader";

// export default function Education() {
//   const timelineItems = [
//     {
//       title: "Higher Secondary Education (Class 12)",
//       company: "Silver Hills Public School, Kozhikode, Kerala, India",
//       status: "2011-2023 | 96.4%",
//       description:
//         "Completed higher secondary education with outstanding academic performance, building a strong foundation for further studies in computer science and engineering.",
//     },
//     {
//       title: "B.Tech, Computer Science & Engineering",
//       company: "Rajiv Gandhi Institute of Technology, Kottayam, Kerala, India",
//       status: "Sept 2023 – Present | CGPA: 8.0",
//       description:
//         "Currently pursuing Bachelor of Technology in Computer Science & Engineering. Actively involved in projects, hackathons, and extracurricular activities related to software development and web technologies.",
//     },
//     {
//       title: "Webmaster",
//       company: "IEEE SB RIT",
//       status: "Current",
//       description:
//         "Lead and manage the web team for the IEEE Student Branch at RIT Kottayam, overseeing the design, development, and maintenance of the official website while ensuring a user-friendly and responsive experience across all devices.",
//     },
//     {
//       title: "Machine Learning Intern",
//       company: "Indian Institute of Information Technology, Kottayam",
//       status: "May - Aug 2025",
//       description:
//         "Developed a 2D CNN-based architecture for classifying multiple classes of cardiac arrhythmia from ECG data. Implemented Grad-CAM for model explainability, highlighting decision regions and improving interpretability.",
//     },
//     {
//       title: "Hackathon Winner",
//       company: "Useless Projects Hackathon by Tinkerhub RIT",
//       status: "Nov 2024",
//       description:
//         "Won the Useless Projects Hackathon by building a fun game using JavaScript and Phaser.js, exploring creative and experimental aspects of game development. Selected from among numerous participants.",
//     },
//     {
//       title: "Content Creator",
//       company: "Let the Devs Cook YouTube Channel",
//       status: "Current",
//       description:
//         "Create computer science content with an emphasis on front-end web development for the YouTube channel, sharing knowledge and tutorials with the developer community.",
//     },
//   ];

//   return (
//     <div className="min-h-dvh relative z-10 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
//       <Header name="Education" />

//       <div className="w-full max-w-4xl mx-auto py-20 px-4">
//         <div className="flex flex-col">
//           {timelineItems.map((item, idx) => (
//             <div key={idx} className="flex group relative">
//               {/* --- COLUMN 1: THE RAIL --- */}
//               <div className="flex flex-col items-center mr-4 w-6 shrink-0 relative">
//                 {/* Vertical Line */}
//                 <div
//                   className={`
//                     w-[2px] flex-grow
//                     bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent
//                     ${idx === 0 ? "mt-8" : ""}
//                     ${idx === timelineItems.length - 1 ? "mb-auto h-8" : ""}
//                 `}
//                 ></div>

//                 {/* THE DOT */}
//                 <div
//                   className="
//                   absolute top-6 w-4 h-4 rounded-full border-2 border-emerald-500
//                   shadow-[0_0_12px_rgba(16,185,129,0.4)] z-10
//                   transition-all duration-300
//                   group-hover:scale-125 group-hover:bg-emerald-500

//                   /* Light: White bg */
//                   bg-white

//                   /* Dark: Dark bg */
//                   dark:bg-zinc-950
//                 "
//                 ></div>
//               </div>

//               {/* --- COLUMN 2: THE CONTENT --- */}
//               <div className="pb-12 flex items-start flex-1 gap-4">
//                 {/* THE DASH */}
//                 <div className="hidden md:block w-8 h-[1px] bg-emerald-500/30 mt-8 shrink-0"></div>

//                 {/* The Card */}
//                 <div
//                   className="
//                     relative w-full p-6 rounded-xl
//                     backdrop-blur-sm transition-all duration-300
//                     group-hover:translate-x-1 border

//                     /* Light Mode */
//                     bg-white border-zinc-200 hover:border-emerald-500/30 hover:shadow-lg

//                     /* Dark Mode */
//                     dark:bg-zinc-900/30 dark:border-zinc-800 dark:hover:border-emerald-500/30
//                   "
//                 >
//                   <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
//                     <h3 className="text-xl font-1spaceGrotesk font-bold text-zinc-800 dark:text-zinc-100 transition-colors">
//                       {item.title}
//                     </h3>

//                     {/* Status Badge */}
//                     <span
//                       className="
//                       px-3 py-1 text-xs font-mono rounded-full border
//                       transition-colors

//                       text-emerald-600 bg-emerald-100 border-emerald-200
//                       dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20
//                     "
//                     >
//                       {item.status}
//                     </span>
//                   </div>

//                   <div className="text-sm mb-4 font-mono text-zinc-500 dark:text-zinc-400 transition-colors">
//                     {item.company}
//                   </div>

//                   <p className="leading-relaxed text-sm text-zinc-600 dark:text-zinc-300 transition-colors">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Briefcase, Trophy, Users, Code2, Cpu, Globe } from "lucide-react";
import Header from "@/components/customComponents/SectionHeader";

export default function ResumeHybrid() {
  // --- DATA: EDUCATION (Timeline Format) ---
  const educationData = [
    {
      title: "B.Tech, Computer Science & Engineering",
      institution: "Rajiv Gandhi Institute of Technology, Kottayam",
      period: "Sept 2023 – Present",
      score: "CGPA: 8.0/10",
      description:
        "Pursuing Bachelor of Technology. Actively involved in full-stack development, hackathons, and the IEEE Student Branch.",
    },
    {
      title: "Higher Secondary Education (Class 12)",
      institution: "Silver Hills Public School, Kozhikode",
      period: "2011-2023",
      score: "Percentage: 96.4%",
      description:
        "Completed higher secondary education with a strong foundation in Computer Science and Mathematics.",
    },
  ];

  return (
    <div className="min-h-dvh relative z-10 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 pb-24">
      {/* =========================================================
          SECTION 1: EDUCATION (LINEAR TIMELINE)
      ========================================================= */}
      <Header name="Education" />

      <div className="w-full max-w-4xl mx-auto py-16 px-4">
        <div className="flex flex-col">
          {educationData.map((item, idx) => (
            <div key={idx} className="flex group relative">
              {/* --- RAIL & DOT --- */}
              <div className="flex flex-col items-center mr-4 w-6 shrink-0 relative">
                <div
                  className={`
                    w-[2px] flex-grow 
                    bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent
                    ${idx === 0 ? "mt-8" : ""} 
                    ${idx === educationData.length - 1 ? "mb-auto h-8" : ""}
                `}
                ></div>

                <div
                  className="
                  absolute top-6 w-4 h-4 rounded-full border-2 border-emerald-500 
                  shadow-[0_0_12px_rgba(16,185,129,0.4)] z-10 
                  transition-all duration-300
                  group-hover:scale-125 group-hover:bg-emerald-500
                  bg-white dark:bg-zinc-950
                "
                ></div>
              </div>

              {/* --- CARD CONTENT --- */}
              <div className="pb-12 flex items-start flex-1 gap-4">
                <div className="hidden md:block w-8 h-[1px] bg-emerald-500/30 mt-8 shrink-0"></div>

                <div
                  className="
                    relative w-full p-6 rounded-xl 
                    backdrop-blur-sm transition-all duration-300
                    group-hover:translate-x-1 border
                    
                    bg-white border-zinc-200 hover:border-emerald-500/30 hover:shadow-lg
                    dark:bg-zinc-900/30 dark:border-zinc-800 dark:hover:border-emerald-500/30
                  "
                >
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl font-1spaceGrotesk font-bold text-zinc-800 dark:text-zinc-100 transition-colors">
                      {item.title}
                    </h3>
                    <span
                      className="
                      px-3 py-1 text-xs font-mono rounded-full border 
                      transition-colors whitespace-nowrap
                      text-emerald-600 bg-emerald-100 border-emerald-200
                      dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20
                    "
                    >
                      {item.period}
                    </span>
                  </div>

                  <div className="text-sm mb-4 font-mono text-zinc-500 dark:text-zinc-400 transition-colors">
                    {item.institution} • {item.score}
                  </div>

                  <p className="leading-relaxed text-sm text-zinc-600 dark:text-zinc-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          SECTION 2: EXPERIENCE (BENTO GRID)
      ========================================================= */}
      <Header name="Experience" />

      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* --- CARD 1: INTERNSHIP (Large) --- */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 transition-all hover:shadow-lg dark:hover:shadow-emerald-900/20">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                    <Briefcase size={20} />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
                    Internship
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                  Machine Learning Intern
                </h3>
                <p className="font-mono text-zinc-500 dark:text-zinc-400 text-sm mb-6">
                  IIIT Kottayam • May - Aug 2025
                </p>

                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg">
                  Developed a 2D CNN-based architecture for classifying cardiac
                  arrhythmia from ECG data. Implemented Grad-CAM for model
                  explainability to highlight decision regions.
                </p>
              </div>
            </div>
          </div>

          {/* --- CARD 2: HACKATHONS (Compact) --- */}
          <div className="md:col-span-1 relative group rounded-3xl bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between hover:border-purple-500/50 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                  <Trophy size={20} />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Hackathons
                </span>
              </div>

              <ul className="space-y-6">
                <li>
                  <h4 className="font-bold text-zinc-900 dark:text-white">
                    Winner - Useless Projects
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    Built a Phaser.js game. Won for creativity.
                  </p>
                </li>
                <li className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-bold text-zinc-900 dark:text-white">
                    Code-RECET 2.0
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    Real-time data processing solution.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* --- CARD 3: LEADERSHIP / WEBMASTER (Large/Wide) --- */}
          <div className="md:col-span-2 relative group rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={120} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                  <Code2 size={20} />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Positions of Responsibility
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    IEEE SB RIT
                  </h3>
                  <p className="text-sm font-mono text-zinc-500 mb-3">
                    Webmaster • Current
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                    Lead the web team, overseeing design & deployment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Techfuse 2.0", "Roboignite", "ReX 5.0"].map((site) => (
                      <span
                        key={site}
                        className="text-[10px] px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                      >
                        {site}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:pl-8 md:border-l border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    RITU Fest
                  </h3>
                  <p className="text-sm font-mono text-zinc-500 mb-3">
                    Lead Developer • 2024
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    Designed and built the official website for the college's
                    main techno-cultural fest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- CARD 4: VOLUNTEERING (Compact) --- */}
          <div className="md:col-span-1 relative group rounded-3xl bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900/50 dark:to-zinc-900/20 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                <Users size={20} />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Volunteering
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-white">
                  SAE A-Baja RIT
                </h4>
                <p className="text-xs text-zinc-500">Event Volunteer</p>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-white">
                  Tinkerhub
                </h4>
                <p className="text-xs text-zinc-500">Community Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
