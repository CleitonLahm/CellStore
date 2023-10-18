import React, { useState } from "react";
import { setItem, getItem } from "./services/LocalStorageFuncs";

export const Login = (props) => {
  const user = getItem('usuario');

  // Se não houver um usuário no localStorage, crie um usuário padrão
  if (!user) {
    setItem('usuario', { name: '', pass: '' });
  }

  const [name, setName] = useState(user.name);
  const [pass, setPass] = useState(user.pass);
  const [passIncorrect, setPassIncorrect] = useState(false);

  const condition = name.length >= 3 && pass.length > 5;

  const saveUser = () => {
    // eslint-disable-next-line react/prop-types
    const { history: { push } } = props;
    setItem('usuario', { name, pass });
    push('/store');
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
        onClick={saveUser}>
        Sign in
      </button>
    </div>
  );
};
