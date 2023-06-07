import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education_section">
        <div className="education_box">
          <div className="education_logo">
            <img className="education_logo" src="https://storage.googleapis.com/ezap-prod/colleges/326/government-engineering-college-modasa-logo.png" alt="GEC Modasa"/>
          </div>
          <div className="education_org">
            <h3 className="org_designation">Bachelor's of Engineering</h3>
            <h4 className="org_name">Information Technology</h4>
            <h4 className="org_name">GEC Modasa</h4>
            <h5 className="org_duration"> Jul 2019 - Present </h5>
          </div>
          <br/>
          <p className="org_description">
            I hold a Bachelor's degree in Information Technology with a notable CGPA of 8.3.
            This educational achievement highlights my dedication and proficiency in the field,
            providing a strong foundation for my career as a Software engineer.
          </p>
        </div>

        <div className="education_box">
          <div className="education_logo">
            <img className="education_logo" src="https://kvrodelhi.allsport.in/assets/homepage/img/logo.svg" alt="Kendriya Vidyalaya"/>
          </div>
          <div className="education_org">
            <h3 className="org_designation">Higher Secondary School</h3>
            <h4 className="org_name">K.V. No.1 Jamnagar</h4>
            <h5 className="org_duration">2018 - 2019</h5>
          </div>
          <br/>
          <p className="org_description">
            In the AISSCE-2019 examination conducted by CBSE, I studied under the PCMB stream and achieved score of 87%.
            </p>
        </div>
      </div>
    </>
  );
}

export default Education;
