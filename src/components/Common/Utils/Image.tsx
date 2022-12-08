import styled from '@emotion/styled';
import { border, space, BorderProps, SpaceProps } from 'styled-system';

interface ImageProps extends BorderProps, SpaceProps {}

export const Image = styled.img<ImageProps>`
  ${border};
  ${space}
  width: 100%;
`;
