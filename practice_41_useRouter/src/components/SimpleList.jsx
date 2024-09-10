function SimpleList( {headerText, items} ) {

  return (
    <div className="simpleList">
      <h3>{headerText}</h3>
      <div className="simpleListContainer">
        {items.map( (item) => {
          return (
            <div key={item.id} className="simpleListItem">{item.text}</div>
          )
        })}
      </div>
    </div>
  );
}

export default SimpleList;