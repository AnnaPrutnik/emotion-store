import styled from '@emotion/styled';

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;
export const Text = styled.p`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: #818ea0;
  margin-bottom: ${({ theme }) => theme.space[2]}px;

  & span {
    color: #ffbd27;
  }
`;

export const Input = styled.input`
  height: 2.125rem;
  padding: 0 1.25em;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  width: 100%;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.small}px;
  outline: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 3.125rem;
  }
`;
