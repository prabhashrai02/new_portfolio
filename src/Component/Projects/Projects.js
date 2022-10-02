import { useState, useEffect } from "react";
import Card from './Project-card';
import { ProjectList } from "./Project-details";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "./Project.css";

let list = ProjectList.map((project, i) => <Card data={project} key={i}/>);

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {

    const last = list.pop();
    list.unshift(last);

    if (currentIndex === list.length - 1) {
      return setCurrentIndex(0);
    }
    
    return setCurrentIndex(currentIndex+1);
  }

  const right = () => {

    const last = list.shift();
    list.push(last);

    setCurrentIndex(currentIndex + 1);

    if (currentIndex === list.length - 1) setCurrentIndex(0);

  }

  const left = () => {

    const last = list.pop();
    list.unshift(last);

    setCurrentIndex(currentIndex - 1);

    if (currentIndex === -1) setCurrentIndex(ProjectList.length - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => carouselInfiniteScroll(), 3000);

    return () => clearInterval(interval);
  })

  return (
    <>
      project
       <div className="project_section">
         <AiFillCaretLeft className="project_button" onClick={left}>
           left
         </AiFillCaretLeft>
         <div className='project_list'>
           {
            list.map(
              (project, index) => {
                return (
                  <div className={index === ((list.length-1)/2) ? 'active' : 'not-active'} key={index}>
                    {project}
                  </div>
                )
              }
            )
          }
        </div>
        <AiFillCaretRight className="project_button">
          right
        </AiFillCaretRight>
      </div>
    </>
  );
}
  
export default Projects;
  