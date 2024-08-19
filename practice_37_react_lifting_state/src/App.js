import React, { useState } from 'react';
import './App.css';

import Copyright from './components/Copyright.jsx';
import SimpleList from './components/SimpleList.jsx';
import SimpleHeader from './components/SimpleHeader.jsx';
import LoginForm from './components/LoginForm.jsx';

function App() {

  const [todos, setTodos] = useState( [
    {id: 1, text: 'Learn HTML'},
    {id: 2, text: 'Learn CSS'},
    {id: 3, text: 'Learn JS'}
  ]);

  const [todoName, setTodoName] = useState('');

  const handleAddTodoInputChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleAddTodoClick = () => {
    // Update! Use Date.now() as todo id.
  }

  const [userLogin, setUserLogin] = useState('');

  const handleLoginChange = (newLogin) => {
    // ...
    setUserLogin(newLogin);
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
      <SimpleHeader textContent={`Hello, ${userLogin || 'stranger'}`} />
      <SimpleList headerText="Simple list" items={todos} />

      <LoginForm setUserLogin={handleLoginChange}/>
      <Copyright />
    </div>
  );
}

export default App;
