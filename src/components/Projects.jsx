import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";

export default function Projects() {
  const projects = [
    {
      title: "E Learning Plateform",
      url: "https://learnify-8pya.onrender.com/",
      image: "projects/learnify.png",
      tech: {
        frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        backend: ["Advanced Java"],
        database: [],
        other: "",
      },
      subtitle:
        "Full-stack course platform with user progress tracking and note-taking.",
      description:
        "This project is a comprehensive e-learning platform that allows students to enroll in courses, track their individual progress, and take notes while learning. Built using Advanced Java and Bootstrap, the platform ensures a smooth user experience with features like chapter navigation, interactive sessions, and responsive layouts. It includes user registration, authentication, and a clean dashboard for managing content efficiently.",
    },
    {
      title: "DoFocus",
      url: "https://dofocus.netlify.app/",
      image: "projects/dofocus.png",
      tech: {
        frontend: ["React", "Bootstrap"],
        backend: ["Advanced Java"],
        database: [],
        other: "",
      },
      subtitle: "Daily challenge tracker with to-do list and personal notes.",
      description:
        "DoFocus is a productivity-focused tool designed to help users build daily habits and monitor personal progress. It includes a challenge-based tracker system, customizable to-do list, and personal notes section. Built using React and styled with Bootstrap, the app supports local storage and smooth transitions for better usability. Ideal for self-discipline and routine-building enthusiasts looking to stay organized.",
    },
    {
      title: "My Portfolio Website",
      url: "https://nayanmalviya.netlify.app",
      image: "projects/portfolio.png",
      tech: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        database: [],
        other: "",
      },
      subtitle: "Check out my portfolio and let's connect!",
      description:
        "My personal portfolio website showcases my technical skills, professional background, and key projects. The site is built with clean HTML, CSS, and JavaScript, featuring modern UI components, smooth scrolling, and responsive design. It includes sections such as About, Skills, Projects, and Contact. This website serves as a gateway for recruiters and collaborators to understand my capabilities and reach out.",
    },
    {
      title: "Weather App",
      url: "https://skysence.netlify.app",
      image: "projects/weather.png",
      tech: {
        frontend: ["HTML", "CSS", "JavaScript", "AJAX"],
        backend: [],
        database: [],
        other: "",
      },
      subtitle:
        "This application displays temperature, wind speed, and humidity.",
      description:
        "SkySence is a weather forecasting application that provides real-time weather details like temperature, humidity, wind speed, and general conditions based on user location or input city. The app fetches live weather data using AJAX calls to a weather API. It's built with HTML, CSS, and JavaScript, offering a clean UI and intuitive layout for quick access to weather updates.",
    },
    {
      title: "To Do List",
      url: "https://donowlist.netlify.app/",
      image: "projects/todolist.png",
      tech: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        database: ["LocalStorage"],
        other: "",
      },
      subtitle:
        "Browser to-do list with task storage, deletion, and completion.",
      description:
        "This is a simple yet effective To-Do List web application that helps users organize their daily tasks. Users can add, delete, and mark tasks as completed. All data is stored using browser’s localStorage, so tasks remain saved even after closing the browser. The UI is intuitive and responsive, built using HTML, CSS, and JavaScript, and it improves productivity by simplifying task management.",
    },
    {
      title: "Calculator",
      url: "https://smartulator.netlify.app",
      image: "projects/calculator.png",
      tech: {
        frontend: ["HTML", "CSS", "JavaScript", "CSS Grid"],
        backend: [],
        database: [],
        other: "",
      },
      subtitle:
        "Calculator that performs addition, multiplication, subtraction, and division.",
      description:
        "Smartulator is a basic calculator built using HTML, CSS Grid layout, and JavaScript. It performs standard operations such as addition, subtraction, multiplication, and division. The calculator has a neat design with responsive buttons, clean animations, and accurate logic handling. It’s ideal for quick calculations and demonstrates good frontend structuring using grid-based layout principles.",
    },
    {
      title: "Gradient bg Generator",
      url: "https://backckeck.netlify.app/",
      image: "projects/gradientgenerator.png",
      tech: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        database: [],
        other: "",
      },
      subtitle: "Generate Gradient Backgroud and copy on one click.",
      description:
        "This Gradient Background Generator tool allows users to create beautiful background gradients for web design or app UI. Users can adjust the angle, color combinations, and preview the gradient in real time. With a one-click copy feature, the CSS background style can be reused directly. It’s built using HTML, CSS, and vanilla JavaScript, focused on frontend utility and UI aesthetics.",
    },
    {
      title: "Libraray Management",
      url: "https://github.com/malviyanayan/library_management_system.git",
      image: "projects/librarymanagement.png",
      tech: {
        frontend: [],
        backend: ["Java", "File Handling", "Serialization"],
        database: ["Flat Files"],
        other: "",
      },
      subtitle: "Command line based liberary management system.",
      description:
        "This Java-based Library Management System is a command-line application that handles book inventory, member records, issuing and returning of books. It utilizes file handling and Java object serialization for persistent data storage. The system is designed to provide efficient book management for small library setups, and it's a good example of applying core Java concepts in real-world problem solving.",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </section>
  );
}
