import React from "react";
import styled from "styled-components";

import ProductImageDropZone from './ProductImageDropZone';
import {Label, Input, TextArea} from './../../../ui/text'

export default function ProductDataEntryForm() {
  return (
    <ProductDataEntryFormStyles>
      
      <ProductImage>
        <Label>Product Image</Label>
        <ProductImageDropZone/>
      </ProductImage>

      <fieldset>
        <ProductName>
          <Label>Product Name</Label>
          <Input></Input>
        </ProductName>

        <ProductPrice>
          <Label>Product Price</Label>
          <Input></Input>
        </ProductPrice>
      </fieldset>

      <ProductDescription>
        <Label>Product Description</Label>
        <TextArea rows={6}></TextArea>
      </ProductDescription>

    </ProductDataEntryFormStyles>
  );
}

const ProductDataEntryFormStyles = styled.form`
  //background-color:lightblue;
  width: 380px;

  input:focus, textarea:focus{
    border-color: cornflowerblue;
    background-color: #eff6ff;
    outline-color: cornflowerblue;
  }
  fieldset{
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const ProductImage = styled.div`
  
`;

const ProductName = styled.div`
  flex: 3.5;
`;

const ProductPrice = styled.div`
  flex: 1.5;
`;

const ProductDescription = styled.div`
  textarea{
    resize: none;
    //font-size: 14px;
  }
`;