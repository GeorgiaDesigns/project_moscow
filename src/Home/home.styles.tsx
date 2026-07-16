import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

// Remove sticky positioning and let ScrollTrigger handle pinning
export const Tagline = styled(Section)`
  position: relative; /* Changed from sticky */
  opacity: 0;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.canvasDark};
  font-size: 10rem;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Ensure this section doesn't interfere with others */
  margin: 0;
  padding: 0;
`;

export const Overlay = styled.img`
  position: fixed;
  opacity: 0.1;
  z-index: 10; /* Fixed typo: was z-indez */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Allow clicks to pass through */
`;

export const Projects = styled(Section)`
  position: relative; /* Changed from sticky */
  z-index: 20;
  width: 100%; /* Changed from fit-content */
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) =>
    theme.colors.sectionDark}; /* covers previous sections */
`;

export const Canvas = styled.canvas`
  position: fixed; /* Changed from absolute */
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-width: none; /* Remove max constraints */
  max-height: none;
`;

// Add a wrapper for better scroll behavior
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

// Add spacer for scroll distance
export const ScrollSpacer = styled.div`
  height: 400vh; /* This creates the scroll distance for the animation */
  position: relative;
  pointer-events: none;
`;