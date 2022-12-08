import styled from '@emotion/styled';

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes[7]}px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes[6]}px;
  }
`;

export const HeroHeading = styled.p`
  margin-bottom: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const HeroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: ${({ theme }) => theme.space[4]}px 0;
`;
