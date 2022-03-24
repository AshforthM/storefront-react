import React from "react";
import styled from "styled-components";

import Card from "../cards/Card";
import PanelContainer from "./PanelContainer";
import VHSPreview from "../../../assets/images/login-branding.jpg";

export default function AllProductsPanel(props) {
  return (
    <PanelStyles>
      <PanelContainer title="Product Listings">
        <AllProductsContainer>
          <Card
            productName={"VHS Title"}
            productPrice={"100.00"}
            productImage={VHSPreview}
            productDescription={
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"
            }
          ></Card>
        </AllProductsContainer>
      </PanelContainer>
    </PanelStyles>
  );
}

const PanelStyles = styled.div`
  background-color: #edece9;
  min-height: calc(100vh - calc(64px));
  width: calc(100vw - 289px - 0.1rem);
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
