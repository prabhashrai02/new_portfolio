import React from "react";
import './Home.css';
import { FiTwitter, FiGithub, FiInstagram } from "react-icons/fi";

const Home = () => {
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
                  Welcome to my portfolio website!
                  I'm a frontend engineer specializing in creating seamless digital experiences.
                  With a strong foundation in programming, expertise in data structures, and proficiency in the latest web technologies,
                  I craft visually stunning and user-friendly interfaces. I thrive on learning, collaborating, and pushing boundaries.
                  Let's shape the future of the web together!
                  </p>
                  <div className="button">
                      <a href="https://www.linkedin.com/in/prabhashrai02/" target="_blank" rel="noreferrer">Follow Me</a>
                  </div>
              </div>
              <div className="social_container">
                <div className="social">
                  <a href="https://twitter.com/prabhashrai02" target="_blank" rel="noreferrer">
                  <div className="follow_icon">
                    <i className="social_icon"><FiTwitter id="twitter" /></i>
                  </div>
                  </a>
                  <a href="https://github.com/prabhashrai02" target="_blank" rel="noreferrer">
                  <div className="follow_icon">
                    <i className="social_icon"><FiGithub id="github" /></i>
                  </div>
                  </a>
                  <a href="https://instagram.com/prabhashrai02" target="_blank" rel="noreferrer">
                    <div className="follow_icon">
                      <i className="social_icon"><FiInstagram id="instagram" /></i>  
                    </div>
                  </a>
                </div>
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
