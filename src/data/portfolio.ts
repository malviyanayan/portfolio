export const profile = {
  name: "Nayan Malviya",
  role: "Software Engineer",
  tagline: "Full-Stack Developer",
  location: "Adhartal, Jabalpur, India",
  email: "naymalviya@gmail.com",
  phone: "+91 78281 86628",
  resumeUrl: "/malviya_nayan_resume.pdf",
  socials: {
    github: "https://github.com/nayanmalviya",
    linkedin: "https://linkedin.com/in/nayan-malviya",
    leetcode: "https://leetcode.com/u/malviyanayan/",
    instagram: "https://instagram.com/_btwitsnayan",
    youtube: "https://youtube.com/@NayanMalviya",
  },
  intro:
    "I design and build full-stack web products with Java, Spring Boot, and React — turning hard problems into clean, scalable software. Currently shipping features as a Full-Stack Intern at ADRS Techno.",
  about: [
    "I'm an aspiring software engineer based in Jabalpur with a strong foundation in Java, Spring Boot, and modern JavaScript. My journey started with a curiosity for how things work under the hood — and quickly grew into a love for designing systems that are both elegant and dependable.",
    "Over the last few years I've built full-stack products end-to-end: marketplaces, e-learning platforms, and AI-augmented web apps. Outside of shipping features, you'll find me grinding LeetCode (300+ solved), exploring system design, or prototyping the next idea.",
    "I care about thoughtful engineering — readable code, sensible APIs, and interfaces that respect the user's attention.",
  ],
  typewriter: [
    "Software Engineer.",
    "Full-Stack Developer.",
    "Java + Spring Boot.",
    "React enthusiast.",
    "Problem solver.",
  ],
};

export const skills = {
  Frontend: ["React", "Redux", "JavaScript", "HTML", "CSS", "AJAX", "Bootstrap", "Tailwind"],
  Mobile: ["Flutter", "Dart"],
  Backend: ["Java", "Spring Boot", "Node.js", "REST APIs", "JSP", "Servlets", "EL", "JSTL", "Custom Tags", "MVC"],
  Database: ["MySQL", "JPA", "Hibernate", "MongoDB", "Firebase"],
  "APIs & Libraries": ["Twilio", "JavaMail", "Jasypt", "Gson", "Gemini API"],
  "Tools & Platforms": ["Git / GitHub", "Postman", "IntelliJ IDEA", "VS Code", "Eclipse", "Apache Tomcat", "Bubble.io"],
  "Core CS": ["DSA", "OOP", "SDLC", "REST API Design", "Prompt Engineering"],
  "Also know": ["C", "C++", "Python"],
};

export const experience = [
  {
    role: "Full-Stack Developer Intern",
    company: "ADRS Techno",
    location: "Jabalpur, India",
    period: "Feb 2026 — Present",
    bullets: [
      "Building full-stack web applications using the MERN stack and Firebase, contributing across frontend and backend.",
      "Designed and integrated RESTful APIs, managed database operations, and optimized queries for performance.",
      "Integrated an AI chatbot using the Google Gemini API.",
      "Built MVP solutions on Bubble.io for rapid prototyping and workflow automation.",
      "Contributed to debugging, feature enhancement, and deployment via Git-based version control.",
    ],
  },
];

export const education = [
  {
    title: "B.Tech in Computer Science Engineering",
    place: "Baderia Global Institute of Engineering and Management",
    location: "Jabalpur, MP",
    period: "Nov 2022 — Jun 2026",
    detail: "CGPA: 7.80 / 10",
  },
  {
    title: "12th Standard (Senior Secondary)",
    place: "Govt. EXC. Higher Secondary School Mohkhed",
    location: "Chhindwara, MP",
    period: "Jul 2019 — Apr 2021",
    detail: "90.4%",
  },
];

export const projects = [
  {
    title: "Interview Studio",
    summary: "AI-powered mock interview platform with real-time feedback using Google Gemini.",
    description:
      "Full-stack interview preparation platform built with React + Redux on the frontend and Spring Boot on the backend. Integrates Google Gemini API for AI-driven question generation and feedback. Features user authentication, session management, and a clean dashboard.",
    stack: ["React", "Redux", "Spring Boot", "Gemini API", "Hibernate", "MySQL", "Bootstrap"],
    highlights: [
      "AI question generation & feedback via Google Gemini",
      "Spring Boot REST API with JPA + Hibernate",
      "Redux state management across interview sessions",
      "User auth with session-based dashboards",
    ],
    github: null,
    url: null,
    year: "2025",
    status: "Ongoing",
    accent: "from-violet-500 to-purple-500",
  },
  {
    title: "Learnify — E-Learning Platform",
    summary:
      "Full-stack e-learning platform where students enroll, track progress, and take notes — with a trainer module for instructors.",
    description:
      "Built with Advanced Java (JSP/Servlets) on the backend and a responsive Bootstrap frontend. Trainers can upload, manage, and sell courses; students can buy them, watch lessons, and track progress. Database operations handled via JDBC with custom SQL.",
    stack: ["JSP", "Servlets", "JSTL", "AJAX", "Bootstrap", "MySQL"],
    highlights: [
      "Course enrollment, chapter navigation & progress tracking",
      "Trainer module for course upload & sales",
      "Custom SQL via JDBC with normalized schema",
      "Responsive UI with HTML, CSS, JS, Bootstrap",
    ],
    github: "Learnify_E_Learning_Plateform",
    url: null,
    year: "2024",
    status: "Completed",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    title: "DoFocus",
    summary: "Daily challenge tracker with to-do list and personal notes for building habits.",
    description:
      "Productivity-focused tool designed to help users build daily habits and monitor personal progress. Includes a challenge-based tracker, customizable to-do list, and personal notes section. Built with React + Redux, supports localStorage for persistence.",
    stack: ["React", "Redux", "Spring Boot", "Hibernate", "MySQL", "Bootstrap"],
    highlights: [
      "Challenge-based daily habit tracker",
      "To-do list + personal notes with localStorage",
      "Spring Boot backend with JPA + Hibernate",
      "Smooth transitions and responsive UI",
    ],
    github: "dofocus",
    url: "https://dofocus.netlify.app/",
    year: "2024",
    status: "OnHold",
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Smilora — Dental Care Website",
    summary: "Responsive dental care website for patient appointments and clinic services.",
    description:
      "Clean, accessible interface built with HTML, CSS and JavaScript. Information architecture is organized around services, contact and essential healthcare details so visitors get to what they need fast.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Patient appointment & services showcase",
      "Accessible across all devices",
      "Lightweight, fast-loading static frontend",
    ],
    github: "smilora",
    url: "https://smilora.netlify.app/",
    year: "2024",
    status: "Completed",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    title: "SkySence — Weather App",
    summary: "Real-time weather app showing temperature, wind speed, and humidity via live API.",
    description:
      "Weather forecasting application that provides real-time weather details like temperature, humidity, wind speed, and conditions based on user location or input city. Fetches live data using AJAX calls to a weather API.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "AJAX"],
    highlights: [
      "Live weather data via weather API",
      "Location-based or city search",
      "Temperature, humidity & wind speed display",
      "Clean responsive UI",
    ],
    github: "weather-check",
    url: "https://skysence.netlify.app",
    year: "2024",
    status: "Completed",
    accent: "from-blue-500 to-sky-500",
  },
  {
    title: "Portfolio Website",
    summary: "React + Redux personal portfolio showcasing projects, skills, and professional profile.",
    description:
      "Personal portfolio website built with React and Redux featuring modern UI components, smooth scrolling, and responsive design. Includes About, Skills, Projects, and Contact sections.",
    stack: ["React", "Redux", "CSS", "JavaScript", "Bootstrap"],
    highlights: [
      "Project & certification showcase",
      "Redux-powered theme toggle",
      "Smooth scroll & responsive design",
      "Deployed on Netlify",
    ],
    github: "portfolio",
    url: "https://nayan-malviya.netlify.app",
    year: "2024",
    status: "Completed",
    accent: "from-rose-500 to-pink-500",
  },
  {
    title: "Library Management System",
    summary: "Command-line Java app for managing book inventory, members, and issue/return records.",
    description:
      "Java-based Library Management System that handles book inventory, member records, issuing and returning of books. Uses file handling and Java object serialization for persistent data storage.",
    stack: ["Core Java", "File Handling"],
    highlights: [
      "Book inventory & member record management",
      "Issue & return tracking",
      "Persistent storage via Java serialization",
      "Clean CLI interface",
    ],
    github: "library_management_system",
    url: null,
    year: "2023",
    status: "Completed",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "DoNow — To Do List",
    summary: "Browser to-do list with task storage, deletion, and completion tracking.",
    description:
      "Simple yet effective To-Do List web app. Users can add, delete, and mark tasks as completed. All data stored in localStorage so tasks persist after closing the browser.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Add, delete & complete tasks",
      "localStorage persistence",
      "Responsive and intuitive UI",
    ],
    github: "simpletodo",
    url: "https://donowlist.netlify.app/",
    year: "2023",
    status: "Completed",
    accent: "from-green-500 to-emerald-500",
  },
  {
    title: "Smartulator — Calculator",
    summary: "Clean calculator with standard operations built using CSS Grid layout.",
    description:
      "Basic calculator built using HTML, CSS Grid, and JavaScript. Performs addition, subtraction, multiplication, and division with neat design, responsive buttons, and clean animations.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Standard arithmetic operations",
      "CSS Grid-based responsive layout",
      "Clean button animations",
    ],
    github: "calculator",
    url: "https://smartulator.netlify.app",
    year: "2023",
    status: "Completed",
    accent: "from-slate-500 to-gray-500",
  },
];

export const certifications = [
  { title: "Core Java (Java SE)", body: "OOP, collections, exception handling, multithreading & concurrency." },
  { title: "Advanced Java — ISRDC Jabalpur", body: "Java EE, Spring basics, Spring MVC and Spring Boot." },
  { title: "Cyber Security Essentials — Cisco Netacad", body: "OS fundamentals and Linux command line." },
  { title: "SQL (Intermediate) — HackerRank", body: "Joins, aggregations, advanced querying." },
  { title: "JavaScript & React JS — Coding Thinker", body: "Modern JS, React fundamentals & component design." },
];

export const achievements = [
  { metric: "300+", label: "DSA problems solved on LeetCode" },
  { metric: "1×", label: "100-Days LeetCode badge" },
  { metric: "2×", label: "50-Days coding streak badges" },
  { metric: "SIH '24", label: "College-level recognition" },
];
