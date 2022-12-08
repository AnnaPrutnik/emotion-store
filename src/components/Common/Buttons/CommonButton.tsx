import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  isLight?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  min-width: 120px;
  height: 2.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme, isLight }) =>
    isLight ? theme.colors.black : theme.colors.white};
  background-color: ${({ theme, isLight }) =>
    isLight ? theme.colors.white : theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;
  outline: none;
  transition: ${({ theme }) => theme.transitions.normal};
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme, isLight }) =>
      isLight ? theme.colors.primary : theme.colors.white};
    color: ${({ theme, isLight }) =>
      isLight ? theme.colors.white : theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 3.125rem;
  }
`;

export const CommonButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  isLight = true,
}) => {
  return <StyledButton isLight={isLight}>{children}</StyledButton>;
};
