import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage(props) {

  let navigation = useNavigate();

  function onHandleSubmit(e){
    //firebase auth
    e.preventDefault();
    navigation('dashboard');
  }

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

      <header>
        <h1>Page Not Found</h1>
        <form onSubmit={onHandleSubmit}>
          <input type="text" /*type="email" required*/ />
          <input type="text" /*type="password" required*/ />
          <button type="submit">Form submission</button>
        </form>
      </header>
    </>
  );
}

export default LoginPage;
