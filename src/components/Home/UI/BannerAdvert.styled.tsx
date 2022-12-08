import styled from '@emotion/styled';

export const BannerSubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const BannerTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

export const BannerText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const BannerButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  font-weight: 600;
  padding: 11px 18px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: transparent;
  }
`;
