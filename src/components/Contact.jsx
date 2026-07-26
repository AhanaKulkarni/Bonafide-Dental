import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <div className="contact-left">
        <h4 className="section-label">CONTACT</h4>
        <h2 className="contact-title">We care for your teeth.</h2>
        
        <div className="contact-phone">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>+91 8097445755</span>
        </div>
        
        <div className="contact-actions">
          <button className="btn btn-primary">
            Call Now
          </button>
          <button className="btn btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            Book on WhatsApp
          </button>
        </div>
      </div>
      
      <div className="contact-right">
        <div className="timings-card">
          <div className="timings-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="section-label" style={{marginBottom: 0}}>CLINIC TIMINGS</span>
          </div>
          
          <ul className="timings-list">
            <li>
              <span>Morning</span>
              <strong>10:30 AM – 1:00 PM</strong>
            </li>
            <li>
              <span>Evening</span>
              <strong>5:30 PM – 8:30 PM</strong>
            </li>
            <li>
              <span>Sunday</span>
              <strong>By Appointment Only</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
