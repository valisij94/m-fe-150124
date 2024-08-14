function SimpleButton( {btnText, btnClasses = '' } ) {

  return (
    <button className={`simpleButton ${btnClasses}`}>
      {btnText}
    </button>
  );
}

export default SimpleButton;