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
  position: relative;
  height: 100vh;
  top: 0;
  overflow: hidden;
`;

const Tagline = styled(Section)`
  position: sticky;
  opacity: 0;
  z-index: 5;
  background-color: #252525;
  font-size: 10rem;
  height: 300vh;
  color: #fff;
  overflow: hidden;
`;

const Overlay = styled.img`
  position: fixed;
  opacity: 0.1;
  z-indez: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Projects = styled(Section)`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
`;

const Canvas = styled.canvas`
  position: absolute;
  z-index: 1;
  max-width: 100vw;
  max-height: 100vh;
`;

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLImageElement | null>(null);
  const sequence = { frame: 0 };
  const images = useRef<HTMLImageElement[]>([]);
  const frameCount = 21;

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
    const ratio = Math.max(hRatio, vRatio) * 0.9;
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
    const tagline = heroRef.current;
    const canvas = canvasRef.current;

    if (!parent || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const currentFrame = (index: number) =>
      //`https://raw.githubusercontent.com/GeorgiaDesigns/img-sequence/main/ezgif-frame-${(
      `./assets/hero/eat-you-${(index + 1).toString().padStart(2, "0")}.png`;

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
        end: "+=3000",
      },
    });

    tl.to(
      sequence,
      {
        frame: frameCount - 1,
        snap: "frame",
        ease: "power2.inOut",
        onUpdate: render,
        duration: 4,
      },
      0
    )
      .to(
        canvas,
        {
          scale: 1.5,
          ease: "power2.inOut",
          backgroundColor: "#252525",
          duration: 2,
        },
        1
      )
      .to(
        tagline,
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 2,
        },
        2
      )
      .fromTo(
        ".elipse",
        {
          scale: 0.2,
          translateX: "-2vw",
          translateY: "25vh",
        },
        {
          scale: 1.2,
          ease: "power2.inOut",
          duration: 3,
        },
        3
      )
      .fromTo(
        ".blueTriangle",
        {
          scale: 0.2,
          transform: "translate(-10vw, 30vh)",
        },
        {
          scale: 1.2,
          ease: "power2.inOut",
          duration: 3,
        },
        3
      )
      .fromTo(
        ".blackTriangle2",
        {
          translateX: "-120vw",
          translateY: "-10vh",
        },
        {
          translateX: "-108vw",
          translateY: "0vh",
          ease: "none",
          duration: 2,
        },
        3
      )
      .fromTo(
        ".blackTriangle1",
        {
          translateX: "-100vw",
          translateY: "30vh",
          transform: "rotate(-10deg)",
        },
        {
          translateX: "-40vw",
          translateY: "-25vh",
          transform: "rotate(0deg)",
          scale: 1.2,

          ease: "none",
          duration: 1,
        },
        4
      )
      .fromTo(
        ".elipse2",
        {
          scale: 0,
          translateX: "-60vw",
          // translateY: "-20vh",
        },
        {
          scale: 0.1,
          ease: "none",
          duration: 1,
        },
        5
      )
      .fromTo(
        ".tagline",
        {
          translateX: "60vw",
          translateY: "-30vh",
        },
        {
          translateX: "-160vw",
          ease: "power2.inOut",
          duration: 7,
        },
        6
      );
    // .to(tagline, { position: "relative" }, 12);
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
      <Overlay src="https://d3n32ilufxuvd1.cloudfront.net/59ee0858278cca00855b0b53/1287165/upload-4fb97271-7cb7-4746-9c56-87e24141d41a.gif"></Overlay>
      <Section style={{ height: "100vh" }}>
        <Hero />
      </Section>

      <Tagline ref={heroRef}>
        <svg
          className="elipse"
          width="641"
          height="641"
          viewBox="0 0 641 641"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="320.5" cy="320.5" r="320.5" fill="#CECECE" />
        </svg>
        <svg
          className="blueTriangle"
          width="978"
          height="434"
          viewBox="0 0 978 434"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M254.24 433.76L977.658 8.85957L-5.5742e-06 0.899929L254.24 433.76Z"
            fill="#131F8B"
          />
        </svg>

        <svg
          className="blackTriangle1"
          width="359"
          height="51"
          viewBox="0 0 359 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.28314 50.3492L358.086 0.0747396L-3.4431e-06 13.2745L5.28314 50.3492Z"
            fill="black"
          />
        </svg>

        <svg
          className="blackTriangle2"
          width="364"
          height="231"
          viewBox="0 0 364 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M363.604 230.337L0.450256 96.6559L51.9636 0.921108L363.604 230.337Z"
            fill="black"
          />
        </svg>

        <svg
          className="elipse2"
          width="641"
          height="641"
          viewBox="0 0 641 641"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="320.5" cy="320.5" r="320.5" fill="#CECECE" />
        </svg>

        <h1 className="tagline" style={{ whiteSpace: "nowrap" }}>
          POWERED BY CAFFEINE AND CTRL-Z
        </h1>
        <svg
          className="blueTriangle"
          width="978"
          height="434"
          viewBox="0 0 978 434"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M254.24 433.76L977.658 8.85957L-5.5742e-06 0.899929L254.24 433.76Z"
            fill="#131F8B"
          />
        </svg>
      </Tagline>

      {/* <Projects className="section1">
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
            {
              src: "./assets/ProjectFrames/1.png",
              description:
                "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
            {
              src: "./assets/ProjectFrames/2.png",
              description:
                "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
            {
              src: "./assets/ProjectFrames/3.png",
              description:
                "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
            {
              src: "./assets/ProjectFrames/4.png",
              description:
                "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
          ]}
        ></ProjectPreview>
      </Projects> */}

      <Section id="section2">
        {" "}
        <p>sdfsdfsedsfsd</p>
      </Section>

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
