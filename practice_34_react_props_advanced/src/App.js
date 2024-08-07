import logo from './logo.svg';
import React from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleHeader from './components/SimpleHeader.jsx';
import SimpleParagraph from './components/SimpleParagraph.jsx';

function App() {

  const headerProps = {
    textContent: "Text content",
    textColor: "blue"
  }

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <SimpleHeader settings={headerProps}/>

      <SimpleParagraph isBold={false} content="greeting!" size="24px"/>
      <Copyright />
    </div>
  );
}

export default App;
