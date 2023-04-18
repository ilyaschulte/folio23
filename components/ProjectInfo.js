// components/ProjectInfo.js
import React, { useEffect, useState } from "react";

const ProjectInfo = ({ title, description, credits, isMobile }) => {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    setShowDescription(false);
    const timeoutId = setTimeout(() => {
      setShowDescription(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [title]);

  const titleStyle = {
    fontSize: "11px",
    position: isMobile ? "fixed" : "fixed",
    padding: "0px",
    width: "600px",
    textAlign: "left",
    fontFamily: "SuisseIntl-Book",
    width: isMobile ? "100%" : "auto",
  };

  const descriptionStyle = {
    fontSize: "11px",
    opacity: showDescription ? 0.5 : 0,
    transition: showDescription ? "opacity 1s" : "none",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    paddingTop: "5px",
  };

  const creditsStyle = {
    fontSize: "11px",
    fontFamily: "SuisseIntl-BookItalic",
    opacity: showDescription ? 0.25 : 0,
    transition: showDescription ? "opacity 1s" : "none",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    paddingTop: "5px",
  };

  return (
    <div style={titleStyle}>
      <div>{title}</div>
      <div style={descriptionStyle}>{description}</div>
      <div style={creditsStyle}>{credits}</div>
    </div>
  );
};

export default ProjectInfo;
