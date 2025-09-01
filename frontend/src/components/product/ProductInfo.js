import React from 'react';
import './ProductInfo.css';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import InfoTooltip from '../ui/InfoTooltip';
import cert1 from '../../assets/images/Cert1.png';
import cert2 from '../../assets/images/Cert2.png';
import cert3 from '../../assets/images/Cert3.png';
import cert4 from '../../assets/images/Cert4.png';
import cert5 from '../../assets/images/Cert5.png';
import cert6 from '../../assets/images/Cert6.png';

const ProductInfo = () => {

  return (
    <div className="product-info">
      <h1 className="product-info__title">Manuka Honey</h1>
      <div className="product-info__ratings">
        <div className="product-info__umf-mgo">
          <h2 className="product-info__umf">UMF<sup>®</sup> 24+</h2>
          <h2 className="product-info__mgo">MGO 1122+</h2>
        </div>
        <InfoTooltip title="What is UMF and MGO?" />
      </div>


      <div className="product-info__details">
        <h3 className="product-info__variant-name">The Optimizer</h3>
        <div className="product-info__reviews">
          <div className="product-info__stars">
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStarHalf color="#FFD700" />
          </div>
          <span className="product-info__review-count">433 reviews</span>
        </div>
        <p className="product-info__description">
          For every time in life when quality counts first. This pure UMF™ 24+ Manuka Honey is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. It has a full, delicious flavour and your body will love you for it.
        </p>

        <div className="product-info__certifications">
          <img src={cert1} alt="Certification 1" />
          <img src={cert2} alt="Certification 2" />
          <img src={cert3} alt="Certification 3" />
          <img src={cert4} alt="Certification 4" />
          <img src={cert5} alt="Certification 5" />
          <img src={cert6} alt="Certification 6" />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
