import React from "react";
import styled from 'styled-components';

import AppBar from '../../components/AppBar'
import SideBar from "../../components/SideBar";
import Panel from "../../components/Panel";

function DashBoardPage(props) {
  return (
    <Dashboard>
      <AppBar />
      <SideBar />
      <Panel />
    </Dashboard>
  );
}

export default DashBoardPage;

const Dashboard = styled.main`
    background-color: #faf9f6;
    display: flex;
    flex-wrap: wrap;
    color: #121616;
`;