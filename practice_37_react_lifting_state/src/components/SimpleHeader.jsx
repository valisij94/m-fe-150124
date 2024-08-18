function SimpleHeader( textContent, headerClasses ) {

  return (
    <h1 className={`simpleHeader ${headerClasses}`}>{textContent}</h1>
  );
}

export default SimpleHeader;