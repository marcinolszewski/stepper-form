import React from 'react';
import './App.scss';
import Form from './components/Form';
import DarkModeSwitch from './components/DarkModeSwitch';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <DarkModeSwitch />
        <h1 className="heading">stepper form</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
