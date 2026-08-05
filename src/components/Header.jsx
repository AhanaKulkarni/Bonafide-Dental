import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="header container">
        <div className="header-inner">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Bonafide Dental Clinic" className="logo-image" />
          </a>
        </div>
        
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services <i className="fa-solid fa-chevron-down" style={{fontSize: '0.7rem', marginLeft: '4px'}}></i></a>
          <a href="#gallery">Smile Gallery</a>
          <a href="#contact">Contact</a>
          <a href="#book">Book Appointment</a>
        </nav>
        
        <a href="https://wa.me/918097140166" target="_blank" rel="noopener noreferrer" className="btn btn-navy">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
      </div>
    </header>
  );
};

export default Header;
