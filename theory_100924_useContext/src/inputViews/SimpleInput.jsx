import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function SimpleInput( {placeholder, value, onChange} ) {

  const themeContext = useContext(ThemeContext);

  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <input
      value={value}
      className={`simpleInput ${themeContext.value}`}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default SimpleInput;