import styled, { css } from 'styled-components';
import { STATUS_COLORS, StatusStyledInterface } from './StatusInterface';

export const StatusWrapper = styled.span<StatusStyledInterface>`
  ${({ theme, statusColor }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      min-width: 0.5rem;
      border-radius: 9999px;
      background: ${theme[STATUS_COLORS[statusColor]]};
    }
  `}
`;
