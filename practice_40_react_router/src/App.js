import React from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import ProductList from './components/products/ProductList.jsx';

function App() {

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <ProductList />
      <Copyright />
    </div>
  );
}

export default App;
