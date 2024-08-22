import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: #cecece;
  overflow: hidden;
  position: relative;
`;

const Hero = styled.section`
  width: 100vw;
  height: 300vh;
  position: relative;
`;

const Projects = styled.section`
  height: 100vh;
  width: 300%;
  position: relative;
  display: flex;
`;

const Project = styled.div`
  background: #242424;
  width: 100vw;
`;

const Canvas = styled.canvas`
  position: fixed;
  left: 50%;
  bottom: -30%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 60vh;
`;

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sequence = { frame: 0 };
  const images = useRef<HTMLImageElement[]>([]);
  const frameCount = 20;

  const projectsRef = useRef<HTMLElement | null>(null);

  function render() {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        scaleImage(images.current[sequence.frame], context);
      }
    }
  }

  function scaleImage(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio) * 0.6;
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      const projectSection = projectsRef.current;
      if (!projectSection) return;

      canvas.width = 1158;
      canvas.height = 770;

      const currentFrame = (index: number) =>
        `https://raw.githubusercontent.com/GeorgiaDesigns/img-sequence/main/ezgif-frame-${(
          index + 1
        )
          .toString()
          .padStart(3, "0")}.png`;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.current.push(img);
      }

      images.current[0].onload = render;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: canvas,
          end: `1000px`,
          scrub: 0.1,
        },
      });

      tl.to(
        sequence,
        {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          onUpdate: render,
          duration: 1,
        },
        0
      ).to(
        canvas,
        {
          scale: 1.5,
          bottom: "-10%",
          ease: "power2.inOut",
          duration: 1,
        },
        0
      );

      gsap.to(projectSection, {
        xPercent:
          -100 * (document.querySelectorAll("#section1 > div").length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: projectSection,
          pin: true,
          scrub: 1,
          snap: 1 / (document.querySelectorAll("#section1 > div").length - 1),
          start: "top top",
          end: "+=3000",
        },
      });
    },
    { scope: canvasRef }
  );

  return (
    <>
      <Hero>
        <Canvas ref={canvasRef}></Canvas>
      </Hero>

      <Projects id="section1" ref={projectsRef}>
        <Project>Project1</Project>
        <Project>Project1</Project>
        <Project>Project1</Project>
      </Projects>

      <Section id="section2">
        <Projects>
          <div>slide</div>
        </Projects>
      </Section>
    </>
  );
};

export default Home;
