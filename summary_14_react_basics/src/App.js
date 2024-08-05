import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SimpleHeader from './components/SimpleHeader';

function App() {

  const randomValue = Math.random();

  return (
    <div className="App">
      <h1>Hello React!</h1>
      { (randomValue > 0.5) ? <p>Too big!</p> : <h6>Quite enough!</h6> }
      <ProductList />

      {/*
      Также, закрепляем практикой. В компоненте `App.js`, добавим условнфй рендеринг. Нужно взять текущие время и дату (`new Date()`), взять минуты (`getMinutes()`), и если число минут четное - рендерить параграф с текстом "Четные минуты". */}
      { new Date().getMinutes() % 2 === 0 && <p>Odd minutes!</p> }

      { /*
      Еще закрепляем. Реализовать в этом компоненте логику, которая будет определять день недели для текущей даты (это функция `getDay()`), и если день - пятница, то рендерить параграф с текстом "Ура, завтра выходной!". Функция getDay возвращает порядковый номер дня в неделе, где 0 - это воскресенье.
      */
      }

      { new Date().getDay() === 5 && <p>Wow, it is Friday!</p> }

      <SimpleHeader text="Something" foo="bar" />
    </div>
  );
}

export default App;
