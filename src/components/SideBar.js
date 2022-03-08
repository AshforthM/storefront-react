import React from 'react'
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import { auth } from '../libs/firebase/firebaseConfig';

import { Button, ButtonSubmit } from '../ui/buttons';

export default function SideBar() {

  async function onLogoutRequest(e){
    await signOut(auth);
  }

  return (
    <SideBarStyles>
      <ul>
        <li>
          <ButtonSubmit onClick={onLogoutRequest}>Logout</ButtonSubmit>
        </li>
      </ul>
    </SideBarStyles>
  )
}

const SideBarStyles = styled.div`
  //background-color: green;
  width: 289px;
  min-height: calc(100vh - calc(64px));
  box-shadow: 0 1px 0px 0.5px #121616;
  margin: 0rem 0;
  padding: 3rem;
  //border-radius: 4px;
`;