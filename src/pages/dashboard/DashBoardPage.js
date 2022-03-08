import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../libs/firebase/firebaseConfig";

import AppBar from "../../components/AppBar";
import SideBar from "../../components/SideBar";
import Panel from "../../components/Panel";

function DashBoardPage(props) {
  const [isUser, setIsUser] = useState(false);
  const navigator = useNavigate();

  //if logged in show dashboard, else return to home
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
      navigator("/");
    }
  });

  //if user logged in then view dashboard, else return
  if (isUser) {
    return (
      <Dashboard>
        <AppBar />
        <SideBar />
        <Panel />
      </Dashboard>
    );
  } else {
    return null;
  }
}

export default DashBoardPage;

const Dashboard = styled.main`
  background-color: #faf9f6;
  display: flex;
  flex-wrap: wrap;
  color: #121616;
`;
