import './App.css';
import Experience from './Component/Experience/Experience';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import PlaywithMe from './Component/PlaywithMe/PlaywithMe';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';
import Projects from './Component/Projects/Projects';
import Education from './Component/Education/Education';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Routes, Route, Navigate, HashRouter as Router } from 'react-router-dom';

function App() {
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
        <Route exact path='/education' element={<Education />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
    
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 20,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
        particles: {
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            random: false,
            speed: 2,
            outModes: "out",
            direction: "top",
          },
          number: {
            density: {
              enable: false,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ["triangle", "circle"],
          },
          size: {
            value: { 
              min: 1, max: 3 
            },
            random: true,
            anim: {
              "speed": 4,
              "size_min": 0.3
            }
          },
        },
      }}
    />
    </>
  );
}

export default App;
