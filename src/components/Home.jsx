import React, { useState, useEffect } from "react";
import "../css/home.css";
import ScrollFromRight from "./animation/ScrollFromRight";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import {useSelector } from "react-redux";

const titles = [
  "Full Stack Developer",
  "Java Developer",
  "React Enthusiast",
  "Backend Engineer",
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
          <h1>I'M NAYAN MALVIYA</h1>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className={`im-changing ${theme ? 'logo-light' : 'logo-dark'}`}>
          {titles[index].substring(0, subIndex)}
          <span className={`cursor ${theme ? 'logo-light' : 'logo-dark'}`}>|</span>
        </div>
        </FadeInOnScroll>
      </div>

      <div className="home-right position-relative">
        <div className={`corner-box top-left-box ${theme ? 'img-border-light' : 'img-border-dark'}`}></div>
        <div className={`corner-box bottom-right-box ${theme ? 'img-border-light' : 'img-border-dark'}`}></div>

        <ScrollFromRight>
          <img
            src="/images/home1.jpeg"
            alt="my-image"
            className="profile-image"
          />
        </ScrollFromRight>
      </div>
    </div>
  );
};

export default Home;
