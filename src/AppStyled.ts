import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme['gray-300']};
    font-weight: bold;
    font-size: 2rem;
    font-family: sans-serif;
    text-align: center;
    padding: 2rem 1rem;
  `}
`;
