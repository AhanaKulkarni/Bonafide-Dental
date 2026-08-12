import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <div className="contact-header">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">Get in touch with us for any queries or to book an appointment.</p>
      </div>
      
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon-wrapper">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <h3>Visit Us</h3>
          <p>G-7, Jay Guru Krupa Bldg, Vimal Dairy Rd, behind ICICI Atm, near Don Bosco School, Bhayandar East, Thane, Maharashtra 401105</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon-wrapper">
            <i className="fa-solid fa-phone"></i>
          </div>
          <h3>Call Us</h3>
          <p>+91 80974 45755</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon-wrapper">
            <i className="fa-regular fa-clock"></i>
          </div>
          <h3>Working Hours</h3>
          <p style={{ marginBottom: '8px' }}><strong>Mon to Sat:</strong><br/>5:30 PM - 8:30 PM</p>
          <p><strong>Sunday:</strong><br/>By appointment only</p>
        </div>
      </div>
      
      <div className="contact-cta">
        <a href="https://wa.me/918097445755" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <i className="fa-brands fa-whatsapp"></i>
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
