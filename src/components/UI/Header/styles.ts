import styled from 'styled-components';
import { Typography } from '@material-ui/core';

interface HeaderLinkProps {
  isActive?: boolean;
}

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #303030;

  width: 100%;
  padding: 24px;

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: white;

    margin: 0 12px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Typography)`
  cursor: pointer;
  color: white;

  && {
    font-size: 2rem;
    font-weight: 600;
    margin-right: 24px;
  }
`;

export const HeaderNav = styled.div``;

export const HeaderLink = styled.a<HeaderLinkProps>`
  font-weight: ${({ isActive }) => (isActive ? 'bold' : '400')};
`;
