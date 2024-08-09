import logo from './logo.svg';
import React from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleHeader from './components/SimpleHeader.jsx';
import SimpleParagraph from './components/SimpleParagraph.jsx';
import SimpleList from './components/SimpleList.jsx';

function App() {

  const headerProps = {
    textContent: "Text content",
    textColor: "blue"
  }


  return (
    <div className="App">
      <h1>Hello React!</h1>
      <SimpleHeader settings={headerProps} headerClasses="warning"/>

      <SimpleList headerText="Something" items={['One', 'Two', 'Three']} />
      <SimpleParagraph isBold={false} size="24px" content="Some text"/>
      <Copyright />
    </div>
  );
}

export default App;
