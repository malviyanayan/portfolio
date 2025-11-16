import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import { useSelector } from "react-redux";
import { img } from "framer-motion/client";

export default function Projects() {
  const theme = useSelector((state) => state.theme.value); // true = light, false = dark

  const projects = [
    {
      title: "E Learning Plateform",
      url: null,
      github: "Learnify_E_Learning_Plateform",
      image: "projects/learnify.png",
      status: "Completed",
      tech: [
        {name: "HTML", img: "/skills/html.png"},
        {name: "CSS", img: "/skills/css.png"},
        {name: "JavaScript", img: "/skills/js.png"},
        {name: "Bootstrap", img: "/skills/bootstrap.png"},
        {name: "AJAX", img: "/skills/ajax.png"},
        {name: "JSP", img: "/skills/jsppng.png"},
        {name: "Servlet", img: "/skills/servlets.png"},
        {name: "JSTL", img: "/skills/jstl.png"},
        {name: "Custom Tags", img: "/skills/custom.png"},
        {name: "MYSQL", img: "/skills/mysql.png"},
      ],
      subtitle: "Full Stack E-Learning Platform for Students and Trainers",
      description:
        "This project is a comprehensive e-learning platform that allows students to enroll in courses, track their individual progress, and take notes while learning. Built using Advanced Java and Bootstrap, the platform ensures a smooth user experience with features like chapter navigation, interactive sessions, and responsive layouts. It includes user registration, authentication, and a clean dashboard for managing content efficiently.",
    },
    {
      title: "Smilora-Dental Website",
      url: "https://smilora.netlify.app/",
      github: "smilora",
      image: "projects/smilora.png",
      status: "Completed",
      tech: [
        {name: "HTML", img: "/skills/html.png"},
        {name: "CSS", img: "/skills/css.png"},
        {name: "JavaScript", img: "/skills/js.png"},
      ],
      subtitle: "A Dental Websie for patient appointment and services.",
      description:
        "DoFocus is a productivity-focused tool designed to help users build daily habits and monitor personal progress. It includes a challenge-based tracker system, customizable to-do list, and personal notes section. Built using React and styled with Bootstrap, the app supports local storage and smooth transitions for better usability. Ideal for self-discipline and routine-building enthusiasts looking to stay organized.",
    },
    {
      title: "My Portfolio Website",
      url: "https://nayan-malviya.netlify.app",
      github: "portfolio",
      image: "projects/porfolio.png",
      status: "Completed",
      tech: [
        {name: "React", img: "/skills/react.png"},
        {name: "Redux", img: "/skills/redux.png"},
        {name: "CSS", img: "/skills/css.png"},
        {name: "JavaScript", img: "/skills/js.png"},
        {name: "Bootstrap", img: "/skills/bootstrap.png"},
      ],
      subtitle:
        "A React and Redux-based personal portfolio website that showcases my work.",
      description:
        "My personal portfolio website showcases my technical skills, professional background, and key projects. The site is built with clean HTML, CSS, and JavaScript, featuring modern UI components, smooth scrolling, and responsive design. It includes sections such as About, Skills, Projects, and Contact. This website serves as a gateway for recruiters and collaborators to understand my capabilities and reach out.",
    },
    {
      title: "Interview Studio",
      url: null,
      github: null,
      image: "projects/interview_studio.png",
      status: "Ongoing",
      tech: [
        {name: "React", img: "/skills/react.png"},
        {name: "Redux", img: "/skills/redux.png"},
        {name: "CSS", img: "/skills/css.png"},
        {name: "Bootstrap", img: "/skills/bootstrap.png"},
        {name: "Spring Boot", img: "/skills/springboot.png"},
        {name: "Gemini", img: "/skills/gemini.png"},
        {name: "JPA", img: "/skills/api.png"},
        {name: "Hibername", img: "/skills/hibernate.svg"},
        {name: "MYSQL", img: "/skills/mysql.png"},
      ],
      subtitle:
        "A React and Redux-based personal portfolio website that showcases my work.",
      description:
        "My personal portfolio website showcases my technical skills, professional background, and key projects. The site is built with clean HTML, CSS, and JavaScript, featuring modern UI components, smooth scrolling, and responsive design. It includes sections such as About, Skills, Projects, and Contact. This website serves as a gateway for recruiters and collaborators to understand my capabilities and reach out.",
    },
    {
      title: "DoFocus",
      status: "OnHold",
      github: "dofocus",
      url: "https://dofocus.netlify.app/",
      image: "projects/dofocus.png",
      tech: [
        {name: "React", img: "/skills/react.png"},
        {name: "Redux", img: "/skills/redux.png"},
        {name: "CSS", img: "/skills/css.png"},
        {name: "Bootstrap", img: "/skills/bootstrap.png"},
        {name: "Spring Boot", img: "/skills/springboot.png"},
        {name: "JPA", img: "/skills/api.png"},
        {name: "Hibername", img: "/skills/hibernate.svg"},
        {name: "MYSQL", img: "/skills/mysql.png"},
      ],
      subtitle: "Daily challenge tracker with to-do list and personal notes.",
      description:
        "DoFocus is a productivity-focused tool designed to help users build daily habits and monitor personal progress. It includes a challenge-based tracker system, customizable to-do list, and personal notes section. Built using React and styled with Bootstrap, the app supports local storage and smooth transitions for better usability. Ideal for self-discipline and routine-building enthusiasts looking to stay organized.",
    },
    {
      title: "Weather App",
      url: "https://skysence.netlify.app",
      image: "projects/weather.png",
      status: "Completed",
      github : 'weather-check',
      tech: [
        {name: "HTML", img: "/skills/html.png"},
        {name: "CSS", img: "/skills/css.png"},
        {name: "JavaScript", img: "/skills/js.png"},
        {name: "Bootstrap", img: "/skills/bootstrap.png"}
      ],
      subtitle:
        "This application displays temperature, wind speed, and humidity.",
      description:
        "SkySence is a weather forecasting application that provides real-time weather details like temperature, humidity, wind speed, and general conditions based on user location or input city. The app fetches live weather data using AJAX calls to a weather API. It's built with HTML, CSS, and JavaScript, offering a clean UI and intuitive layout for quick access to weather updates.",
    },
    {
      title: "To Do List",
      url: "https://donowlist.netlify.app/",
      image: "projects/todolist.png",
      status: "Completed",
      github : 'simpletodo',
      tech: [
        {name: "HTML", img: "/skills/html.png"},
        {name: "CSS", img: "/skills/css.png"},
        {name: "JavaScript", img: "/skills/js.png"}
      ],
      subtitle:
        "Browser to-do list with task storage, deletion, and completion.",
      description:
        "This is a simple yet effective To-Do List web application that helps users organize their daily tasks. Users can add, delete, and mark tasks as completed. All data is stored using browser’s localStorage, so tasks remain saved even after closing the browser. The UI is intuitive and responsive, built using HTML, CSS, and JavaScript, and it improves productivity by simplifying task management.",
    },
    {
      title: "Calculator",
      url: "https://smartulator.netlify.app",
      image: "projects/calculator.png",
      status: "Completed",
      github : 'calculator',
      tech: [
        {name: "HTML", img: "/skills/html.png"},
        {name: "CSS", img: "/skills/css.png"},
        {name: "JavaScript", img: "/skills/js.png"}
      ],
      subtitle:
        "Calculator that performs addition, multiplication, subtraction, and division.",
      description:
        "Smartulator is a basic calculator built using HTML, CSS Grid layout, and JavaScript. It performs standard operations such as addition, subtraction, multiplication, and division. The calculator has a neat design with responsive buttons, clean animations, and accurate logic handling. It’s ideal for quick calculations and demonstrates good frontend structuring using grid-based layout principles.",
    },
    // {
    //   title: "Gradient bg Generator",
    //   url: "https://backckeck.netlify.app/",
    //   image: "projects/gradientgenerator.png",
    //   status: "Completed",
    //   tech: {
    //     frontend: ["HTML", "CSS", "JavaScript"],
    //     backend: [],
    //     database: [],
    //     other: "",
    //   },
    //   subtitle: "Generate Gradient Backgroud and copy on one click.",
    //   description:
    //     "This Gradient Background Generator tool allows users to create beautiful background gradients for web design or app UI. Users can adjust the angle, color combinations, and preview the gradient in real time. With a one-click copy feature, the CSS background style can be reused directly. It’s built using HTML, CSS, and vanilla JavaScript, focused on frontend utility and UI aesthetics.",
    // },
    {
      title: "Libraray Management",
      url: null,
      image: "projects/librarymanagement.png",
      status: "Completed",
      github : 'library_management_system',
      tech: [
        {name: "Core Java", img: "/skills/java.png"},
        {name: "File Handling", img: "/skills/java.png"},
      ],
      subtitle: "Command line based liberary management system.",
      description:
        "This Java-based Library Management System is a command-line application that handles book inventory, member records, issuing and returning of books. It utilizes file handling and Java object serialization for persistent data storage. The system is designed to provide efficient book management for small library setups, and it's a good example of applying core Java concepts in real-world problem solving.",
    }
  ];

  return (
    <section
      className={`projects-section ${
        theme ? "projects-light" : "projects-dark"
      }`}
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
