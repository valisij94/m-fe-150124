import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Copyright() {

  const {login} = useContext(UserContext);

  return (
    <div>
      {login && <p>Thank you for visiting, {login}!</p>}
      <p>&#169; My project. All rights reserved. {new Date().getFullYear()}</p>
    </div>
  );
}

export default Copyright;