import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { IconAppbar } from "../../ui/icons";

import { IoSettingsOutline, IoMailOutline, IoNotificationsOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';


export default function AppBar(props) {
  return (
    <AppBarStyles>
      <ul>
        <AppBarBrandingStyles>
          <AppBarBrandingLogo>
            <h2>VHS</h2>
            <h3> Store</h3>
          </AppBarBrandingLogo>
        </AppBarBrandingStyles>
        <AppBarOptionsStyles>
          {/* settings, avatar, notifications, email */}
          <IconAppbar><IoNotificationsOutline/></IconAppbar>
          <IconAppbar><IoMailOutline/></IconAppbar>          
          <IconAppbar><CgProfile/></IconAppbar>
          <IconAppbar><IoSettingsOutline/></IconAppbar>
        </AppBarOptionsStyles>
      </ul>
    </AppBarStyles>
  );
}

const AppBarStyles = styled.nav`
  width: 100%;
  position: relative;
  box-shadow: 2px 0 2px 0.5px #121616;
  padding: 0.5rem;
  min-height: 64px;
  ul{
      display: flex;
      justify-content: space-between;
  }
  font-size: 22px;
`;

const AppBarBrandingStyles = styled.div`
  width: calc(289px - 8px);
  height: calc(64px - 16px);
  //box-shadow: 2.5px 0px 2.5px -2px #121616;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px 0 0;
`;

const AppBarBrandingLogo = styled.a`
  text-decoration: none;
  color: inherit;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    text-decoration: none;
    color: inherit;
  }

  h2, h3{
    margin: 0;
    padding: 0rem 0.25rem;
    font-size: 36px;
  }

  svg{

  }
`;

const AppBarOptionsStyles = styled.ul`
  
`;