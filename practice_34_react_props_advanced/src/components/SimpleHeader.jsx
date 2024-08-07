function SimpleHeader( props ) {

  let { textContent, textColor } = props.settings;

  const styleObj = {
    // font-size: '16px' -> fontSize: '16px'
    color: textColor
  };

  return (
    <h1 style={styleObj} className="simpleHeader">{textContent}</h1>
  );
}

export default SimpleHeader;