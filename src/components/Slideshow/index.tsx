import React, { useState, useEffect } from "react";
import "./index.css";

const videos = [
  "https://cdn.pixabay.com/video/2023/09/05/179212-861403629_large.mp4",
  "https://cdn.pixabay.com/video/2022/09/20/131919-751934626_large.mp4",
  "https://cdn.pixabay.com/video/2023/05/31/165303-832460158_large.mp4"
];

const Slideshow: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoKey, setVideoKey] = useState(0);

  useEffect(() => {
    const videoElement = document.getElementById("slideshow-video") as HTMLVideoElement;
    const handleVideoEnded = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setVideoKey((prevKey) => prevKey + 1);
    };

    videoElement.addEventListener("ended", handleVideoEnded);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, [currentVideoIndex]);

  return (
    <div className="slideshow-container">
      <video controls autoPlay muted id="slideshow-video" key={videoKey}>
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Slideshow;
