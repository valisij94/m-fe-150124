import React, { useState } from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleHeader from './components/SimpleHeader.jsx';
import LoginForm from './components/LoginForm.jsx';

function App() {

  const [userLogin, setUserLogin] = useState('');

  const [formVisible, setFormVisible] = useState(true);

  const handleLoginChange = (newLogin) => {
    // ...
    setUserLogin(newLogin);
  }


  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  }

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <SimpleHeader textContent={`Hello, ${userLogin || 'stranger'}`} />
      <button onClick={toggleFormVisibility}>Toggle LoginForm visibility</button>
      { formVisible && <LoginForm setUserLogin={handleLoginChange}/> }
      <Copyright />
    </div>
  );
}

export default App;
