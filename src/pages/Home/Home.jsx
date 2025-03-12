import { Container, Button, Content, Section, Title } from "./styles";

import { FiPlus } from 'react-icons/fi';

import { Header } from "../../Components/Header";
import { Note } from "../../Components/Note";


export function Home() {
  return (
    <Container>
      <Header />

      <Title>
        <h1>Meus filmes</h1>
        <Button to="/new" >
          <FiPlus />
          <span>Adiconar Filme</span>
        </Button>
      </Title>
      <Content>
        <Section>
          <Note data={{
            title: 'Interestellar',
            rating: 4,
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ],
          }} />

          <Note data={{
            title: 'Interestellar',
            rating: 4,
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ],
          }} />

          <Note data={{
            title: 'Interestellar',
            rating: 4,
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ],
          }} />

          <Note data={{
            title: 'Interestellar',
            rating: 4,
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ],
          }} />

          <Note data={{
            title: 'Interestellar',
            rating: 4,
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ],
          }} />

          <Note data={{
            title: 'Interestellar',
            rating: 4,
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ],
          }} />


        </Section>

      </Content>

    </Container>
  );
}