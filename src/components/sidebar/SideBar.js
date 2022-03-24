import React from "react";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../../libs/firebase/firebaseConfig";
import { Link } from "react-router-dom";

import { SideBarItem } from "./SideBarItem";
import ProductOptions from "./ProductOptions";

import { GiVhs } from "react-icons/gi";
import { GrFormDown } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import {
  IoPeopleCircleOutline,
  IoStorefrontOutline,
  IoAppsOutline,
  IoStarOutline,
  IoPricetagsOutline,
  IoShapesOutline,
  IoTimerOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { MdOutlineSecurity, MdOutlineEditNotifications } from "react-icons/md";

export default function SideBar(props) {
  async function onLogoutRequest(e) {
    await signOut(auth);
  }

  return (
    <SideBarStyles>
      <h2>{props.title || ""}</h2>
      <SideBarSectionStyles>
        <SideBarItem
          title="Vendors"
          icon={<IoStorefrontOutline />}
        ></SideBarItem>
        <SideBarItem
          title="Users"
          icon={<IoPeopleCircleOutline />}
        ></SideBarItem>
      </SideBarSectionStyles>
      <SideBarSectionStyles>
        <Link to="/dashboard">
        <SideBarItem 
          title="Products"
          icon={<GiVhs />}
          pointer={true}
          formIcon={<GrFormDown/>}
        ></SideBarItem>
        </Link>
        <ProductOptions />

        <SideBarItem title="Categories" icon={<IoAppsOutline />}></SideBarItem>
        <SideBarItem title="Orders" icon={<FaShippingFast />}></SideBarItem>
        <SideBarItem title="Reviews" icon={<IoStarOutline />}></SideBarItem>
        <SideBarItem title="Brands" icon={<IoPricetagsOutline />}></SideBarItem>
      </SideBarSectionStyles>
      <SideBarSectionStyles style={{ boxShadow: "none" }}>
        <SideBarItem
          title="Authentication"
          icon={<MdOutlineSecurity />}
        ></SideBarItem>
        <SideBarItem title="Icons" icon={<IoShapesOutline />}></SideBarItem>
        <SideBarItem
          title="Notifications"
          icon={<MdOutlineEditNotifications />}
        ></SideBarItem>
        <SideBarItem title="Recent" icon={<IoTimerOutline />}></SideBarItem>
        <SideBarItem
          onClick={onLogoutRequest}
          title="Logout"
          icon={<IoLogOutOutline />}
          pointer={true}
        ></SideBarItem>
      </SideBarSectionStyles>
    </SideBarStyles>
  );
}

const SideBarStyles = styled.div`
  width: 289px;
  min-height: calc(100vh - calc(64px));
  box-shadow: 2.5px 0 2.5px -2px #121616;
  margin: 0 0.1rem 0 0;
  padding: 8px;
  text-decoration: none;
  a{
    text-decoration: none;
    color: inherit;
  }

  h2 {
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SideBarSectionStyles = styled.div`
  box-shadow: 0 1px 0 0 #121616;
  padding: 1rem 0;
`;
