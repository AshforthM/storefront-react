import React from "react";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../libs/firebase/firebaseConfig";

import { SideBarItem } from "../components/SideBarItem";
import { IconSidebar } from "../ui/icons";

import { GiVhs } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa"
import { IoPeopleCircleOutline, IoStorefrontOutline, IoAppsOutline, IoStarOutline, IoPricetagsOutline, IoShapesOutline, IoTimerOutline, IoLogOutOutline } from "react-icons/io5"
import {MdOutlineSecurity, MdOutlineEditNotifications} from "react-icons/md";

export default function SideBar(props) {
  async function onLogoutRequest(e) {
    await signOut(auth);
  }

  return (
    <SideBarStyles>
      <ul>
        <h2>{props.title}</h2>
        <SideBarSectionStyles>
          <SideBarItem as="a" title="Vendors" icon={<IoStorefrontOutline />}></SideBarItem>
          <SideBarItem as="a" title="Users" icon={<IoPeopleCircleOutline />}></SideBarItem>
        </SideBarSectionStyles>
        <SideBarSectionStyles>
          <SideBarItem as="a" title="Products" icon={<GiVhs />}></SideBarItem>
          <SideBarItem as="a" title="Categories" icon={<IoAppsOutline />}></SideBarItem>
          <SideBarItem as="a" title="Orders" icon={<FaShippingFast />}></SideBarItem>
          <SideBarItem as="a" title="Reviews" icon={<IoStarOutline />}></SideBarItem>
          <SideBarItem as="a" title="Brands" icon={<IoPricetagsOutline />}></SideBarItem>
        </SideBarSectionStyles>
        <SideBarSectionStyles style={{boxShadow: "none"}}>
          <SideBarItem
            as="a"
            title="Authentication"
            icon={<MdOutlineSecurity />}
          ></SideBarItem>
          <SideBarItem as="a" title="Icons" icon={<IoShapesOutline />}></SideBarItem>
          <SideBarItem
            as="a"
            title="Notifications"
            icon={<MdOutlineEditNotifications />}
          ></SideBarItem>
          <SideBarItem as="a" title="Recent" icon={<IoTimerOutline />}></SideBarItem>
          <SideBarItem
            as="a"
            onClick={onLogoutRequest} title="Logout"
            icon={<IoLogOutOutline />}
            pointer={true}          
          >          
          </SideBarItem>
        </SideBarSectionStyles>
      </ul>
    </SideBarStyles>
  );
}


const SideBarStyles = styled.div`
  width: 289px;
  min-height: calc(100vh - calc(64px));
  box-shadow: 2.5px 0 2.5px -2px #121616;
  margin: 0 0.1rem 0 0;
  padding: 8px;

  h2{
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: inline;
  }
`;

const SideBarSectionStyles = styled.div`
  box-shadow: 0 1px 0 0 #121616;
  padding: 1rem 0;
`;
