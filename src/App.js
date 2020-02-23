import React from 'react';
import './App.scss';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="loader"></div>
      <div className="wrapper">
        <h1 className="heading">stepper form</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
