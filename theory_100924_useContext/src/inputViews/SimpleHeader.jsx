import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SettingsContext } from "../context/SettingsContext";

function SimpleHeader( {textContent, headerClasses} ) {

  const themeContext = useContext(ThemeContext);

  const settingsContext = useContext(SettingsContext);



  return (
    <h1
      style={ {
        fontSize: settingsContext.fontSize
      } }
      className={`simpleHeader ${!!headerClasses ? headerClasses :''} ${themeContext.value}`}
    >
        {textContent}</h1>
  );
}

export default SimpleHeader;