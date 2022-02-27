import React from "react";
import styled from 'styled-components';

import {Button} from '../../ui/buttons'

export default function LoginForm() {
  return (
    <FormStyles>
      <input type="text" /*type="email" required*/ />
      <input type="text" /*type="password" required*/ />
      <Button type="submit">Log in</Button>
    </FormStyles>
  );
}

const FormStyles = styled.form``;
