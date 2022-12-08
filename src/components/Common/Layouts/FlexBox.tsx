import styled from '@emotion/styled';
import {
  color,
  space,
  layout,
  background,
  border,
  position,
  shadow,
  flexbox,
  ColorProps,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  FlexboxProps,
} from 'styled-system';

interface FlexBoxProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    FlexboxProps {
  gap: number;
}

export const FlexBox = styled.div<FlexBoxProps>`
  ${color}
  ${space}
  ${layout}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${flexbox}
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme, gap }) => theme.space.find((_, i) => i === gap)}px;
`;
