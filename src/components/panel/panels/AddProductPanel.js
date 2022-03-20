import React from 'react'
import styled from 'styled-components';

import ProductDataEntryForm from './ProductDataEntryForm';
import PanelContainer from './PanelContainer';
import ProductPreview from './ProductPreview';

export default function AddProductPanel(props) {
  return (
    <PanelStyles>
      <PanelContainer title="Add New Product">
        <ProductDataEntryForm/>
        <ProductPreview/>
      </PanelContainer>    
    </PanelStyles>
  )
};

const PanelStyles = styled.div`
  background-color: #EDECE9;
  min-height: calc(100vh - calc(64px));
  width: calc(100vw - 289px - 0.1rem);
`;