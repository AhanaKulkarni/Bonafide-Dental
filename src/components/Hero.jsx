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
      
      {/* Sheer, Layered SVG Waves */}
      <div className="hero-waves">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="rgba(37, 99, 235, 0.04)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="rgba(37, 99, 235, 0.07)" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="rgba(37, 99, 235, 0.12)" d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,192C672,171,768,117,864,117.3C960,117,1056,171,1152,202.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
