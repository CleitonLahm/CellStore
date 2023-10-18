/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { setItem } from "./services/LocalStorageFuncs";
import { getItem } from "./services/LocalStorageFuncs";

export const Login = (props) => {
  const user = getItem('usuario')
  const [name, setName] = useState(user.name || "");
  const [pass, setPass] = useState(user.pass || "");
  const [passIncorrect, setPassIncorrect] = useState(false)

  const condition = name.length >= 3 && pass.length > 5;

  const saveUser = () => {
    // eslint-disable-next-line react/prop-types
    const { history: { push } } = props;
    
    if(name === user.name && pass === user.pass) {
    push('/store')
    return;
    } else if (name === user.name && pass != user.pass) {
      setPassIncorrect(true)
      return;
}
    setItem('usuario', {name, pass})
    push('/store')
  }

  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
        value={name}
      />

      <p>Password</p>
      <input
        type="password"
        onChange={({ target: { value } }) => setPass(value)}
        value={pass}
      />

        {
          passIncorrect && <p>Password Incorrect</p>
        }

      <br></br>
      <br></br>

      <button 
      type="button" 
      disabled={!condition} 
      onClick={() => saveUser(name, pass)}>
        Sign in
      </button>
    </div>
  );
};
