// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  background-color: crimson;
  padding: 24px;
  margin-bottom: 60px;
  font-size: 1.2rem;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: #fff;

    &:hover{
      text-decoration: underline;
    }
  }
`

export const Header = () => {

  return(
    <HeaderArea>
      <Link to='/'>Store</Link>
      <Link to='/cart'>Cart</Link>
      <Link to="/profile">My profile</Link>
    </HeaderArea>
  )
}