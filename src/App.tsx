import './App.less';

import React, { useState } from 'react';

import logo from './assets/logo.svg';
import { Home } from './pages/home/home';
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-bili-primary ">1111</p>
        <Home />
      </div>
    </div>
  );
}

export default App;
