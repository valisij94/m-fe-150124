import React, { useEffect, useState } from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleCounter from './components/SimpleCounter.jsx';
import LoginForm from './components/LoginForm.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';

function App() {

  return (
    <div className="App">
      <h1>Hello React!</h1>

      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/products'>Our products</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<LoginForm /> } />
        <Route path='/' element={<SimpleCounter /> } />

        <Route path='/products' element={<ProductsPage /> } />
        <Route path='/products/:id' element={ <ProductDetailPage/> } />
        <Route path='*' element={ <p>Sorry, page was not found!</p> } />
      </Routes>

      <Copyright />
    </div>
  );
}

export default App;
