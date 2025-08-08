// components/StarryBackground.jsx
import React, { useEffect } from "react";
import "../css/background.css";
import { useSelector } from "react-redux";

const StarryBackground = () => {

  let theme = useSelector((state) => state.theme.value);
  
  // useEffect(() => {
  //   const background = document.getElementById("background");
  //   if (!background) return;

  //   const numStars = 120;
  //   const stars = [];

  //   for (let i = 0; i < numStars; i++) {
  //     const star = document.createElement("div");
  //     star.classList.add("star");

  //     const size = Math.random() * 2 + 1;
  //     const left = Math.random() * 100;
  //     const opacity = Math.random();
  //     const delay = Math.random() * 5;
  //     const duration = 4 + Math.random() * 3;

  //     star.style.width = `${size}px`;
  //     star.style.height = `${size}px`;
  //     star.style.left = `${left}vw`;
  //     star.style.top = '100vh';
  //     star.style.opacity = opacity;

  //     const animation = star.animate(
  //       [
  //         { transform: "translateY(0)", opacity },
  //         { transform: "translateY(-120vh)", opacity: 0.1 }
  //       ],
  //       {
  //         duration: duration * 1000,
  //         iterations: Infinity,
  //         delay: delay * 1000,
  //         easing: "linear"
  //       }
  //     );

  //     stars.push({ element: star, animation });
  //     background.appendChild(star);
  //   }

  //   return () => {
  //     stars.forEach(({ element, animation }) => {
  //       animation.cancel();
  //       background.removeChild(element);
  //     });
  //   };
  // }, []);

  return <div className={`background ${theme ? 'bg-1-light' : 'bg-1-dark'}`} id="background" />;
};

export default StarryBackground;
