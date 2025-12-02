import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function HeroImage({ size }) {
  const imgRef = useRef(null);

  const handleLoad = () => {
    gsap.to(imgRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <div>

    <Image
      ref={imgRef}
      className="opacity-0 bg-radial from-amber-500 to-amber-300 z-10 object-cover shadow-lg shadow-white/20 border border-white hover:-rotate-6 transition-transform duration-300 rounded-full"
      width={420}
      height={420}
      src="/profileBW.png"
      alt="profile"
      onLoadingComplete={handleLoad}
      />
      </div>
  );
}
