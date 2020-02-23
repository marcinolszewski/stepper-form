import React, { Component } from 'react';
import Input from './Input';
import Legend from './Legend';
import Button from './Button';

class Form extends Component {
  state = {
    step: 1,
    name: '',
    age: '',
    email: '',
    typ: false,
    spinner: false,
    error: false,
    errors: [
      'Plase enter your name',
      'Plase enter your age',
      'Plase enter your email'
    ]
  };

  componentWillMount() {
    const userCookie = document.cookie.split('-');
    if (userCookie.length === 1) {
      console.log(userCookie);
      console.log('no cookie');
    } else {
      console.log(userCookie);
      console.log(
        `name is ${userCookie[0]}, age is ${userCookie[1]}, email is${userCookie[2]}`
      );
    }
  }

  showError = () => {
    this.setState({ error: true });
    setTimeout(() => {
      this.setState({ error: false });
    }, 1500);
  };

  showSpinner = () => {
    this.setState({ spinner: true });
    setTimeout(() => {
      this.setState({ spinner: false });
      setTimeout(() => {
        this.setState({ typ: true });
      }, 0);
    }, 1500);
  };

  checkForErrors = () => {
    const step = this.state.step;
    switch (step) {
      case 1:
        return this.state.name === '' ? this.showError() : true;
      case 2:
        return this.state.age === '' ? this.showError() : true;
      case 3:
        return this.state.email === '' ? this.showError() : true;
      default:
        return false;
    }
  };

  updateState = e => {
    this.setState({ [e.target.name.toLowerCase()]: e.target.value });
  };

  handleNext = e => {
    e.preventDefault();
    if (this.state.step !== 3 && this.checkForErrors()) {
      this.setState({ step: this.state.step + 1, error: false });
    }
  };
  handlePrev = e => {
    e.preventDefault();
    if (this.state.step !== 1) {
      this.setState({ step: this.state.step - 1 });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.checkForErrors()) {
      document.cookie = `${this.state.name}-${this.state.age}-${this.state.email}`;
      this.showSpinner();
    }
  };
  render() {
    const { step, name, age, email, errors } = this.state;
    return (
      <form className="form">
        <div
          className={`thankYouPage ${this.state.typ === true ? '' : 'hidden'}`}
        >
          thanks, your data is saved to cookie.
        </div>
        <div
          className={`spinner ${this.state.spinner === true ? '' : 'hidden'}`}
        >
          <div className="loader"></div>
        </div>
        <Legend step={step} />
        <div className="form__input-wrapper">
          <Input
            name="Name"
            inputType="text"
            placeholder="Your name"
            className={step === 1 ? '' : 'hidden'}
            value={name}
            onInputChange={this.updateState}
          />
          <Input
            name="Age"
            inputType="number"
            placeholder="Your age"
            className={step === 2 ? '' : 'hidden'}
            value={age}
            onInputChange={this.updateState}
          />
          <Input
            name="Email"
            inputType="email"
            placeholder="Your email"
            className={step === 3 ? '' : 'hidden'}
            value={email}
            onInputChange={this.updateState}
          />
          <p
            className={`form__error ${
              this.state.error === true ? '' : 'hidden'
            }`}
          >
            {errors[this.state.step - 1]}
          </p>
        </div>
        <div className="wrapper__btn">
          <Button
            btnClass="btn btn__prev"
            text="Previous"
            changeInput={this.handlePrev}
          />
          {step === 3 ? (
            <Button
              btnClass="btn btn__next"
              text="Submit"
              changeInput={this.handleSubmit}
            />
          ) : (
            <Button
              btnClass="btn btn__next"
              text="Next"
              changeInput={this.handleNext}
            />
          )}
        </div>
      </form>
    );
  }
}

export default Form;
