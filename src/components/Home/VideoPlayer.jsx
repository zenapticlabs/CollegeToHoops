import React, { useRef } from "react";

const VideoPlayer = ({ videoUrl, description = "", influencerName = "", poster= "" }) => {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  const handlePlay = () => {
    const allVideos = document.querySelectorAll("video");
    const allOverlays = document.querySelectorAll(".video-overlay");

    allVideos.forEach((vid) => {
      if (vid !== videoRef.current) {
        vid.pause();
      }
    });

    allOverlays.forEach((overlay) => {
      if (overlay !== overlayRef.current) {
        overlay.style.display = "flex";
      }
    });

    if (videoRef.current.paused) {
      videoRef.current.play();
      overlayRef.current.style.display = "none";
    } else {
      videoRef.current.pause();
      overlayRef.current.style.display = "flex";
    }
  };

  return (
    <div
      className="relative w-full h-auto rounded-xl overflow-hidden"
      onClick={handlePlay}
    >
      <video ref={videoRef} poster={poster} className="w-full">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div ref={overlayRef} className="overlay video-overlay">
        <img
          src="./assets/play-opacity.svg"
          alt="play"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        {(description || influencerName) && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-end bg-gradient-to-b from-transparent to-black text-white text-base p-4 leading-normal">
            {description && (
              <p className="mb-2 relative after:content-[url('../../public/assets/square-quot.svg')] after:absolute after:left-[-20px] after:top-[-40px] max-lg:text-[16px] max-lg:font-normal">
                {description}
              </p>
            )}
            {influencerName && <span>{influencerName}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
