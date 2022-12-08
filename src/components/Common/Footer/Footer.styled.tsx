import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h4`
  text-transform: capitalize;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.p`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: ${({ theme }) => theme.colors.text};

  & span {
    font-weight: 700;
    margin-right: ${({ theme }) => theme.space[1]}px;
  }

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[1]}px;
  }
`;

export const ListNavLink = styled(NavLink)`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconLink = styled.a`
  margin: 0;
  background-color: transparent;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.round};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[1]}px;
  }
`;

export const FooterItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-items: baseline;
`;
