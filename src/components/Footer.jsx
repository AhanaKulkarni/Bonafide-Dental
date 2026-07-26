import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <div className="logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="logo-text">Bonafide Dental Clinic</span>
        </div>
        
        <p className="copyright">
          © {new Date().getFullYear()} Bonafide Dental Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
