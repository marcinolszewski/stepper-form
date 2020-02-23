import React from 'react';

const LegendElement = ({ children, activeStep }) => {
  const shouldBeActive = activeStep === children;
  return (
    <div className={`legend__indicator ${shouldBeActive ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default LegendElement;
