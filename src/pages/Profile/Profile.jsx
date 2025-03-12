import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, PerfilImg } from "./styles";

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/"><FiArrowLeft />Voltar</Link>
            </header>

            <Form>
                <PerfilImg>
                    <img src="https://github.com/dyonathancox.png" alt="Foto do usuário" />

                    <label htmlFor="avatar">
                    <FiCamera />

                    <input id="avatar" type="file" />
                    
                </label>
                </PerfilImg>
                <Input placeholder="Dyonathan Cox" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="mail" icon={FiMail} />
                <Input placeholder="Senha Atual" type="password" icon={FiLock} />
                <Input placeholder="Nova Senha" type="password" icon={FiLock} />
                <Button title="Salvar"></Button>

            </Form>
        </Container>
    )
}