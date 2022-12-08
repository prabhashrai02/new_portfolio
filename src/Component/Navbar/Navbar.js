import "./Navbar.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome, AiFillContacts } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";
import { SiRiotgames } from "react-icons/si";
import { IoBookSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

function close() {
  let chk = document.getElementById("nav-toggle");
  chk.checked = !chk.checked;
  window.scrollTo(0, 0);
}

function Navbar() {

  const [selectedTheme, setSelectedTheme] = useState('dark_theme');
  const [theme, setTheme] = useState('Dark');
  const [themeImage, setThemeImage] = useState('https://images.all-free-download.com/images/graphiclarge/smiling_sun_312442.jpg');

  function changeTheme () {
      if (theme === 'Light') {
        setSelectedTheme('dark_theme');
        setTheme('Dark');
        setThemeImage('https://images.all-free-download.com/images/graphiclarge/smiling_sun_312442.jpg');
      }
      else {
        setSelectedTheme('light_theme');
        setTheme('Light');
        setThemeImage('https://media.istockphoto.com/id/947112512/vector/moon-and-stars-flat-icon-isolated-sign-stock-vector.jpg?s=612x612&w=0&k=20&c=HM-46rmpgz_eMFIIpGQUmupHBcKlJcDif_YdKY4klQI=');
      }

      // select theme for whole page from user input
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

          <button className="theme_button" onClick={changeTheme}>
            <img className="theme_button_image" src={themeImage} alt="theme"/>
          </button>

          <ul className="nav-list">
            <li className="navigation__item">
              <Link onClick={close} to="/home" className="navigation__link">
                <span>
                  <AiTwotoneHome id="/home" className="icon white-background" />
                </span>
                <span className="top"> Home </span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link onClick={close} to="/challenge" className="navigation__link">
                <span>
                  <SiRiotgames id="/challenge" className="icon white-background"/>
                </span>
                <span> Let's Play </span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link onClick={close} to="/skills" className="navigation__link">
                <span>
                  <GiSkills id="/skills" className="icon white-background" />
                </span>
                <span> Skills </span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link onClick={close} to="/education" className="navigation__link">
                <span>
                  <IoBookSharp id="/education" className="icon white-background"/>
                </span>
                <span> Education </span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link onClick={close} to="/projects" className="navigation__link">
                <span>
                  <RiProjectorFill id="/projects" className="icon white-background"/>
                </span>
                <span> Projects </span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link onClick={close} to="/experience" className="navigation__link">
                <span>
                  <MdWork id="/experience" className="icon white-background" />
                </span>
                <span> Experience </span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link onClick={close} to="/contact" className="navigation__link">
                <span>
                  <AiFillContacts id="/contact" className="icon white-background"/>
                </span>
                <span> Contact Me </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
