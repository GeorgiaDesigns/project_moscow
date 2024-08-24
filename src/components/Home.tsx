import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Hero } from "./Content/Hero";
import { Rasgo } from "./Content/Rasgo";

gsap.registerPlugin(useGSAP);

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: #cecece;
  overflow: hidden;
  position: relative;
`;

const Projects = styled(Section)`
  height: 100vh;
  width: 300vw;
  position: relative;
  display: flex;
  background-image: url("./assets/halftone.png"); //<a href="https://www.freepik.com/free-vector/black-wave-halftone-background_7647150.htm#query=halftone&position=0&from_view=keyword&track=ais_hybrid&uuid=ebd689d3-dd4b-45e0-a4f7-448e29a96abe">Image by alicia_mb</a> on Freepik
  background-size: contain;
  background-color: #252525;
`;

const Project = styled.div`
  width: 100vw;
`;

const Canvas = styled.canvas`
  position: fixed;
  left: 50%;
  bottom: -30%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  //max-height: 60vh;
`;

// const Header = styled.div`
//   transform: rotate(-45deg);
//   font-size: 12rem;

//   position: relative;
//   z-index: 1;
// `;

// const Description = styled.div`
//   h2 {
//     margin: auto;
//   }
//   transform: rotate(45deg);
//   font-size: 1.1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   width: fit-content;
//   left: 70%;
//   position: relative;
//   z-index: 1;
// `;

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const sequence = { frame: 0 };
  const images = useRef<HTMLImageElement[]>([]);
  const frameCount = 20;

  const projectsRef = useRef<HTMLElement | null>(null);

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
    const projectSection = projectsRef.current;

    if (!parent || !canvas || !projectSection) return;
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
        trigger: parent,
        endTrigger: projectSection,
        end: "bottom top",
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
        duration: 0.5,
        scrollTrigger: {
          scrub: 0.1,
        },
      },
      0
    )
      .to(
        canvas,
        {
          scale: 2.5,
          //bottom: "-10%",
          ease: "power2.inOut",
          duration: 1,
        },
        0
      )
      .to(
        parent,
        {
          backgroundColor: "#252525",
          ease: "none",
          duration: 0.5,
          delay: 0.5,
        },
        0
      );

    // gsap.to(projectSection, {
    //   xPercent: -100 * (projectSection.children.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: projectSection,
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (projectSection.children.length - 1),
    //     start: "top top",
    //     end: "+=3000",
    //   },
    // });
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
    <>
      <Section ref={heroRef} style={{ height: "300vh" }}>
        {/* <Header>
          GEORGIA <hr />
        </Header>
        <Description>
          <h2>web developer</h2>
          frontend | web3 | design
        </Description>
        <svg
          width="1366"
          height="765"
          viewBox="0 0 1366 765"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", top: 0 }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M608.19 0L1366 733.212V765H1279.88L0 201.923V148.663L99.9007 0H608.19Z"
            fill="#1E1E1E"
          />
        </svg> */}
        <Hero />
        <Canvas ref={canvasRef}></Canvas>
      </Section>

      <Projects className="section1" ref={projectsRef}>
        <Rasgo />
        <Project>Project1</Project>
        <Project>Project1</Project>
        <Project>Project1</Project>
      </Projects>

      <Section id="section2">
        <div>slide</div>
      </Section>
    </>
  );
};

export default Home;
