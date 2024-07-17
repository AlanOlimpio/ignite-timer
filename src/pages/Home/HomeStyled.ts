import styled, { css } from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
  `}
  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${theme['gray-100']};
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    span {
      background: ${theme['gray-700']};
      padding: 2rem 1rem;
      border-radius: 8px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      line-height: 1rem;
      gap: 0.5rem;
      span {
        padding: 1rem 1rem;
      }
    }
  `}
`;
export const Separator = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    color: ${theme['green-500']};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      padding: 1rem 0;
      width: 1rem;
    }
  `}
`;
const BaseInput = styled.input`
  ${({ theme }) => css`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    color: ${theme['gray-100']};
    &:focus {
      box-shadow: none;
      border-color: ${theme['green-500']};
    }
    &::placeholder {
      color: ${theme['gray-500']};
    }
  `}
`;

export const TaskInput = styled(BaseInput)`
  padding: 0 0.5rem;
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 1.375rem;
  padding: 0;
`;

export const StepMinutesAmountButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  color: red;
  fill: red;
`;

export const StartCountdownButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    background: ${theme['green-500']};
    color: ${theme['gray-100']};
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background: ${theme['green-700']};
    }
  `}
`;
