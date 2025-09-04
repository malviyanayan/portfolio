import React from "react";
import "../css/about.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="container">
        {/* Heading */}
        <FadeInOnScroll>
          <h2 className="section-title">About Me</h2>
        </FadeInOnScroll>

        <div className="row about-content">
          {/* Left Column */}
          <div className="col-md-7 about-text">
            <FadeInOnScroll>
              <p>
                <span className="highlight">Hi</span>, I'm{" "}
                <strong>Nayan Malviya</strong> – an{" "}
                <strong>Aspiring Software Engineer</strong> and final-year{" "}
                <strong>B.Tech student at BGIEM Jabalpur</strong>.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <p>
                I specialize in building full-stack web applications using{" "}
                <span className="tech">React.js</span>,{" "}
                <span className="tech">Spring Boot</span>,{" "}
                <span className="tech">Spring Security</span>,{" "}
                <span className="tech">Hibernate</span>, and{" "}
                <span className="tech">MySQL</span>. I also have strong
                knowledge of <span className="tech">Advanced Java</span>, which
                helps me understand how <strong>Spring Boot</strong> and{" "}
                <strong>Spring applications</strong> work internally.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <p>
                With a solid foundation in{" "}
                <strong>Data Structures and Algorithms</strong>, I have solved{" "}
                <strong>270+ coding problems</strong>, which continuously
                sharpens my problem-solving skills. I am passionate about
                creating <strong>scalable applications</strong>, writing{" "}
                <strong>clean code</strong>, and designing{" "}
                <strong>modern UIs</strong>.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <p>
                Currently, I’m looking for an{" "}
                <strong>internship opportunity</strong> where I can apply my
                knowledge, contribute to impactful projects, and gain real-world
                experience.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <p>
                Check out my{" "}
                <a href="#projects" className="link">
                  Projects
                </a>{" "}
                to see what I’ve been working on. Feel free to connect with me
                for collaborations or opportunities!
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <p>
                <em>Thank you for visiting!</em>
              </p>
            </FadeInOnScroll>
          </div>

          {/* Right Column */}
          <div className="col-md-5 about-contact">
            <ul className="list-unstyled contact-list">
              <FadeInOnScroll>
                <li>
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <span className="label">Address:</span> Adhartal, Jabalpur
                </li>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <li>
                  <i className="fas fa-envelope"></i>{" "}
                  <span className="label">Email:</span> naymalviya@gmail.com
                </li>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <li>
                  <i className="fas fa-phone"></i>{" "}
                  <span className="label">Phone:</span> +91-7828186628
                </li>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <li>
                  <i className="fab fa-linkedin"></i>{" "}
                  <span className="label">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/nayanmalviya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    linkedin.com/in/nayan-malviya
                  </a>
                </li>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <li className="text-truncate">
                  <i className="fab fa-github"></i>{" "}
                  <span className="label">GitHub:</span>{" "}
                  <a
                    href="https://github.com/malviyanayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    github.com/nayanmalviya
                  </a>
                </li>
              </FadeInOnScroll>

              <FadeInOnScroll>
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
              </FadeInOnScroll>

              <FadeInOnScroll>
                <li className="text-truncate">
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
              </FadeInOnScroll>

              <FadeInOnScroll>
                <li className="text-truncate">
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
              </FadeInOnScroll>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
