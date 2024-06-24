import Experience from './Component/Experience/Experience';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import PlaywithMe from './Component/PlaywithMe/PlaywithMe';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';
import Projects from './Component/Projects/Projects';
// import Education from './Component/Education/Education';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Routes, Route, Navigate, HashRouter as Router } from 'react-router-dom';
import './App.css';

const App = () => {
  const particlesInit = useCallback(async (engine) => {

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <>
      <Router>
        <div className="brand">"See the good"</div>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/challenge' element={<PlaywithMe />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/experience' element={<Experience />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/projects' element={<Projects />} />
          {/* <Route exact path='/education' element={<Education />} /> */}
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 50,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "top",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                area: 800,
              },
              value: 50,
              limit: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["triangle", "circle"],
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}

export default App;
