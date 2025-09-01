import React, { useState, useRef, useEffect } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import './InfoTooltip.css';

const InfoTooltip = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef(null);

  // Handle clicks outside the tooltip and hover delay
  useEffect(() => {
    let hoverTimer;
    
    function handleClickOutside(event) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(hoverTimer);
    };
  }, [isOpen]);

  // UMF/MGO specific content
  const umfMgoContent = (
    <>
      <div className="info-tooltip__section">
        <h4><strong>UMF</strong> is the strength and purity rating of Manuka honey.</h4>
        
        <div className="info-tooltip__scale">
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#F97316' }} data-label="10+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#EF4444' }} data-label="15+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#EC4899' }} data-label="20+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#A855F7' }} data-label="24+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#2563EB' }} data-label="26+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#10B981' }} data-label="28+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#1D4ED8' }} data-label="30+"></div>
        </div>
        
        <div className="info-tooltip__scale-values">
          <span>10+</span>
          <span>15+</span>
          <span>20+</span>
          <span>24+</span>
          <span>26+</span>
          <span>28+</span>
          <span>30+</span>
        </div>
        
        <p className="info-tooltip__description">
          The higher the number, the greater the potency and rarity of Manuka honey.
        </p>
      </div>
      
      <div className="info-tooltip__section">
        <h4><strong>MGO</strong> is the key natural compound that gives Manuka honey its special antibacterial strength.</h4>
        <div className="info-tooltip__scale">
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#F97316' }} data-label="263+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#EF4444' }} data-label="514+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#EC4899' }} data-label="829+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#A855F7' }} data-label="1122+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#2563EB' }} data-label="1282+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#10B981' }} data-label="1450+"></div>
          <div className="info-tooltip__scale-item" style={{ backgroundColor: '#1D4ED8' }} data-label="1620+"></div>
        </div>
        <div className="info-tooltip__scale-values">
          <span>263+</span>
          <span>514+</span>
          <span>829+</span>
          <span>1122+</span>
          <span>1282+</span>
          <span>1450+</span>
          <span>1620+</span>
        </div>
        <p className="info-tooltip__description">The higher the number, the higher the antibacterial properties in the honey.</p>
      </div>
      
      <button className="info-tooltip__close-btn" onClick={() => setIsOpen(false)}>
        Close
      </button>
    </>
  );

  return (
    <div className="info-tooltip-container" 
         onMouseEnter={() => setIsOpen(true)} 
         onMouseLeave={() => setIsOpen(false)}
    >
      <div className="info-tooltip-trigger">
        <IoInformationCircleOutline size={18} />
        <span className="info-tooltip-title">{title}</span>
      </div>
      
      {isOpen && (
        <div className="info-tooltip" ref={tooltipRef}>
          <div className="info-tooltip__content">
            {content || umfMgoContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoTooltip;
