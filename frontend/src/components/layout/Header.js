import React, { useState } from 'react';
import './Header.css';
import { FiMenu, FiUser, FiSearch, FiShoppingCart } from 'react-icons/fi';
import logo from '../../assets/images/Logo.png';

const Header = () => {
  const [activeTab, setActiveTab] = useState('shop');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="header">
      <div className="header__top">

        <div className='space-align'>
          <div className='border-dark'>WHICH MONUKA IS FOR ME?</div>

          <div>Shop</div>

          <div>Explore</div>

        </div>

        
        <div className="header__logo">
          <img src={logo} alt="New Zealand Honey Co. Logo" />
        </div>

        <div className='space-align'>

        <div>About</div>

        <div>Revards</div>
        <div>Contact</div>

        <div className="header__actions">
          <div className="header__action header__account">
            <FiUser size={20} />
          </div>
          <div className="header__action header__search">
            <FiSearch size={20} />
          </div>
          <div className="header__action header__cart">
            <FiShoppingCart size={20} />
            <span className="header__cart-count">0</span>
          </div>
        </div>

        </div>
        
      </div>

    </header>
  );
};

export default Header;
