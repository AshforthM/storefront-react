import React from "react";
import styled from "styled-components";

export default function Card({product, ...props}) {
  const {productName, imageUrl, productPrice, productDescription} = {...product};
  return (
    <ProductCardStyles>
      <ProductImage>
        <img src={imageUrl} alt="VHS Product"></img>
      </ProductImage>
      <ProductName>{productName}</ProductName>
      <ProductPrice>${productPrice}</ProductPrice>
      <ProductDescription>{productDescription}</ProductDescription>
    </ProductCardStyles>
  );
}

const ProductImage = styled.div`
  padding: 0.25rem 0 1rem 0;
  width: 300px;
  img {
    width: 100%;
    height: 286px;
    border-radius: 16px;
  }
`;

const ProductName = styled.h2`
  position: relative;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.3rem;
  letter-spacing: -0.5px;
  word-wrap: break-word;
  padding-bottom:3px;

  &:after{
    position: absolute;
    content: "";
    background: rgb(251, 174, 45);
    height: 3px;
    left: 0;
    bottom: 0;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
`;

const ProductCardStyles = styled.aside`
  height: 520px;
  max-width: 360px;
  align-self: stretch;
  padding: 1rem 2rem;
  margin: 0.5rem;
  background-color: #edece9;
  border-radius: 8px;
  transition: transform 0.5s ease;

  &:hover{
    transform: scale(1.025);
    ${ProductName}::after{
      transform: scaleX(1);
    }
  }
`;

const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: -1px;
  word-wrap: break-word;
  margin: 0.25rem 0 0.25rem 0;
`;

const ProductDescription = styled.p`
  font-size: 1.05rem;
  max-width: 100%;
  word-wrap: break-word;
`;
