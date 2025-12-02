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
    <Image
      ref={imgRef}
      className="opacity-0 bg-amber-300/80 z-10 object-cover shadow-lg shadow-white/20 border border-white hover:rotate-6 transition-transform duration-200 rounded-4xl"
      width={420}
      height={420}
      src="/profileBW.png"
      alt="profile"
      onLoadingComplete={handleLoad}
    />
  );
}
