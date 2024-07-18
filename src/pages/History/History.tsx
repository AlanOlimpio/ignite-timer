import Status from '../../components/Status';
import * as Styled from './HistoryStyled';

function History() {
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
                      <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                          <Status statusColor="yellow" label="Em andamento" />
                        </td>
                      </tr>
                      <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                          <Status statusColor="red" label="Interrompido" />
                        </td>
                      </tr>
                      <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                          <Status statusColor="green" label="Concluído" />
                        </td>
                      </tr>
                      <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                          <Status statusColor="red" label="Interrompido" />
                        </td>
                      </tr>
                      <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                          <Status statusColor="green" label="Concluído" />
                        </td>
                      </tr>
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
