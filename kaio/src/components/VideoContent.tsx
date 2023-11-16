import { Video } from "../types/content";

type VideoProps = {
  data: Video;
};

const VideoContent = ({ data }: VideoProps) => {
  return (
    <video autoPlay muted>
      <source src={data.path} type="video/mp4" />
    </video>
  );
};

export default VideoContent;
