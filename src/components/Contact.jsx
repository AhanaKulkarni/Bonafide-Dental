import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact container section" id="contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '80px 20px' }}>
      <h4 className="section-label">CONTACT US</h4>
      <h2 className="contact-title" style={{ marginBottom: '24px' }}>We care for your teeth.</h2>
      <p style={{ color: 'var(--color-text-light)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Reach out to us directly on WhatsApp to book an appointment, ask questions, or learn more about our treatments.
      </p>
      
      <a href="https://wa.me/918097445755" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '16px 40px', borderRadius: '40px', gap: '12px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        Chat on WhatsApp
      </a>
    </section>
  );
};

export default Contact;
