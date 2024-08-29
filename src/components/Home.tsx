import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Hero } from "./Content/Hero";
import Collage from "./Collage";
import ProjectPreview from "./ProjectPreview";

gsap.registerPlugin(useGSAP);

const Section = styled.section`
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden;
`;

const Projects = styled(Section)`
  width: fit-content;
  display: flex;
  //background-image: url("./assets/halftone.png"); //<a href="https://www.freepik.com/free-vector/black-wave-halftone-background_7647150.htm#query=halftone&position=0&from_view=keyword&track=ais_hybrid&uuid=ebd689d3-dd4b-45e0-a4f7-448e29a96abe">Image by alicia_mb</a> on Freepik
  background-image: url("./assets/rasgo.svg");
  flex-wrap: wrap;
`;

const Canvas = styled.canvas`
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: -20%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 60vh;
  opacity: 1;
`;

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const sequence = { frame: 0 };
  const images = useRef<HTMLImageElement[]>([]);
  const frameCount = 20;

  function render() {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        scaleImage(images.current[sequence.frame], context);
      }
    }
  }

  function scaleImage(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas;
    if (!canvas) return;

    if (!img.complete || img.naturalWidth === 0) {
      console.error(`Failed to load image: ${img.src}`);
      return;
    }

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

  useGSAP(() => {
    const parent = heroRef.current;
    const canvas = canvasRef.current;

    if (!parent || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = 1158;
    canvas.height = 770;

    const currentFrame = (index: number) =>
      `https://raw.githubusercontent.com/GeorgiaDesigns/img-sequence/main/ezgif-frame-${(
        index + 5
      )
        .toString()
        .padStart(3, "0")}.svg`;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current.push(img);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        scrub: true,
        pin: true,
        start: "center 55%",
        end: "+=800",
      },
    });

    tl.to(
      sequence,
      {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        onUpdate: render,
        duration: 3,
      },
      0
    )
      .to(
        canvas,
        {
          scale: 2,
          bottom: "-10%",
          ease: "power2.inOut",
          //opacity: 0.5,
          duration: 2,
        },
        "<"
      )
      .to(
        canvas,
        {
          display: "none",
        },
        3
      )
      .to(
        parent,
        {
          position: "relative",
        },
        2
      );
    // .to(
    //   parent,
    //   {
    //     backgroundColor: "#252525",
    //     ease: "none",
    //     duration: 0.5,
    //   },
    //   1
    // );
  });

  useEffect(() => {
    const img = images.current[0];
    if (img && img.complete) {
      render();
    } else {
      img.onload = render;
    }

    return () => {
      if (img) {
        img.onload = null;
      }
    };
  });

  return (
    <div className="wrapper">
      <Canvas ref={canvasRef}></Canvas>

      <Section ref={heroRef} style={{ height: "200vh" }}>
        <Hero />
      </Section>

      <Projects className="section1">
        <ProjectPreview
          content={[
            {
              src: "./assets/ProjectFrames/project1.png",
              description:
                "THIS IS TELEVISION Lorem ipsum dolor sit amet, consecgh tetur adipi scing elit, ",
            },
            {
              src: "./assets/ProjectFrames/project2.png",
              description:
                "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
          ]}
        ></ProjectPreview>
      </Projects>

      <Section id="section2">
        <Collage
          images={[
            "./assets/Cutouts/1.png",
            "./assets/Cutouts/2.png",
            "./assets/Cutouts/3.png",
            "./assets/Cutouts/central-1.png",
          ]}
        />
      </Section>
    </div>
  );
};

export default Home;
