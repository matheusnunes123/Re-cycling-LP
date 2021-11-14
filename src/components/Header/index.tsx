

import Button from '../Button';
import { Container, FloatLeft, FloatRight,Loginbtn, Logo } from './styles';

function Header() {
  return (
    <Container>
      <FloatLeft>
        <Logo>Re-Cycling</Logo>
      </FloatLeft>
      <FloatRight>
        <Loginbtn>Entrar</Loginbtn>
        <Button text='Cadastre-se'/>
      </FloatRight>
    </Container>
  );
};

export default Header;
