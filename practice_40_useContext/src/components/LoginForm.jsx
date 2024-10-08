import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";

function LoginForm() {

  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');
  const [error, setError] = useState(false);

  const ctx = useContext(UserContext);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  }

  const handlePasswdChange = (event) => {
    setPasswd(event.target.value);
  }

  const handleLoginClick = () => {
    if (!!login && !!passwd) {
      setError(false);
      ctx.setUserLogin(login);
    }
    else {
      setError(true);
    }
  }

  return (
    <div>
      <input value={login} onChange={handleLoginChange} type="text" placeholder="Login"/>
      <input value={passwd} onChange={handlePasswdChange} type="password" placeholder="Password"/>
      { error && <p>Fill all fields!</p> }
      <button onClick={handleLoginClick}>Login</button>
    </div>
  )
}

export default LoginForm;