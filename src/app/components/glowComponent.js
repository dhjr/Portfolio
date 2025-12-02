export default function GlowComp() {
  return (
    // Change from fixed to absolute positioning
    <div
      className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      <div className="ball"></div>

      <div
        className="ball"
        style={{
          "--delay": "-12s",
          "--size": 0.35,
          "--speed": "25s",
        }}
      ></div>

      <div
        className="ball"
        style={{
          "--delay": "-10s",
          "--size": 0.3,
          "--speed": "15s",
        }}
      ></div>
    </div>
  );
}
