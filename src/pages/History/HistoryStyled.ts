import styled, { css } from 'styled-components';

const scrollbarWidth = '8px';

export const HistoryContainer = styled.main`
  ${({ theme }) => css`
    flex: 1;
    padding: 3.125rem;
    display: flex;
    flex-direction: column;

    overflow-x: auto;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      width: ${scrollbarWidth};
      height: ${scrollbarWidth};
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['scrollbar-thumb']};
      border-radius: 10px;
    }

    h1 {
      font-size: 1.5rem;
      color: ${theme['gray-100']};
    }
    @media only screen and (max-width: 768px) {
      padding: 1rem 0;
    }
  `}
`;
export const TableHeader = styled.div`
  padding-right: ${scrollbarWidth};
`;

export const HistoryList = styled.div`
  ${({ theme }) => css`
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 2rem;

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 600px;
      th {
        background-color: ${theme['gray-600']};
        padding: 1rem;
        text-align: left;
        color: ${theme['gray-100']};
        font-size: 0.875rem;
        line-height: 1.6;
        &:first-child {
          width: 50%;
          border-top-left-radius: 8px;
          padding-left: 1.5rem;
        }
        &:last-child {
          border-top-right-radius: 8px;
          padding-right: 1.5rem;
        }
      }
        td:table: td nth-child(1) {
        
        padding-right: 8px;
      }
    }
    }
  `}
`;

export const Tablebody = styled.div`
  ${({ theme }) => css`
    max-height: 240px;
    max-width: calc(100% - 8px);
    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['scrollbar-thumb']};
      border-radius: 10px;
    }
    td {
      background-color: ${theme['gray-700']};
      border-top: 4px solid ${theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  `}
`;
