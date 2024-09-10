import React, { useState } from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleHeader from './inputViews/SimpleHeader.jsx';
import ProductList from './components/products/ProductList.jsx';
import SimpleInput from './inputViews/SimpleInput.jsx';
import LoginForm from './components/LoginForm.jsx';
import { SettingsContext } from './context/SettingsContext.jsx';
import { ThemeContext } from './context/ThemeContext.jsx';

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(old => old === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ value: theme, changeTheme: toggleTheme }}>
      <div className="App">
        <h1>Hello React!</h1>
        <SimpleHeader textContent={`Hello stranger`} />
        <SimpleInput />

        <LoginForm handleLogin={()=>{}}/>
        <ProductList/>
        <Copyright />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
