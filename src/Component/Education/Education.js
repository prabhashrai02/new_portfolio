import "./Education.css";

function Education() {
    return (
      <>
        <div className="education_section">
          <div className="timeline_box left">
            <div className="timeline_container">
              <div className="timeline_logo">
                  <img src="https://storage.googleapis.com/ezap-prod/colleges/326/government-engineering-college-modasa-logo.png" />
              </div>
              <h3 className="org_designation">BE(IT)</h3>
              <h4 className="org_name">GEC Modasa</h4>
              <h5 className="org_duration"> Jul 2019 - Present </h5>
              <br/>
              <p className="org_description"> Pursuing BE in Information Technology. CGPA : 8.3 (till 6th semester).</p>
            </div>
          </div>

        <div className="timeline_box">
          <div className="timeline_container">
            <div className="timeline_logo">
                <img src="https://e7.pngegg.com/pngimages/279/924/png-clipart-government-of-india-kendriya-vidyalaya-sangathan-recruitment-examination-lower-division-clerk-test-school-text-teacher.png" />
            </div>
            <h3 className="org_designation">HSC</h3>
            <h4 className="org_name">KV 1 Jamnagar</h4>
            <h5 className="org_duration">2018 - 2019</h5>
            <br/>
            <p className="org_description"> Studied with PCMB and secured 87% in AISSCE- 2019 examination of CBSE.</p>
          </div>
        </div>

          <div id="timeline-divider">
            <div className="timeline-traveller">
              <div>
                <i className="fas fa-biking"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Education;
  