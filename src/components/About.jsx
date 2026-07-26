import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>,
      title: "Experienced Dentist"
    },
    {
      icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
      title: "Modern Equipment"
    },
    {
      icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
      title: "Gentle Care"
    },
    {
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
      title: "Patient First"
    }
  ];

  return (
    <section className="about container section" id="about">
      <div className="about-image-wrapper">
        <img src="/doctor_dimple.jpg" alt="Dr. Dimple Rai Singh" className="about-image" />
      </div>
      
      <div className="about-content">
        <h4 className="section-label">ABOUT</h4>
        <h2 className="about-title">Dr. Dimple Rai Singh</h2>
        <p className="about-subtitle">B.D.S. · Dental Surgeon</p>
        
        <p className="about-desc">
          Modern dentistry delivered with warmth, precision, and calm.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon}
                </svg>
              </div>
              <span className="feature-title">{feature.title}</span>
            </div>
          ))}
        </div>
        
        <button className="btn btn-primary" style={{marginTop: '32px'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Chat on WhatsApp
        </button>
      </div>
    </section>
  );
};

export default About;
