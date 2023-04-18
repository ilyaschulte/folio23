// ProjectBox.js
import React, { useState, useRef, useEffect } from "react";

const ProjectBox = ({ media, onMediaClick, currentMediaIndex, isMobile }) => {
  const [cursorLabel, setCursorLabel] = useState("");
  const cursorLabelRef = useRef(null);

  const handleClick = () => {
    if (onMediaClick) {
      onMediaClick();
    }
  };

  const handleMouseEnter = () => {
    setCursorLabel("Next");
  };

  const handleMouseLeave = () => {
    setCursorLabel("");
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorLabelRef.current) {
        cursorLabelRef.current.style.left = `${e.pageX}px`;
        cursorLabelRef.current.style.top = `${e.pageY}px`;
      }
    };

    if (cursorLabel) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorLabel]);

  const mediaStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  const projectBoxStyle = {
    width: isMobile ? "100vw" : "60vh",
    height: isMobile ? "100vw" : "60vh",
    overflow: "hidden",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: cursorLabel ? "none" : "default",
  };

  const cursorLabelStyle = {
    position: "fixed",
    fontFamily: "SuisseIntl, sans-serif",
    fontSize: "14px",
    color: "black",
    pointerEvents: "none",
  };

  const currentItem = media[currentMediaIndex];
  const isVideo = currentItem.fields.file.contentType.startsWith("video");

  return (
    <>
      <div
        className="project-box"
        style={projectBoxStyle}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isVideo ? (
          <video
            src={currentItem.fields.file.url}
            alt={currentItem.fields.title}
            style={mediaStyle}
            loop
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
      {cursorLabel && (
        <div style={cursorLabelStyle} ref={cursorLabelRef}>
          {cursorLabel}
        </div>
      )}
    </>
  );
};

export default ProjectBox;
