import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <h1>Hello React! Something!</h1>
    <SimpleParagraph/>
    <LoginForm/>
  </div>
);

function SimpleParagraph() {
  return (
    <p>Hello World from React!</p>
  );
}

/*
6. Реализуем еще один компонент, `LoginForm`. Он должен рендерить нам несложную форму входа. Она содержит логин, пароль, и кнопку "Вход".
*/

function LoginForm() {

  return (
    <div>
      <input placeholder="Login" type="text"/>
      <input placeholder="Password" type="password"/>
      <button>Enter</button>
      <SimpleParagraph/>
      <SimpleRadio />
    </div>
  );
}

/**
 * создать компонент SimpleRadio, который будет отвечать за рендеринг Radio
 * опции: text - Basic, value - basic
 *        text - Premium, value - premium
 *        text - Luxury, value - luxury
 */

function SimpleRadio() {

  return (
    <div>
      <input type="radio" name="radio" value="basic" id="basicRadio"/>
      <label for="basicRadio">Basic</label>
      <input type="radio" name="radio" value="premium" id="premiumRadio"/>
      <label for="premiumRadio">Premium</label>
      <input type="radio" name="radio" value="luxury" id="luxuryRadio"/>
      <label for="luxuryRadio">Luxury</label>
    </div>
  );
}