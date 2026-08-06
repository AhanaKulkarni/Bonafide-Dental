import React from 'react';
import './Services.css';

const Services = () => {
  const serviceCategories = [
    {
      title: 'General & Preventive',
      icon: 'fa-solid fa-tooth',
      services: [
        'Cavity Fillings',
        'Tooth-Coloured Fillings',
        'Digital Dental X-Ray',
        'Tooth Extraction',
        'Surgical Extraction',
        'Complicated Removal'
      ]
    },
    {
      title: 'Specialized Care',
      icon: 'fa-solid fa-stethoscope',
      services: [
        'Root Canal Treatment',
        'Dental Implants',
        'Braces',
        'Clear Aligners'
      ]
    },
    {
      title: 'Cosmetic & Restorative',
      icon: 'fa-solid fa-wand-magic-sparkles',
      services: [
        'Teeth Whitening',
        'Crown & Bridges',
        'Removable Dentures',
        'Fixed Dentures'
      ]
    }
  ];

  return (
    <div className="services-wrapper" id="services">
      <section className="services container section">
        <div className="services-header">
          <h2 className="services-title">SERVICES</h2>
          <h4 className="section-label" style={{marginTop: '16px', fontSize: '20px', textTransform: 'none'}}>Care for every smile.</h4>
        </div>
        
        <div className="services-category-grid">
          {serviceCategories.map((category, index) => (
            <div className="service-category-card" key={index}>
              <div className="category-header">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <ul className="category-list">
                {category.services.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-check"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
