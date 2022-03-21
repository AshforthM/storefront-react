import React from "react";
import styled from 'styled-components';

import brandingImage from '../../assets/images/login-branding.jpg'

export default function Branding() {
  return (
    <BrandingStyles>
      {/* <img src={brandingImage} alt="Closeup of VHS tape"></img> */}
    </BrandingStyles>
  );
};

const BrandingStyles = styled.div`
  background-image: url(${brandingImage});
  background-position: center;
  background-repeat: no-repeat;
  img{
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: 1rem;
  }
`;
