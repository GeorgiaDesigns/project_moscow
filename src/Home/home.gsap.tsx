import gsap from "gsap";

const config = {
  easing: {
    smooth: "power2.inOut",
    linear: "none"
  },
  timing: {
    sequenceStart: 0,
    canvasStart: 1,
    taglineStart: 2,
    shapesStart: 3,
    textStart: 4
  },
  durations: {
    sequence: 4,
    canvas: 2,
    tagline: 2,
    shapes: 3,
    text: 7
  }
};

// Helper function for consistent fromTo animations
const createShapeAnimation = (selector, fromProps, toProps, duration, ease = config.easing.smooth) => ({
  selector,
  from: fromProps,
  to: { ...toProps, duration, ease }
});

// Define shape animations data
const shapeAnimations = [
  createShapeAnimation(".elipse", 
    { scale: 0, x: -2, y: 100 }, 
    { scale: 1.3 }, 
    config.durations.shapes
  ),
  createShapeAnimation(".blueTriangle", 
    { scale: 0, x: 500, y: 350 }, 
    { scale: 1.2 }, 
    config.durations.shapes
  ),
  createShapeAnimation(".blackTriangle2", 
    { x: -500, y: 0 }, 
    { x: -100, y: 200 }, 
    5, // Longer duration for this specific animation
    config.easing.smooth
  ),
  createShapeAnimation(".blackTriangle1", 
    { x: -100, y: 400, rotation: -20 }, 
    { x: 900, y: 180, rotation: 0, scale: 1.2 }, 
    1.5, 
    config.easing.linear
  ),
  createShapeAnimation(".miniWhiteCircle", 
    { scale: 0, x: 1050, y: -150 }, 
    { scale: 0.1 }, 
    1, 
    config.easing.linear
  ),
  createShapeAnimation(".underline", 
    { x: 1000, y: 700 }, 
    { x: 500, scaleX: 1.3 }, 
    2
  )
];

// Create timeline with extracted configuration
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: canvas,
    scrub: true,
    pin: true,
    start: "center 55%",
    end: "+=3000",
  },
});

// Sequence animation (frame-based)
tl.to(sequence, {
  frame: frameCount - 1,
  snap: "frame",
  ease: config.easing.smooth,
  onUpdate: render,
  duration: config.durations.sequence,
}, config.timing.sequenceStart);

// Canvas scaling and background
tl.to(canvas, {
  scale: 1.5,
  backgroundColor: "#252525",
  ease: config.easing.smooth,
  duration: config.durations.canvas,
}, config.timing.canvasStart);

// Tagline section fade in
tl.to(taglineSection, {
  opacity: 1,
  ease: config.easing.smooth,
  duration: config.durations.tagline,
}, config.timing.taglineStart);

// Add all shape animations
shapeAnimations.forEach(({ selector, from, to }) => {
  // Determine start time based on selector
  let startTime = config.timing.shapesStart;
  if (selector.includes("miniWhiteCircle") || selector.includes("underline")) {
    startTime = config.timing.textStart;
  }
  
  tl.fromTo(selector, from, to, startTime);
});

// Text sliding animation
tl.fromTo(".tagline", {
  x: 2000,
  y: 240,
}, {
  x: -2250,
  ease: config.easing.smooth,
  duration: config.durations.text,
}, config.timing.textStart);

// Alternative approach using timeline labels for better readability
const alternativeTimeline = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: canvas,
      scrub: true,
      pin: true,
      start: "center 55%",
      end: "+=3000",
    },
  });

  // Add labels for semantic timing
  tl.addLabel("start")
    .addLabel("canvasZoom", 1)
    .addLabel("taglineReveal", 2)
    .addLabel("shapesEnter", 3)
    .addLabel("textSlide", 4);

  // Animations using labels
  tl.to(sequence, {
    frame: frameCount - 1,
    snap: "frame",
    ease: config.easing.smooth,
    onUpdate: render,
    duration: config.durations.sequence,
  }, "start")
  
  .to(canvas, {
    scale: 1.5,
    backgroundColor: "#252525",
    ease: config.easing.smooth,
    duration: config.durations.canvas,
  }, "canvasZoom")
  
  .to(taglineSection, {
    opacity: 1,
    ease: config.easing.smooth,
    duration: config.durations.tagline,
  }, "taglineReveal");

  // Group related shape animations
  const shapeGroup = gsap.timeline();
  shapeAnimations.slice(0, 4).forEach(({ selector, from, to }) => {
    shapeGroup.fromTo(selector, from, to, 0);
  });
  
  tl.add(shapeGroup, "shapesEnter");

  return tl;
};