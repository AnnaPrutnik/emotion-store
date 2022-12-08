import React from 'react';
import styled from '@emotion/styled';
import { IconType } from 'react-icons';

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.round};
  color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.highlight};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

interface IIconButtonProps {
  icon: IconType;
  size: number;
}

export const IconButton = ({ icon: Icon, size }: IIconButtonProps) => {
  return (
    <StyledButton>
      <Icon size={size} />
    </StyledButton>
  );
};
