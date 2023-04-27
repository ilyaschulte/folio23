import React, { useState, useRef, useEffect } from "react";


const ProjectBox = ({ media, onMediaClick, currentMediaIndex }) => {
  const [cursorLabel, setCursorLabel] = useState("");
  const cursorLabelRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorLabelRef.current) {
        cursorLabelRef.current.style.left = `${e.pageX - 10}px`;
        cursorLabelRef.current.style.top = `${e.pageY - 5}px`;
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

  const handleClick = () => {
    if (onMediaClick) {
      onMediaClick();
    }
  };

  const handleMouseEnter = (e) => {
    if (!isMobile) {
      setCursorLabel("NEXT");
      if (cursorLabelRef.current) {
        cursorLabelRef.current.style.left = `${e.pageX - 10}px`;
        cursorLabelRef.current.style.top = `${e.pageY - 5}px`;
      }
    }
  };

  const handleMouseLeave = () => {
    setCursorLabel("");
  };

  const mediaStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  const projectBoxStyle = {
    width: isMobile ? 'calc(100vw - 10px)' : "50vh",
    height: isMobile ? 'calc(100vw - 10px)' : "50vh",
    overflow: "hidden",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: cursorLabel && media.length > 1 ? "none" : "default",
  };  

  const cursorLabelStyle = {
    position: "fixed",
    fontSize: "11px",
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
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={handleMouseLeave}
      >
        {isVideo ? (
          <video
            src={currentItem.fields.file.url}
            alt={currentItem.fields.title}
            style={mediaStyle}
            loop
            autoPlay
            playsInline
            controls={false}
          />
        ) : (
          <img
            src={currentItem.fields.file.url}
            alt={currentItem.fields.title}
            style={mediaStyle}
          />
        )}
      </div>
      {cursorLabel && media.length > 1 && (
        <div style={cursorLabelStyle} ref={cursorLabelRef}>
          {cursorLabel}
        </div>
      )}
    </>
  );
};

export default ProjectBox;
