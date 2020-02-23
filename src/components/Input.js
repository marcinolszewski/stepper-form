import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { placeholder, name, className } = this.props;
    return (
      <label htmlFor={name} className={`form__label ${className}`}>
        {name}:
        <input
          name={name}
          type="text"
          className="form__input"
          placeholder={placeholder}
        />
      </label>
    );
  }
}

export default Input;
