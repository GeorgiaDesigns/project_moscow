import styled, { css } from "styled-components";

type TextContainerProps = {
  isTextOnLeft: boolean;
};

const TextContainer = styled.div<TextContainerProps>`
  /* Common styles for both cases */
  display: flex;
  align-items: flex-start;
  gap: 7rem;

  ${({ isTextOnLeft }) =>
    isTextOnLeft &&
    css`
      flex-direction: row-reverse;
    `}

  .text {
    flex: 1;
    padding: 20px;
    max-width: 51rem;
  }

  .text p {
    text-align: left;
  }

  .image {
    flex: 1;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const ImgContainer = styled.div<TextContainerProps>`
  height: 25.85rem;
  ${({ isTextOnLeft }) =>
    isTextOnLeft
      ? css`
          transform: rotate(-3.651deg);
        `
      : css`
          transform: rotate(3.651deg);
        `}
  flex-shrink: 0;
  padding: 1.5rem;
  background: #f7f7f5;
  box-shadow: 1.188px 1.188px 11.88px 0px rgba(69, 69, 104, 0.25);
`;

const Img = styled.img`
  width: 18.925rem;
  height: 20.925rem;
  flex-shrink: 0;
`;

type InfoContainerProps = {
  text: string | JSX.Element;
  imageUrl: string;
  isTextOnLeft: boolean;
};

const InfoContainer = ({
  text,
  imageUrl,
  isTextOnLeft,
}: InfoContainerProps) => {
  return (
    <TextContainer isTextOnLeft={isTextOnLeft}>
      <div className="text">
        <p>{text}</p>
      </div>
      <ImgContainer isTextOnLeft={isTextOnLeft}>
        <Img src={imageUrl} alt="Image" />
      </ImgContainer>
    </TextContainer>
  );
};

export default InfoContainer;
