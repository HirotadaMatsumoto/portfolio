import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const handleBackgroundColor = () => {
    const videoElement = document.querySelector('.video-background');
    if (!videoElement) return;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const { videoWidth, videoHeight } = videoElement;
    canvas.width = videoWidth;
    canvas.height = videoHeight;
    context.drawImage(videoElement, 0, 0, videoWidth, videoHeight);
    const imageData = context.getImageData(0, 0, videoWidth, videoHeight);
    const pixels = imageData.data;

    let brightness = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      brightness += (r + g + b) / 3;
    }
    const averageBrightness = brightness / (pixels.length / 4);
    setIsDarkBackground(averageBrightness < 128);
  };

  useEffect(() => {
    const videoElement = document.querySelector('.video-background');
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleBackgroundColor);
      return () => {
        videoElement.removeEventListener('loadeddata', handleBackgroundColor);
      };
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header isDarkBackground={isDarkBackground} />
        <video className="video-background" autoPlay loop muted>
          <source src="/assets/videos/background-video.mp4" type="video/mp4" />
        </video>
        <section id="about" className="section about">
          <About />
        </section>
        <section id="skills" className="section skills">
          <Skills />
        </section>
        <section id="projects" className="section projects">
          <Projects />
        </section>
        <section id="contact" className="section contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
