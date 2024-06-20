import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => (
  <div id="about">
    <h2>About Me</h2>
    <p>I am Hirotada Matsumoto, a seasoned software engineer with extensive experience in leveraging the latest technologies to drive project success.</p>
    <div className="home-link">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default About;
