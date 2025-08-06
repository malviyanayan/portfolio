import React from "react";
import "../css/Skills.css";

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
              <li><img src="/images/java.png" alt="Core Java" /> Core Java</li>
              <li><img src="/images/js.png" alt="JavaScript" /> JavaScript</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Frontend Technologies</h3>
            <ul>
              <li><img src="/images/html.png" alt="HTML" /> HTML</li>
              <li><img src="/images/css.png" alt="CSS" /> CSS</li>
              <li><img src="/images/ajax.png" alt="AJAX" /> AJAX</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li><img src="/images/mysql.png" alt="MySQL" /> MySQL</li>
              <li><img src="/images/jpa.png" alt="JPA" /> JPA</li>
              <li><img src="/images/hibernate.png" alt="Hibernate" /> Hibernate</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li><img src="/images/vscode.png" alt="VS Code" /> VS Code</li>
              <li><img src="/images/tomcat.png" alt="Tomcat" /> Tomcat</li>
              <li><img src="/images/eclipse.png" alt="Eclipse" /> Eclipse</li>
              <li><img src="/images/intellijidea.png" alt="IntelliJ IDEA" /> IntelliJ IDEA</li>
            </ul>
          </div>
        </div>

        {/* Right Container */}
        <div className="right-skills-grid">
          <div className="skill-category">
            <h3>Frameworks</h3>
            <ul>
              <li><img src="/images/bootstrap.png" alt="Bootstrap" /> Bootstrap</li>
              <li><img src="/images/react.png" alt="React" /> React</li>
              <li><img src="/images/redux.png" alt="Redux" /> Redux</li>
              <li><img src="/images/springboot.png" alt="Spring Boot" /> Spring Boot</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Advanced Java</h3>
            <ul>
              <li><img src="/images/servlet.png" alt="Servlet" /> Servlet</li>
              <li><img src="/images/jsp.png" alt="JSP" /> JSP</li>
              <li><img src="/images/el.png" alt="EL" /> EL</li>
              <li><img src="/images/jstl.png" alt="JSTL" /> JSTL</li>
              <li><img src="/images/customtags.png" alt="Custom Tags" /> Custom Tags</li>
              <li><img src="/images/mvc.png" alt="MVC Architecture" /> MVC Architecture</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>APIs & Libraries</h3>
            <ul>
              <li><img src="/images/twilio.png" alt="Twilio" /> Twilio</li>
              <li><img src="/images/javamail.png" alt="JavaMail" /> JavaMail</li>
              <li><img src="/images/jasypt.png" alt="Jasypt" /> Jasypt</li>
              <li><img src="/images/gson.png" alt="Gson" /> Gson</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
