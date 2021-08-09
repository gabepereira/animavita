import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

export const InputWrapper = styled.div`
  display: flex;

  background-color: white;

  width: 250px;
  padding: 4px 0px 4px 12px;
  border-radius: 5px;

  svg {
    margin-right: 4px;
  }
`;

export const Input = styled(InputBase)`
  width: 100%;

  && {
    font-size: 12px;
  }
`;
