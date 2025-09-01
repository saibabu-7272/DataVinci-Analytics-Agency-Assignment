import React, { useState } from 'react';
import './QuantitySelector.css';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  return (
    <div className="quantity-selector">
      <div className="quantity-selector__label">SELECT QUANTITY</div>
      <div className="quantity-selector__controls">
        <button 
          className="quantity-selector__button quantity-selector__button--decrease"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="quantity-selector__value">{quantity}</span>
        <button 
          className="quantity-selector__button quantity-selector__button--increase"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
