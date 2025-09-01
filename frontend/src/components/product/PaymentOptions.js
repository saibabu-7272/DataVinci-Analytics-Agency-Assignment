import React, { useState } from 'react';
import './PaymentOptions.css';
import { FiInfo } from 'react-icons/fi';

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState('one-time');
  const [showSubscriptionInfo, setShowSubscriptionInfo] = useState(false);

  const toggleSubscriptionInfo = () => {
    setShowSubscriptionInfo(!showSubscriptionInfo);
  };

  return (
    <div className="payment-options">
      <h3 className="payment-options__header">PAYMENT OPTIONS (SELECT ONE)</h3>
      
      <div className="payment-options__container">
        <button
          className={`payment-option ${selectedOption === 'one-time' ? 'active' : ''}`}
          onClick={() => setSelectedOption('one-time')}
        >
          <div className="payment-option__content">
            <div className="payment-option__header">
              <h4>One time</h4>
              <div className="payment-option__price">$35.88 USD</div>
            </div>
          </div>
        </button>

        <button
          className={`payment-option ${selectedOption === 'subscription' ? 'active' : ''}`}
          onClick={() => setSelectedOption('subscription')}
        >
          <div className="payment-option__content">
            <div className="payment-option__header">
              <h4>Subscribe & save 20%</h4>
              <div className="payment-option__price">$44.70 USD</div>
            </div>
            <div className="payment-option__info">
              <button 
                className="payment-option__info-button"
                onClick={toggleSubscriptionInfo}
              >
                <FiInfo size={16} />
                <span>What is Subscription?</span>
              </button>
            </div>
          </div>
        </button>

        {showSubscriptionInfo && (
          <div className="subscription-info-modal">
            <div className="subscription-info-modal__content">
              <h3>Subscription Information</h3>
              <p>
                Subscribe to receive your favorite Manuka honey regularly without having to remember to reorder.
                Enjoy a 20% discount on every order, with the flexibility to skip, pause, or cancel anytime.
              </p>
              <button 
                className="subscription-info-modal__close-button"
                onClick={toggleSubscriptionInfo}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentOptions;
