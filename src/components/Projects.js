import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => (
  <div id="projects">
    <h2>Projects</h2>
    <div className="project">
      <h3>Project 1</h3>
      <p>Description for Project 1</p>
      <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer" className="project-link">View Details</a>
    </div>
    <div className="project">
      <h3>Project 2</h3>
      <p>Description for Project 2</p>
      <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer" className="project-link">View Details</a>
    </div>
    <div className="project">
      <h3>Project 3</h3>
      <p>Description for Project 3</p>
      <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer" className="project-link">View Details</a>
    </div>
    <div className="home-link">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default Projects;
