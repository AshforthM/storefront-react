import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <AppBarStyles>
      <ul>
        <li>
          <Link to="/">Login Page</Link>
        </li>
        <li>
          <Link to="/dashboard">DashBoard Page</Link>
        </li>
      </ul>
    </AppBarStyles>
  );
}

const AppBarStyles = styled.nav`
  box-shadow: 0 0 2px 1px grey;
  padding: 0.5rem 1rem;
  height: 64px;
`;