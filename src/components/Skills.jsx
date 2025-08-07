import React from "react";
import "../css/skills.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {/* Left Container */}
        <div className="left-skills-grid">
          <div className="skill-category">
            <h3>Programming Skills</h3>
            <ul>
              <li>
                <img src="/skills/java.png" alt="Core Java" /> Core Java
              </li>
              <li>
                <img src="/skills/js.png" alt="JavaScript" /> JavaScript
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Frontend Technologies</h3>
            <ul>
              <li>
                <img src="/skills/html.png" alt="HTML" /> HTML
              </li>
              <li>
                <img src="/skills/css.png" alt="CSS" /> CSS
              </li>
              <li>
                <img src="/skills/ajax.png" alt="AJAX" /> AJAX
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>
                <img src="/skills/db.png" alt="MySQL" /> MySQL
              </li>
              <li>
                <img src="/skills/api.png" alt="JPA" /> JPA
              </li>
              <li>
                <img src="/skills/hibernate.svg" alt="Hibernate" /> Hibernate
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>
                <img src="/skills/vscode.png" alt="VS Code" /> VS Code
              </li>
              <li>
                <img src="/skills/tomcat.png" alt="Tomcat" /> Tomcat
              </li>
              <li>
                <img src="/skills/eclipse.png" alt="Eclipse" /> Eclipse
              </li>
              <li>
                <img src="/skills/intellijidea.png" alt="IntelliJ IDEA" />{" "}
                IntelliJ IDEA
              </li>
              <li>
                <img src="/skills/postman.png" alt="postman" /> Postman
              </li>
              <li>
                <img
                  src="/skills/versioncontrol.png"
                  alt="Version Control System"
                />{" "}
                Version Control System
              </li>
            </ul>
          </div>
        </div>

        {/* Right Container */}
        <div className="right-skills-grid">
          <div className="skill-category">
            <h3>Frameworks</h3>
            <ul>
              <li>
                <img src="/skills/bootstrap.png" alt="Bootstrap" /> Bootstrap
              </li>
              <li>
                <img src="/skills/react.png" alt="React" /> React
              </li>
              <li>
                <img src="/skills/redux.png" alt="Redux" /> Redux
              </li>
              <li>
                <img src="/skills/springboot.png" alt="Spring Boot" /> Spring
                Boot
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Advanced Java</h3>
            <ul>
              <li>
                <img src="/skills/servlet.png" alt="Servlet" /> Servlet
              </li>
              <li>
                <img src="/skills/jsppng.png" alt="JSP" /> JSP
              </li>
              <li>
                <img src="/skills/el.png" alt="EL" /> EL
              </li>
              <li>
                <img src="/skills/jstl.png" alt="JSTL" /> JSTL
              </li>
              <li>
                <img src="/skills/custom.png" alt="Custom Tags" /> Custom Tags
              </li>
              <li>
                <img src="/skills/mvc.png" alt="MVC Architecture" /> MVC
                Architecture
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>APIs & Libraries</h3>
            <ul>
              <li>
                <img src="/skills/twillio.png" alt="Twilio" /> Twilio
              </li>
              <li>
                <img src="/skills/javamail.png" alt="JavaMail" /> JavaMail
              </li>
              <li>
                <img src="/skills/jasypt.png" alt="Jasypt" /> Jasypt
              </li>
              <li>
                <img src="/skills/gson.png" alt="Gson" /> Gson
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fun-explored-box">
        <h3>I know a bit of these too</h3>
        <ul>
          <li>
            <img src="/skills/c.png" alt="C" /> C
          </li>
          <li>
            <img src="/skills/cpp.png" alt="CPP" /> C++
          </li>
          <li>
            <img src="/skills/python.png" alt="Python" /> Python
          </li>
          <li>
            <img src="/skills/mongodb.png" alt="mongodb" /> Mongo DB
          </li>
        </ul>
      </div>
    </section>
  );
}
