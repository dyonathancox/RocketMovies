import { Container, Content, Section  } from "./styles";

import { FiPlus  } from 'react-icons/fi';

import { Header } from "../../Components/Header";
import { Note } from "../../Components/Note";
import { Button } from "../../Components/Button";

export function Home() {
  return (
    <Container>
      <Header />     

      <section>
        <h1>Meus filmes</h1>
        <Button title="Adicionar filme" $icon={FiPlus} />
      </section>

      <Content>
        <Section>
            <Note data={{
              title: 'Interestellar',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />

            <Note data={{
              title: 'Interestellar',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />
            <Note data={{
              title: 'Interestellar',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />
            <Note data={{
              title: 'Interestellar',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />

            <Note data={{
              title: 'Interestellar',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />
            <Note data={{
              title: 'Interestellar',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />
          </Section>
        
      </Content>

    </Container>
  );
}