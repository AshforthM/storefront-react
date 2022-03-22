import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ProductOptions() {
  return (
    <ProductOptionsStyles>
      <Link to="/dashboard">View all products</Link>

      <Link to="add">Add product</Link>

      <Link to="edit">Edit product</Link>
    </ProductOptionsStyles>
  );
}

const ProductOptionsStyles = styled.span`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  //justify-content: space-between;
  //box-shadow: 0 1px 0 0 #121616;
  margin: 0.25rem 0;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  padding: 0 1.25rem;

  a{
    margin: 0.25rem 0;
    padding: 0.25rem 1rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease-in-out;
    border-radius: 8px;
    &:hover {
        background-color: rgba(251, 174, 45, 0.6);
    }
  }
`;
