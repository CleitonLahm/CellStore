/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { setItem } from "./services/LocalStorageFuncs";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const condition = name.length >= 3 && pass.length > 5;

  const saveUser = () => {
    setItem('usuario', {name, pass})
    // eslint-disable-next-line react/prop-types
    const { history: { push } } = props;
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
