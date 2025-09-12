import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import "../css/my_project.css";

const MyProject = ({ project }) => {
  const theme = useSelector((state) => state.theme.value); // true = light, false = dark

  return (
    <div className={`myproject-card ${theme ? "light" : "dark"}`}>

      <h1>jai ho</h1>

      {/* Carousel */}
      <div className="myproject-carousel">
        <Carousel autoplay dots autoplaySpeed={5000} adaptiveHeight>
          {project.images?.map((img, i) => (
            
            <div key={i}>
              <img
                src={img}
                alt={`${project.title}-${i}`}
                className="img-fluid w-100 myproject-img"
              />
            </div>
          )) || (
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid w-100 myproject-img"
              />
            </div>
          )}
        </Carousel>
      </div>

      {/* Text Content */}
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
