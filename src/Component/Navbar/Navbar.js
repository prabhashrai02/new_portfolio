import { React, useState } from "react";
import { Link } from "react-router-dom";
import DayNightToggle from 'react-day-and-night-toggle';
import { AiTwotoneHome, AiFillContacts } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";
import { SiRiotgames } from "react-icons/si";
import { IoBookSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import "./Navbar.css";


const navItems = [
  { name: 'Home', path: '/home', icon: AiTwotoneHome },
  { name: 'Let\'s Play', path: '/challenge', icon: SiRiotgames },
  { name: 'Skills', path: '/skills', icon: GiSkills },
  // { name: 'Education', path: '/education', icon: IoBookSharp },
  { name: 'Projects', path: '/projects', icon: RiProjectorFill },
  { name: 'Experience', path: '/experience', icon: MdWork },
  { name: 'Contact Me', path: '/contact', icon: AiFillContacts },
];

const close = () => {
  let chk = document.getElementById("nav-toggle");
  chk.checked = !chk.checked;
  window.scrollTo(0, 0);
}

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('dark_theme');

  function changeTheme () {
    setIsDarkMode(!isDarkMode);

    if (selectedTheme === 'light_theme') {
      setSelectedTheme('dark_theme');
    }
    else {
      setSelectedTheme('light_theme');
    }

    document.body.className = selectedTheme;
  }

  return (
    <>
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
        <label htmlFor="nav-toggle" className="navigation__button">
          <span className="navigation__icon" aria-label="toggle navigation menu" ></span>
        </label>
        <div className="navigation__background"></div>

        <nav className="navigation__nav" role="navigation">
          <div className="theme_button">
            <DayNightToggle onChange={changeTheme} checked={isDarkMode} />
          </div>

          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="navigation__item">
                <Link onClick={close} to={item.path} className="navigation__link">
                  <span>
                    <item.icon id={item.path} className="icon white-background" />
                  </span>
                  <span className="top"> {item.name} </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;