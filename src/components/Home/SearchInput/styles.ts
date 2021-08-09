import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

export const InputWrapper = styled.div`
  display: flex;

  background-color: white;

  margin-left: auto;
  width: 300px;
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

export const InputDropdownWrapper = styled.div`
  height: 0;
  width: 0;
`;

export const InputDropdown = styled.div`
  width: 500px;
  margin-left: -200px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  background-color: #303030;
  border-radius: 5px 0 5px 5px;
  box-shadow: ${({ theme }) => theme.shadow.level1};
`;
