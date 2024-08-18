import { useState } from "react";

function SimpleButton( {btnText, btnClasses = '', clickHandler } ) {

  const [clickCount, setClickCount] = useState(0);

  const handleClick = (event) => {
    setClickCount(clickCount + 1);
    clickHandler(event);
  }

  return (
    <button onClick={handleClick} className={`simpleButton ${btnClasses}`}>
      {`${btnText} ${clickCount}`}
    </button>
  );
}

export default SimpleButton;