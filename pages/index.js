// pages/index.js
import React, { useState } from "react";
import { client } from "../lib/contentful";
import ProjectBox from "../components/ProjectBox";
import ProjectInfo from "../components/ProjectInfo";
import InquiriesButton from "../components/InquiriesButton";

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

const Home = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [scrollCooldown, setScrollCooldown] = useState(false);

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

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
      onWheel={handleWheel}
    >
      <ProjectBox
        media={projects[currentProject].fields.media}
        onMediaClick={handleMediaClick}
        currentMediaIndex={currentMediaIndex}
      />
      <ProjectInfo
        title={projects[currentProject].fields.title}
        description={projects[currentProject].fields.description}
        credits={projects[currentProject].fields.credit}
        isMobile={false}
      />
      <InquiriesButton />
    </div>
  );
};

export default Home;
