import Card from "../components/card";
import Header from "@/components/sectionHeader";
import { Github } from "lucide-react";

export default function projects() {
  return (
    <>
      {/* <div className=" text-4xl m-5 shadow-md shadow-blue-400 border-2 border-red-300 text-shadow-lg text-shadow-red-600/50 rounded-xl w-fit p-1 font-1trunculenta ">
        Projects
        </div> */}
      <Header name="Projects" />
      <div className="flex flex-row justify-evenly">
        <Card
          heading="Mentora"
          description="Mentora.ai is a web-based extension used to assess your knowledge in realtime, while watching youtube videos.Avoid tutorial hell."
          tags={["html", "css", "javascript", "express.js", "chrome extension"]}
        />
        <Card
          heading="Mentora"
          description="Mentora.ai is a web-based extension used to assess your knowledge in realtime, while watching youtube videos.Avoid tutorial hell."
          tags={["html", "css", "javascript", "express.js", "chrome extension"]}
        />

        <Card
          heading="Mentora"
          description="Mentora.ai is a web-based extension used to assess your knowledge in realtime, while watching youtube videos.Avoid tutorial hell."
          tags={["html", "css", "javascript", "express.js", "chrome extension"]}
        />
      </div>
    </>
  );
}
