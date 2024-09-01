import { useEffect, useState } from "react";

function LoginForm( {setUserLogin} ) {

  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');
  const [error, setError] = useState(false);

  const [time, setTime] = useState(new Date().toISOString());

  useEffect( () => {
    console.log('Login form had been rendered!');

    setInterval( () => {
      setTime(new Date().toISOString());
    }, 1000 );

  }, []);

  useEffect( () => {
    if (login) {
      console.log('login exists!')
    }
    else {
      console.log('empty login!')
    }
  }, [login] );

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  }

  const handlePasswdChange = (event) => {
    setPasswd(event.target.value);
  }

  const handleLoginClick = () => {
    if (!!login && !!passwd) {
      console.log(login, passwd);
      setError(false);
      setUserLogin(login);
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
      <p>{time}</p>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  )
}

export default LoginForm;