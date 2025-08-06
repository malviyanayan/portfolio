import React from "react";
import "../css/projectcard.css";

const ProjectCard = ({ project }) => {
  const { title, url, image, subtitle, description, tech } = project;

  return (
    <div className="project-card">
      {/* Image */}
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>

      {/* Title + Subtitle */}
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <p className="project-subtitle">{subtitle}</p>
      </div>

      {/* Description */}
      <p className="project-description">{description}</p>

      {/* Tech Stack */}
      <div className="tech-stack">
        {Object.keys(tech).map((category) =>
          tech[category]?.length ? (
            <div key={category} className="tech-category">
              <span className="category-label">{category}:</span>
              <ul>
                {tech[category].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>

      {/* Buttons */}
      <div className="project-buttons">
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn live-btn">
          Live Demo
        </a>
        <button className="btn more-btn">View More</button>
      </div>
    </div>
  );
};

export default ProjectCard;
