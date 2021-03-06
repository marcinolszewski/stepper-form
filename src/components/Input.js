import React from 'react';

const Input = ({
  placeholder,
  name,
  className,
  value,
  onInputChange,
  inputType
}) => {
  return (
    <label htmlFor={name} className={`form__label ${className}`}>
      {name}:
      <input
        name={name}
        type={inputType}
        className="form__input"
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
    </label>
  );
};

export default Input;
