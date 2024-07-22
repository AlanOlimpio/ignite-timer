import { useContext, useEffect } from 'react';
import * as Styled from './CountdownStyled';
import { differenceInSeconds } from 'date-fns';
import { CyclesContext } from '../../../../contexts/CyclesContext';

function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds =
    activeCycle && typeof activeCycle.minutesAmount === 'number'
      ? activeCycle.minutesAmount * 60
      : 0;

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();

          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  ]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);
  return (
    <Styled.CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Styled.Separator>:</Styled.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </Styled.CountdownContainer>
  );
}

export default Countdown;
