import "./Experience.css";

const ExperienceCard = (props) => {
    const data = props.data;
    return (
        <div className="experience_card">
            <a href={data.website} target="_blank" rel="noreferrer">
                <img src={data.logo} alt="company" className="experience_logo"/>
            </a>
            <div className="head">
                <h2>{data.designation}</h2>
                <h4>{data.duration}</h4>
                <h5>{data.tech_stack}</h5>
            </div>
            <br />
            {
                data.description.map((detail) => {
                    return (
                        <li key={detail}>{detail}</li>
                    )
                })
            }
        </div>
    );
}

export default ExperienceCard;