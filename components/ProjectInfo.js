// components/ProjectInfo.js
import React, { useEffect, useState } from "react";

const ProjectInfo = ({ title, description, credits, isMobile, onTitleChange }) => {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    setShowDescription(false);
    const timeoutId = setTimeout(() => {
      setShowDescription(true);
    }, 500);

    if (onTitleChange) {
      onTitleChange();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [title, onTitleChange]);

  const containerStyle = {
    position: isMobile ? "fixed" : "fixed",
    width: "100%",
    textAlign: "left",
    fontFamily: "SuisseIntl-Book",
  };

  const titleStyle = {
    fontSize: "11px",
    padding: "0px",
  };

  const descriptionStyle = {
    fontSize: "11px",
    fontFamily: "SuisseIntl-BookItalic",
    opacity: showDescription ? 0.5 : 0,
    transition: showDescription ? "opacity 1s" : "none",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    paddingTop: "4px",
  };

  const creditsStyle = {
    fontSize: "11px",
    fontFamily: "SuisseIntl-Book",
    opacity: showDescription ? 0.5 : 0,
    transition: showDescription ? "opacity 1s" : "none",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    paddingTop: "4px",
    paddingBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={descriptionStyle}>{description}</div>
      <div style={creditsStyle}>{credits}</div>
    </div>
  );
};

export default ProjectInfo;
