import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const Card = (props) => {
    const project = props.data;
    return (
        <div className="project_card">
            <img className="card_image" src={project.image} alt="project"/>
            <div className="card_description">
                <h4 className="project_name">{project.name}</h4>
                <h5 className="project_tech">{project.tech_stack}</h5>
                <div className="card_link">
                    <a rel="noreferrer" target="_blank" className="card_button" href={project.github_link}>
                        <BsGithub>github</BsGithub>
                    </a>
                    <a rel="noreferrer" target="_blank" className="card_button" href={project.live_link}>
                        <FaExternalLinkAlt>live</FaExternalLinkAlt>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;