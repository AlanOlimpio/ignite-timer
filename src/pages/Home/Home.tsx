import { Play } from 'phosphor-react';
import * as Styled from './HomeStyled';
import { MouseEvent, useRef } from 'react';
import { Minus, Plus } from 'phosphor-react';

function Home() {
  const minutesAmountRef = useRef<HTMLInputElement>(null);

  function stepDownMinutes(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    if (minutesAmountRef?.current) {
      minutesAmountRef.current.stepDown();
    }
  }

  function stepUpMinutes(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    if (minutesAmountRef?.current) {
      minutesAmountRef.current.stepUp();
    }
  }

  return (
    <Styled.HomeContainer>
      <form>
        <Styled.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styled.TaskInput
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Trabalhar no Design System" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <Styled.StepMinutesAmountButton onClick={(e) => stepDownMinutes(e)}>
            <Minus size={16} color="#7C7C8A" />
          </Styled.StepMinutesAmountButton>
          <Styled.MinutesAmountInput
            ref={minutesAmountRef}
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
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

        <Styled.StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </Styled.StartCountdownButton>
      </form>
    </Styled.HomeContainer>
  );
}

export default Home;
