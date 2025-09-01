import React from "react";
import FadeInOnScroll from "./animation/FadeInOnScroll";

export default function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <FadeInOnScroll>
        <h3>{title}</h3>
      </FadeInOnScroll>
      <ul>
        {skills.map((skill) => (
          <FadeInOnScroll>
            <li key={skill.name}>
              <img src={skill.img} alt={skill.name} /> {skill.name}
            </li>
          </FadeInOnScroll>
        ))}
      </ul>
    </div>
  );
}
