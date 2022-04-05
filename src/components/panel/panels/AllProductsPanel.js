import React from "react";
import styled from "styled-components";

import { useGetProducts } from "../../../hooks/useGetProduct";

import Card from "../cards/Card";
import PanelContainer from "./PanelContainer";

export default function AllProductsPanel(props) {
  const productData = useGetProducts("products")

  return (
    <PanelStyles>
      <PanelContainer title="Product Listings">
        <AllProductsContainer>
          {productData ? (
            productData.map((product) => <Card key ={product.uid} product={product} />)
          ) : (
            <p>No products currently available</p>
          )}
        </AllProductsContainer>
      </PanelContainer>
    </PanelStyles>
  );
}

const PanelStyles = styled.div`
  background-color: #edece9;
  min-height: calc(100vh - calc(64px));
  width: calc(100% - 289px - 0.1rem);
`;

const AllProductsContainer = styled.div`
  height: calc(100vh - calc(64px + 4rem + 60px));
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  padding: 0.23rem;

  //scrollbar styling
  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 4px transparent;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px #bbbbbb;
    border: solid 4px transparent;
    border-radius: 14px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`;
