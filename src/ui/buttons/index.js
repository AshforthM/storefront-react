import styled from "styled-components";

const Button = styled.button`

/* background-color: ${props => props.bgcolor || "transparent"};
border: none;
border-radius: ${props => props.radius || "3px"};
box-shadow: ${props => props.shadow || "0 0 3px 1px rgb(220, 220, 220)"};
margin: ${props => props.margin || "0"};
padding: ${props => props.padding || "0.5rem 2rem"};
color: ${props => props.color || "grey"};
font-size: ${props => props.size || "1rem"}; */

    &:hover{
        cursor: pointer;
    }
`;

const ButtonSubmit = styled(Button)`
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    background-color: #f5f4f1;
    border-radius: 8px;
    box-shadow: 1px 1px rgba(#121616, 0.5);
    color: #121616;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    &:hover {
        box-shadow: 1px 1px #121616;
        background-color: #fbae2d;
    }
`;

export { Button, ButtonSubmit };