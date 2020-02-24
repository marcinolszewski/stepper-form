import React from 'react';

const DarkModeSwitch = () => {
  const handleThemeSwitch = e => {
    e.target.checked
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.setAttribute('data-theme', 'light');
  };

  return (
    <div className="theme-switch__wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onClick={handleThemeSwitch} />
        <div className="slider round"></div>
      </label>
      <em>sore eyes?</em>
    </div>
  );
};

export default DarkModeSwitch;
