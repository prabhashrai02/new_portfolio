import React from 'react';
import ExperienceCard from './Experience-card';
import { Experiences } from './Experience-details';
import "./Experience.css";

const Experience = () => {
  const list = Experiences.map((exp, ind) => <ExperienceCard data={exp} key={ind}/>);
    return (
      <>
        <div className="experience_section">
          {
            list.map(
              (exp, ind) => {
                return (
                  <div className="experience_cards" key={ind}>
                    {exp}
                  </div>
                )
              }
            )
          }
        </div>
      </>
    );
  }
  
export default Experience;
  