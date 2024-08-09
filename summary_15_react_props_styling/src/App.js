import React from 'react';
import './App.css';
import InfoBlock, { DIALOG_TYPES } from './components/InfoBlock';
import SimpleList from './components/SimpleList';
import ProductList from './components/products/ProductList';
import { grinderData, sawData } from './data/data';

function App() {

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <InfoBlock
        headerText="Header text"
        contentText="Content text"
        dialogType={DIALOG_TYPES.INFO}
      />

      <SimpleList
        headerText="Some header"
        items={['One', 'Two', 'Three']}
      />

      <ProductList
        emptyProductList="No products"
        products={[sawData, grinderData]}
      />
    </div>
  );
}

export default App;
