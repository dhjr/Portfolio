export default function Card({ heading, description }) {
  return (
    <div
      className="
        w-40 h-40 m-2 p-4 rounded-xl 
        relative
        bg-gray-900
        "
      style={{
        boxShadow: "4px 4px 8px rgba(209, 130, 246, 0.2)", // subtle blue glow on right and bottom
      }}
    >
      <h1 className="text-3xl font-bold underline">{heading}</h1>
      <p>{description}</p>
    </div>
  );
}
