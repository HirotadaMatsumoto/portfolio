import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

const Skills = () => (
  <div id="skills">
    <h2>Skills</h2>
    <ul>
      <li>Python</li>
      <li>OSS-DB</li>
      <li>HTML, CSS</li>
      <li>AWS</li>
      <li>Java</li>
    </ul>
    <div className="home-link">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default Skills;
