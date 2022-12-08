import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]}px ${({ theme }) => theme.space[3]}px;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.small};

  &:nth-child(6n-5) h6 {
    background-color: #fddde4;
  }

  &:nth-child(6n-4) h6 {
    background-color: #cdebbc;
  }

  &:nth-child(6n-3) h6 {
    background-color: #d1e8f2;
  }

  &:nth-child(6n-2) h6 {
    background-color: #cdd4f8;
  }

  &:nth-child(6n-1) h6 {
    background-color: #f6dbf6;
  }

  &:nth-child(6n) h6 {
    background-color: #fff2e5;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 160px;
  }
`;

export const Title = styled.h6`
  padding: 9px 8px 6px 8px;
  line-height: 1;
  border-radius: ${({ theme }) => theme.radii.small};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  text-transform: capitalize;
`;
