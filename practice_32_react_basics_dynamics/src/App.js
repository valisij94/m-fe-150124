import logo from './logo.svg';
import React from 'react';
import './App.css';

import SimpleHeader from './components/SimpleHeader.jsx'
import Copyright from './components/Copyright.jsx';

import { GREETING, upperCaseWords } from './utils.js';

function App() {

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <p>{upperCaseWords(GREETING)}</p>
      <SimpleHeader />
      <Copyright />
    </div>
  );
}

export default App;
