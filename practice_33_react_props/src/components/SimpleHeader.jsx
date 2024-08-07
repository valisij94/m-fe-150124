/*
2. Усложним задачу. Сделаем так, чтобы в пропсах компонент `SimpleHeader` теперь принимал цвет текста (назовем проп `textColor`). Этот цвет текста нужно применить в инлайн-стилях заголовка.
*/

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