import React from "react";
import SkillCategory from "./SkillCategory";
import "../css/skills.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";

export default function Skills() {
  const leftSkills = [
    {
      title: "Programming Skills",
      skills: [
        { name: "Core Java", img: "/skills/java.png" },
        { name: "JavaScript", img: "/skills/js.png" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML", img: "/skills/html.png" },
        { name: "CSS", img: "/skills/css.png" },
        { name: "AJAX", img: "/skills/ajax.png" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", img: "/skills/db.png" },
        { name: "JPA", img: "/skills/api.png" },
        { name: "Hibernate", img: "/skills/hibernate.svg" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", img: "/skills/vscode.png" },
        { name: "Tomcat", img: "/skills/tomcat.png" },
        { name: "Eclipse", img: "/skills/eclipse.png" },
        { name: "IntelliJ IDEA", img: "/skills/intellijidea.png" },
        { name: "Postman", img: "/skills/postman.png" },
        { name: "Version Control System", img: "/skills/versioncontrol.png" },
      ],
    },
  ];

  const rightSkills = [
    {
      title: "Frameworks",
      skills: [
        { name: "Bootstrap", img: "/skills/bootstrap.png" },
        { name: "React", img: "/skills/react.png" },
        { name: "Redux", img: "/skills/redux.png" },
        { name: "Spring Boot", img: "/skills/springboot.png" },
      ],
    },
    {
      title: "Advanced Java",
      skills: [
        { name: "Servlet", img: "/skills/servlet.png" },
        { name: "JSP", img: "/skills/jsppng.png" },
        { name: "EL", img: "/skills/el.png" },
        { name: "JSTL", img: "/skills/jstl.png" },
        { name: "Custom Tags", img: "/skills/custom.png" },
        { name: "MVC Architecture", img: "/skills/mvc.png" },
      ],
    },
    {
      title: "APIs & Libraries",
      skills: [
        { name: "Twilio", img: "/skills/twillio.png" },
        { name: "JavaMail", img: "/skills/javamail.png" },
        { name: "Jasypt", img: "/skills/jasypt.png" },
        { name: "Gson", img: "/skills/gson.png" },
      ],
    },
  ];

  const funSkills = [
    { name: "C", img: "/skills/c.png" },
    { name: "C++", img: "/skills/cpp.png" },
    { name: "Python", img: "/skills/python.png" },
    { name: "Mongo DB", img: "/skills/mongodb.png" },
  ];

  return (
    <section className="skills-section" id="skills">
      <FadeInOnScroll>
        <h2 className="section-title">Skills</h2>
      </FadeInOnScroll>

      <div className="skills-grid">
        <div className="left-skills-grid">
          {leftSkills.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>

        <div className="right-skills-grid">
          {rightSkills.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>

      <div className="fun-explored-box">
        <FadeInOnScroll>
          <h3>I know a bit of these too</h3>
        </FadeInOnScroll>
        <ul>
          {funSkills.map((skill) => (
            <FadeInOnScroll>
              <li key={skill.name}>
              <img src={skill.img} alt={skill.name} /> {skill.name}
            </li>
            </FadeInOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
