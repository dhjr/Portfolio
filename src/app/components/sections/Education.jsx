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

import Header from "@/components/customComponents/SectionHeader";

export default function Education() {
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
    <section
      id="education"
      className="relative z-10 w-full min-h-dvh transition-colors duration-300 py-24 bg-white dark:bg-zinc-950"
    >
      <div className="w-full max-w-4xl mx-auto pt-16 px-4">
        <Header name="Education" />
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
    </section>
  );
}
