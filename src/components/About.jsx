import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="container">
        {/* Heading */}
        <h2 className="section-title">About Me</h2>

        <div className="row about-content">
          {/* Left Column */}
          <div className="col-md-7 about-text">
            <p>
              <span className="highlight">Hi</span>, I'm{" "}
              <strong>Nayan Malviya</strong>, a passionate{" "}
              <strong>Web Developer</strong> currently pursuing my B.Tech at{" "}
              <strong>BGIEM Jabalpur</strong>.
            </p>

            <p>
              I specialize in building full-stack web applications using
              technologies like <span className="tech">Servlets</span>,{" "}
              <span className="tech">JSP</span>, <span className="tech">CSS</span>,{" "}
              <span className="tech">JavaScript</span>, and{" "}
              <span className="tech">MySQL</span>. I also have strong skills in{" "}
              <span className="tech">Advanced Java</span> and UI frameworks such as{" "}
              <span className="tech">Bootstrap</span>.
            </p>

            <p>
              With a solid foundation in{" "}
              <strong>Data Structures and Algorithms</strong>, I actively solve
              problems and continuously enhance my problem-solving skills. My
              passion lies in creating scalable, maintainable code and visually
              appealing UIs.
            </p>

            <p>
              Check out my{" "}
              <a href="#projects" className="link">
                Projects
              </a>{" "}
              to see what I've been working on. Feel free to connect with me for
              collaborations or opportunities!
            </p>

            <p>
              <em>Thank you for visiting!</em>
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-5 about-contact">
            <ul className="list-unstyled contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>{" "}
                <span className="label">Address:</span> Adhartal, Jabalpur
              </li>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                <span className="label">Email:</span> naymalviya@gmail.com
              </li>
              <li>
                <i className="fas fa-phone"></i>{" "}
                <span className="label">Phone:</span> +91-7828186628
              </li>
              <li>
                <i className="fab fa-linkedin"></i>{" "}
                <span className="label">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/nayan-malviya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  linkedin.com/in/nayan-malviya
                </a>
              </li>
              <li>
                <i className="fab fa-github"></i>{" "}
                <span className="label">GitHub:</span>{" "}
                <a
                  href="https://github.com/nayanmalviya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  github.com/nayanmalviya
                </a>
              </li>
              <li>
                <i className="fa-solid fa-code"></i>{" "}
                <span className="label">Leetcode:</span>{" "}
                <a
                  href="https://leetcode.com/u/malviyanayan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  https://leetcode.com/u/malviyanayan/
                </a>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>{" "}
                <span className="label">Instagram:</span>{" "}
                <a
                  href="https://www.instagram.com/_btwitsnayan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  https://www.instagram.com/_btwitsnayan/
                </a>
              </li>
              <li>
                <i class="fa-brands fa-youtube"></i>{" "}
                <span className="label">YouTube:</span>{" "}
                <a
                  href="https://www.youtube.com/channel/UCLb1e0U-X-AdsLdcHiAvLnw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  https://www.youtube.com/channel/UCLb1e0U-X-AdsLdcHiAvLnw
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
