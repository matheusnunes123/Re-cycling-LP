
import Header from '../../components/Header';
import RecyclingBro from '../../assets/Recycling-bro.svg';
import RecyclingPana from '../../assets/Recycling-pana.svg';
import HandSvg from '../../assets/handSvg.svg';
import RegisterSvg from '../../assets/RegisterSvg.svg';
import graphicsSvg from '../../assets/graphicsSvg.svg';
import announcementSvg from '../../assets/announcementSvg.svg';


import { Container, Section1,Section2,Section3, Img, Title,Desc,CardsDiv } from './styles';
import Card from '../../components/Card';



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

      <Section2>
        <div>
          <Title>
          Torne-se um colaborador e ajude o mundo.
          </Title>
          <Desc>
          Na Re-cycling, você Incentiva os seus clientes a Realizarem Entregas de Recicláveis enquanto vende mais Produtos.
          </Desc>
        </div>
        <div>
          <Img src={RecyclingPana}/>
        </div>
      </Section2>
      <Section3>
        <Title>
            Sua Empresa terá diversos Benefícios
        </Title>
        <CardsDiv>
          <Card img={HandSvg} title='Reconhecimento' desc='Sua empresa será vista como uma empresa verde e será uma atuante do processo de reciclagem no Brasil.'/>
          <Card img={HandSvg} title='Reconhecimento' desc='Sua empresa será vista como uma empresa verde e será uma atuante do processo de reciclagem no Brasil.'/>
          <Card img={HandSvg} title='Reconhecimento' desc='Sua empresa será vista como uma empresa verde e será uma atuante do processo de reciclagem no Brasil.'/>
        </CardsDiv>
      </Section3>
    </Container>
  );
};

export default LandingPage;
