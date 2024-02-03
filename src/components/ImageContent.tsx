import styled from "styled-components";
import { Image } from "../types/content";
import { useState } from "react";
import ImageExpand from "./ImageExpand";

type ImageProps = {
  data: Image;
};

const Img = styled.img`
  cursor: pointer;
`;

const ImageContent = ({ data }: ImageProps) => {
  const [expanded, setExpanded] = useState(false);
  console.log(expanded);
  return (
    <>
      <Img onClick={() => setExpanded(!expanded)} src={data.file}></Img>
      {expanded && <ImageExpand data={data} />}
    </>
  );
};

export default ImageContent;
