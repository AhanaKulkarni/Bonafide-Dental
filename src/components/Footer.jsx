import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center' }}>
        <div className="logo" style={{ justifyContent: 'center' }}>
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="logo-text">Bonafide Dental Clinic</span>
        </div>
        
        <div className="footer-address" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', lineHeight: '1.5', fontSize: '14px' }}>
          G-7, Jay Guru Krupa Bldg, Vimal Dairy Rd, behind ICICI Atm, Bhayandar East, Thane, Maharashtra 401105
        </div>

        <p className="copyright" style={{ marginTop: '8px' }}>
          © {new Date().getFullYear()} Bonafide Dental Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
