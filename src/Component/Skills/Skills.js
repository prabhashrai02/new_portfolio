import React from "react";
import { SkillsList } from "./skills-details";
import "./Skills.css";

const Skills = () => {
  console.log(SkillsList)
  return (
    <>
      <div className="skills_section">
        <div className="skill_container">
          {
            SkillsList.map((item) => {
              return (
                <div className="tooltip skill_box">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.imageLink} alt={item.tooltip} className="skill_icon" />
                  </a>
                  <span className="tooltiptext">{item.tooltip}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Skills;
