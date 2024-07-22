import { useContext } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { HandPalm, Play } from 'phosphor-react';
import * as Styled from './HomeStyled';

import Countdown from './components/Countdown';
import NewCycleForm from './components/NewCycleForm';
import { FormProvider, useForm } from 'react-hook-form';
import { CyclesContext } from '../../contexts/CyclesContext';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
    .or(zod.string()),
});

export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: '',
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch('task');
  const minutesAmountInput = watch('minutesAmount');
  const isSubmitDisable = !task || !minutesAmountInput;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  return (
    <Styled.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <Styled.StopCountdownButton
            onClick={interruptCurrentCycle}
            type="button"
          >
            <HandPalm size={24} />
            Interromper
          </Styled.StopCountdownButton>
        ) : (
          <Styled.StartCountdownButton disabled={isSubmitDisable} type="submit">
            <Play size={24} />
            Começar
          </Styled.StartCountdownButton>
        )}
      </form>
    </Styled.HomeContainer>
  );
}
export default Home;
