import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <section className="videoSection">
      {!isVideoOpen ? (
        <div className="imageContainer">
          <div className="borderWrapper">
            <img
              src={`${process.env.PUBLIC_URL}/aboutUs/aboutVideo.jpg`}
              className="aboutVideoImg"
              alt="aboutVideoImg"
            />
            <div className="pulsingRing"></div>
            <FontAwesomeIcon
              icon={faPlayCircle}
              className="videoIcon"
              onClick={handlePlayClick}
            />
          </div>
          <div className="headingVideoBox">
            <h2 className="headingVideo">
              <span className="headingVideoBlue">See what we do for the</span>{" "}
              <span className="headingVideoGreen">
                {" "}
                poor people and the children
              </span>
            </h2>
          </div>
        </div>
      ) : (
        <div className="videoContainer">
          <div className="videoOverlay" onClick={handleCloseVideo}></div>
          <iframe
            src="https://www.youtube.com/embed/iSbzh0r9IV4"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Video;
