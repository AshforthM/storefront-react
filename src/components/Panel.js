import React from 'react'
import styled from 'styled-components';

import CardList from './CardList'


export default function Panel() {
  return (
    <PanelStyles>
      Panel
      <CardList />
    </PanelStyles>
  )
};

const PanelStyles = styled.div`
  background-color: lightgray;
`;
