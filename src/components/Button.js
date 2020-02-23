import React from 'react';

const Button = props => {
  return (
    <button onClick={props.changeInput} className={props.btnClass}>
      {props.text}
    </button>
  );
};

export default Button;
