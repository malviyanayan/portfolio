import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import { useSelector } from "react-redux";

export default function Projects() {
  const theme = useSelector((state) => state.theme.value); // true = light, false = dark

  const projects = [
    {
      title: "E Learning Plateform",
      url: "https://learnify-8pya.onrender.com/",
      github: "Learnify_E_Learning_Plateform",
      image: "projects/learnify.png",
      tech: {
        frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        backend: ["Advanced Java"],
        database: [],
        other: "",
      },
      subtitle:
        "Full Stack E-Learning Platform for Students and Trainers",
      description:
        "This project is a comprehensive e-learning platform that allows students to enroll in courses, track their individual progress, and take notes while learning. Built using Advanced Java and Bootstrap, the platform ensures a smooth user experience with features like chapter navigation, interactive sessions, and responsive layouts. It includes user registration, authentication, and a clean dashboard for managing content efficiently.",
    },
    {
      title: "Smilora-Dental Website",
      url: "https://dofocus.netlify.app/",
      github: "smilora",
      image: "projects/smilora.png",
      tech: {
        frontend: ["HTML","CSS", "JavaScript", "React", "Bootstrap"],
        backend: ["Advanced Java"],
        database: [],
        other: "",
      },
      subtitle: "A Dental Websie for patient appointment and services.",
      description:
        "DoFocus is a productivity-focused tool designed to help users build daily habits and monitor personal progress. It includes a challenge-based tracker system, customizable to-do list, and personal notes section. Built using React and styled with Bootstrap, the app supports local storage and smooth transitions for better usability. Ideal for self-discipline and routine-building enthusiasts looking to stay organized.",
    },
    {
      title: "My Portfolio Website",
      url: "https://nayanmalviya.netlify.app",
      github: "portfolio",
      image: "projects/porfolio.png",
      tech: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        database: [],
        other: "",
      },
      subtitle: "A React and Redux-based personal portfolio website that showcases my work.",
      description:
        "My personal portfolio website showcases my technical skills, professional background, and key projects. The site is built with clean HTML, CSS, and JavaScript, featuring modern UI components, smooth scrolling, and responsive design. It includes sections such as About, Skills, Projects, and Contact. This website serves as a gateway for recruiters and collaborators to understand my capabilities and reach out.",
    },
  ];

  return (
    <section
      className={`projects-section ${theme ? "projects-light" : "projects-dark"}`}
      id="projects"
    >
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} theme={theme} />
        ))}
      </div>

      {/* <FadeInOnScroll>
        <div className="right-btn-container">
          <button className={`right-btn ${theme ? "btn-light-mode" : "btn-dark-mode"}`}>
            More Projects...
          </button>
        </div>
      </FadeInOnScroll> */}
    </section>
  );
}



