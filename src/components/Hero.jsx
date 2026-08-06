import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-accents">
        <div className="accent-glow accent-glow-1"></div>
        <div className="accent-glow accent-glow-2"></div>
        <div className="accent-glow-center"></div>
      </div>
      
      <div className="hero-content container">
        <div className="badge">
          <span className="badge-dot"></span>
          NOW ACCEPTING NEW PATIENTS
        </div>
        
        <h1 className="hero-title">
          Confidence<br />
          begins with your <span className="hero-smile">smile.</span>
        </h1>
        <div className="hero-deco">
          <div className="deco-line deco-line-left"></div>
          <i className="fa-solid fa-tooth deco-icon"></i>
          <div className="deco-line deco-line-right"></div>
        </div>
        
        <p className="hero-subtitle">
          Premium, painless dentistry — in minutes, not hours.<br />
          All treatments under one roof for you and your family.
        </p>
        
        <div className="hero-buttons">
          <a href="https://wa.me/918097140166" target="_blank" rel="noopener noreferrer" className="btn btn-navy">
            <i className="fa-brands fa-whatsapp"></i> Contact us on WhatsApp
          </a>
          <a href="#book" className="btn btn-outline-dark">
            <i className="fa-regular fa-calendar"></i> Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
