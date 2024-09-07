import React from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleHeader from './inputViews/SimpleHeader.jsx';
import ProductList from './components/products/ProductList.jsx';
import SimpleInput from './inputViews/SimpleInput.jsx';

function App() {

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <SimpleHeader textContent={`Hello stranger`} />
      <SimpleInput />
      <ProductList />
      <Copyright />
    </div>
  );
}

export default App;
