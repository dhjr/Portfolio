import { Github } from "lucide-react";

export default function Card({ heading, description, tags, ghLink }) {
  return (
    <div
      className="
        w-60  m-2 p-4 rounded-xl relative bg-gray-900"
      style={{
        boxShadow: "4px 4px 8px rgba(209, 130, 246, 0.2)", // subtle blue glow on right and bottom
      }}
    >
      <h1 className="text-3xl font-ebgaramond">{heading}</h1>
      <p className="font-forum">{description}</p>

      <div className="flex flex-wrap gap-2 my-4">
        {tags &&
          tags.map((tag, idx) => (
            <p
              key={idx}
              className="text-sm bg-radial to-zinc-900 from-white/10 hover:border-zinc-200 transition-colors duration-300 p-1 px-2 border-2 border-neutral-700 shadow-xs shadow-black rounded-xl"
            >
              {tag}
            </p>
          ))}
      </div>
      <a
        href="https://github.com"
        target="__blank"
        className="w-full flex justify-center items-center"
      >
        <button className="border rounded-2xl border-white p-1 my-2 hover:bg-black transition-colors duration-75">
          <Github />
        </button>
      </a>
    </div>
  );
}
