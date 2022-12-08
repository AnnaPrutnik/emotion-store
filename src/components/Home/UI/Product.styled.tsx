import styled from '@emotion/styled';

export const ProductTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

export const ProductText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const ProductCard = styled.div`
  width: 23%;
  min-width: 250px;
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.normal};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.box};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const ProductBrand = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`;

export const ProductName = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.link};
`;

export const ProductPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
