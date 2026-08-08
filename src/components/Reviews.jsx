import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      text: "\"I got my teeth scaling and cleaning done today, and the experience was excellent. The doctor was very professional and gentle. My teeth feel extremely clean, smooth, and fresh now. Highly recommended!\"",
      author: "Vandana Rajbhar"
    },
    {
      text: "\"Dr. Dimple is very supportive and she has the best patience level and the services provided by her are just the bestest. She provides it at very affordable rates. Highly recommend to visit Bonafide dental.\"",
      author: "Shweta Daware"
    },
    {
      text: "\"Dr. Dimple Ma'am is very professional and caring. The treatment was smooth and painless. The clinic is clean and staff are polite. Highly recommended!\"",
      author: "Rajkamal Saroj"
    },
    {
      text: "\"Dr. Dimple was excellent! They explained everything in a clear and simple way, answered all my questions, and made sure I was comfortable. The clinic was very clean and had modern equipment.\"",
      author: "Ajay Kalantre"
    },
    {
      text: "\"Dr. Dimple provided excellent treatment to my mother, successfully extracting and fitting her teeth with a painless procedure. Her professionalism and care were truly commendable.\"",
      author: "Amarendra Mishra"
    },
    {
      text: "\"Had a severe tooth pain and I was unable to eat from that side. My friend referred me to Dr. Dimple... she did a root canal treatment for that tooth and now I am feeling better and can eat from that side.\"",
      author: "Kajal"
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
            <p className="review-author">- {review.author}</p>
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
