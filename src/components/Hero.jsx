import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
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
      
      {/* Soft Blue Valley Waves at the bottom */}
      <div className="hero-waves">
        <svg width="100%" height="100%" viewBox="0 0 1440 250" preserveAspectRatio="none">
          <path fill="#e0f2fe" d="M0,0 Q720,250 1440,0 V250 H0 Z" opacity="0.5" />
          <path fill="#bae6fd" d="M0,50 Q720,280 1440,50 V250 H0 Z" opacity="0.6" />
          <path fill="#7dd3fc" d="M0,100 Q720,310 1440,100 V250 H0 Z" opacity="0.8" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
