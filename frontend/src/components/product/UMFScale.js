import React from 'react';
import './UMFScale.css';

const UMFScale = () => {
  const umfLevels = [
    { level: '10+', active: false },
    { level: '15+', active: false },
    { level: '20+', active: false },
    { level: '24+', active: true },
    { level: '26+', active: false },
    { level: '28+', active: false },
    { level: '30+', active: false }
  ];

  return (
    <div className="umf-scale-container">
      <h3 className="umf-scale__header">UMF™ SCALE</h3>
      <div className="umf-scale">
        {umfLevels.map((item, index) => (
          <div 
            key={index} 
            className={`umf-scale__item ${item.active ? 'active' : ''}`}
          >
            <div className="umf-scale__label">{`UMF™ ${item.level}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UMFScale;
