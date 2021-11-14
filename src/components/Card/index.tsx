import { ReactNode } from 'react';

import { CardImg, Container, Desc, Title } from './styles';

interface CardProps {
  img: string;
  title: string;
  desc: string;
}

function Card({ img,title,desc }: CardProps) {
  return (
    <Container>
      <CardImg src={img}/>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Container>
  );
};

export default Card;
