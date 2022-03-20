import styled from "styled-components";


const TextArea = styled.textarea`
  width: ${(props) => props.width || "100%"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "3px"};
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.19);
  font-size: ${(props) => props.fs || "1.125rem"};
  padding: ${(props) => props.padding || "0.35rem 0.5rem"};
  background-color: ${(props) => props.bgc || "#ffffff"};
  ::placeholder {
    font-size: 14px;
    color: #94a3b8;
  }
  :focus {
    background-color: #f8fafc;
  }
`;

const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:${props => props.border || "none"};;
    border-radius: ${props => props.radius || "3px"};;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.19);
    font-size: ${props => props.fs || "1.125rem"};;
    padding: ${props => props.padding || "0.35rem 0.5rem"};
    background-color: ${props => props.bgc || "#ffffff"};;
    ;

    ::placeholder{
        font-size: 14px;
        color: #94a3b8;
    }
    :focus{
        background-color: #f8fafc;
    }
`;

const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-size: ${props => props.fs || '20px'};;
    color: ${props => props.color || "#475569" };
    padding: ${props => props.padding || '0'};;
    margin: ${props => props.margin || '0'};;
`;

export { TextArea, Label, Input };
