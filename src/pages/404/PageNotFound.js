import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../libs/firebase/firebaseConfig";

import {ButtonSubmitInverted} from "../../ui/buttons/index"
import branding404 from '../../assets/images/JohnTravolta.gif'

function PageNotFound(props) {
  const [isUser, setIsUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  });

  return (
    <>
      <PageNotFoundStyles>
        <Header404>
          <h2>error</h2>
          <h1>404</h1>
          <img src={branding404} alt="Confused John Travolta"></img>
          <h3>We can't find the page you're looking for</h3>
          
          {isUser ? (
            <Link to="/dashboard"><ButtonSubmitInverted>Back to Dashboard</ButtonSubmitInverted></Link>
          ) : (
            <Link to="/"><ButtonSubmitInverted>Back to Login</ButtonSubmitInverted></Link>
          )}
        </Header404>
      </PageNotFoundStyles>
    </>
  );
};

const PageNotFoundStyles = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: #faf9f6;
`;

const Header404 = styled.header`
  margin-bottom: 14rem;
  min-width: 500px;
  //box-shadow: 0px 0px 1px 0px;
  h1{
    line-height: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 7rem;
    font-weight: 700;
    padding-bottom: 2rem;
  }
  img{
    padding: 1rem;
  }
  h2{
    font-size: 2rem;
    padding-top: 1rem;
    font-weight: 800;
  }
  h3{
    font-size: 2rem;
    padding: 1rem 0 2rem 0;
  }
  a{
    display: inline-block;
    font-size: 1.5rem;
    margin-top: auto;
  }
`;

export default PageNotFound;
