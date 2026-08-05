import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero_bg.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Image Container spanning to right edge */}
      <div className="hero-image-container">
        <img src={heroBg} alt="Bonafide Dental Clinic" className="hero-img" />
        <div className="hero-image-overlay"></div>
      </div>

      <div className="hero-grid container">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            NOW ACCEPTING NEW PATIENTS
          </div>
          
          <h1 className="hero-title">
            Confidence<br />
            begins with your <em>smile.</em>
          </h1>
          
          <p className="hero-subtitle">
            Premium, painless dentistry — in minutes, not hours.<br />
            All treatments under one roof for you and your family.
          </p>
          
          <div className="hero-buttons">
            <a href="https://wa.me/918097140166?text=Hi%20Bonafide%20Dental,%20I'd%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="fa-brands fa-whatsapp"></i> Contact us on WhatsApp
            </a>
            <a href="#book" className="btn btn-outline-dark">
              <i className="fa-regular fa-calendar"></i> Book Appointment
            </a>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
              <div className="feature-text">
                <strong>Painless</strong>
                <span>Comfort First</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
              <div className="feature-text">
                <strong>Advanced</strong>
                <span>Technology</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-user-doctor"></i></div>
              <div className="feature-text">
                <strong>Expert</strong>
                <span>Dental Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats-wrapper container">
        <div className="hero-stats">
          <div className="stat-card">
            <i className="fa-solid fa-calendar-check stat-icon"></i>
            <div className="stat-text">
              <strong>12+</strong>
              <span>Years Experience</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <i className="fa-regular fa-face-smile stat-icon"></i>
            <div className="stat-text">
              <strong>12K+</strong>
              <span>Happy Patients</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <i className="fa-solid fa-suitcase-medical stat-icon"></i>
            <div className="stat-text">
              <strong>25+</strong>
              <span>Treatments</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <i className="fa-regular fa-star stat-icon"></i>
            <div className="stat-text">
              <strong>4.9</strong>
              <span>Google Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
