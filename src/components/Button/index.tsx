

import { Container } from './styles';

interface ButtonProps {
  text: string;
}

function Button({text}: ButtonProps) {
  return (
    <Container>
      {text}
    </Container>
  );
};

export default Button;
