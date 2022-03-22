import React from "react";
import styled from "styled-components";

import {ButtonSubmit} from '../../../ui/buttons'
import ProductImageDropZone from './ProductImageDropZone';
import {Label, Input, TextArea} from './../../../ui/text'

export default function ProductDataEntryForm(props) {
  return (
    <ProductDataEntryFormStyles onSubmit={props.handleSubmit}>
      
      <ProductImage>
        <Label>Image</Label>
        <ProductImageDropZone setProductImage={props.setProductImage} />
      </ProductImage>

      <fieldset>
        <ProductName>
          <Label>Name</Label>
          <Input onChange={(e) => props.handleProductName(e.target.value.trim())} maxLength={30}/>
        </ProductName>

        <ProductPrice>
          <Label>Price</Label>
          <Input onChange={(e) => props.handleProductPrice(e.target.value.trim())} maxLength={8}/>
        </ProductPrice>
      </fieldset>

      <ProductDescription>
        <Label>Description</Label>
        <TextArea rows={6} onChange={(e) => props.handleProductDescription(e.target.value.trim())} maxLength={100}></TextArea>
      </ProductDescription>

      <ButtonSubmit>{props.buttonTitle}</ButtonSubmit>

    </ProductDataEntryFormStyles>
  );
}

const ProductDataEntryFormStyles = styled.form`
  background-color: lightgray;
  width: 380px;
  padding: 2rem;

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