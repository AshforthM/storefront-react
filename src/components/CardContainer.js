import React from 'react';
import styled from 'styled-components';
import CardList from './CardList';

export default function CardContainer(props) {
  return (
    <CardContainerStyles>
        <CardContainerHeadingStyles>{props.title || "Product Display"}</CardContainerHeadingStyles>
        {/* <CardList/> */}
    </CardContainerStyles>
  )
};

const CardContainerStyles = styled.div`
  //background-color: lightgray;
  width: calc(100vw - calc(289px + 4rem));
  min-height: calc(100vh - calc(64px + 4rem));
  margin: 2rem;
  border-radius: 22px;
  box-shadow: 0px 0px 1px 1px #161616;
`;

const CardContainerHeadingStyles = styled.h1`
  //background-color:lightgray;
  min-height: 60px;
  font-size: 24px;
  text-align: left;
  padding: 1rem 2rem;
  box-shadow: 0 1px 0 #161616;  
`;