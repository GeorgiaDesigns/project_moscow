import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: 100vh;
  top: 0;
  overflow: hidden;
`;

export const Tagline = styled(Section)`
  position: sticky;
  opacity: 0;
  z-index: 5;
  background-color: #252525;
  font-size: 10rem;
  height: 300vh;
  color: #fff;
  overflow: hidden;
`;

export const Overlay = styled.img`
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

export const Projects = styled(Section)`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
`;

export const Canvas = styled.canvas`
  position: absolute;
  z-index: 1;
  max-width: 100vw;
  max-height: 100vh;
`;
