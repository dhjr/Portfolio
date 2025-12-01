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
    <div className="w-[80%] my-10 bg-blue-950/20 rounded-4xl mx-auto min-h-screen p-10 text-white font-sans">
      <div className="max-w-6xl mx-auto relative flex flex-col gap-24">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-[0.6rem] w-1 bg-rose-600"></div>

        {timelineItems.map((item, idx) => (
          <div key={idx} className="flex items-start gap-8">
            {/* Dot */}
            <div className="w-6 h-6 bg-rose-600 rounded-full relative z-10"></div>

            {/* Content */}
            <div className="max-w-xl">
              <h3 className="text-2xl text-rose-600 font-semibold font-1trunculenta">
                {item.title}
              </h3>
              <p className="text-xs font-1forum text-gray-500">
                {item.company}
              </p>
              <p className="italic text-gray-400 mb-4">{item.status}</p>
              <p className=" text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
