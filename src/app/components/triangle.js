// components/GlowingTriangle.jsx
"use client";

const GlowingTriangle = () => {
  return (
    <div className="triangle-container">
      <div className="triangle-wrapper">
        {/* Triangle SVG with glowing edges */}
        <svg className="triangle-svg" viewBox="0 0 200 200">
          <defs>
            {/* Glow filter for edges only */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite
                in="SourceGraphic"
                in2="blur"
                operator="overlay"
                result="glow"
              />
            </filter>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4cc9f0" />
              <stop offset="50%" stopColor="#4361ee" />
              <stop offset="100%" stopColor="#3a0ca3" />
            </linearGradient>
          </defs>

          {/* Triangle with glowing edges */}
          <polygon
            points="100,30 170,160 30,160"
            fill="transparent"
            stroke="url(#gradient)"
            strokeWidth="3"
            className="triangle-edges"
          />
        </svg>

        {/* Text elements without glow */}
        <div className="text-vertex top-vertex">
          <span className="text-label">LEARN</span>
        </div>
        <div className="text-vertex left-vertex">
          <span className="text-label">UNLEARN</span>
        </div>
        <div className="text-vertex right-vertex">
          <span className="text-label">RELEARN</span>
        </div>
      </div>
    </div>
  );
};

export default GlowingTriangle;
