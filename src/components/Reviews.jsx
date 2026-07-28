import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      text: "\"Dr. Dimple is very professional and gentle. Got my root canal done completely painlessly.\"",
      author: "Rahul M."
    },
    {
      text: "\"Excellent clinic with all modern facilities. The staff is polite and Dr. Dimple explains everything clearly.\"",
      author: "Sneha P."
    },
    {
      text: "\"Best dental experience I've had in Mumbai. Clean environment and highly experienced doctor.\"",
      author: "Vikram S."
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
        <a href="#book" className="btn btn-primary">
          Book an Appointment
        </a>
      </div>
    </section>
  );
};

export default Reviews;
