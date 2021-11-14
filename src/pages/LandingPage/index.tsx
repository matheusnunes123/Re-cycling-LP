
import Header from '../../components/Header';
import RecyclingBro from '../../assets/Recycling-bro.svg';


import { Container, Section1, Img, Title,Desc } from './styles';



function LandingPage() {
  return (
    <Container>
      <Header/>
      <Section1>
        <div>
          <Title>
          Seja uma empresa Verde!
          </Title>
          <Desc>
          Com o Re-cyling, sua empresa pode anunciar cupons de desconto enquanto propaga um meio ambiente mais sustentável.
          </Desc>
        </div>
        <div>
          <Img src={RecyclingBro}/>
        </div>
      </Section1>
    </Container>
  );
};

export default LandingPage;
