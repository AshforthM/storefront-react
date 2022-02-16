import React from "react";
import { Link } from "react-router-dom";

import { AppBar } from "../../components/appbar";

function DashBoardPage(props) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Login Page</Link>
          </li>

          <li>
            <Link to="/dashboard">DashBoard Page</Link>
          </li>
        </ul>
      </nav>
      <AppBar />
    </>
  );
}

export default DashBoardPage;
