import React from "react";
import styled, { css } from "styled-components";

import { IconSidebar } from "../../ui/icons";

import { GrFormNext } from "react-icons/gr";

function SideBarItem(props) {
  return (
    <SideBarItemStyles>
      <a onClick={props.onClick}>
        <div>
          <IconSidebar as="a">{props.icon}</IconSidebar>
          <h3>{props.title}</h3>
        </div>
        <div>
          <GrFormNext />
        </div>
      </a>
    </SideBarItemStyles>
  );
}

export { SideBarItem };

const SideBarItemStyles = styled.li`
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 1px 1px #121616;
    background-color: #fbae2d;
    /* cursor: ${(props) => (props.pointer ? "pointer" : "auto")}; */
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    //box-shadow: 0 1px 0 0 #121616;
    margin: 0.25rem 0;
  }

  h3 {
    font-size: 22px;
    padding: 0.2rem 0 0 0;
  }

  div {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
