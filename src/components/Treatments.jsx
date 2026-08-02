import React from 'react';
import './Treatments.css';

const Treatments = () => {
  const treatments = [
    { title: 'Root Canal Treatment', img: '/treatment_root_canal.jpg' },
    { title: 'Invisalign & Braces', img: '/treatment_braces.jpg' },
    { title: 'Teeth Whitening', img: '/treatment_whitening.jpg' },
    { title: 'Dental Implants', img: '/treatment_implants.jpg' }
  ];

  return (
    <div className="treatments-wrapper" id="treatments">
      <section className="treatments container section">
        <div className="treatments-header">
          <h4 className="section-label">OUR TREATMENTS</h4>
          <h2 className="treatments-title">Transforming smiles.</h2>
        </div>
        
        <div className="treatments-grid">
          {treatments.map((t, index) => (
            <div className="treatment-card" key={index}>
              <div className="treatment-image-wrapper">
                <img src={t.img} alt={t.title} className="treatment-image" />
              </div>
              <div className="treatment-content">
                <h3>{t.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Treatments;
