import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const CutoutImage = styled.img`
  position: absolute;
  width: 300px; /* Adjust size as needed */
  z-index: 10;
  opacity: 0; /* Start hidden */
`;

const CollageSection = styled.div`
  position: relative;
  height: 300vh; /* Make section tall to allow scrolling */
  overflow: hidden;
`;

const CollageContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
}`;

interface CollageProps {
  images: string[];
}

const Collage: React.FC<CollageProps> = ({ images }) => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        {
          x: i % 2 === 0 ? "-100%" : "100%", // Alternates between left and right entry
          y: i % 3 === 0 ? "100%" : gsap.utils.random(0, 100), // Alternates between top, bottom, and center
          opacity: 0,
        },
        {
          x: gsap.utils.random(-200, 200), // Slightly offset from the center
          y: gsap.utils.random(0, 200),
          opacity: 1,
          rotation: gsap.utils.random(-15, 15),
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    });
  }, [images]);

  return (
    <CollageSection>
      <CollageContainer>
        {images.map((src, index) => (
          <CutoutImage
            key={index}
            src={src}
            ref={(el) => (imageRefs.current[index] = el)}
          />
        ))}
      </CollageContainer>
    </CollageSection>
  );
};

export default Collage;
