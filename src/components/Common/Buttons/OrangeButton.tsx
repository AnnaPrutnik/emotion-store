import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import BgButton from '../../../assets/images/button.png';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button`
  position: relative;
  width: 220px;
  height: 44px;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  background-color: transparent;
  background-image: url(${BgButton});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  text-transform: capitalize;
  z-index: 300;
`;

export const OrangeButton: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  type = 'button',
}) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
