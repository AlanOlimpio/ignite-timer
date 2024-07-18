import { StatusInterface } from './StatusInterface';
import * as Styled from './StatusStyled';

function Status({ statusColor, label }: StatusInterface) {
  return (
    <Styled.StatusWrapper statusColor={statusColor}>
      {label}
    </Styled.StatusWrapper>
  );
}

export default Status;
