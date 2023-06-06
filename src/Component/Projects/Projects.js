import Card from './Project-card';
import { ProjectList } from "./Project-details";
import "./Project.css";

let list = ProjectList.map((project, i) => <Card data={project} key={i}/>);

const Projects = () => {

  return (
    <>
      <div className="project_section">
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
      </div>
    </>
  );
}
  
export default Projects;
