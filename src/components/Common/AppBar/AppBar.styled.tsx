import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

interface MenuProps {
  isOpenMenu: boolean;
}

export const NavWrapper = styled.nav<MenuProps>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 200;
  opacity: ${({ isOpenMenu }) => (isOpenMenu ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitions.normal};
  pointer-events: ${({ isOpenMenu }) => (isOpenMenu ? 'all' : 'none')};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
    height: auto;
    width: auto;
    background-color: transparent;
    opacity: 1;
    pointer-events: all;
    justify-content: flex-start;
  }
`;

export const MenuButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const CloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 210;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MenuList = styled.ul<MenuProps>`
  position: absolute;
  top: 0;
  right: ${({ isOpenMenu }) => (isOpenMenu ? '0px' : '-300px')};
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 40px 60px;
  background-color: #e3e6f3;
  padding: 80px 0 0 10px;
  transition: ${({ theme }) => theme.transitions.normal};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    width: auto;
    height: auto;
    flex-direction: row;
    align-items: center;
    box-shadow: none;
    background-color: transparent;
    padding: 0;
  }
`;

export const ListItem = styled.li`
  padding: 0 ${({ theme }) => theme.space[4]}px;
  margin-bottom: 25px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`;

export const ListItemCart = styled(ListItem)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.link};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    opacity: 0;
    position: absolute;
    bottom: -8px;
    left: 0px;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all ${({ theme }) => theme.transitions.normal};
  }

  &.active::after {
    opacity: 1;
    width: 70%;
    min-width: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover::after {
      opacity: 1;
      width: 70%;
      min-width: 15px;
    }
  }
`;
