function SimpleParagraph( {content, opacity = 1, size, isBold} ) {

  const styleObj = {
    fontSize: size,
    fontWeight: isBold ? 700 : 400,
    opacity: opacity
  }

  return (
    content && <p style={styleObj} className="simpleParagraph">{content}</p>
  );
}

export default SimpleParagraph;