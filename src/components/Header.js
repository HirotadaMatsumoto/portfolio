import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => (
  <header>
    <div className="title">
      <h1 className="title-text">Hirotada Matsumoto</h1>
      <h2 className="subtitle-text">松本 浩忠</h2>
      <div className="overlay overlay-1">Hirotada Matsumoto</div>
      <div className="overlay overlay-2">松本 浩忠</div>
    </div>
    <nav className="menu">
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
