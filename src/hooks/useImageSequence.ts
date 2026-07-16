import { useEffect, useRef } from "react";

type FrameSrc = (index: number) => string;

const defaultFrameSrc: FrameSrc = (index) =>
  `./assets/hero/eat-you-${(index + 1).toString().padStart(2, "0")}.png`;

/**
 * Drives an HTML canvas through a preloaded sequence of frames.
 *
 * `sequence.frame` is the value GSAP tweens; calling `render()` draws the
 * frame at the current index, scaled to cover the canvas. Both are stable
 * refs so they can be safely captured by a GSAP timeline.
 */
export function useImageSequence(
  frameCount: number,
  frameSrc: FrameSrc = defaultFrameSrc
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const images = useRef<HTMLImageElement[]>([]);
  const sequence = useRef({ frame: 0 });

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

  function render() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const img = images.current[sequence.current.frame];
    if (img) scaleImage(img, context);
  }

  // Preload all frames once.
  useEffect(() => {
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      images.current.push(img);
    }

    // Draw the first frame as soon as it is available.
    const first = images.current[0];
    if (first?.complete) {
      render();
    } else if (first) {
      first.onload = render;
    }

    return () => {
      if (first) first.onload = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount]);

  return { canvasRef, images, sequence, render };
}
