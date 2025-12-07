import { Github } from "lucide-react";

export default function Card({ heading, description, tags, ghLink }) {
  return (
    <div
      className="
        w-80  m-2 p-4 rounded-xl relative bg-transparent backdrop-blur-sm"
      style={{
        boxShadow: "4px 4px 8px rgba(209, 130, 246, 0.2)",
      }}
    >
      <h1 className="text-3xl font-1newamsterdam m-2">{heading}</h1>
      <p className="font-1spaceGrotesk p-2 bg-zinc-700/20 rounded-2xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-1 my-4">
        {tags &&
          tags.map((tag, idx) => (
            <p
              key={idx}
              className="text-sm font-1spaceGrotesk
               bg-radial to-zinc-900 from-white/10 hover:border-zinc-200 transition-colors duration-300 p-1 px-2 border-2 border-neutral-700 shadow-xs shadow-black rounded-xl"
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
        <button className="border rounded-xl border-gray-700 p-1 my-2 hover:bg-gray-500 transition-colors duration-150">
          <Github />
        </button>
      </a>
    </div>
  );
}
