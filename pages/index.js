import React, { useState, useEffect } from "react";
import { client } from "../lib/contentful";
import ProjectBox from "../components/ProjectBox";
import ProjectInfo from "../components/ProjectInfo";
import SocialButtons from "../components/SocialButtons";
import styles from "../styles/TitleAnimation.module.css";

const Home = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [scrollCooldown, setScrollCooldown] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  const [titleVisible, setTitleVisible] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * projects.length);
    setCurrentProject(randomIndex);
    const timer = setTimeout(() => setTitleVisible(false), 2000);
    console.log("%cCODE by ILYA SCHULTE in collaboration with GPT-4 💕", "color: #ff0000; background-color: black; font-size: 14px; font-family: 'SuisseIntl', sans-serif;");
    if (typeof window !== "undefined") {
      window.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return () => clearTimeout(timer);
  }, []);

  const handleMediaClick = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % projects[currentProject].fields.media.length);
  };

  const playClickSound = async (audioContext) => {
    if (typeof window === "undefined") return;

    const response = await fetch("/click.mp3");
    const audioBuffer = await response.arrayBuffer();
    const decodedAudioData = await audioContext.decodeAudioData(audioBuffer);
    const soundSource = audioContext.createBufferSource();
    soundSource.buffer = decodedAudioData;
    soundSource.connect(audioContext.destination);
    soundSource.start();
  };

  const handleWheel = (e) => {
    if (scrollCooldown) return;

    playClickSound(window.audioContext);

    if (e.deltaY > 0) {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    }
    setCurrentMediaIndex(0);

    setScrollCooldown(true);
    setTimeout(() => setScrollCooldown(false), 150);
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const deltaY = touchStartY - e.changedTouches[0].clientY;

    if (Math.abs(deltaY) < 50) return;

    playClickSound(window.audioContext);

    if (deltaY > 0) {
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
  }, []);

  const project = projects[currentProject];

  return (
    <>
      {titleVisible && <div className={styles.title}>SCROLL</div>}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundColor: "white",
          overflow: "hidden",
        }}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {project && (
          <>
            <ProjectBox
              media={project.fields.media}
              onMediaClick={handleMediaClick}
              currentMediaIndex={currentMediaIndex}
            />

            <ProjectInfo
              title={project.fields.title}
              description={project.fields.description}
              credits={project.fields.credit}
              isMobile={false}
            />
          </>
        )}

        <SocialButtons />
      </div>
    </>
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
    revalidate: 60, // Regenerate the page every 60 seconds in the background
  };
}

export default Home;

