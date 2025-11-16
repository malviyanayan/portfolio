import React, { useState, useEffect } from "react";
import "../css/home.css";
import ScrollFromRight from "./animation/ScrollFromRight";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import {useSelector } from "react-redux";

const titles = [
  "Java Developer",
  "Student at BGIEM",
  "React Enthusiast",
  "Backend Developer",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  let theme = useSelector((state) => state.theme.value); // Accessing the theme state

  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && forward) {
      setTimeout(() => setForward(false), 1000);
    } else if (subIndex === 0 && !forward) {
      setForward(true);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (forward ? 1 : -1));
      },
      forward ? 150 : 50
    );

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index]);

  return (
    <div className="home" id="home">
      <div className="home-left">
        <FadeInOnScroll>
          <h2 className={`${theme ? 'tc-light' : ''}`}>Hi There!</h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <h1 className="fs-1">I'M NAYAN MALVIYA</h1>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="text-dark">
            I am a final-year B.Tech student who enjoys learning new technologies and building simple projects. I like coding, improving my skills, and creating things that are useful. I am always trying to learn more and do better.
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className={`im-changing ${theme ? 'logo-light' : 'logo-dark'}`}>
          {titles[index].substring(0, subIndex)}
          <span className={`cursor ${theme ? 'logo-light' : 'logo-dark'}`}>|</span>
          <div className="fs-4 d-flex align-items-center fw-bold gap-4 mt-4 text-secondary">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-solid fa-code"></i>
            {/* <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i> */}
          </div>
        </div>
        </FadeInOnScroll>
      </div>

      <div className="home-right position-relative">
        <div className={`corner-box top-left-box ${theme ? 'img-border-light' : 'img-border-dark'}`}></div>
        <div className={`corner-box bottom-right-box ${theme ? 'img-border-light' : 'img-border-dark'}`}></div>

        <ScrollFromRight>
          <img
            src="/images/nayan2.png"
            alt="my-image"
            className="profile-image"
          />
        </ScrollFromRight>
      </div>
    </div>
  );
};

export default Home;
