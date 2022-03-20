import React from "react";
import styled from "styled-components";

export default function ProductPreview() {
  return <ProductPreviewStyles>
    <p>Preview</p>
  </ProductPreviewStyles>;
}

const ProductPreviewStyles = styled.div`
  background-color: lightslategray;
`;
