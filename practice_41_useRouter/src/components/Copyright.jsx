
function Copyright() {

  console.log('Render copyright component')
  return (
    <p>&#169; My project. All rights reserved. {new Date().getFullYear()}</p>
  );
}

export default Copyright;