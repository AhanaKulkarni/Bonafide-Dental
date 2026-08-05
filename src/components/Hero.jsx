import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container section" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Professional Background Graphic */}
      <div className="hero-bg-graphic">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary-light)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <pattern id="gridPattern" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="var(--color-primary)" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#heroGrad)" />
          <rect width="100" height="100" fill="url(#gridPattern)" />
          <circle cx="85" cy="15" r="25" fill="var(--color-primary-light)" opacity="0.4" filter="blur(6px)" />
          <circle cx="15" cy="85" r="35" fill="var(--color-accent)" opacity="0.15" filter="blur(8px)" />
        </svg>
      </div>

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
          <a href="#contact" className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            Contact us on WhatsApp
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <strong>12+</strong>
            <span>Years experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
