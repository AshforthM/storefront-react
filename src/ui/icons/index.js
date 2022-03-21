import styled from "styled-components";

const Icon = styled.i`
  font-size: 28px;
`;

const IconAppbar = styled(Icon)`
  padding: 0 0.75rem;
  transition: all 0.2s ease-in-out;
  svg {
    &:hover {
      //cursor: pointer;
    }
  }
`;

const IconSidebar = styled(Icon)`
  padding: 0.75rem;
`;

export { Icon, IconAppbar, IconSidebar };
