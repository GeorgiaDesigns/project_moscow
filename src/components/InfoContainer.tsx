import styled, { css } from "styled-components";

type TextContainerProps = {
  isTextOnLeft: boolean;
};

const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  align-items: flex-start;
  gap: 7rem;
  padding: 0 7rem;

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
    font-size: 1rem;
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

const Img = styled.img`
  height: 25.85rem;
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
      <Img src={imageUrl} alt="Image" />
    </TextContainer>
  );
};

export default InfoContainer;
