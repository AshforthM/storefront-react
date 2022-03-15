import React from 'react'
import styled from 'styled-components';

import Card from './Card';

export default function CardList() {
  return (
    <CardListStyles>
        <Card />
    </CardListStyles>
  )
};

const CardListStyles = styled.ul`
  
`;
