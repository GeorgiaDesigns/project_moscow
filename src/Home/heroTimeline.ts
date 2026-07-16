import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ease = {
  smooth: "power2.inOut",
  linear: "none",
} as const;

// Timeline start offsets (in the timeline's own time units) for the pinned
// tagline timeline. The sprite sequence is scrubbed separately over the hero
// section so it can begin on the first scroll.
const at = {
  canvasZoom: 0,
  taglineReveal: 1,
  shapesEnter: 2,
  textSlide: 3,
} as const;

type HeroTimelineRefs = {
  canvas: HTMLCanvasElement;
  taglineSection: HTMLElement;
  sequence: { frame: number };
  frameCount: number;
  render: () => void;
};

/**
 * Builds the pinned, scrubbed hero timeline: the sprite sequence plays, the
 * canvas zooms and darkens, the tagline fades in, and the SVG shapes + heading
 * animate across. Returns the timeline (animations are auto-reverted by the
 * surrounding useGSAP context).
 */
export function buildHeroTimeline({
  canvas,
  taglineSection,
  sequence,
  frameCount,
  render,
}: HeroTimelineRefs) {
  // The sprite sequence runs on its own trigger spanning the hero section, so
  // it starts advancing on the very first scroll and finishes right as the
  // tagline section pins and the zoom takes over.
  gsap.to(sequence, {
    frame: frameCount - 1,
    snap: "frame",
    ease: ease.smooth,
    onUpdate: render,
    scrollTrigger: {
      start: 0,
      end: () => window.innerHeight,
      scrub: 1,
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: taglineSection,
      start: "top top",
      end: "+=3000",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      pinSpacing: false,
    },
    onComplete: () => {
      ScrollTrigger.refresh();
    },
  });

  tl.to(
      canvas,
      {
        scale: 1.5,
        ease: ease.smooth,
        backgroundColor: "#252525",
        duration: 2,
      },
      at.canvasZoom
    )
    .to(
      taglineSection,
      {
        opacity: 1,
        ease: ease.smooth,
        duration: 2,
      },
      at.taglineReveal
    )
    .fromTo(
      ".elipse",
      { scale: 0, x: -2, y: 100 },
      { scale: 1.3, ease: ease.smooth, duration: 3 },
      at.shapesEnter
    )
    .fromTo(
      ".blueTriangle",
      { scale: 0, x: 500, y: 350 },
      { scale: 1.2, ease: ease.smooth, duration: 3 },
      at.shapesEnter
    )
    .fromTo(
      ".blackTriangle2",
      { x: -500, y: 0 },
      { x: -100, y: 200, duration: 5 },
      at.shapesEnter
    )
    .fromTo(
      ".blackTriangle1",
      { x: -100, y: 400, transform: "rotate(-20deg)" },
      {
        x: 900,
        y: 180,
        transform: "rotate(0deg)",
        scale: 1.2,
        ease: ease.linear,
        duration: 1.5,
      },
      at.shapesEnter
    )
    .fromTo(
      ".miniWhiteCircle",
      { scale: 0, x: 1050, y: -150 },
      { scale: 0.1, ease: ease.linear, duration: 1 },
      at.textSlide
    )
    .fromTo(
      ".underline",
      { x: 1000, y: 700 },
      { x: 500, scaleX: 1.3, duration: 2 },
      at.textSlide
    )
    .fromTo(
      ".tagline",
      { x: 2000, y: 240 },
      { x: -2250, ease: ease.smooth, duration: 7 },
      at.textSlide
    );

  // The canvas is fixed and lives behind everything; pin it in place.
  gsap.set(canvas, { position: "fixed", top: 0, left: 0, zIndex: 1 });

  // Fade the canvas out while the project section is on screen.
  ScrollTrigger.create({
    trigger: ".projectSection",
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) => {
      gsap.to(canvas, {
        opacity: self.isActive ? 0 : 1,
        duration: 0.5,
        ease: "power2.out",
      });
    },
  });

  return tl;
}
