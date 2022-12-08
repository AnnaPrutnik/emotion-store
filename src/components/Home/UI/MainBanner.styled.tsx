import styled from '@emotion/styled';

export const BannerTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`;

export const BannerText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[5]}pxx;
  padding: ${({ theme }) => theme.space[2]}px 0;
`;

export const BannerAccentText = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
