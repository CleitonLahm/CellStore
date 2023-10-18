// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {  getItem, setItem } from "../services/LocalStorageFuncs";

export const ProfileEdit = (props) => {
  const user = getItem('usuario')
  const [name, setName] = useState( user?.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [pass, setPass] = useState(user?.pass || "");
  const [img, setImg] = useState(user.img || "");
  const [cpf, setCpf] = useState(user.cpf || "");

  const condition = (
    name.length >= 3 && (email.includes('@') && email.length > 8)
      && pass.length >= 8 && img.length > 4 && cpf.length === 11
  )

  const saveChanges = () => {
    setItem('usuario', {name, email, pass, img, cpf})
    // eslint-disable-next-line react/prop-types
    const { history: {push} } = props
    push('/profile')
  }

  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />

      <p>E-mail</p>
      <input 
      type="email" 
      value={email}
      onChange={({ target: { value } }) => setEmail(value)}
      />

      <p>Password</p>
      <input 
      type="password" 
      value={pass}
      onChange={({ target: { value } }) => setPass(value)}
      />

      <p>Image URL</p>
      <input 
      type="text" 
      value={img}
      onChange={({ target: { value } }) => setImg(value)}
      />

      <p>CPF</p>
      <input 
      type="number" 
      value={cpf}
      onChange={({ target: { value } }) => setCpf(value)}
      />
      <br />
      <br />
      <button
        disabled={!condition}
        onClick={saveChanges}
      >Save Changes</button>
    </div>
  );
};
