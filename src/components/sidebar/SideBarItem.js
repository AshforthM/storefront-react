import React from "react";
import styled from "styled-components";

import { IconSidebar } from "../../ui/icons";
import { GrFormNext } from "react-icons/gr";

function SideBarItem(props) {

  return (
    <SideBarItemStyles onClick={props.onClick} {...props}>
      <IconSidebar>{props.icon}</IconSidebar>
      <h3>{props.title}</h3>
      {props.formIcon || <GrFormNext/>}
    </SideBarItemStyles>
  );
  //icon, p, h3 ONLY
  //flexbox
  //margin after the h3 auto
  //if we need additional control, wrap all 3 in a span
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

  &:hover {
    box-shadow: 1px 1px #121616;
    background-color: rgba(251, 174, 45, 0.6);
    cursor: ${props => props.pointer ? "pointer" : "auto"};
  }

  h3 {
    font-size: 22px;
    padding: 0.2rem 0 0 0;
    margin-right: auto;
  }

  svg{
    font-size: 22px;
  }
`;
