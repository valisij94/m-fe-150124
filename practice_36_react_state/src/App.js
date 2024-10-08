import React, { useState } from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleCounter from './components/SimpleCounter.jsx';
import SimpleButton from './components/SimpleButton.jsx';
import SimpleInput from './components/SimpleInput.jsx';
import SimpleList from './components/SimpleList.jsx';

function App() {

  const greetUser = () => {
    console.log('Greeting!');
  }

  const [todos, setTodos] = useState( ['Learn HTML', 'Learn CSS', 'Learn JS'] );

  const [todoName, setTodoName] = useState('');

  const handleAddTodoInputChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleAddTodoClick = () => {
    const newTodos = [...todos, todoName];
    setTodos(newTodos);
    setTodoName('');
  }

  return (
    <div className="App">
      <h1>Hello React!</h1>

      <input
        value={todoName}
        onChange={handleAddTodoInputChange}
        placeholder="Todo"
      />
      <button onClick={handleAddTodoClick}>Add Todo</button>

      <SimpleList headerText="Simple list" items={todos} />
      <SimpleCounter />
      <SimpleInput placeholder="Something" />
      <SimpleButton btnText={"Greet"} clickHandler={greetUser}/>
      <Copyright />
    </div>
  );
}

export default App;
