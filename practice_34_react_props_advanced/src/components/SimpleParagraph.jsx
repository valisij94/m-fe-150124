function SimpleParagraph( {content, size, isBold} ) {

  const styleObj = {
    fontSize: size,
    fontWeight: isBold ? 700 : 400
  }

  return (
    <p style={styleObj} className="simpleParagraph">{content}</p>
  );
}

export default SimpleParagraph;