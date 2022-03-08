import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <AppBarStyles>
      <ul>
        <li>
          <Link to="/">VHS Store</Link>
        </li>
        <li>
          <Link to="/dashboard">DashBoard Page</Link>
        </li>
      </ul>
    </AppBarStyles>
  );
}

const AppBarStyles = styled.nav`
  //background-color: yellow;
  width: 100%;
  position: relative;
  box-shadow: 0 0 1px 0.5px #121616;
  padding: 0.5rem;
  min-height: 64px;
  ul{
      display: flex;
      justify-content: space-between;
  }
  font-size: 22px;
`;