import React from "react";
import styled from "styled-components";

import Card from "../cards/Card";
import PanelContainer from "./PanelContainer";
import VHSPreview from '../../../assets/images/login-branding.jpg';

export default function AllProductsPanel(props) {
  return (
    <PanelStyles>
      <PanelContainer title="Product Listings">
        <Card
          productName={"VHS Title"}
          productPrice={"100.00"}
          productImage={VHSPreview}
          productDescription={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"}>
        </Card>
      </PanelContainer>
    </PanelStyles>
  );
}

const PanelStyles = styled.div`
  background-color: #edece9;
  min-height: calc(100vh - calc(64px));
  width: calc(100vw - 289px - 0.1rem);
`;
