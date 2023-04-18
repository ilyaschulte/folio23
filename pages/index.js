// pages/index.js
import React, { useState, useEffect } from "react";
import { client } from "../lib/contentful";
import ProjectBox from "../components/ProjectBox";
import ProjectInfo from "../components/ProjectInfo";
import SocialButtons from "../components/SocialButtons";

const Home = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [scrollCooldown, setScrollCooldown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isIntro, setIsIntro] = useState(true);

  const handleMediaClick = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % projects[currentProject].fields.media.length);
  };

  const handleWheel = (e) => {
    if (scrollCooldown) return;

    if (e.deltaY > 0) {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    }
    setCurrentMediaIndex(0);

    setScrollCooldown(true);
    setTimeout(() => setScrollCooldown(false), 150);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * projects.length);
    setCurrentProject(randomIndex);

    setTimeout(() => {
      setIsIntro(false);
      setIsLoading(false);
    }, 1000);
  }, []);

  const project = projects[currentProject];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        backgroundColor: isIntro ? "black" : "white",
        overflow: isIntro ? "hidden" : "scroll",
      }}
      onWheel={isIntro ? null : handleWheel}
    >
      {isLoading && (
        <div
          style={{
            position: "fixed", 
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ color: "white" }}>ILYA SCHULTE 2023</div>
        </div>
      )}

      {!isLoading && (
        <>
          <ProjectBox
            media={project.fields.media}
            onMediaClick={handleMediaClick}
            currentMediaIndex={currentMediaIndex}
            isIntro={isIntro}
          />

          <ProjectInfo
            title={project.fields.title}
            description={project.fields.description}
            credits={project.fields.credit}
            isMobile={false}
            isIntro={isIntro}
          />

          <SocialButtons />
        </>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: "project",
    select: "fields.title,fields.media,fields.description,fields.credit",
  });

  return {
    props: {
      projects: response.items,
    },
  };
}

export default Home;
