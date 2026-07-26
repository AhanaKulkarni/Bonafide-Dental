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
          Premium, painless dentistry — in minutes, not hours.
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => window.open("https://wa.me/918097140166", "_blank")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Chat on WhatsApp
          </button>
          <a href="#book" className="btn btn-outline">
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
            <div className="stars" style={{ gap: '2px', marginBottom: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-primary)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span><strong>4.9</strong> · 480+ Google Reviews</span>
          </div>
          <div className="stat-item">
            <strong>12+</strong>
            <span>Years experience</span>
          </div>
        </div>
      </div>
      
      <div className="hero-image-wrapper">
        <img src="/hero_woman_smiling.jpg" alt="Happy patient smiling" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
