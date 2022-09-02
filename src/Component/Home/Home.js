import React from "react";
import './Home.css';
import { FiTwitter, FiGithub, FiInstagram } from "react-icons/fi";

function Home() {
  return (
    <>
      <div className="section">
        <div className="container-1">
          <div className="content-section">
              <div className="title">
                  <h1>Prabhash Rai</h1>
              </div>
              <div className="content">
                  <p> 
                  Tech Enthusiast, looking for great opportunities to learn in this field,
                  have some basic knowledge of programming and development 
                  with some experience in Frontend development and
                  a good grip on Data Structures,
                  </p>
                  <div className="button">
                      <a href="https://www.linkedin.com/in/prabhashrai02/" target="_blank" rel="noreferrer">Follow Me</a>
                  </div>
              </div>
              <div className="social">
                <a href="https://twitter.com/prabhashrai02" id="twitter" target="_blank" rel="noreferrer">
                  <i><FiTwitter /></i>
                </a>
                <a href="https://github.com/prabhashrai02" id="github" target="_blank" rel="noreferrer">
                  <i><FiGithub /></i>
                </a>
                <a href="https://instagram.com/prabhashrai02" id="instagram" target="_blank" rel="noreferrer">
                  <i><FiInstagram /></i>  
                </a>
              </div>
          </div>
          <div className="image-section">
              <img src="https://www.samarpaninfotech.com/wp-content/uploads/2020/09/WordPress-developer-slider-img.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
