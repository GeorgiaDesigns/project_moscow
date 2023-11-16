// import { LocalContentItemDataStorage } from 'hooks/useSidebar'
import { useEffect, useRef, useState } from "react";
import { findIndex, findLastIndex } from "lodash";

import { Image } from "../types/content";

// import { ArrowLeft } from '../../SimpleComponents/Icons/arrow-left'
// import { ArrowRight } from '../../SimpleComponents/Icons/arrow-right'

// import Typography from '../../SimpleComponents/Typography'

// import * as S from './styles'

export type GalleryProps = {
  items: Image[];
};

const Gallery = ({ items }: GalleryProps) => {
  const [activeId, setActiveId] = useState<string>();
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const carouselItemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const handleClickOnThumb = (id: string) => {
    setActiveId(id);
  };

  const scrollIntoView = (el: HTMLButtonElement | null) => {
    if (!el) return;

    el.scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
  };

  const handleArrow = (index: number) => {
    if (index < 0) return;
    if (items && items.length && carouselItemsRef?.current[index]) {
      scrollIntoView(carouselItemsRef?.current[index]);
    }
  };

  const handleArrowRight = () => {
    if (items && items.length > 0) {
      let newIdx = findIndex(
        [...carouselItemsRef?.current],
        (el) => !isElementVisible(el),
        visibleIndex
      );

      if (newIdx < 0) {
        newIdx = items.length + 1;
      }

      setVisibleIndex(newIdx);
      handleArrow(newIdx);
    }
  };

  const handleArrowLeft = () => {
    if (items && items.length > 0) {
      let newIdx = findLastIndex(
        [...carouselItemsRef?.current],
        (el) => !isElementVisible(el),
        visibleIndex
      );

      if (newIdx < 0) newIdx = 0;
      setVisibleIndex(newIdx);
      handleArrow(newIdx);
    }
  };

  const isElementVisible = (elem: HTMLElement | null) => {
    if (!elem) return false;

    if (
      elem.offsetWidth +
        elem.offsetHeight +
        elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width ===
      0
    ) {
      return false;
    }
    const elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
    };
    if (elemCenter.x < 0) return false;
    if (
      elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)
    )
      return false;
    if (elemCenter.y < 0) return false;
    if (
      elemCenter.y >
      (document.documentElement.clientHeight || window.innerHeight)
    )
      return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
      if (pointContainer === elem) return true;
    } while ((pointContainer = pointContainer?.parentNode as Element));
    return false;
  };

  useEffect(() => {
    if (!items.length) return;
    setActiveId(items[0].id);
  }, [items]);

  return (
    <S.Wrapper>
      <S.GalleryMedia>
        <S.GalleryActiveMedia>
          {items &&
            items.filter((item) => item.type === "image") &&
            items.map((item) => {
              if (item.id.toString() === activeId) {
                return (
                  <img key={item.id} src={item.preview} alt={item.title} />
                );
              }
            })}
        </S.GalleryActiveMedia>

        <S.GalleryThumbnailsWrapper>
          <S.GalleryThumbnails>
            <S.GalleryArrows>
              <S.GalleryArrowRight onClick={handleArrowRight}>
                <ArrowLeft />
              </S.GalleryArrowRight>
              <S.GalleryArrowLeft onClick={handleArrowLeft}>
                <ArrowRight />
              </S.GalleryArrowLeft>
            </S.GalleryArrows>

            {items &&
              items
                .filter((item) => item.type === "image")
                .map((item, index) => {
                  return (
                    <S.GalleryThumbnail
                      isActive={activeId === item.id ? true : false}
                      key={`thumb-${item.id}`}
                      onClick={() => handleClickOnThumb(item.id)}
                      ref={(el) => (carouselItemsRef.current[index] = el)}
                    >
                      <img key={`thumb-image-${item.id}`} src={item.file} />
                    </S.GalleryThumbnail>
                  );
                })}
          </S.GalleryThumbnails>
        </S.GalleryThumbnailsWrapper>
      </S.GalleryMedia>
    </S.Wrapper>
  );
};

export default Gallery;
