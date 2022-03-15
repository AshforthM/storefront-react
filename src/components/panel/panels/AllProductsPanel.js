import React from 'react'
import styled from 'styled-components';
import PanelContainer from './PanelContainer';

export default function AllProductsPanel(props) {
  return (
    <PanelStyles>
      <PanelContainer title="Product Listings">
      </PanelContainer>
    </PanelStyles>
  )
};

const PanelStyles = styled.div`
  background-color: #EDECE9;
  min-height: calc(100vh - calc(64px));
  width: calc(100vw - 289px - 0.1rem);
`;