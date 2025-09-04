import React from "react";
import "../css/leetcode.css";
import { useSelector } from "react-redux";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import RotateUpOnScroll from "./animation/RotateUpOnScroll";

export default function Leetcode() {

    let theme = useSelector((state) => state.theme.value);

  return (
    <div className="leetcode-container">
      <FadeInOnScroll>
        <h2 className="section-title" style={{color : `${theme ? '#1a1a1a' : '#00f2fe'}`}}> My Competitive Profile</h2>
      </FadeInOnScroll>

      <RotateUpOnScroll>
        <div className="leetcode-image-wrapper">
        <img
          src={`https://leetcard.jacoblin.cool/malviyanayan?theme=${theme ? 'light' : 'dark'}&ext=contest,problem,skill,recent&animation=true&font=JetBrains+Mono`}
          alt="LeetCode Stats Card"
          className="leetcode-card-img"
        />
      </div>
      </RotateUpOnScroll>
    </div>
  );
}
