import React from 'react';
import './TasteProfile.css';

const TasteProfile = () => {
  // This would typically come from product data
  const tasteValue = 50; // Value between 0 and 100

  return (
    <div className="taste-profile">
      <h3 className="taste-profile__header">TASTE PROFILE</h3>
      
      <div className="taste-profile__slider-container">
        <div className="taste-profile__labels">
          <span>Clean & Intense</span>
          <span>Bold & Intense</span>
        </div>
        
        <div className="taste-profile__slider">
          <div 
            className="taste-profile__slider-thumb" 
            style={{ left: `${tasteValue}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TasteProfile;
