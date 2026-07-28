import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container section" id="home">
      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot"></span>
          Accepting new patients
        </div>
        
        <h1 className="hero-title">
          Confidence <br />begins with your <em>smile.</em>
        </h1>
        
        <p className="hero-subtitle">
          Premium, painless dentistry — in minutes, not hours.<br />
          All treatment under one roof
        </p>
        
        <div className="hero-actions">
          <a href="#book" className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Book Appointment
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <strong>12+</strong>
            <span>Years experience</span>
          </div>
        </div>
      </div>
      
      <div className="hero-collage">
        <img src="/collage_1.jpg" alt="Dental clinic interior" className="collage-img img-1" />
        <img src="/collage_2.jpg" alt="Happy patient smiling" className="collage-img img-2" />
        <img src="/collage_3.jpg" alt="Dentist working" className="collage-img img-3" />
        <img src="/collage_4.jpg" alt="Dental tools" className="collage-img img-4" />
      </div>
    </section>
  );
};

export default Hero;
