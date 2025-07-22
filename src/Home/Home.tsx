import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Hero } from "../components/Content/Hero";
import Collage from "../components/Collage";
import ProjectPreview from "../components/ProjectPreview";
import { Canvas, Overlay, Projects, Section, Tagline } from "./home.styles";
import { Rasgo } from "../components/Content/Rasgo";

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tagLineSectionRef = useRef<HTMLImageElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
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
    const taglineSection = tagLineSectionRef.current;
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;

    if (!canvas || !taglineSection || !wrapper) return;
    
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load images
    const currentFrame = (index: number) =>
      `./assets/hero/eat-you-${(index + 1).toString().padStart(2, "0")}.png`;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current.push(img);
    }

    // Create main timeline with proper pinning
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: taglineSection,
        start: "top top",
        end: "+=3000", // Keep the long scroll distance for proper timing
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: false, // This prevents the sticky behavior!
        // This ensures the section unpins properly
      },
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });

    // Sequence animation
    mainTimeline.to(sequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "power2.inOut",
      onUpdate: render,
      duration: 4,
    }, 0)
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
        taglineSection,
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
          scale: 0,
          x: -2,
          y: 100,
        },
        {
          scale: 1.3,
          ease: "power2.inOut",
          duration: 3,
        },
        3
      )
      .fromTo(
        ".blueTriangle",
        {
          scale: 0,
          x: 500,
          y: 350,
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
          x: -500,
          y: 0,
        },
        {
          x: -100,
          y: 200,
          duration: 5,
        },
        3
      )
      .fromTo(
        ".blackTriangle1",
        {
          x: -100,
          y: 400,
          transform: "rotate(-20deg)",
        },
        {
          x: 900,
          y: 180,
          transform: "rotate(0deg)",
          scale: 1.2,
          ease: "none",
          duration: 1.5,
        },
        3
      )
      .fromTo(
        ".miniWhiteCircle",
        {
          scale: 0,
          x: 1050,
          y: -150,
        },
        {
          scale: 0.1,
          ease: "none",
          duration: 1,
        },
        4
      )
       .fromTo(
        ".underline",
        {
          x: 1000,
          y: 700,
        },
        {
          x: 500,
          scaleX: 1.3,
          duration: 2,
        },
       4
      )
      .fromTo(
        ".tagline",
        {
          x: 2000,
          y: 240,
        },
        {
          x: -2250,
          ease: "power2.inOut",
          duration: 7,
        },
        4
      );

    // Separate ScrollTrigger for canvas that doesn't pin
    gsap.set(canvas, {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1
    });

    // Create a separate animation for sections after tagline
    ScrollTrigger.create({
      trigger: ".projectSection",
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to(canvas, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        } else {
          gsap.to(canvas, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const img = images.current[0];
    if (img && img.complete) {
      render();
    } else if (img) {
      img.onload = render;
    }

    return () => {
      if (img) {
        img.onload = null;
      }
    };
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <Canvas ref={canvasRef} />
      
      <Overlay 
        src="https://d3n32ilufxuvd1.cloudfront.net/59ee0858278cca00855b0b53/1287165/upload-4fb97271-7cb7-4746-9c56-87e24141d41a.gif"
        alt="Background overlay"
      />
      
      <Section>
        <Hero />
      </Section>

      {/* Spacer div to create scroll distance without affecting layout */}
      <div style={{ height: '300vh', position: 'relative' }}>
        <Tagline ref={tagLineSectionRef}>
          <h2 
            className="tagline" 
            style={{ 
              whiteSpace: "nowrap", 
              position: "absolute", 
              zIndex: 10, 
              fontSize: "12rem" 
            }}
          >
            POWERED BY CAFFEINE AND CTRL-Z
          </h2>
          
          {/* SVG Elements */}
          <svg
            style={{ position: "absolute", zIndex: 8 }}
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
            style={{ position: "absolute", zIndex: 8 }}
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
            style={{ position: "absolute", zIndex: 8 }}
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
            style={{ position: "absolute", zIndex: 8 }}
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
            style={{ position: "absolute", zIndex: 8 }}
            className="underline"
            width="1146"
            height="17"
            viewBox="0 0 1146 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1146" height="17" fill="#131F8B" />
          </svg>

          <svg
            style={{ position: "absolute", zIndex: 8 }}
            className="miniWhiteCircle"
            width="641"
            height="641"
            viewBox="0 0 641 641"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="320.5" cy="320.5" r="320.5" fill="#CECECE" />
          </svg>
        </Tagline>
      </div>
      
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
      
      <Projects className="projectSection">
        <Rasgo />
        <ProjectPreview
          content={[
            {
              src: "./assets/ProjectFrames/project1.png",
              description: "THIS IS TELEVISION Lorem ipsum dolor sit amet, consecgh tetur adipi scing elit, ",
            },
            {
              src: "./assets/ProjectFrames/project2.png",
              description: "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
            {
              src: "./assets/ProjectFrames/1.png",
              description: "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
            {
              src: "./assets/ProjectFrames/2.png",
              description: "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
            {
              src: "./assets/ProjectFrames/3.png",
              description: "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
            {
              src: "./assets/ProjectFrames/4.png",
              description: "sed do eiusmod tempor asrasrincididunt ut labore et dolore magna aliqua.  ",
            },
          ]}
        />
      </Projects>

      <Section id="section3">
        <p>Additional content section</p>
      </Section>
    </div>
  );
};

export default Home;