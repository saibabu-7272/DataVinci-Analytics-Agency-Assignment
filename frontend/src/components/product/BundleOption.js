import React, { useState } from 'react';
import './BundleOption.css';
import { FiToggleRight, FiToggleLeft } from 'react-icons/fi';
import largeJar from '../../assets/images/Large-jar.png';
import extraLargeJar from '../../assets/images/Extra Large-jar.png';
import bundlePack from '../../assets/images/Bundle-pack.png';

const BundleOption = () => {
  const [bundleEnabled, setBundleEnabled] = useState(true);
  
  const toggleBundle = () => {
    setBundleEnabled(!bundleEnabled);
  };
  return (
    <div className="bundle-option">
      <div className="bundle-option__header">
        <h3>Beauty Bundle</h3>
        <div className="bundle-option__toggle" onClick={toggleBundle}>
          {bundleEnabled ? <FiToggleRight size={24} color="#7b2c7d" /> : <FiToggleLeft size={24} />}
        </div>
      </div>
      
      <div className="bundle-option__content">
        <div className="bundle-option__products">
          <div className="bundle-option__product">
            <div className="bundle-option__product-image">
              <img src={largeJar} alt="UMF 20+ Jar" />
            </div>
            <span className="bundle-option__product-name">UMF 20+</span>
            <span className="bundle-option__product-size">170g</span>
            <span className="bundle-option__product-price">$119.00</span>
          </div>
          <div className="bundle-option__plus">+</div>
          <div className="bundle-option__product">
            <div className="bundle-option__product-image">
              <img src={extraLargeJar} alt="UMF 24+ Jar" />
            </div>
            <span className="bundle-option__product-name">UMF 24+</span>
            <span className="bundle-option__product-size">250g</span>
            <span className="bundle-option__product-price">$129.00</span>
          </div>
          <div className="bundle-option__plus">+</div>
          <div className="bundle-option__product">
            <div className="bundle-option__product-image">
              <img src={bundlePack} alt="Wooden Spoon" />
            </div>
            <span className="bundle-option__product-name">Wooden Spoon</span>
            <span className="bundle-option__product-price">$10.00</span>
          </div>
        </div>
        
        <div className="bundle-option__summary">
          <div className="bundle-option__original-price">
            <span>$376.77 USD</span>
          </div>
          <div className="bundle-option__price">
            <span>$430.88 USD</span>
            <span className="bundle-option__save">Save 10%</span>
          </div>
        </div>
        
        <button className="bundle-option__add-button">ADD BUNDLE TO CART</button>
      </div>
    </div>
  );
};

export default BundleOption;
