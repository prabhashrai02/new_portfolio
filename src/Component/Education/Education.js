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
          <p className="org_description"> Pursuing BE in Information Technology. CGPA : 8.3 (till 6th semester).</p>
        </div>

        <div className="education_box">
          <div className="education_logo">
            <img className="education_logo" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Kendriya_Vidyalaya_logo.png?20181214053526" alt="Kendriya Vidyalaya"/>
          </div>
          <div className="education_org">
            <h3 className="org_designation">Higher Secondary School</h3>
            <h4 className="org_name">K.V. No.1 Jamnagar</h4>
            <h5 className="org_duration">2018 - 2019</h5>
          </div>
          <br/>
          <p className="org_description"> Studied with PCMB and secured 87% in AISSCE- 2019 examination of CBSE.</p>
        </div>
      </div>
    </>
  );
}

export default Education;
