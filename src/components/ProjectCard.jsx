import React from "react";
import "../css/projectcard.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";

const ProjectCard = ({ project }) => {
  const { title, url, image, subtitle } = project;

  return (
      <FadeInOnScroll initial={{ opacity: 0, y: 100 }}
        animation={{ opacity: 1, y: 0 }}
        duration={1.2}>
        <div className="project-card">
        {/* Project Image */}
        <div className="project-image-container">
          <img src={"/" + image} alt={title} className="project-image" />
        </div>

        {/* Title & Subtitle */}
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <p className="project-subtitle">{subtitle}</p>
        </div>

        {/* Bottom Buttons */}
        <div className="project-buttons">
          <button className="btn more-btn">View More</button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn live-btn"
          >
            Live Demo
          </a>
        </div>
      </div>
      </FadeInOnScroll>
  );
};

export default ProjectCard;
