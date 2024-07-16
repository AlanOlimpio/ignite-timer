import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import * as Styled from './HeaderStyled';
import logoIgnite from '../../assets/logo-ignite.svg';

function Header() {
  return (
    <Styled.HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Styled.HeaderContainer>
  );
}
export default Header;
