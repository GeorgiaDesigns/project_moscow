import styled from "styled-components";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Wrapper = styled.div`
  width: -webkit-fill-available;
  display: flex;
  align-items: center;
`;

const TV = styled.img`
  width: 40rem;
  margin: 10rem;
  &: hover {
    cursor: pointer;
  }
`;

const Description = styled.p`
  position: relative;
  top: 80%;
  left: 10%;
  width: 40rem;
`;

type ImageGalleryProps = {
  content: {
    src: string;
    description: string;
  }[];
};

const ProjectPreview = ({ content }: ImageGalleryProps) => {
  const [focused, setFocused] = useState(content[0].description);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const projectSection = projectsRef.current;
    if (!projectSection) return;
    gsap.to(projectSection, {
      xPercent: -100 * (projectSection.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projectSection,
        pin: true,
        scrub: 1,
        snap: 0.1,
        start: "top top",
        end: () => "+=" + projectSection.offsetWidth,
      },
    });
  });

  return (
    <>
      <Description>{focused}</Description>
      <Wrapper ref={projectsRef}>
        {content.map((q, index) => (
          <div
            key={index}
            style={{ textAlign: "center", height: "fit-content" }}
          >
            <TV src={q.src} onMouseEnter={() => setFocused(q.description)}></TV>
          </div>
        ))}
      </Wrapper>
    </>
  );
};

export default ProjectPreview;
