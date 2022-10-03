import Card from './Project-card';
import { ProjectList } from "./Project-details";
import "./Project.css";
import Carousel from 'react-elastic-carousel';

let list = ProjectList.map((project, i) => <Card data={project} key={i}/>);

function Projects() {
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 300, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
  ];
  return (
    <>
       <div className="project_section">
        <Carousel breakPoints={breakPoints}>
          {
            list.map(
              (project, index) => {
                return (
                  <div key={index}>
                    {project}
                  </div>
                )
              }
            )
          }
        </Carousel>
      </div>
    </>
  );
}
  
export default Projects;
