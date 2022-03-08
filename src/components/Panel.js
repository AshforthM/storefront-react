import React from 'react'
import styled from 'styled-components';

import CardList from './CardList'


export default function Panel() {
  return (
    <PanelStyles>
      <CardContainerStyles>
        {/* <CardList /> */}
      </CardContainerStyles>    
    </PanelStyles>
  )
};

const PanelStyles = styled.div`
  min-height: calc(100vh - calc(64px));
  width: calc(100vw - 289px);
  //box-shadow: 0 0 0.1px 0.5px #121616;
`;

const CardContainerStyles = styled.div`
  width: calc(100vw - calc(289px + 4rem));
  min-height: calc(100vh - calc(64px + 4rem));
  margin: 2rem;
  border-radius: 4px;
  box-shadow: 0 0 0.1px 0.5px #121616;
`;