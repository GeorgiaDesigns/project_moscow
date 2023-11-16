import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { Image } from "../types/content";
import ImageContent from "./ImageContent";

type TestimonialProps = {
  left: number;
};

const GallerySlider = styled.div<TestimonialProps>`
  display: flex;
  overflow: hidden;
  gap: 9rem;

  img {
    ${({ left }) =>
      css`
        left: -${left * 20}rem;
      `}
    transition: left 1s;
    height: 33rem;
    position: relative;
  }

  svg {
    width: 65%;
  }
`;

type IndicatorProps = {
  active: boolean;
};

const Indicator = styled.button<IndicatorProps>`
  ${({ active }) =>
    active &&
    css`
      background-color: #fa4a7f;
    `}

  border-radius: 50%;
  border-color: #fa4a7f;
  height: 1.5rem;
  width: 1.5rem;
`;

const IndicatorBox = styled.div`
  display: flex;
  justify-content: center;
  height: 5rem;
  gap: 1rem;
`;

type ImageGalleryProps = {
  content: Image[];
};

const ImageGallery = ({ content }: ImageGalleryProps) => {
  const [left, setLeft] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setLeft(1);
  //   }, 3000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div>
      <GallerySlider left={left}>
        {content.map((q) => (
          <ImageContent data={q} />
        ))}
      </GallerySlider>
      <IndicatorBox>
        {content.map((q) => (
          <Indicator
            active={left === q.id}
            id={q.id.toString()}
            onClick={() => setLeft(q.id)}
          />
        ))}
      </IndicatorBox>
    </div>
  );
};

export default ImageGallery;
