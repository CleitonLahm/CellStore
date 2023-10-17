// eslint-disable-next-line no-unused-vars
import React from "react";
import { getItem } from "../services/LocalStorageFuncs";

export const Profile = (props) => {
    const user = getItem('usuario')

    const toProfileEdit = () => {
      // eslint-disable-next-line react/prop-types
      const { history: { push } } = props;
      push('/profile/edit')
    }
  return(
      <div>
        <p>{`Name: ${user.name}`}</p>
        <p>{`E-mail: ${user.email}`}</p>
        <p>{`CPF: ${user.cpf}`}</p>
        <img src={user.img} alt="img-user"></img>
        <br />
        <br />
        <button
          onClick={ toProfileEdit }
        >Edit Profile</button>
      </div>
    )
}