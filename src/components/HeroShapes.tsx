/**
 * The six scroll-animated SVG shapes revealed in the hero/tagline section.
 *
 * The classNames here are load-bearing: the GSAP timeline in
 * `Home/heroTimeline.ts` targets each shape by selector (`.elipse`,
 * `.blueTriangle`, `.blackTriangle1`, `.blackTriangle2`, `.miniWhiteCircle`,
 * `.underline`). Do not rename them without updating the timeline.
 */
const shapeStyle = { position: "absolute", zIndex: 8 } as const;

const HeroShapes = () => (
  <>
    <svg
      style={shapeStyle}
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
      style={shapeStyle}
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
      style={shapeStyle}
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
      style={shapeStyle}
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
      style={shapeStyle}
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
      style={shapeStyle}
      className="miniWhiteCircle"
      width="641"
      height="641"
      viewBox="0 0 641 641"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="320.5" cy="320.5" r="320.5" fill="#CECECE" />
    </svg>
  </>
);

export default HeroShapes;
