import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleCounter from './components/SimpleCounter.jsx';
import SimpleButton from './components/SimpleButton.jsx';

function App() {

  const handleInputChange = (event) => {
    console.log('Input changed!', event.target.value)
  }

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <SimpleCounter />
      <input onChange={ handleInputChange }/>
      <SimpleButton btnText={"Text"} />
      <Copyright />
    </div>
  );
}

export default App;
