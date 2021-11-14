import { ReactNode } from 'react';

import { Container } from './styles';

interface FooterProps {
  children: ReactNode;
}

function Footer({ children }: FooterProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Footer;
