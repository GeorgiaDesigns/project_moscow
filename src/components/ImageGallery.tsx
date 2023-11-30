import styled from "styled-components";
import { useState } from "react";
import { Image } from "../types/content";
import Carousel from "react-simply-carousel";
import { ArrowDown } from "./Content/ArrowDown";

const Images = styled.img`
  height: 73vh;
  width: 83vw;
  object-fit: scale-down;
`;

type ImageGalleryProps = {
  content: Image[];
};

const ImageGallery = ({ content }: ImageGalleryProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Carousel
      containerProps={{
        style: {
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        },
      }}
      preventScrollOnSwipe
      swipeTreshold={60}
      activeSlideIndex={activeSlide}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        children: <ArrowDown rotated size="small" />,
        style: {
          display: "none",
        },
      }}
      backwardBtnProps={{
        children: <ArrowDown rotated size="small" />,
        style: {
          display: "none",
        },
      }}
      dotsNav={{
        show: true,
        itemBtnProps: {
          style: {
            borderColor: "#fa4a7f",
            height: "1.5rem",
            width: "1.5rem",
            borderRadius: "50%",
            margin: "0 0.5rem",
          },
        },
        activeItemBtnProps: {
          style: {
            margin: "0 0.5rem",
            backgroundColor: "#fa4a7f",
          },
        },
      }}
      itemsToShow={1}
      itemsToScroll={1}
      speed={400}
      centerMode
    >
      {content.map((q, index) => (
        <Images key={index} src={q.file}></Images>
      ))}
    </Carousel>
  );
};

export default ImageGallery;
