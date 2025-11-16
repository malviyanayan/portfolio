import React, { useState } from "react";
import "../css/projectcard.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import { Modal, Carousel } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  const { title, url, image, subtitle } = project;
  const [show, setShow] = useState(false);
  let temp = null;
  if (url != null) {
    temp = (
      <a href={project.url} className="btn more-btn px-2 py-1">
        <i className="fa-solid fa-arrow-up-right-from-square icon-btn"></i>
      </a>
    );
  }

  let gthb = null;
  if (project.github != null) {
    gthb = (
      <a
        href={`https://github.com/malviyanayan/${project.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn live-btn d-flex align-items-center mt-0 gap-2 fw-bold px-2 py-1"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    );
  }

  return (
    <>
      <FadeInOnScroll
        initial={{ opacity: 0, y: 100 }}
        animation={{ opacity: 1, y: 0 }}
        duration={1.2}
      >
        <div className="project-card">
          {/* Project Image */}
          <div className="project-image-container p-0">
            <img
              src={"/" + image}
              alt={title}
              className="project-image img-thumbnail m-0"
            />
          </div>

          {/* Title & Subtitle */}
          <div className="project-header">
            <span
              className={`postion-absolute z-3 bg-dark ms-1 ${
                project.status == "Ongoing" ? "text-warning" : ""
              } ${project.status == "OnHold" ? "text-danger" : " "}`}
              style={{
                right: "10px",
                top: "10px",
                padding: "4px 8px",
                borderRadius: "5px",
                color: "#00f2fe",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {project.status}
            </span>
            <h3 className="project-title">{title}</h3>
            <p className="project-subtitle">{subtitle}</p>
          </div>

          {/* Bottom Buttons */}
          <div className="project-buttons">
            {temp}
            <button
              className="btn more-btn px-2 py-1"
              onClick={() => setShow(true)}
            >
              <i className="bi bi-arrows-expand fw-bolder"></i>
            </button>
            {gthb}
          </div>
        </div>
      </FadeInOnScroll>

      <Modal
        show={show}
        size="lg"
        scrollable={true}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title className="my-1 fw-bold">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex justify-content-center">
            <Carousel interval={3000} style={{ width: "70%" }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"/" + image}
                  alt="Slide 1"
                />
              </Carousel.Item>

              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"/" + image}
                  alt="Slide 2"
                />
              </Carousel.Item> */}

              

            </Carousel>
          </div>
          <div className="px-3 mt-4">
            <h4 className="fw-bolder text-center">{project.title}</h4>
            <h5 className="text-center">{project.subtitle}</h5>

            <div className="link-icons fs-4 d-flex justify-content-center gap-4">
              {gthb}
              {temp}
            </div>

            <hr />

            <p>
              <span className="fs-6  fw-bolder">Description : </span>
              {project.description}
            </p>

            <hr />

            <h5 className="fw-bolder text-center">Tech Stack</h5>
            <div className="tech-box">
              <ul>
                {project.tech.map((skill) => (
                  <li key={skill.name}>
                    <img src={skill.img} alt={skill.name} /> {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
