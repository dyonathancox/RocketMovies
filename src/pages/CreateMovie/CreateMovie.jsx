import { Container } from "./styles";

import { FiPlus } from 'react-icons/fi';

import { Header } from "../../Components/Header";
import {Button} from "../../Components/Button";

export function CreateMovie() {
  return (
    <Container>
      <Header />     

      <div>
        <h1>Meus filmes      </h1>
        <Button title="Adicionar filme" />
      </div>

      

    </Container>
  );
}