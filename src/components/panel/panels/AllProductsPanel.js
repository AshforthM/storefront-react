import React from 'react'
import styled from 'styled-components';
import CardContainer from '../../CardContainer';

export default function AllProductsPanel(props) {
  return (
    <PanelStyles>
      <CardContainer title="Product Listings">
      </CardContainer>
    </PanelStyles>
  )
};

const PanelStyles = styled.div`
  background-color: #EDECE9;
  min-height: calc(100vh - calc(64px));
  width: calc(100vw - 289px - 0.1rem);
`;