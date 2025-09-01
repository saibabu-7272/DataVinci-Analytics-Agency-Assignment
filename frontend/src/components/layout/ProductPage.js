import React from 'react';
import Header from './Header';
import ProductDisplay from '../product/ProductDisplay';
import ProductInfo from '../product/ProductInfo';
import SizeSelector from '../product/SizeSelector';
import PaymentOptions from '../product/PaymentOptions';
import QuantitySelector from '../ui/QuantitySelector';
import AddToCartButton from '../ui/AddToCartButton';
import BundleOption from '../product/BundleOption';
import UMFScale from '../product/UMFScale';
import TasteProfile from '../product/TasteProfile';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <Header />
      
      <div className="product-page__content">
        <div className="product-page__left">
          <ProductDisplay />
        </div>
        
        <div className="product-page__right">
          <ProductInfo />
          <SizeSelector />
          <PaymentOptions />
          
          <div className="product-page__actions">
            <QuantitySelector />
            <AddToCartButton />
          </div>
          
          <BundleOption />
          <UMFScale />
          <TasteProfile />
          
          <div className="product-page__delivery">
            <h3>DELIVERY</h3>
            <div className="product-page__delivery-info">
              <p>FREE DELIVERY ON ORDERS OVER $30</p>
              
              <div className="product-page__delivery-date">
                <h4>ESTIMATED DELIVERY DATE:</h4>
                <p>Jun 12 - Jun 15</p>
              </div>
            </div>
          </div>
          
          <div className="product-page__afterpay">
            <h3>AFTER PAY</h3>
            <p>4 interest-free payments of $11.97 with <span className="afterpay-logo">Afterpay</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
