// components/ProjectBox.js
import React from "react";

const ProjectBox = ({ media, onMediaClick, currentMediaIndex, isMobile }) => {
  const handleClick = () => {
    if (onMediaClick) {
      onMediaClick();
    }
  };

  const mediaStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  const currentItem = media[currentMediaIndex];
  const isVideo = currentItem.fields.file.contentType.startsWith("video");

  const projectBoxStyle = {
    width: isMobile ? "100vw" : "35vw",
    height: isMobile ? "100vw" : "35vw",
    overflow: "hidden",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      className="project-box"
      style={projectBoxStyle}
      onClick={handleClick}
    >
      {isVideo ? (
        <video
          src={currentItem.fields.file.url}
          alt={currentItem.fields.title}
          style={mediaStyle}
          loop
          muted
          autoPlay
        />
      ) : (
        <img
          src={currentItem.fields.file.url}
          alt={currentItem.fields.title}
          style={mediaStyle}
        />
      )}
    </div>
  );
};

export default ProjectBox;
