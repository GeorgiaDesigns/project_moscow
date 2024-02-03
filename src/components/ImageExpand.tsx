import styled from "styled-components";
import { Image } from "../types/content";
import theme from "../styles/theme";

type ImageProps = {
  data: Image;
};

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: ${theme.colors.primaryLight};
  border-radius: 3rem;
  width: 90%;
  height: 90%;
`;

const CloseTag = styled.div`
  background-color: ${theme.colors.primaryLight};
  border-radius: 3rem;
`;

const ImageExpand = ({ data }: ImageProps) => {
  return (
    <Overlay>
      <Container>
        <CloseTag>X</CloseTag>
        <img src={data.file}></img>;
      </Container>
    </Overlay>
  );
};

export default ImageExpand;
