function SimpleHeader( { settings, headerClasses } ) {

  let { textContent = 'Default text!', textColor } = settings;

  const styleObj = {
    // font-size: '16px' -> fontSize: '16px'
    color: textColor
  };

  return (
    <h1 style={styleObj} className={`simpleHeader ${headerClasses}`}>{textContent}</h1>
  );
}

export default SimpleHeader;