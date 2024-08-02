import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {

  const randomValue = Math.random();

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <ProductCard />
    </div>
  );
}

export default App;
