import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact container section" id="contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '80px 20px' }}>
      <h4 className="section-label">CONTACT US</h4>
      <h2 className="contact-title" style={{ marginBottom: '40px' }}>We care for your teeth.</h2>
      
      <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px', alignItems: 'center' }}>
        <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem' }}>
          <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}></i>
          <p style={{ textAlign: 'left', maxWidth: '500px', lineHeight: '1.5' }}>G-7, Jay Guru Krupa Bldg, Vimal Dairy Rd, behind ICICI Atm, near Don Bosco School, Bhayandar East, Thane, Maharashtra 401105</p>
        </div>
        <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem' }}>
          <i className="fa-solid fa-phone" style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}></i>
          <p>+91 80974 45755</p>
        </div>
        <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem', marginTop: '8px' }}>
          <i className="fa-regular fa-clock" style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}></i>
          <div style={{ textAlign: 'left' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '500' }}>Mon to Sat: 5:30 PM - 8:30 PM</p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Sunday: By appointment only</p>
          </div>
        </div>
      </div>
      
      <a href="https://wa.me/918097445755" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '16px 40px', borderRadius: '40px', gap: '12px' }}>
        <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.5rem' }}></i>
        Chat on WhatsApp
      </a>
    </section>
  );
};

export default Contact;
