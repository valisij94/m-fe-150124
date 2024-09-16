import React, { useState } from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleHeader from './components/SimpleHeader.jsx';
import LoginForm from './components/LoginForm.jsx';
import ProductList from './components/products/ProductList.jsx';
import { UserContext } from './context/UserContext.jsx';

function App() {

  const [userLogin, setUserLogin] = useState('');

  const handleLoginChange = (newLogin) => {
    setUserLogin(newLogin);
  }

  return (
    <UserContext.Provider value={{
      login: userLogin,
      pwd: '',
      setUserLogin: handleLoginChange
    }}>
      <div className="App">
        <h1>Hello React!</h1>
        <SimpleHeader textContent={`Hello, ${userLogin || 'stranger'}`} />
        <LoginForm/>
        <Copyright />
      </div>
    </UserContext.Provider>
  );
}

export default App;
