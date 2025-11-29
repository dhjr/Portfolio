import Card from "../components/card";

export default function projects() {
  return (
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
  );
}
