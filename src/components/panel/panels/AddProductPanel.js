import React from 'react'
import styled from 'styled-components';
import CardContainer from '../cards/CardContainer';

export default function AddProductPanel(props) {
  return (
    <PanelStyles>
      <CardContainer title="Add New Product">
      </CardContainer>    
    </PanelStyles>
  )
};

const PanelStyles = styled.div`
  background-color: #EDECE9;
  min-height: calc(100vh - calc(64px));
  width: calc(100vw - 289px - 0.1rem);
`;