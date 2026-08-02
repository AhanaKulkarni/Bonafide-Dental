import React, { useState } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="ba-slider-container">
      <div className="ba-images">
        {/* Background is the after image */}
        <img src={afterImage} alt="After" className="ba-image ba-image-after" />
        
        {/* Foreground is the before image, clipped */}
        <img 
          src={beforeImage} 
          alt="Before" 
          className="ba-image ba-image-before"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        />
        
        {/* The slider thumb line */}
        <div className="ba-slider-line" style={{ left: `${sliderPosition}%` }}>
          <div className="ba-slider-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Invisible range input for interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleMove}
        className="ba-slider-input"
      />
      
      <div className="ba-labels">
        <span className="ba-label ba-label-before">Before</span>
        <span className="ba-label ba-label-after">After</span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
