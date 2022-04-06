import React, { useState } from "react";
import styled from "styled-components";

import { useAddProduct } from "../../../hooks/useAddProduct";
import { useNumberFormat } from "./../../../hooks/useNumberFormat";
import UploadFeedback from "./UploadFeedback";
import PanelContainer from "./PanelContainer";
import ProductEditor from "./ProductEditor";
import VHSPreview from "../../../assets/images/login-branding.jpg";
import { toastError } from "../../../ui/toasts/index";
import { ToastContainer } from "react-toastify";

const defaults = {
  description: "Product Description.",
  name: "Product Name",
  price: "0.00",
};

export default function AddProductPanel(props) {
  const [isWriting, setIsWriting] = useState(false);
  const [productName, setProductName] = useState(defaults.name);
  const [productPrice, setProductPrice] = useState(defaults.price);
  const priceFormatter = useNumberFormat();
  const [productImage, setProductImage] = useState({
    previewImage: VHSPreview,
    file: null,
  });
  const [productDescription, setProductDescription] = useState(
    defaults.description
  );
  const [loading, productLoader] = useAddProduct();

  function handleProductName(name) {
    setProductName(name);
  }

  function handleProductPrice(price) {
    setProductPrice(priceFormatter(price));
  }

  function handleProductDescription(description) {
    setProductDescription(description);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errorCount = 0;

    if (!productImage.file) {
      toastError("Product image is required");
      errorCount++;
    }
    if (!productName || productName.length < 1 || productName === defaults.name) {
      toastError("Product name is required");
      errorCount++;
    }
    if (!productPrice || productPrice.length < 1 || productPrice === defaults.price) {
      toastError("Product price is required");
      errorCount++;
    }
    if (!productDescription || productDescription.length < 1 || productDescription === defaults.description) {
      toastError("Product description is required");
      errorCount++;
    }

    if(errorCount < 1){
      const productData = {
        productName,
        productPrice,
        productDescription,
      };
  
      console.log("upload time");
      setIsWriting(true); //user requests to update product
      productLoader(productData, productImage.file);
      setProductDescription(defaults.description);
      setProductImage({ previewImage: VHSPreview, file: null });
      setProductName(defaults.name);
      setProductPrice(defaults.price);
    }
  }

  if (isWriting) {
    return <UploadFeedback status={loading} writeCompleted={setIsWriting} />;
  } else {
    return (
      <>
        <ToastContainer />
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
      </>
    );
  }
}

const PanelStyles = styled.div`
  background-color: #edece9;
  min-height: calc(100vh - calc(64px));
  width: calc(100% - 289px - 0.1rem);
`;
