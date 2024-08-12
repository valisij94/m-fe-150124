import { useState } from "react";

function SimpleCounter() {

  let [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount(count + 1);
  }

  const handleDeleteClick= () => {
    setCount(count - 1);
  }

  return (
    <>
      <p>Clicked {count} times!</p>
      <button onClick={ handleAddClick }>Add</button>
      <button onClick={ handleDeleteClick }>Delete</button>
    </>
  );
}

export default SimpleCounter;