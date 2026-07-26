import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      text: "\"Genuinely painless. The calmest dental visit I've had.\"",
      author: "Ananya S."
    },
    {
      text: "\"My veneers look completely natural. Just happier.\"",
      author: "Rohan K."
    },
    {
      text: "\"Unbelievably gentle with my six-year-old.\"",
      author: "Priya M."
    }
  ];

  return (
    <section className="reviews container section" id="reviews">
      <div className="reviews-header">
        <h4 className="section-label">REVIEWS</h4>
        <h2 className="reviews-title">Loved by our patients.</h2>
      </div>
      
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="review-text">{review.text}</p>
            <p className="review-author">{review.author}</p>
          </div>
        ))}
      </div>
      
      <div className="reviews-cta">
        <button className="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Chat on WhatsApp
        </button>
        <p className="cta-subtext">Or book an appointment below.</p>
      </div>
    </section>
  );
};

export default Reviews;
