import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Bonafide Dental, I'd like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/918097445755?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="booking container section" id="book">
      <div className="booking-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '64px 32px' }}>
        <h4 className="section-label-light" style={{ color: 'var(--color-primary)' }}>BOOKING</h4>
        <h2 className="booking-title" style={{ color: '#000', marginBottom: '16px' }}>Book an appointment.</h2>
        <p className="booking-subtitle" style={{ color: 'var(--color-text-light)', marginBottom: '32px' }}>Fill out the details below and we will contact you shortly.</p>
        
        <form className="details-form" onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <textarea name="message" placeholder="Brief Message (Optional)" value={formData.message} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1rem', minHeight: '100px', resize: 'vertical' }}></textarea>
          <button type="submit" className="submit-btn" style={{ width: '100%', padding: '16px', borderRadius: '40px', background: 'var(--color-primary)', color: 'white', border: 'none', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', marginTop: '8px' }}>Send Booking Request</button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
