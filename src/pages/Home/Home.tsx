import { Play } from 'phosphor-react';
import * as Styled from './HomeStyled';
import { MouseEvent } from 'react';
import { Minus, Plus } from 'phosphor-react';
import { useForm } from 'react-hook-form';

function Home() {
  const { register, handleSubmit, watch, setValue, getValues } = useForm();
  function handleCreateNewCycle(data: unknown) {
    console.log(data);
  }

  const task = watch('task');
  const minutesAmount = watch('minutesAmount');
  const isSubmitDisable = !task || !minutesAmount;

  function stepDownMinutes(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    const minutesAmount = getValues('minutesAmount');

    if (minutesAmount >= 10) {
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

    if (minutesAmount < 60) {
      setValue('minutesAmount', minutesAmount + 5);
    }
  }

  return (
    <Styled.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <Styled.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styled.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Trabalhar no Design System" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <Styled.StepMinutesAmountButton onClick={(e) => stepDownMinutes(e)}>
            <Minus size={16} color="#7C7C8A" />
          </Styled.StepMinutesAmountButton>
          <Styled.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', {
              valueAsNumber: true,
            })}
          />
          <Styled.StepMinutesAmountButton onClick={(e) => stepUpMinutes(e)}>
            <Plus size={16} color="#7C7C8A" />
          </Styled.StepMinutesAmountButton>

          <span>minutos.</span>
        </Styled.FormContainer>

        <Styled.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Styled.Separator>:</Styled.Separator>
          <span>0</span>
          <span>0</span>
        </Styled.CountdownContainer>

        <Styled.StartCountdownButton type="submit" disabled={isSubmitDisable}>
          <Play size={24} />
          Começar
        </Styled.StartCountdownButton>
      </form>
    </Styled.HomeContainer>
  );
}

export default Home;
