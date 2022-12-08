import styled from '@emotion/styled';

export const BannerTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-transform: uppercase;
`;

export const BannerSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  text-transform: capitalize;
`;
