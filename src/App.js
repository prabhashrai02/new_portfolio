import './App.css';
import Experience from './Component/Experience/Experience';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import PlaywithMe from './Component/PlaywithMe/PlaywithMe';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';
import Projects from './Component/Projects/Projects';
import Education from './Component/Education/Education';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/challenge' element={<PlaywithMe />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/experience' element={<Experience />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/education' element={<Education />} />
        </Routes>
    </Router>
    
  );
}

export default App;
