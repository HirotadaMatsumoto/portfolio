import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => (
  <div id="contact">
    <h2>Contact</h2>
    <p>Email: example@example.com</p>
    <a href="mailto:example@example.com" className="contact-link">Send an Email</a>
    <div className="home-link">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default Contact;
