import { Video } from "../types/content";
import { useState, useRef, RefObject } from "react";

type VideoProps = {
  data: Video;
};

const VideoContent = ({ data }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef: RefObject<HTMLVideoElement> = useRef(null);

  const togglePlay = () => {
    if (videoRef.current == null) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <video ref={videoRef} autoPlay muted controls loop>
        <source src={data.path} type="video/mp4" />
      </video>
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
    </>
  );
};

export default VideoContent;
