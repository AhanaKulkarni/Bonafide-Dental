import React from 'react';
import './Treatments.css';
import BeforeAfterSlider from './BeforeAfterSlider';

const Treatments = () => {
  const treatments = [
    { title: 'Smile Design & Restorations', before: '/slider_1_before.jpg', after: '/slider_1_after.jpg' },
    { title: 'Teeth Whitening & Aesthetics', before: '/slider_2_before.jpg', after: '/slider_2_after.jpg' },
    { title: 'Gum Health & Full Mouth Rehab', before: '/slider_3_before.jpg', after: '/slider_3_after.jpg' },
    { title: 'Advanced Dental Care', before: '/slider_4_before.jpg', after: '/slider_4_after.jpg' }
  ];

  return (
    <div className="treatments-wrapper" id="treatments">
      <section className="treatments container section">
        <div className="treatments-header">
          <h4 className="section-label">OUR TREATMENTS</h4>
          <h2 className="treatments-title">Transforming smiles.</h2>
        </div>
        
        <div className="treatments-slider-grid">
          {treatments.map((t, index) => (
            <div className="treatment-slider-card" key={index}>
              <BeforeAfterSlider beforeImage={t.before} afterImage={t.after} />
              <div className="treatment-content">
                <h3>{t.title}</h3>
                <p>Slide to see the transformation</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Treatments;
