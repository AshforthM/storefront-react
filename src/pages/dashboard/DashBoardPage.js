import React from "react";

import AppBar from '../../components/AppBar'
import SideBar from "../../components/SideBar";
import Panel from "../../components/Panel";

function DashBoardPage(props) {
  return (
    <>
      <AppBar />
      <SideBar />
      <Panel />
    </>
  );
}

export default DashBoardPage;
