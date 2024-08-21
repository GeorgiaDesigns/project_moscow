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

const Image = styled.img`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Projects = styled.div`
  height: 100%;

  background: #cecece;
`;

const Home = () => {
  const viewerRef = useRef(null);
  const sceneRef = useRef(null);

  useGSAP(
    () => {
      const frame_count = 16;
      const offset_value = 800;

      gsap.to(viewerRef.current, {
        left: -offset_value * frame_count + "px",
        // scale: offset_value / 100,
        ease: `steps(${frame_count})`,
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top top",
          end: "+=" + frame_count * offset_value, //bottom 5%"
          pin: true,
          scrub: true,
        },
      });
    },
    { scope: sceneRef }
  );

  return (
    <>
      <Section className="scene" ref={sceneRef}>
        <Image src="/assets/eat-you-sprite.png" ref={viewerRef}></Image>
      </Section>

      <Section id="section1">
        <Projects>
          <div>End</div>
        </Projects>
      </Section>

      <Section id="section2">
        <Projects>
          <div>slide</div>
        </Projects>
      </Section>
    </>
  );

  // const html = document.documentElement;
  // const canvas = document.getElementById("hero-lightpass");
  // const context = canvas.getContext("2d");

  // const frameCount = 20;
  // const currentFrame = (index) =>
  //   `https://raw.githubusercontent.com/GeorgiaDesigns/img-sequence/main/ezgif-frame-0${index.toString()}.png`;

  // const preloadImages = () => {
  //   for (let i = 1; i < frameCount; i++) {
  //     const img = new Image();
  //     img.src = currentFrame(i);
  //   }
  // };

  // const img = new Image();
  // img.src = currentFrame(1);
  // canvas.width = 1158;
  // canvas.height = 770;
  // img.onload = function () {
  //   context.drawImage(img, 0, 0);
  // };

  // const updateImage = (index) => {
  //   img.src = currentFrame(index);
  //   context.drawImage(img, 0, 0);
  // };

  // window.addEventListener("scroll", () => {
  //   const scrollTop = html.scrollTop;
  //   const maxScrollTop = html.scrollHeight - window.innerHeight;
  //   const scrollFraction = scrollTop / maxScrollTop;
  //   const frameIndex = Math.min(
  //     frameCount - 1,
  //     Math.ceil(scrollFraction * frameCount)
  //   );

  //   requestAnimationFrame(() => updateImage(frameIndex + 1));
  // });

  // preloadImages();
};

export default Home;
