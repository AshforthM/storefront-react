import React from "react";
import styled from "styled-components";

export default function ProductDataEntryForm() {
  return (
    <ProductDataEntryFormStyles>
      
      <ProductImage>
        <label>Product Image</label>
      </ProductImage>

      <ProductName>
        <label>Product Name</label>
      </ProductName>

      <ProductPrice>
        <label>Product Price</label>
      </ProductPrice>

      <ProductDescription>
        <label>Product Description</label>
      </ProductDescription>

    </ProductDataEntryFormStyles>
  );
}

const ProductDataEntryFormStyles = styled.form`
  background-color:lightblue;
  width: 380px;
`;

const ProductImage = styled.div`
  
`;

const ProductName = styled.div`
  
`;

const ProductPrice = styled.div`
  
`;

const ProductDescription = styled.div`
  
`;