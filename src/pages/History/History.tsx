import { useContext } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Status from '../../components/Status';
import * as Styled from './HistoryStyled';
import { CyclesContext } from '../../contexts/CyclesContext';

function History() {
  const { cycles } = useContext(CyclesContext);
  const cyclesReverse = cycles.slice(0).reverse();
  return (
    <Styled.HistoryContainer>
      <h1>Meu histórico</h1>
      <Styled.HistoryList>
        <table>
          <tbody>
            <tr>
              <td>
                <Styled.TableHeader>
                  <table>
                    <thead>
                      <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Duração</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                  </table>
                </Styled.TableHeader>
              </td>
            </tr>
            <tr>
              <td>
                <Styled.Tablebody>
                  <table>
                    <tbody>
                      {cyclesReverse.map((cycle) => {
                        return (
                          <tr key={cycle.id}>
                            <td>{cycle.task}</td>
                            <td>{cycle.minutesAmount} minutos</td>
                            <td>
                              {formatDistanceToNow(new Date(cycle.startDate), {
                                addSuffix: true,
                                locale: ptBR,
                              })}
                            </td>
                            <td>
                              {cycle.finishedDate && (
                                <Status
                                  $statusColor="green"
                                  label="Concluído"
                                />
                              )}

                              {cycle.interruptedDate && (
                                <Status
                                  $statusColor="red"
                                  label="Interrompido"
                                />
                              )}

                              {!cycle.finishedDate &&
                                !cycle.interruptedDate && (
                                  <Status
                                    $statusColor="yellow"
                                    label="Em andamento"
                                  />
                                )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Styled.Tablebody>
              </td>
            </tr>
          </tbody>
        </table>
      </Styled.HistoryList>
    </Styled.HistoryContainer>
  );
}
export default History;
