import React from 'react'
import styled from 'styled-components';
import CardContainer from './CardContainer';

import CardList from './CardList'


export default function Panel() {
  return (
    <PanelStyles>
      <CardContainer>
        {/* <CardList /> */}
      </CardContainer>    
    </PanelStyles>
  )
};

const PanelStyles = styled.div`
  min-height: calc(100vh - calc(64px));
  width: calc(100vw - 289px);
  //box-shadow: 0 0 0.1px 0.5px #121616;
`;