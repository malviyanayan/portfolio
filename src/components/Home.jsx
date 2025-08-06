import React, { useState, useEffect } from 'react';
import '../css/Home.css';

const titles = [
  "Full Stack Developer",
  "Java Developer",
  "React Enthusiast",
  "Backend Engineer"
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && forward) {
      setTimeout(() => setForward(false), 1000);
    } else if (subIndex === 0 && !forward) {
      setForward(true);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 150 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index]);

  return (
    <div className="home">
      <div className="home-left">
        <h2>Hi There!</h2>
        <h1>I'M NAYAN MALVIYA</h1>
        <div className="im-changing">
          {titles[index].substring(0, subIndex)}
          <span className="cursor">|</span>
        </div>
      </div>

      <div className="home-right position-relative">
  <div className="corner-box top-left-box"></div>
  <div className="corner-box bottom-right-box"></div>

  <img src="/images/home1.jpeg" alt="my-image" className="profile-image" />
</div>

    </div>
  );
};

export default Home;
