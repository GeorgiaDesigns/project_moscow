import { Image } from "../types/content";

type ImageProps = {
  data: Image;
};

const ImageContent = ({ data }: ImageProps) => {
  return <img src={data.file}></img>;
};

export default ImageContent;
