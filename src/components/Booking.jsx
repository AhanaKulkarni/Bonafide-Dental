import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const treatments = [
    "Consultation", "Root Canal Treatment", "Braces / Clear Aligners",
    "Teeth Whitening", "Crown & Bridges", "Dentures",
    "Tooth Extraction", "Cavity Fillings", "Dental Implants"
  ];
  
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState(3);
  
  const dates = [
    { day: 'SUN', date: '26' },
    { day: 'MON', date: '27' },
    { day: 'TUE', date: '28' },
    { day: 'WED', date: '29' },
    { day: 'THU', date: '30' },
    { day: 'FRI', date: '31' },
    { day: 'SAT', date: '1' }
  ];

  const times = ["10:30 AM", "11:30 AM", "12:30 PM", "05:30 PM", "06:30 PM", "07:30 PM"];

  const handleNext = (nextStep) => {
    setStep(nextStep);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://wa.me/918097140166?text=Hi%20Bonafide%20Dental,%20I'd%20like%20to%20book%20a%20consultation.", "_blank");
  };

  return (
    <section className="booking container section" id="book">
      <div className="booking-wrapper">
        <div className="booking-sidebar">
          <h4 className="section-label-light">BOOKING</h4>
          <h2 className="booking-title">Book an appointment.</h2>
          <p className="booking-subtitle">Four quick steps. Sent to us on WhatsApp.</p>
          
          <ul className="booking-steps">
            <li className={`step ${step >= 1 ? 'active' : ''}`}>
              <span className="step-num">1</span>
              Treatment
            </li>
            <li className={`step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-num">2</span>
              Date
            </li>
            <li className={`step ${step >= 3 ? 'active' : ''}`}>
              <span className="step-num">3</span>
              Time
            </li>
            <li className={`step ${step >= 4 ? 'active' : ''}`}>
              <span className="step-num">4</span>
              Details
            </li>
          </ul>
        </div>
        
        <div className="booking-content">
          {step === 1 && (
            <div className="step-container">
              <h4 className="section-label">STEP 1</h4>
              <h2 className="step-title">Select treatment</h2>
              
              <div className="treatments-grid">
                {treatments.map((treatment, idx) => (
                  <button 
                    key={idx} 
                    className={`treatment-btn ${selected === idx ? 'selected' : ''}`}
                    onClick={() => {
                      setSelected(idx);
                      setTimeout(() => handleNext(2), 300);
                    }}
                  >
                    {treatment}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-container fade-in">
              <h4 className="section-label">STEP 2</h4>
              <h2 className="step-title">Choose a date</h2>
              
              <div className="dates-row">
                {dates.map((d, idx) => (
                  <button 
                    key={idx} 
                    className={`date-circle ${selectedDate === idx ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedDate(idx);
                      setTimeout(() => handleNext(3), 300);
                    }}
                  >
                    <span className="date-day">{d.day}</span>
                    <span className="date-num">{d.date}</span>
                  </button>
                ))}
              </div>
              
              <button className="back-btn" onClick={() => setStep(1)}>
                &larr; Back
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="step-container fade-in">
              <h4 className="section-label">STEP 3</h4>
              <h2 className="step-title">Pick a time</h2>
              
              <div className="times-grid">
                {times.map((time, idx) => (
                  <button 
                    key={idx} 
                    className={`time-btn ${selectedTime === idx ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedTime(idx);
                      setTimeout(() => handleNext(4), 300);
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
              
              <button className="back-btn" onClick={() => setStep(2)}>
                &larr; Back
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="step-container fade-in">
              <h4 className="section-label">STEP 4</h4>
              <h2 className="step-title">Your details</h2>
              
              <form className="details-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" defaultValue="Ahana" className="form-input" />
                <input type="tel" placeholder="Phone Number" defaultValue="8928352406" className="form-input" />
                <button type="submit" className="submit-btn">Submit</button>
              </form>
              
              <button className="back-btn" onClick={() => setStep(3)}>
                &larr; Back
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
