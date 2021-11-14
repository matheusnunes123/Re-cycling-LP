
import Header from '../../components/Header';
import RecyclingBro from '../../assets/Recycling-bro.svg';
import RecyclingPana from '../../assets/Recycling-pana.svg';


import { Container, Section1,Section2, Img, Title,Desc } from './styles';



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
    </Container>
  );
};

export default LandingPage;
