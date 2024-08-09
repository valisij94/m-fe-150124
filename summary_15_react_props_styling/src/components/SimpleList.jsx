import SimpleListItem from "./SimpleListItem";

function SimpleList( {headerText, items = []} ) {

  return (
    <div className="simpleList">
      <h3>{headerText}</h3>
      <div className="simpleListContainer">
        {items.length > 0 ? items.map( (item) => {
          return (
            <SimpleListItem key={item} item={item}/>
          )
        }) : <p>Empty data source!</p> }
      </div>
    </div>
  );
}

export default SimpleList;