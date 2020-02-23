import React from 'react';

const Button = ({ changeInput, btnClass, children }) => {
  return (
    <button onClick={changeInput} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
