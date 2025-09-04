import React from "react";
import { useSelector } from "react-redux";
import "../css/my_project.css"; // CSS alag se

const MyProject = ({ project }) => {
  const theme = useSelector((state) => state.theme.value); // true = light, false = dark

  return (
    <div className={`myproject-card ${theme ? "light" : "dark"}`}>
      <img src={project.image} alt={project.title} className="myproject-img" />
      <h3 className="myproject-title">{project.title}</h3>
      <p className="myproject-subtitle">{project.subtitle}</p>
      <p className="myproject-desc">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="myproject-btn"
      >
        Visit Project
      </a>
    </div>
  );
};

export default MyProject;
