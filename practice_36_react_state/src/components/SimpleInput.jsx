import { useState } from "react";

function SimpleInput( {placeholder} ) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <input
      value={inputValue}
      className="simpleInput"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default SimpleInput;