import React from "react";
import styled from "styled-components";

import PlaceHolderImage from '../../../assets/images/login-branding.jpg'

export default function ProductPreview(props) {
  return (
    <ProductPreviewStyles>
      <ProductImage>
        <img src={props.productImage} alt="Product Image"></img>
      </ProductImage>
      <ProductName>{props.productName}</ProductName>
      <ProductPrice>${props.productPrice}</ProductPrice>
      <ProductDescription>{props.productDescription}</ProductDescription>
    </ProductPreviewStyles>
  );
}

const ProductPreviewStyles = styled.aside`
  max-width: 360px;
  align-self: stretch;
  padding: 2rem 2rem;
  background-color: lightgray;
`;

const ProductImage = styled.div`
  margin: 0 0 1rem 0;
  width: 300px;
  img{
    width: 100%;
    height: 364px;
  }
`;

const ProductName = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.5px;
  word-wrap: break-word;
`;

const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: -1px;
  word-wrap: break-word;
  margin: -0.3rem 0 0.25rem 0;
`;

const ProductDescription = styled.p`
  font-size: 1.05rem;
  max-width: 100%;
  word-wrap: break-word;
`;
