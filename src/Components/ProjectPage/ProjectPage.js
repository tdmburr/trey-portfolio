import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import projects from '../../Data/ProjectData';
import './ProjectPage.css';

const ProjectPage = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const rotationInterval = setInterval(() => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 5000);

      return () => clearInterval(rotationInterval);
    }
  }, [isHovered]);

  const backgroundStyle = isHome
    ? {}
    : {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backgroundSize: 'cover',
      };

  const goToPreviousProject = () => {
    setCurrentProjectIndex((currentProjectIndex - 1 + projects.length) % projects.length);
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
  };

  return (
    <div className="center-container" style={backgroundStyle}>
      {projects.map((project, index) => (
        <div
          className={`project-card ${index === currentProjectIndex ? 'visible' : ''}`}
          key={index}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="previous-button" onClick={goToPreviousProject}>
            &larr; Previous
          </button>
          <button className="next-button" onClick={goToNextProject}>
            Next &rarr;
          </button>
          <h2>{project.title}</h2>
          <img src={project.img} alt={project.title} />
          <div className="project-description">
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              Live Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;