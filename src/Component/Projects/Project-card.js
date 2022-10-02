import "./ProjectCard.css";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

function Card(props) {
    const project = props.data;
    return (
        <div className="card">
            <img className="card_image" src={project.image} alt=""/>
            <div className="card_description">
                <h5>{project.name}</h5>
                <small>{project.description}</small>
            </div>
            <div className="card_link">
                <BsGithub rel="noreferrer" target="_blank" href={project.github_link}>github</BsGithub>
                <FaExternalLinkAlt rel="noreferrer" target="_blank" href={project.live_link}>live</FaExternalLinkAlt>
            </div>
        </div>
    );
}

export default Card;