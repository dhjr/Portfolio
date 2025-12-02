export default function GlowComp() {
  return (
    <div>
      <div className="glow-container ">
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
    </div>
  );
}
