import React, { useState } from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import ProductList from './components/products/ProductList.jsx';
import SimpleTimer from './components/SimpleTimer.jsx';
import SimpleCounter from './components/SimpleCounter.jsx';

function App() {

  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <button onClick={() => setShowTimer(old => !old)}>Show/Hide Timer</button>
      { showTimer && <SimpleTimer /> }
      <SimpleCounter />
      <Copyright />
    </div>
  );
}

export default App;
