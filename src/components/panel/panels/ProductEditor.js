import React from 'react'
import styled from 'styled-components';

import ProductDataEntryForm from './ProductDataEntryForm';
import ProductPreview from './ProductPreview';

export default function ProductEditor(props) {
  return (
    <ProductEditorStyles>
        <ProductDataEntryForm 
        handleProductName={props.handleProductName} 
        handleProductPrice={props.handleProductPrice}
        setProductImage={props.setProductImage}
        handleProductDescription={props.handleProductDescription}
        />
        <ProductPreview 
        productName={props.productName} 
        productPrice={props.productPrice}
        productImage={props.productImage}
        productDescription={props.productDescription}
        />
    </ProductEditorStyles>
  )
}

const ProductEditorStyles = styled.aside`
  //background-color:lightcoral;
  width: auto;
  margin: 0.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
