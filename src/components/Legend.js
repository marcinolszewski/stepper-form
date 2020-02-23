import React from 'react';

const Legend = props => {
  const { step } = props;
  return (
    <div className="legend__wrapper">
      <div className={`legend__indicator ${step === 1 ? `active` : ''}`}>1</div>
      <div className={`legend__indicator ${step === 2 ? `active` : ''}`}>2</div>
      <div className={`legend__indicator ${step === 3 ? `active` : ''}`}>3</div>
    </div>
  );
};

export default Legend;
