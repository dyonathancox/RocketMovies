import { Container, Form, Section } from "./styles";

import { FiArrowLeft, FiPlus } from 'react-icons/fi'

import { Header } from "../../Components/Header";
import { NoteItem } from "../../components/NoteItem/NoteItem";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Textarea } from "../../components/Textarea/Textarea";

import { Link } from 'react-router-dom';


export function CreateMovie() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/"><FiArrowLeft />Voltar</Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input placeholder="Título" type="text" />
                        <Input placeholder="Sua nota (de 0 a 5)" type="number" />
                        <Textarea placeholder="Observações:" />
                    </div>

                    <Section>
                        <div>
                            <h2>Marcadores</h2>
                            <div className="marks">
                                <NoteItem value="React" ></NoteItem>
                                <NoteItem isNew placeholder="Novo marcador"></NoteItem>
                            </div>

                        </div>
                    </Section>

                    <div className="btn">
                        <Button className="trash" title="Excluir filme" />
                        <Button title="Salvar alterações" />

                    </div>

                </Form>

            </main>
        </Container>

    )
}