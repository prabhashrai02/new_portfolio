import './Navbar.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneHome, AiFillContacts } from 'react-icons/ai';
import { RiProjectorFill } from 'react-icons/ri';
import { SiRiotgames } from 'react-icons/si';
import { IoBookSharp } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';

function Navbar() {
  let prevId = '/home';
  
  useEffect(() => {
    activeNav();
  });

  function activeNav () {
    const page = (window.location.href);
    const currentPage = (window.location.origin);
    const activeId = findCurrentPage(currentPage, page);

    document.getElementById(prevId).classList.remove('active');
    document.getElementById(activeId).classList.add('active');
    prevId = activeId;
  }

  function findCurrentPage(currentURL, baseURL){ 
    let currentPage= "";
    baseURL.split('').forEach(function(letter, pos){
      if (letter !== currentURL.charAt(pos))
      currentPage += letter;         
    });
    return currentPage;
  }

  // const [active, setActive] = useState('home');
  // setActive = () => {

  // }
  return (
    <>
      <div className='nav'>
        <ul className='nav-list' onClick={activeNav}>
          <li>
            <Link to="/home">
                <AiTwotoneHome id='/home' className="icon white-background"/>
            </Link>
          </li>
          <li>
            <Link to="/challenge">
                <SiRiotgames id='/challenge' className='icon white-background'/>
            </Link>
          </li>
          <li>
            <Link to="/skills">
                <GiSkills id='/skills' className='icon white-background'/>
            </Link>
          </li>
          <li>
            <Link to="/education">
                <IoBookSharp id='/education' className='icon white-background'/>
            </Link>
          </li>
          <li>
            <Link to="/projects" >
                <RiProjectorFill id='/projects' className='icon white-background'/>
            </Link>
          </li>
          <li>
            <Link to="/experience">
                <MdWork id='/experience' className='icon white-background'/>
            </Link>
          </li>
          <li>
            <Link to="/contact">
                <AiFillContacts id='/contact' className='icon white-background'/>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
