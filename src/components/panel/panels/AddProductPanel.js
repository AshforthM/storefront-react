import React, { useState } from "react";
import styled from "styled-components";

import { useAddProduct } from "../../../hooks/useAddProduct";
import { useNumberFormat } from './../../../hooks/useNumberFormat';
import PanelContainer from "./PanelContainer";
import ProductEditor from "./ProductEditor";
import VHSPreview from '../../../assets/images/login-branding.jpg';

export default function AddProductPanel(props) {
  
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Product Name');
  const [productPrice, setProductPrice] = useState('0.00');
  const priceFormatter = useNumberFormat();
  const [productImage, setProductImage] = useState({previewImage:VHSPreview, file:null});
  const [productDescription, setProductDescription] = useState('Product Description')
  const [loading, productLoader] = useAddProduct();

  function handleProductName (name){
    setProductName(name);
  };

  function handleProductPrice (price){
    setProductPrice(priceFormatter(price));
  };

  function handleProductDescription (description){
    setProductDescription(description);
  };

  function handleSubmit(e){
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription
    };
    setIsWriting(true); //user requests to update product

    productLoader(productData, productImage.file);
  }

  if(isWriting){
    return <h1>Editor Feedback Component</h1>
  }else{
    return (
      <PanelStyles>
        <PanelContainer title="Add New Product">
          <ProductEditor 
          productName={productName} 
          handleProductName={handleProductName}
          productPrice={productPrice}
          handleProductPrice={handleProductPrice}
          productImage={productImage.previewImage}
          setProductImage={setProductImage}
          productDescription={productDescription}
          handleProductDescription={handleProductDescription}
          handleSubmit={handleSubmit}
          buttonTitle={"Add Product"}
          />
        </PanelContainer>
      </PanelStyles>
    );
  }
}

const PanelStyles = styled.div`
  background-color: #edece9;
  min-height: calc(100vh - calc(64px));
  width: calc(100vw - 289px - 0.1rem);
`;