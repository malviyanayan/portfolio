import React from "react";
import "../css/about.css";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import { useSelector } from "react-redux";

const About = () => {
  const theme = useSelector((state) => state.theme.value); // true = light, false = dark

  const contactInfo = [
    { icon: "fas fa-map-marker-alt", label: "Address", value: "Adhartal, Jabalpur" },
    { icon: "fas fa-envelope", label: "Email", value: "naymalviya@gmail.com" },
    { icon: "fas fa-phone", label: "Phone", value: "+91-7828186628" },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/nayan-malviya",
      link: "https://www.linkedin.com/in/nayanmalviya/",
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "github.com/nayanmalviya",
      link: "https://github.com/malviyanayan",
    },
    {
      icon: "fa-solid fa-code",
      label: "Leetcode",
      value: "leetcode.com/u/malviyanayan/",
      link: "https://leetcode.com/u/malviyanayan/",
    },
    {
      icon: "fa-brands fa-instagram",
      label: "Instagram",
      value: "_btwitsnayan",
      link: "https://www.instagram.com/_btwitsnayan/",
    },
    {
      icon: "fa-brands fa-youtube",
      label: "YouTube",
      value: "Nayan Malviya",
      link: "https://www.youtube.com/channel/UCLb1e0U-X-AdsLdcHiAvLnw",
    },
  ];

  const textParagraphs = [
    <>
      <span className="highlight">Hi</span>, I'm <strong>Nayan Malviya</strong> – an <strong>Aspiring Software Engineer</strong> and final-year <strong>B.Tech student at BGIEM Jabalpur</strong>.
    </>,
    <>
      I specialize in building full-stack web applications using <span className="tech">React.js</span>, <span className="tech">Spring Boot</span>, <span className="tech">Spring Security</span>, <span className="tech">Hibernate</span>, and <span className="tech">MySQL</span>. I also have strong knowledge of <span className="tech">Advanced Java</span>, which helps me understand how <strong>Spring Boot</strong> and <strong>Spring applications</strong> work internally.
    </>,
    <>
      With a solid foundation in <strong>Data Structures and Algorithms</strong>, I have solved <strong>270+ coding problems</strong>, continuously sharpening my problem-solving skills. I am passionate about creating <strong>scalable applications</strong>, writing <strong>clean code</strong>, and designing <strong>modern UIs</strong>.
    </>,
    <>
      Currently, I’m looking for an <strong>internship opportunity</strong> where I can apply my knowledge, contribute to impactful projects, and gain real-world experience.
    </>,
    <>
      Check out my <a href="#projects" className="link">Projects</a> to see what I’ve been working on. Feel free to connect with me for collaborations or opportunities!
    </>,
    <>
      <em>Thank you for visiting!</em>
    </>,
  ];

  return (
    <div id="about" className={`about-section ${theme ? "light-theme" : "dark-theme"}`}>
      <div className="container">
        {/* Heading */}
        <FadeInOnScroll>
          <h2 className="section-title">About Me</h2>
        </FadeInOnScroll>

        <div className="row about-content">
          {/* Left Column */}
          <div className="col-md-7 about-text">
            {textParagraphs.map((paragraph, idx) => (
              <FadeInOnScroll key={idx}>
                <p>{paragraph}</p>
              </FadeInOnScroll>
            ))}
          </div>

          {/* Right Column */}
          <div className="col-md-5 about-contact">
            <ul className="list-unstyled contact-list">
              {contactInfo.map((item, idx) => (
                <FadeInOnScroll key={idx}>
                  <li className="text-truncate">
                    <i className={item.icon}></i>{" "}
                    <span className="label">{item.label}:</span>{" "}
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="link">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </li>
                </FadeInOnScroll>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
