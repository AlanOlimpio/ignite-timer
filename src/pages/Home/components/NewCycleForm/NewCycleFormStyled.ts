import styled, { css } from 'styled-components';

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
`;
