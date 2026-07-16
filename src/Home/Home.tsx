import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Hero } from "../components/Content/Hero";
import { Rasgo } from "../components/Content/Rasgo";
import Collage from "../components/Collage";
import ProjectPreview from "../components/ProjectPreview";
import HeroShapes from "../components/HeroShapes";
import { useImageSequence } from "../hooks/useImageSequence";
import { buildHeroTimeline } from "./heroTimeline";
import { projects } from "../data/projects";
import { collageImages } from "../data/collage";
import { Canvas, Overlay, Projects, Section, Tagline } from "./home.styles";

const FRAME_COUNT = 21;
const OVERLAY_SRC =
  "https://d3n32ilufxuvd1.cloudfront.net/59ee0858278cca00855b0b53/1287165/upload-4fb97271-7cb7-4746-9c56-87e24141d41a.gif";

const Home = () => {
  const { canvasRef, sequence, render } = useImageSequence(FRAME_COUNT);
  const tagLineSectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    const taglineSection = tagLineSectionRef.current;
    if (!canvas || !taglineSection) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    buildHeroTimeline({
      canvas,
      taglineSection,
      sequence: sequence.current,
      frameCount: FRAME_COUNT,
      render,
    });
  }, []);

  return (
    <div className="wrapper">
      <Canvas ref={canvasRef} />

      <Overlay src={OVERLAY_SRC} alt="Background overlay" />

      <Section>
        <Hero />
      </Section>

      <div style={{ height: "300vh", position: "relative" }}>
        <Tagline ref={tagLineSectionRef}>
          <h2
            className="tagline"
            style={{
              whiteSpace: "nowrap",
              position: "absolute",
              zIndex: 10,
              fontSize: "12rem",
            }}
          >
            POWERED BY CAFFEINE AND CTRL-Z
          </h2>

          <HeroShapes />
        </Tagline>
      </div>

      <Section id="section2">
        <Collage images={collageImages} />
      </Section>

      <Projects className="projectSection">
        <Rasgo />
        <ProjectPreview content={projects} />
      </Projects>

      <Section id="section3">
        <p>Additional content section</p>
      </Section>
    </div>
  );
};

export default Home;
