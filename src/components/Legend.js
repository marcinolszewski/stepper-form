import React, { Component } from 'react';

class Legend extends Component {
  render() {
    return (
      <div className="legend__wrapper">
        <div className="legend__indicator legend__step-1">1</div>
        <div className="legend__indicator legend__step-2">2</div>
        <div className="legend__indicator legend__step-3">3</div>
      </div>
    );
  }
}

export default Legend;
