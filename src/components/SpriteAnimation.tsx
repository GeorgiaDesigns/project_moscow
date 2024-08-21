import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SpriteSheetAnimation: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame_count = 18;
    const offset_value = 270;

    if (viewerRef.current && sceneRef.current) {
      gsap.to(viewerRef.current, {
        backgroundPosition: -offset_value * frame_count * 4 + "px",
        ease: `steps(${frame_count})`,
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top top",
          end: "+=" + frame_count * offset_value,
          pin: true,
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="scene" ref={sceneRef}>
      <div className="viewer" ref={viewerRef}></div>
    </div>
  );
};

export default SpriteSheetAnimation;
