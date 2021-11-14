

import Button from '../Button';
import { Container, FloatLeft, FloatRight,Loginbtn } from './styles';

function Header() {
  return (
    <Container>
      <FloatLeft>
        <h1 className='Logo'>Re-Cycling</h1>
      </FloatLeft>
      <FloatRight>
        <Loginbtn>Entrar</Loginbtn>
        <Button text='Cadastre-se'/>
      </FloatRight>
    </Container>
  );
};

export default Header;
