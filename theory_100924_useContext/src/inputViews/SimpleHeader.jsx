import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function SimpleHeader( {textContent, headerClasses} ) {

  const themeContext = useContext(ThemeContext);

  return (
    <h1
      className={`simpleHeader ${!!headerClasses ? headerClasses :''} ${themeContext}`}
    >
        {textContent}</h1>
  );
}

export default SimpleHeader;