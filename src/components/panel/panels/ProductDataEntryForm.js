import React from "react";
import styled from "styled-components";

export default function ProductDataEntryForm() {
  return (
    <ProductDataEntryFormStyles>
      
      <ProductImage>img</ProductImage>

      <ProductName>name</ProductName>

      <ProductPrice>$</ProductPrice>

      <ProductDescription>Desc</ProductDescription>
    </ProductDataEntryFormStyles>
  );
}

const ProductDataEntryFormStyles = styled.form`
  background-color:lightblue;
`;

const ProductImage = styled.div`
  
`;

const ProductName = styled.div`
  
`;

const ProductPrice = styled.div`
  
`;

const ProductDescription = styled.div`
  
`;