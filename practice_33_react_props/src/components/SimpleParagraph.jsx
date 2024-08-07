// 1. передавать в пропсах текст параграфа. Имя пропса - content
// 2. передавать в пропсах размер шрифта. Это будет СТРОКА обязательно с единицами измерения. Проп назовем size
// 3. Теперь компонент ожидает проп isBold. Если этот проп - true, то делать текст параграфа жирным. Иначе - обычным. Здесь нам поможет свойство font-weight: жирный - это 700, обычный - 400

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