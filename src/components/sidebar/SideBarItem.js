import React from "react";
import styled, { css } from "styled-components";

import { IconSidebar } from "../../ui/icons";

import { GrFormNext } from "react-icons/gr";

function SideBarItem(props) {
  console.log(props.pointer);
  return (
    <SideBarItemStyles onClick={props.onClick}>
      <div>
        <IconSidebar>{props.icon}</IconSidebar>
        <h3>{props.title}</h3>
      </div>
      <div>
        <GrFormNext />
      </div>
    </SideBarItemStyles>
  );
}

export { SideBarItem };

const SideBarItemStyles = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //box-shadow: 0 1px 0 0 #121616;
  margin: 0.25rem 0;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  //user-select: none;

  //3 spans, li flex

  &:hover {
    box-shadow: 1px 1px #121616;
    //background-color: #fbae2d;
    background-color: ${props => props.pointer ? "red" : "green"};
    cursor: ${props => props.pointer ? "pointer" : "auto"};
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
