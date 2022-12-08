import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Image } from '..';
import logo from '../../../assets/images/logo.png';
import { routes } from '../../../routes';
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ListItem,
  StyledNavLink,
  MenuButton,
  NavWrapper,
  MenuList,
  CloseButton,
  ListItemCart,
} from './AppBar.styled';
import { AiOutlineMenu } from 'react-icons/ai';

export const AppBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menu = useRef(null);

  const onCloseMobileMenu = () => {
    setIsOpenMenu(false);
  };

  const onClickBackdrop = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).nodeName === 'NAV') {
      onCloseMobileMenu();
    }
  };

  return (
    <Box
      as='header'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      py={4}
      px={{ xs: 2, sm: 4, md: 6 }}
      bg='background'
      boxShadow='normal'
      zIndex={999}
      position='sticky'
      top={0}
      left={0}
    >
      <NavLink to={routes.home}>
        <Image src={logo} alt='logo' />
      </NavLink>
      <Box display={{ s: 'flex', md: 'none' }} alignItems='center'>
        <StyledNavLink to={routes.cart}>
          <BsHandbag />
        </StyledNavLink>
        <MenuButton onClick={() => setIsOpenMenu(true)}>
          <AiOutlineMenu size={24} />
        </MenuButton>
      </Box>

      <NavWrapper ref={menu} isOpenMenu={isOpenMenu} onClick={onClickBackdrop}>
        <CloseButton onClick={onCloseMobileMenu}>
          <AiOutlineClose color='#1a1a1a' />
        </CloseButton>
        <MenuList isOpenMenu={isOpenMenu}>
          <ListItem>
            <StyledNavLink to={routes.home} onClick={onCloseMobileMenu}>
              Home
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={routes.shop} onClick={onCloseMobileMenu}>
              Shop
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={routes.blog} onClick={onCloseMobileMenu}>
              Blog
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={routes.about} onClick={onCloseMobileMenu}>
              About
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={routes.contacts} onClick={onCloseMobileMenu}>
              Contacts
            </StyledNavLink>
          </ListItem>
          <ListItemCart>
            <StyledNavLink to={routes.cart} onClick={onCloseMobileMenu}>
              <BsHandbag />
            </StyledNavLink>
          </ListItemCart>
        </MenuList>
      </NavWrapper>
    </Box>
  );
};
