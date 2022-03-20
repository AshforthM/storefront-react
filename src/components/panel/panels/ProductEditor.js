import React from 'react'
import styled from 'styled-components';

import ProductDataEntryForm from './ProductDataEntryForm';
import ProductPreview from './ProductPreview';

export default function ProductEditor() {
  return (
    <ProductEditorStyles>
        <ProductDataEntryForm/>
        <ProductPreview/>
    </ProductEditorStyles>
  )
}

const ProductEditorStyles = styled.aside`
  background-color:lightcoral;
  width: auto;
  margin: 0.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
