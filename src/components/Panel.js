import React from 'react'
import styled from 'styled-components';

import CardList from './CardList'


export default function Panel() {
  return (
    <PanelStyles>
      
      {/* <CardList /> */}
    </PanelStyles>
  )
};

const PanelStyles = styled.div`
  //background-color: blanchedalmond;
  width: calc(100% - calc(289px + 4rem + 30px));
  min-height: calc(100vh - calc(64px + 4rem));
  margin: 2rem;
  border-radius: 4px;
  box-shadow: 0 0 0.1px 0.5px #121616;
`;
