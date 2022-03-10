import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

//react-icons
import { IoSettingsOutline, IoMailOutline, IoNotificationsOutline } from 'react-icons/io5';
import {CgProfile} from 'react-icons/cg';
import { GiVhs } from 'react-icons/gi';


export default function AppBar(props) {
  return (
    <AppBarStyles>
      <ul>
        <AppBarBrandingStyles>
          <AppBarBrandingLogo>
            <AppBarLogoStyles><GiVhs/></AppBarLogoStyles>
            <AppBarTitleLg>VHS</AppBarTitleLg>
            <AppBarTitleSm> Store</AppBarTitleSm>
          </AppBarBrandingLogo>
        </AppBarBrandingStyles>
        <AppBarOptionsStyles>
          {/* settings, avatar, notifications, email */}
          <AppBarIcon><IoNotificationsOutline/></AppBarIcon>
          <AppBarIcon><IoMailOutline/></AppBarIcon>          
          <AppBarIcon><CgProfile/></AppBarIcon>
          <AppBarIcon><IoSettingsOutline/></AppBarIcon>
        </AppBarOptionsStyles>
      </ul>
    </AppBarStyles>
  );
}

const AppBarStyles = styled.nav`
  //background-color: yellow;
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

const AppBarBrandingStyles = styled.ul`
  
`;

const AppBarBrandingLogo = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover{
    text-decoration: none;
    color: inherit;
  }
`;

const AppBarLogoStyles = styled.i`
  padding: 1rem;
`;

const AppBarTitleLg = styled.span`
  
`;

const AppBarTitleSm = styled.span`
  
`;

const AppBarOptionsStyles = styled.ul`
  
`;

const AppBarIcon = styled.li`
  padding: 0 0.5rem;
  transition: all 1s ease-in-out;
  svg{
    &:hover {
      //cursor: pointer;
    }
  }    
`;