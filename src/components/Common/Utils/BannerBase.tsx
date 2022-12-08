import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { layout, LayoutProps, ResponsiveValue } from 'styled-system';

interface AdaptiveValue {
  s?: string;
  sm?: string;
  md?: string;
  lg?: string;
}

interface BannerBaseProps extends PropsWithChildren, LayoutProps {
  image: string;
  minWidth?: number;
  padding?: number;
  gap: number;
  align?: 'flex-start' | 'center';
}

export const BannerBase = styled.div<BannerBaseProps>`
  ${layout};
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'flex-start')};
  justify-content: center;
  background-image: url(${({ image }) => image});
  background-position: center top;
  background-size: cover;
  width: 100%;
  padding: ${({ padding, theme }) =>
    padding ? theme.space.find((_, i) => i === padding) : 0}px;
  gap: ${({ gap, theme }) => theme.space.find((_, i) => i === gap)}px;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 150)}px;
`;
