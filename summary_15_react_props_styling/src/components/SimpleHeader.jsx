function SimpleHeader( arg ) {

  console.log("Component props", arg);

  return (
    <h1 className="simpleHeader">{arg.text}</h1>
  );
}

export default SimpleHeader;
