import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';

import Branding from "../../components/login/Branding";
import { Button } from "../../ui/buttons";
import {auth} from "../../libs/firebase/firebaseConfig"

function LoginPage(props) {
  let navigation = useNavigate();

  function onHandleSubmit(e) {
    //firebase auth
    e.preventDefault();
    navigation("dashboard");
  }

  return (
    <LoginContainer>
      <Branding />

      <LoginStyles>
        <form onSubmit={onHandleSubmit}>
          <h1>VHS Store</h1>
          <h2>sign in</h2>
          <InputStyles>
            <input type="text" placeholder="Email" /*type="email" required*/ />
          </InputStyles>
          <InputStyles>
            <input type="text" placeholder="Password" /*type="password" required*/ />
          </InputStyles>
          <SignInStyles>
            <Button type="submit">Sign in</Button>
          </SignInStyles>
          <ForgotPasswordStyles>
            <a href="">Forgot Password</a> 
          </ForgotPasswordStyles>         
        </form>
      </LoginStyles>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`  
  display: flex;
  flex: wrap;
  flex-direction: row;
  flex-basis: 100%;
  margin: 0 auto;
  height: 100vh;
  width: min-content(90%, 70.5rem);
  background-color: #FAF9F6;

  > div{
    justify-content: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
`;

const LoginStyles = styled.div`
  text-align: left;

  > * {
    padding: 12rem 2rem;
  }

  form{
    font-size: 1.5rem;
    color: #121616;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
    height: 1031px;
    > h1, h2, div{
      width: 100%;
    }
  }
  h1{
    font-size: 5rem;
    font-weight: 700;
    color: #fbae2d;
  }
  h2{
    font-size: 3rem;
    font-weight: 100;
  }

`;

const InputStyles = styled.div`
  input{
    width: 20rem;
  }
`;

const SignInStyles = styled.div`
  Button{
    width: 20rem;
  }
`;

const ForgotPasswordStyles = styled.div`
  a{
    color: inherit;
    text-decoration: underline;
  }
`;

export default LoginPage;
