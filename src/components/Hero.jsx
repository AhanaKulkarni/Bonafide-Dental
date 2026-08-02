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
        <div className="collage-bg-graphic">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>
            </defs>
            <path fill="url(#blobGrad)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.7,-18.1,97.7,-2.4C98.6,13.3,94.5,29.3,85.2,42.4C75.8,55.4,61.2,65.6,45.8,73.4C30.4,81.1,14.3,86.4,-1.8,89.5C-17.9,92.6,-33.9,93.4,-47.9,86.6C-61.8,79.7,-73.7,65.2,-81.8,49.1C-90,33.1,-94.3,15.5,-93.6,-1.7C-92.9,-18.9,-87.3,-35.6,-77,-49C-66.7,-62.4,-51.7,-72.5,-36.5,-79C-21.3,-85.4,-6,-88.2,7.9,-85.4C21.8,-82.6,30.5,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <img src="/hero_ba_1.jpg" alt="Patient before and after" className="collage-img img-1" />
        <img src="/hero_ba_2.png" alt="Teeth whitening before and after" className="collage-img img-2" />
      </div>
    </section>
  );
};

export default Hero;
