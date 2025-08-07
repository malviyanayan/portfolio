import React from "react";
import "../css/leetcode.css";
import { useSelector } from "react-redux";

export default function Leetcode() {

    let theme = useSelector((state) => state.theme.value);

  return (
    <div className="leetcode-container">
      <h2 className="leetcode-title"> My Competitive Profile</h2>

      <div className="leetcode-image-wrapper">
        <img
          src={`https://leetcard.jacoblin.cool/malviyanayan?theme=${theme ? 'light' : 'dark'}&ext=contest,problem,skill,recent&animation=true&font=JetBrains+Mono`}
          alt="LeetCode Stats Card"
          className="leetcode-card-img"
        />
      </div>
    </div>
  );
}
