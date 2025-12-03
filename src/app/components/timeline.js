// export default function Timeline() {
//   const timelineItems = [
//     {
//       title: "Higher Secondary Education (Class 12)",
//       company: "Silver Hills Public School, Kozhikode, Kerala, India",
//       status: "2011-2023 | Percentage: 96.4%",
//       description:
//         "Completed higher secondary education with outstanding academic performance, building a strong foundation for further studies in computer science and engineering.",
//     },
//     {
//       title: "B.Tech, Computer Science & Engineering",
//       company: "Rajiv Gandhi Institute of Technology, Kottayam, Kerala, India",
//       status: "Sept 2023 – Present | CGPA: 8.0/10",
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
//         "Developed a 2D CNN-based architecture for classifying multiple classes of cardiac arrhythmia from ECG data. Implemented Grad-CAM for model explainability, highlighting decision regions and improving interpretability. Focus on model optimization and evaluation to achieve reliable classification performance.",
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
//     <div className="w-[80%] my-10 bg-blue-950/20 rounded-4xl mx-auto min-h-screen p-10 text-white font-sans">
//       <div className="max-w-6xl mx-auto relative flex flex-col gap-24">
//         {/* Vertical line */}
//         <div className="absolute top-0 bottom-0 left-[0.6rem] w-1 bg-rose-600"></div>

//         {timelineItems.map((item, idx) => (
//           <div key={idx} className="flex items-start gap-8">
//             {/* Dot */}
//             <div className="w-6 h-6 bg-rose-600 rounded-full relative z-10"></div>

//             {/* Content */}
//             <div className="max-w-xl">
//               <h3 className="text-2xl text-rose-600 font-semibold font-1trunculenta">
//                 {item.title}
//               </h3>
//               <p className="text-xs font-1forum text-gray-500">
//                 {item.company}
//               </p>
//               <p className="italic text-gray-400 mb-4">{item.status}</p>
//               <p className=" text-gray-300 leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Timeline() {
  const timelineItems = [
    {
      title: "Higher Secondary Education (Class 12)",
      company: "Silver Hills Public School, Kozhikode, Kerala, India",
      status: "2011-2023 | Percentage: 96.4%",
      description:
        "Completed higher secondary education with outstanding academic performance, building a strong foundation for further studies in computer science and engineering.",
    },
    {
      title: "B.Tech, Computer Science & Engineering",
      company: "Rajiv Gandhi Institute of Technology, Kottayam, Kerala, India",
      status: "Sept 2023 – Present | CGPA: 8.0/10",
      description:
        "Currently pursuing Bachelor of Technology in Computer Science & Engineering. Actively involved in projects, hackathons, and extracurricular activities related to software development and web technologies.",
    },
    {
      title: "Webmaster",
      company: "IEEE SB RIT",
      status: "Current",
      description:
        "Lead and manage the web team for the IEEE Student Branch at RIT Kottayam, overseeing the design, development, and maintenance of the official website while ensuring a user-friendly and responsive experience across all devices.",
    },
    {
      title: "Machine Learning Intern",
      company: "Indian Institute of Information Technology, Kottayam",
      status: "May - Aug 2025",
      description:
        "Developed a 2D CNN-based architecture for classifying multiple classes of cardiac arrhythmia from ECG data. Implemented Grad-CAM for model explainability, highlighting decision regions and improving interpretability. Focus on model optimization and evaluation to achieve reliable classification performance.",
    },
    {
      title: "Hackathon Winner",
      company: "Useless Projects Hackathon by Tinkerhub RIT",
      status: "Nov 2024",
      description:
        "Won the Useless Projects Hackathon by building a fun game using JavaScript and Phaser.js, exploring creative and experimental aspects of game development. Selected from among numerous participants.",
    },
    {
      title: "Content Creator",
      company: "Let the Devs Cook YouTube Channel",
      status: "Current",
      description:
        "Create computer science content with an emphasis on front-end web development for the YouTube channel, sharing knowledge and tutorials with the developer community.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-4">
      <div className="flex flex-col">
        {timelineItems.map((item, idx) => (
          <div key={idx} className="flex group relative">
            {/* --- COLUMN 1: THE RAIL --- */}
            <div className="flex flex-col items-center mr-4 w-6 shrink-0 relative">
              {/* Vertical Line */}
              <div
                className={`w-[2px] bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent flex-grow 
                  ${idx === 0 ? "mt-8" : ""} 
                  ${idx === timelineItems.length - 1 ? "mb-auto h-8" : ""}
                `}
              ></div>

              {/* THE DOT */}
              {/* Position: top-6 (1.5rem / 24px) */}
              {/* Height: h-4 (1rem / 16px) */}
              {/* Geometric Center: 24px + 8px = 32px from top */}
              <div className="absolute top-6 w-4 h-4 rounded-full border-2 border-emerald-500 bg-stone-950 shadow-[0_0_12px_rgba(16,185,129,0.4)] z-10 group-hover:scale-125 group-hover:bg-emerald-500 transition-all duration-300"></div>
            </div>

            {/* --- COLUMN 2: THE CONTENT --- */}
            {/* items-start is CRITICAL here. It prevents the dash from moving if the card gets taller. */}
            <div className="pb-12 flex items-start flex-1 gap-4">
              {/* THE DASH */}
              {/* mt-8 (2rem / 32px) places the line exactly at the Geometric Center of the dot */}
              <div className="hidden md:block w-8 h-[1px] bg-emerald-500/30 mt-8 shrink-0"></div>

              {/* The Glass Card */}
              <div
                className="
                relative w-full p-6 rounded-xl 
                bg-zinc-900/30 backdrop-blur-sm 
                border border-zinc-800 hover:border-emerald-500/30 
                transition-all duration-300
                group-hover:translate-x-1
              "
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-xl font-1spaceGrotesk font-bold text-gray-100">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    {item.year}
                  </span>
                </div>

                <div className="text-sm text-zinc-400 mb-4 font-mono">
                  {item.company} •{" "}
                  <span className="text-zinc-500">{item.score}</span>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
