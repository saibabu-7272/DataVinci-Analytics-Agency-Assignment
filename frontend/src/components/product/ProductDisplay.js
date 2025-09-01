import React, { useState } from 'react';
import './ProductDisplay.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import mainImage from '../../assets/images/Product Image - Manuka Honey Jar.png';
import thumb1 from '../../assets/images/Thumbnail 1.jpg';
import thumb2 from '../../assets/images/Thumbnail 2.jpg';
import thumb3 from '../../assets/images/Thumbnail 3.jpg';
import thumb4 from '../../assets/images/Thumbnail 4.jpg';
import thumb5 from '../../assets/images/Thumbnail 5.jpg';
import thumb6 from '../../assets/images/Thumbnail 6.jpg';
import thumb7 from '../../assets/images/Thumbnail 7.jpg';

const ProductDisplay = () => {
  const [activeThumb, setActiveThumb] = useState(0);
  const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7];
  
  const handleThumbnailClick = (index) => {
    setActiveThumb(index);
  };
  return (
    <>
    <div className="product-display">
      <div className="product-display__background"></div>
      
      <button 
        className="product-display__nav product-display__nav--prev"
        onClick={() => setActiveThumb((prev) => (prev > 0 ? prev - 1 : thumbnails.length - 1))}
      >
        <FiChevronLeft size={24} />
      </button>
      
      <div className="product-display__main-image">
        <img className='banner-image' src={activeThumb === 0 ? mainImage : thumbnails[activeThumb]} alt="Manuka Honey Product" />
      </div>
      
      <button 
        className="product-display__nav product-display__nav--next"
        onClick={() => setActiveThumb((prev) => (prev < thumbnails.length - 1 ? prev + 1 : 0))}
      >
        <FiChevronRight size={24} />
      </button>
      

    </div>
          <div className="product-display__thumbnails">
          {thumbnails.slice(0, 7).map((thumb, index) => (
            <div 
              key={index} 
              className={`product-display__thumbnail ${activeThumb === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={thumb} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
        </>
  );
};

export default ProductDisplay;
