import styled, { css } from "styled-components";

type TextContainerProps = {
  isTextOnLeft: boolean;
};

const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  align-items: flex-start;

  ${({ isTextOnLeft }) =>
    isTextOnLeft &&
    css`
      flex-direction: row-reverse;
    `}

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
