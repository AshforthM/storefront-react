import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function ProductOptions() {
  return (
    <ProductOptionsStyles>
        <li>
            <Link to="/dashboard">View all products</Link>
        </li>
        <li>
            <Link to="add">Add product</Link>
        </li>
        <li>
            <Link to="edit">Edit product</Link>
        </li>
    </ProductOptionsStyles>
  )
};

const ProductOptionsStyles = styled.ul`
  
`;