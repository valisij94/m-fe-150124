function SimpleInput( {placeholder, value, onChange} ) {

  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <input
      value={value}
      className={`simpleInput`}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default SimpleInput;