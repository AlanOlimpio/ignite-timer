import { useFormContext } from 'react-hook-form';
import { Minus, Plus } from 'phosphor-react';
import * as Styled from './NewCycleFormStyled';
import { MouseEvent, useContext } from 'react';
import { CyclesContext } from '../../Home';

function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register, setValue, getValues } = useFormContext();

  function stepDownMinutes(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    const minutesAmount = getValues('minutesAmount');

    if (typeof minutesAmount === 'number' && minutesAmount >= 10) {
      setValue('minutesAmount', minutesAmount - 5);
    } else {
      setValue('minutesAmount', '');
    }
  }

  function stepUpMinutes(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    const minutesAmount = getValues('minutesAmount')
      ? getValues('minutesAmount')
      : 0;

    if (typeof minutesAmount === 'number' && minutesAmount < 60) {
      setValue('minutesAmount', minutesAmount + 5);
    }
  }
  return (
    <Styled.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <Styled.TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Trabalhar no Design System" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <Styled.StepMinutesAmountButton
        disabled={!!activeCycle}
        onClick={(e) => stepDownMinutes(e)}
      >
        <Minus size={16} color="#7C7C8A" />
      </Styled.StepMinutesAmountButton>
      <Styled.MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />
      <Styled.StepMinutesAmountButton
        disabled={!!activeCycle}
        onClick={(e) => stepUpMinutes(e)}
      >
        <Plus size={16} color="#7C7C8A" />
      </Styled.StepMinutesAmountButton>

      <span>minutos.</span>
    </Styled.FormContainer>
  );
}

export default NewCycleForm;
