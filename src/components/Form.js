import React, { Component } from 'react';
import Input from './Input';
import Legend from './Legend';
import Button from './Button';

class Form extends Component {
  state = {
    step: 1
  };

  handleNext = e => {
    e.preventDefault();
    if (this.state.step !== 3) {
      this.setState({ step: this.state.step + 1 });
    }
  };
  handlePrev = e => {
    e.preventDefault();
    if (this.state.step !== 1) {
      this.setState({ step: this.state.step - 1 });
    }
  };
  render() {
    const { step } = this.state;
    return (
      <form className="form">
        <Legend />
        <div className="form__input-wrapper">
          <Input
            name="Name"
            placeholder="Your name"
            className={step === 1 ? '' : 'hidden'}
          />
          <Input
            name="Age"
            placeholder="Your age"
            className={step === 2 ? '' : 'hidden'}
          />
          <Input
            name="Email"
            placeholder="Your email"
            className={step === 3 ? '' : 'hidden'}
          />
        </div>
        <div className="wrapper__btn">
          <Button
            btnClass="btn btn__prev"
            text="Previous"
            changeInput={this.handlePrev}
          />
          <Button
            btnClass="btn btn__next"
            text="Next"
            changeInput={this.handleNext}
          />
        </div>
      </form>
    );
  }
}

export default Form;
