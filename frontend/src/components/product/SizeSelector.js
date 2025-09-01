import React, { useState } from 'react';
import './SizeSelector.css';
import smallJar from '../../assets/images/Small-jar.png';
import mediumJar from '../../assets/images/medium-jar.png';
import largeJar from '../../assets/images/Large-jar.png';
import extraLargeJar from '../../assets/images/Extra Large-jar.png';
import bulkJar from '../../assets/images/Bulk-jar.png';
import sachetsPack from '../../assets/images/Sachets-pack.png';
import bundlePack from '../../assets/images/Bundle-pack.png';

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState('125g');
  
  const sizes = [
    { id: '125g', label: '125g | 4.4oz', image: smallJar },
    { id: '250g', label: '250g | 8.8oz', image: mediumJar },
    { id: '500g', label: '500g | 17.6oz', image: largeJar },
    { id: '1kg', label: '1kg | 35.2oz', image: extraLargeJar },
    { id: '5kg', label: '5kg | Bulk', image: bulkJar },
    { id: 'sachets', label: 'Sachets', image: sachetsPack },
    { id: 'bundle', label: 'Bundle', image: bundlePack }
  ];
  
  return (
    <div className="size-selector">
      <div className="size-selector__header">
        <h3>SIZE (SELECT ONE)</h3>
        <div className="size-selector__variant">Variant: {selectedSize}</div>
      </div>
      
      <div className="size-selector__options">
        {sizes.map(size => (
          <button
            key={size.id}
            className={`size-selector__option ${selectedSize === size.id ? 'active' : ''}`}
            onClick={() => setSelectedSize(size.id)}
          >
            <div className="size-selector__image">
              <img src={size.image} alt={size.label} />
            </div>
            <span>{size.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
